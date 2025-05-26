
import React, { useState, useEffect } from 'react';
import { Briefcase, BarChart, Award, CheckCircle } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

interface Experience {
  position: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
  tags?: string[];
}

const ExperienceSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [showMatrix, setShowMatrix] = useState<boolean>(false);

  const experienceItems: Experience[] = [
    {
      position: "Developer and Security Intern",
      company: "Prefecture of Guercif, MA",
      period: "Jul 2024 – Aug 2024",
      description: "Developed a secure, user-friendly platform to enhance efficiency and protect against cyber threats, while leading a collaborative development team of interns.",
      highlights: [
        "Designed and implemented a secure platform to improve operational efficiency",
        "Led a team of interns in a collaborative development environment",
        "Ensured platform security against potential cyber threats"
      ],
      tags: ["Platform Development", "Cybersecurity", "Team Leadership"]
    },
    {
      position: "CTF Player",
      company: "Various Cybersecurity Competitions",
      period: "2022 – Present",
      description: "Actively participated in Capture The Flag (CTF) competitions, solving challenges in areas such as reverse engineering, cryptography, web exploitation, and forensics.",
      highlights: [
        "Solved complex challenges in reverse engineering and cryptography",
        "Collaborated with teams to tackle web exploitation and forensic tasks",
        "Enhanced problem-solving and technical skills through competitive events"
      ],
      tags: ["CTF", "Reverse Engineering", "Cryptography", "Web Exploitation", "Forensics"]
    }
  ];

  // Show matrix code when hovering over section
  useEffect(() => {
    const timer = setTimeout(() => setShowMatrix(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Generate binary matrix effect
  const generateMatrixLines = (count: number) => {
    const lines = [];
    for (let i = 0; i < count; i++) {
      const length = Math.floor(Math.random() * 30) + 10;
      let line = '';
      for (let j = 0; j < length; j++) {
        line += Math.round(Math.random()) ? '1' : '0';
      }
      lines.push(line);
    }
    return lines;
  };

  const matrixLines = generateMatrixLines(15);

  return (
    <Section id="experience" title="Experience">
      <div className="relative">
        {/* Matrix effect overlay */}
        {showMatrix && (
          <div className="absolute -right-10 top-10 opacity-20 pointer-events-none z-0 overflow-hidden h-full">
            <div className="matrix-code text-xs">
              {matrixLines.map((line, i) => (
                <div 
                  key={i} 
                  className="binary-line"
                  style={{ 
                    animationDelay: `${i * 0.2}s`, 
                    animationDuration: `${5 + Math.random() * 10}s` 
                  }}
                >
                  {line}
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-12 gap-4">
          {/* Timeline Navigation */}
          <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div className="bg-cyber-darker p-4 border border-cyber-green/30 sticky top-24">
              <h3 className="text-cyber-green mb-4 font-bold flex items-center">
                <BarChart className="w-4 h-4 mr-2" /> Career Timeline
              </h3>
              <div className="space-y-1">
                {experienceItems.map((item, index) => (
                  <button
                    key={index}
                    className={cn(
                      "w-full text-left p-3 rounded-sm transition-all duration-300 flex flex-col",
                      activeIndex === index 
                        ? "bg-cyber-dark-green/20 border border-cyber-green/50 text-cyber-bright-green" 
                        : "hover:bg-cyber-dark-green/10 border border-transparent text-gray-400"
                    )}
                    onClick={() => setActiveIndex(index)}
                  >
                    <span className="text-sm font-medium truncate">{item.position}</span>
                    <span className="text-xs opacity-70 truncate">{item.company}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Details */}
          <div className="col-span-12 md:col-span-8 lg:col-span-9">
            <div className="space-y-10">
              {experienceItems.map((item, index) => (
                <div 
                  key={index}
                  className={cn(
                    "relative pl-8 border-l-2 transition-all duration-500",
                    activeIndex === index ? "border-cyber-green" : "border-cyber-blue/30",
                    activeIndex === null || activeIndex === index ? "opacity-100" : "opacity-40"
                  )}
                >
                  <div className={cn(
                    "absolute left-[-12px] top-0 w-6 h-6 rounded-full bg-cyber-dark transition-all duration-500 flex items-center justify-center",
                    activeIndex === index ? "border-2 border-cyber-green" : "border border-cyber-blue"
                  )}>
                    <Briefcase className={cn(
                      "w-3 h-3 transition-all duration-500",
                      activeIndex === index ? "text-cyber-green" : "text-cyber-blue"
                    )} />
                  </div>

                  <div className="mb-2">
                    <h3 className={cn(
                      "text-xl font-bold transition-all duration-500",
                      activeIndex === index ? "text-cyber-green" : "text-cyber-blue"
                    )}>
                      {item.position}
                    </h3>
                    <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-sm">
                      <span className="text-gray-300">{item.company}</span>
                      <span className="hidden md:block text-cyber-blue">•</span>
                      <span className="text-cyber-green">{item.period}</span>
                    </div>
                  </div>

                  <p className="text-gray-400 mt-2">{item.description}</p>
                  
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight, i) => (
                      <li key={i} className={cn(
                        "flex items-start gap-2 transition-all duration-300 transform",
                        activeIndex === index && "hover:translate-x-1"
                      )}>
                        <CheckCircle className={cn(
                          "text-cyber-green shrink-0 mt-0.5 transition-all",
                          activeIndex === index ? "w-5 h-5" : "w-4 h-4 opacity-70"
                        )} />
                        <span className="text-gray-300 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>

                  {item.tags && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {item.tags.map((tag, i) => (
                        <span 
                          key={i} 
                          className={cn(
                            "text-xs px-2 py-1 rounded-sm border transition-all duration-300",
                            activeIndex === index 
                              ? "bg-cyber-dark-green border-cyber-green text-cyber-bright-green" 
                              : "bg-cyber-dark border-cyber-blue/30 text-gray-400"
                          )}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ExperienceSection;
