
import React from 'react';
import { Mail, Github, Linkedin, Twitter, Terminal } from 'lucide-react';
import Section from './Section';
import { cn } from '@/lib/utils';

const ContactSection: React.FC = () => {
  return (
    <Section id="contact" title="Contact" className="bg-cyber-darker">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="terminal-header mb-4">
            <Terminal size={16} className="text-cyber-blue" />
            <span className="text-sm text-cyber-blue/80">security@bs-network:~$ ./establish_connection.sh</span>
          </div>
          
          <h3 className="text-2xl font-bold mb-4 text-cyber-blue glitch-text font-hacker">Access Granted</h3>
          <p className="text-blue-400/80 mb-6 font-mono">
            <span className="typing-text">Connection established. Secure channel open for communications.</span> 
            Ready to accept incoming requests for projects, collaborations, or intel exchange.
          </p>
          
          <div className="space-y-3">
            <a href="mailto:contact@baazzasalah.com" className="flex items-center gap-3 text-blue-400 hover:text-cyber-blue transition-colors group">
              <div className="p-2 bg-cyber-dark-blue/30 rounded-sm group-hover:bg-cyber-dark-blue/50 transition-colors cyber-border">
                <Mail className="w-5 h-5" />
              </div>
              <span className="font-mono">[baazzasalaheddine@gmail.com]</span>
            </a>
          </div>
        </div>
        
        <div className="bg-cyber-muted p-6 rounded-sm border border-cyber-blue/40 cyber-border relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-1 bg-cyber-blue/20">
            <div className="absolute h-full w-20 bg-cyber-blue animate-scan-line"></div>
          </div>
          
          <div className="terminal-header mb-4">
            <Terminal size={16} className="text-cyber-blue" />
            <span className="text-sm text-cyber-blue/80">Message_Transmission_v1.0</span>
            <div className="ml-auto flex gap-1">
              <div className="terminal-dot bg-red-500/70"></div>
              <div className="terminal-dot bg-yellow-500/70"></div>
              <div className="terminal-dot bg-cyber-blue/70"></div>
            </div>
          </div>
          
          <form className="space-y-4 relative z-10">
            <div>
              <label className="text-blue-400/70 mb-1 block font-mono text-sm" htmlFor="name">Identifier</label>
              <input 
                type="text"
                id="name"
                className="w-full bg-cyber-dark border border-cyber-blue/30 rounded-sm p-2 text-cyber-blue focus:outline-none focus:border-cyber-blue font-mono"
                placeholder="Enter your designation"
              />
            </div>
            
            <div>
              <label className="text-blue-400/70 mb-1 block font-mono text-sm" htmlFor="email">Communication Channel</label>
              <input 
                type="email"
                id="email"
                className="w-full bg-cyber-dark border border-cyber-blue/30 rounded-sm p-2 text-cyber-blue focus:outline-none focus:border-cyber-blue font-mono"
                placeholder="your-email@domain.com"
              />
            </div>
            
            <div>
              <label className="text-blue-400/70 mb-1 block font-mono text-sm" htmlFor="message">Encrypted Message</label>
              <textarea
                id="message"
                rows={4}
                className="w-full bg-cyber-dark border border-cyber-blue/30 rounded-sm p-2 text-cyber-blue focus:outline-none focus:border-cyber-blue font-mono"
                placeholder="// Type your message here..."
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-cyber-dark-blue/20 border border-cyber-blue hover:bg-cyber-dark-blue/40 text-cyber-blue font-bold py-2 px-4 rounded-sm transition-colors cyber-border font-hacker"
            >
              &gt; TRANSMIT
            </button>
          </form>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;
