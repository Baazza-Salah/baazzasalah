import React, { useState } from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';
import Section from './Section';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';

interface Education {
  degree: string;
  institution: string;
  period: string;
  description: string;
  skills?: string[];
  isOpen?: boolean;
}

const EducationSection: React.FC = () => {
  const [educationItems, setEducationItems] = useState<Education[]>([
    {
      degree: "Cybersecurity and Digital Trust Engineering Degree",
      institution: "ENSET Mohammedia",
      period: "2023 - Now",
      description: "Acquired solid technical expertise and essential engineering skills through hands-on projects.",
      skills: ["Web & Software Development", "Linux, Windows", "C, C++, JAVA, Python, PHP, Bash, Assembly", "Networking, IoT", "Cryptographic, Bockchain","AI", "Security & Risk Management", "DataBases sql & nosql", "OCI & Network Virtualisation", "Systems & Networks Administration", "Vulnerability Assessment", "Penetration Testing", "Security Architecture"],
      isOpen: true
    },
    {
      degree: "Bachelor’s in Mathematics and Computer Science",
      institution: "FST AlHouceima",
      period: "2020 - 2023",
      description: "Earned a DEUST in Mathematics, Computer Science, and Physics, strengthening foundational knowledge, Gained advanced technical skills in Mathematics and Computer Science through the Bachelor’s program.",
      skills: ["Algorithms", "Data Structures", "C, JAVA", "Web Development", "Database Management", "Algebra", "Calculus", "Discrete Mathematics", "Physics"],
      isOpen: false
    },
    {
      degree: "Baccalaureate in Physical Sciences and Chemistry",
      institution: "Zrektouni high school",
      period: "2019 - 2020",
      description: "Graduated with Highest Honors, demonstrating strong academic performance.",
      skills: ["Mathematics", "Physics", "Chemistry"],
      isOpen: false
    }
  ]);

  const toggleCollapsible = (index: number) => {
    setEducationItems(items => 
      items.map((item, i) => 
        i === index ? { ...item, isOpen: !item.isOpen } : item
      )
    );
  };

  return (
    <Section id="education" title="Education" className="bg-cyber-navy/30">
      <Tabs defaultValue="interactive" className="w-full">
        {/* <TabsList className="bg-cyber-darker border border-accent/30 mb-6 w-full md:w-auto">
          <TabsTrigger value="interactive" className="data-[state=active]:bg-cyber-dark data-[state=active]:text-accent">
            <BookOpen className="mr-2 h-4 w-4" />
            Interactive
          </TabsTrigger>
        </TabsList> */}

        {/* Interactive View */}
        <TabsContent value="interactive" className="mt-0">
          <div className="space-y-4">
            {educationItems.map((item, index) => (
              <Collapsible 
                key={index} 
                open={item.isOpen} 
                onOpenChange={() => toggleCollapsible(index)}
                className="border border-accent/30 bg-cyber-dark/50 rounded-sm overflow-hidden"
              >
                <CollapsibleTrigger className="flex justify-between items-center w-full px-4 py-3 hover:bg-cyber-dark/80">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-cyber-dark border border-cyber-blue flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-cyber-blue" />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-accent">{item.degree}</h3>
                      <div className="text-xs text-gray-400">{item.period}</div>
                    </div>
                  </div>
                  <div className="w-6 h-6 rounded-full border border-accent/50 flex items-center justify-center">
                    <span className="text-accent text-xs">{item.isOpen ? '-' : '+'}</span>
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent className="px-4 pb-4 pt-2 animate-accordion-down">
                  <div className="pl-11">
                    <p className="text-gray-300 mb-2">{item.institution}</p>
                    <p className="text-gray-400 mb-4">{item.description}</p>
                    
                    {item.skills && (
                      <div className="mt-3">
                        <div className="text-xs uppercase text-accent/80 mb-2">Key Skills Acquired</div>
                        <div className="flex flex-wrap gap-2">
                          {item.skills.map((skill, i) => (
                            <span key={i} className="text-xs bg-cyber-dark-blue px-2 py-1 rounded-sm text-accent border border-accent/30">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  );
};

export default EducationSection;