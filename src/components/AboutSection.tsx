
import React from 'react';
import { Shield, Lock, Terminal, Package } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

const AboutSection: React.FC = () => {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex justify-center">
          <div className="relative w-56 h-56 overflow-hidden rounded-lg cyber-border">
            <div className="absolute inset-0 bg-gradient-to-tr from-cyber-dark-purple via-cyber-dark to-cyber-blue/30 z-0"></div>
            <div className="absolute inset-0 grid-bg opacity-30 z-1"></div>
            <div className="absolute inset-0 flex items-center justify-center z-10 p-2">
              <Shield className="w-20 h-20 text-cyber-blue opacity-80" />
              <div className="absolute top-0 left-5 w-[1px] h-full bg-cyber-blue/20">
                <div className="absolute top-0 w-full h-[3px] bg-cyber-blue animate-data-flow"></div>
              </div>
              <div className="absolute top-10 left-0 w-full h-[1px] bg-cyber-blue/20">
                <div className="absolute left-0 w-[3px] h-full bg-cyber-blue animate-data-flow"></div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2 space-y-4">
          <div className="terminal-header mb-2">
            <Terminal size={16} className="text-cyber-blue" />
            <span className="text-sm text-cyber-blue/80">user@bs-system:~$ cat about.md</span>
          </div>
          
          <p className="text-lg text-gray-300 font-mono">
            Hello! I'm <span className="text-cyber-blue font-semibold">BAAZZA SALAHEDDINE</span>, a Highly skilled second-year Cybersecurity and Digital Trust student at ENSET Mohammedia, with strong technical expertise and
            a passion for learning. Ambitious and adaptable, always eager to tackle new challenges, master emerging technologies, and
            enhance problem solving skills in cybersecurity.
          </p>
          
          {/* <p className="text-gray-400 font-mono">
            With expertise in vulnerability assessment, penetration testing, and security architecture, 
            I help organizations strengthen their security posture against evolving threats. My approach combines 
            technical excellence with strategic thinking to deliver comprehensive security solutions.
          </p> */}


          
          <div className="mt-4 pt-4 border-t border-cyber-blue/20">
            <div className="terminal-command">
              <span className="terminal-prompt">$</span>
              <span className="text-cyber-blue ml-2">cat social_media.txt</span>
            </div>
            <div className="mt-2 pl-4 space-y-1">
              <div className="text-xs font-mono">
                GitHub: <a href="https://github.com/Baazza-Salah/" className="text-cyber-bright-blue" target="_blank" rel="noopener noreferrer">Baazza-Salah</a>
              </div>
              <div className="text-xs font-mono">
                LinkedIn: <a href="https://www.linkedin.com/in/salahbaazza/" className="text-cyber-bright-blue" target="_blank" rel="noopener noreferrer">salahbaazza</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;
