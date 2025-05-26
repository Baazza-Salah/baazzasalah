
import React, { useState, useEffect } from 'react';
import { Shield, Terminal, Server, User, Lock, Eye, Database, Bug, Zap, Wifi, Network, Cloud } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: {
    name: string;
    level: number; // 1-5
    highlight?: boolean;
  }[];
}

interface RadarPoint {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [radarPoints, setRadarPoints] = useState<RadarPoint[]>([]);

  const skillCategories: SkillCategory[] = [
    {
      title: "Cybersecurity",
      icon: <Shield className="w-5 h-5" />,
      skills: [
        { name: "Penetration Testing", level: 4 },
        { name: "Vulnerability Assessment", level: 4 },
        { name: "SOC Operations", level: 4 },
        { name: "Networking", level: 4 },
        { name: "Security Architecture", level: 3 },
        { name: "Cryptography", level: 3 },
        { name: "Blockchain", level: 3 },
        { name: "Systems & Networks Administration", level: 4 },
        { name: "OCI & Network Virtualization", level: 3 }
      ]
    },
    {
      title: "Programming",
      icon: <Terminal className="w-5 h-5" />,
      skills: [
        { name: "C", level: 5 },
        { name: "C++", level: 5 },
        { name: "Java", level: 4 },
        { name: "Python", level: 4 },
        { name: "PHP", level: 4 },
        { name: "Bash", level: 4 },
        { name: "Assembly", level: 3 }
      ]
    },
    {
      title: "Databases",
      icon: <Database className="w-5 h-5" />,
      skills: [
        { name: "SQL (MySQL, phpMyAdmin)", level: 5 },
        { name: "NoSQL (MongoDB, Redis)", level: 4 },
      ]
    },
    {
      title: "Operating Systems",
      icon: <Server className="w-5 h-5" />,
      skills: [
        { name: "Linux", level: 5 },
        { name: "Windows", level: 4 },
      ]
    },
    {
      title: "Development",
      icon: <Zap className="w-5 h-5" />,
      skills: [
        { name: "Web Development", level: 5 },
        { name: "Software Development", level: 5 },
        { name: "Machine Learning", level: 4 },
      ]
    }
  ];

  // Generate skill radar points
  useEffect(() => {
    const newPoints = [];
    for (let i = 0; i < 20; i++) {
      newPoints.push({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 3 + 1,
        opacity: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.2 + 0.1
      });
    }
    setRadarPoints(newPoints);

    const timer = setInterval(() => {
      setRadarPoints(prev => prev.map(point => ({
        ...point,
        x: (point.x + point.speed) % 100,
        y: (point.y + point.speed) % 100
      })));
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // Intersection observer for animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('#skills');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const renderSkillLevel = (level: number, highlight?: boolean) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={cn(
              "w-3 h-3 rounded-sm transition-all duration-300",
              highlight && i <= level ? "bg-cyber-green shadow-[0_0_5px_rgba(0,255,0,0.5)]" : 
              i <= level ? "bg-cyber-green/70" : "bg-cyber-dark/70 border border-cyber-green/10"
            )}
          ></div>
        ))}
      </div>
    );
  };

  // Terminal text typing animation
  const TerminalTypingText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = useState('');
    
    useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(prev => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      
      return () => clearInterval(timer);
    }, [text]);
    
    return (
      <div className="font-mono text-sm">
        {displayedText}
        <span className="animate-blink inline-block w-2 h-4 bg-cyber-green ml-1"></span>
      </div>
    );
  };

  return (
    <Section id="skills" title="Skills" className="relative overflow-hidden">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none z-0"></div>
      
      {/* Security radar background element */}
      <div className="absolute left-10 top-40 w-40 h-40 border border-cyber-green/20 rounded-full opacity-20 pointer-events-none">
        <div className="absolute inset-0 rounded-full border border-cyber-green/10"></div>
        <div className="absolute inset-0 rounded-full border border-cyber-green/5" style={{ margin: '10px' }}></div>
        <div className="absolute inset-0 rounded-full border border-cyber-green/5" style={{ margin: '20px' }}></div>
        <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-cyber-green/10"></div>
        <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-cyber-green/10"></div>
        <div className="absolute left-1/2 top-1/2 w-24 h-[1px] bg-cyber-green/30 origin-left animate-radar"></div>
        
        {radarPoints.map((point, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-cyber-green"
            style={{
              left: `${point.x}%`,
              top: `${point.y}%`,
              width: `${point.size}px`,
              height: `${point.size}px`,
              opacity: point.opacity
            }}
          ></div>
        ))}
      </div>
      
      <div className="relative z-10">
        {/* Category selector */}
        <div className="mb-8 flex flex-wrap gap-2 justify-center">
          {skillCategories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(idx)}
              className={cn(
                "px-4 py-2 rounded-md text-sm transition-all duration-300 flex items-center gap-2",
                activeCategory === idx
                  ? "bg-cyber-dark-green/30 text-cyber-green border border-cyber-green/50 shadow-[0_0_10px_rgba(0,255,0,0.1)]" 
                  : "bg-cyber-muted text-gray-400 hover:bg-cyber-dark-green/20 hover:text-gray-100"
              )}
            >
              <span className={cn(
                "transition-transform duration-300",
                activeCategory === idx ? "scale-110" : ""
              )}>
                {category.icon}
              </span>
              <span>{category.title}</span>
            </button>
          ))}
        </div>
        
        {/* Active category */}
        <div className={cn(
          "transition-all duration-500 transform",
          isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        )}>
          <div className="bg-cyber-muted border border-cyber-green/20 rounded-lg p-6 relative overflow-hidden">
            <div className="terminal-header mb-6">
              <Terminal size={16} className="text-cyber-green" />
              <span className="text-sm text-cyber-green/80">security@skills:~$ ./analyze {skillCategories[activeCategory].title.toLowerCase()}</span>
            </div>
            
            <div className="absolute top-0 left-0 w-full h-[1px] bg-cyber-green/20">
              <div className="absolute h-full w-20 bg-cyber-green/30 animate-scan-line"></div>
            </div>
            
            <TerminalTypingText text={`Analyzing ${skillCategories[activeCategory].title} capabilities...`} />
            
            <div className="mt-6 space-y-6">
              <div className="space-y-4">
                {skillCategories[activeCategory].skills.map((skill, i) => (
                  <div 
                    key={i} 
                    className={cn(
                      "flex justify-between items-center p-3 rounded transition-all duration-300",
                      skill.highlight ? "bg-cyber-dark-green/20 border-l-2 border-cyber-green" : "hover:bg-cyber-dark/40"
                    )}
                    style={{ animationDelay: `${i * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className={cn(
                        "w-2 h-2 rounded-full",
                        skill.level >= 4 ? "bg-cyber-green" : "bg-gray-500"
                      )}></div>
                      <span className={cn(
                        "text-base",
                        skill.highlight ? "text-cyber-green font-semibold" : "text-gray-300"
                      )}>{skill.name}</span>
                    </div>
                    {renderSkillLevel(skill.level, skill.highlight)}
                  </div>
                ))}
              </div>
              
              <div className="mt-8 pt-4 border-t border-cyber-green/20">
                <div className="terminal-command">
                  <span className="terminal-prompt">$</span>
                  <span className="text-cyber-green ml-2">cat certifications.txt | grep {skillCategories[activeCategory].title.toLowerCase()}</span>
                </div>
                
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {activeCategory === 0 && (
                    <>
                      <div className="bg-cyber-dark p-3 rounded border border-cyber-green/10 flex items-center gap-3">
                        <Shield className="text-cyber-green w-5 h-5" />
                        <div>
                          <div className="text-sm font-medium">CyberOps Associate</div>
                        </div>
                      </div>
                      <div className="bg-cyber-dark p-3 rounded border border-cyber-green/10 flex items-center gap-3">
                        <Lock className="text-cyber-green w-5 h-5" />
                        <div>
                          <div className="text-sm font-medium">Huawei HCIA-Security V4.0</div>
                        </div>
                      </div>
                      <div className="bg-cyber-dark p-3 rounded border border-cyber-green/10 flex items-center gap-3">
                        <Cloud className="text-cyber-green w-5 h-5" />
                        <div>
                          <div className="text-sm font-medium">Oracle Cloud NativeDev</div>
                        </div>
                      </div>
                      <div className="bg-cyber-dark p-3 rounded border border-cyber-green/10 flex items-center gap-3">
                        <Server className="text-cyber-green w-5 h-5" />
                        <div>
                          <div className="text-sm font-medium">Red Hat System Administration</div>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default SkillsSection;
