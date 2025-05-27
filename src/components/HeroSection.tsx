
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Lock, Eye, Terminal, ChevronDown, Server, Wifi } from 'lucide-react';
import BSLogo from './BSLogo';
import TerminalWidget from './TerminalWidget';
import { cn } from '@/lib/utils';

const HeroSection: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Matrix rain effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    
    // Matrix rain characters
    const characters = '01'.split('');
    
    // Create drops
    const drops: number[] = [];
    const fontSize = 14;
    const columns = Math.ceil(canvas.width / fontSize);
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }
    
    // Drawing animation
    const draw = () => {
      // Add semi-transparent black to create fade effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#4b91f1'; // Changed to blue-ish color
      ctx.font = fontSize + 'px monospace';
      
      // Draw characters
      for (let i = 0; i < drops.length; i++) {
        // Random character
        const char = characters[Math.floor(Math.random() * characters.length)];
        
        // Draw character
        ctx.fillText(char, i * fontSize, drops[i] * fontSize);
        
        // Reset when drop reaches bottom
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        
        // Increment y coordinate
        drops[i]++;
      }
    };
    
    // Animation loop
    const interval = setInterval(draw, 35);
    
    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);
  
  // Simulate typing completion
  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-20">
      {/* Matrix background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 opacity-20"></canvas>
      
      {/* Background circuit elements */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="absolute top-1/4 right-10 w-20 h-20 border border-accent/30 rounded-full"></div>
        <div className="absolute bottom-1/4 left-10 w-40 h-40 border border-accent/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-60 h-1 bg-accent/10"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-40 bg-accent/10"></div>
        
        {/* Interconnected nodes */}
        <div className="absolute top-[30%] left-[15%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[35%] left-[25%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[20%] left-[22%] w-2 h-2 rounded-full bg-accent/40"></div>
        <div className="absolute top-[25%] left-[30%] w-2 h-2 rounded-full bg-accent/40"></div>
        
        {/* Connecting lines */}
        <div className="absolute top-[30%] left-[15%] w-[10%] h-[5%] border-t border-l border-accent/20"></div>
        <div className="absolute top-[20%] left-[22%] w-[8%] h-[5%] border-b border-r border-accent/20"></div>
        <div className="absolute top-[25%] left-[30%] w-[5%] h-[10%] border-b border-l border-accent/20"></div>
      </div>
      
      {/* Cyber security icons */}
      <div className="absolute top-20 right-[20%] text-accent/20 animate-pulse">
        <Shield className="w-16 h-16" />
      </div>
      <div className="absolute bottom-20 left-[15%] text-accent/20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Lock className="w-12 h-12" />
      </div>
      <div className="absolute top-[40%] left-[10%] text-accent/20 animate-pulse" style={{ animationDelay: '2s' }}>
        <Eye className="w-10 h-10" />
      </div>
      <div className="absolute bottom-[30%] right-[12%] text-accent/20 animate-pulse" style={{ animationDelay: '1.5s' }}>
        <Server className="w-14 h-14" />
      </div>
      <div className="absolute top-[60%] right-[15%] text-accent/20 animate-pulse" style={{ animationDelay: '2.5s' }}>
        <Wifi className="w-8 h-8" />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-20">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2">
            <div className="mb-8 relative group">
              <BSLogo size="xl" className="relative z-10" />
              <div className="absolute -inset-4 bg-cyber-dark-green/10 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 font-hacker relative">
              <span className="text-white relative z-10 glitch-text">BAAZZA</span> 
              <span className="text-glow relative z-20 animate-glitch">SALAHEDDINE</span>
              <div className="absolute -inset-1 bg-accent/5 blur-sm"></div>
            </h1>
            
            <div className="h-[3px] w-40 bg-gradient-to-r from-transparent via-accent to-transparent mb-8 relative">
              <div className="absolute top-0 left-0 w-10 h-full bg-accent/50 animate-package-load"></div>
            </div>
            
            <h2 className="text-xl md:text-2xl font-mono text-gray-300 mb-6">
              <span className="relative">
                <span className="typing-text inline-block">CYBERSECURITY ENGINEER</span>
                {typingComplete && (
                  <span className="absolute -right-4 top-1/2 h-4 w-[2px] bg-accent animate-blink"></span>
                )}
              </span>
            </h2>
            
            <p className="max-w-2xl text-gray-400 mb-10 relative">
              <span className="text-accent glitch-text">
                {'Exploring '}
              </span>
              the vast world of cybersecurity with curiosity, determination, and a passion for learning. 
              <span className="text-accent glitch-text">
                {' Building '}
              </span>
              skills in threat analysis, secure system design, and proactive defense strategies.
              <span className="absolute -inset-1 bg-accent/5 blur-sm"></span>
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a 
                href="#contact" 
                className="group relative bg-cyber-purple/20 border border-cyber-purple hover:bg-cyber-purple/30 text-cyber-bright-purple px-6 py-3 rounded transition-all overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span className="relative z-10">Contact Me</span>
                <span className="absolute inset-0 bg-cyber-purple/10 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="absolute right-1 top-1 text-cyber-purple/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Lock size={10} />
                </span>
              </a>
              
              <a 
                href="BAAZZASalah-1.pdf"
                className="group relative bg-cyber-muted border border-accent/30 hover:border-accent/60 text-white px-6 py-3 rounded transition-all overflow-hidden"
                download
              >
                <span className="relative z-10">Download CV</span>
                <span className="absolute inset-0 bg-accent/5 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></span>
                <span className="absolute right-1 top-1 text-accent/20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Shield size={10} />
                </span>
              </a>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-accent/5 rounded-xl blur-xl"></div>
              <div className="absolute inset-0 grid-bg opacity-30"></div>
              <TerminalWidget className="max-w-lg mx-auto relative z-10" />
              
              {/* Floating cyber elements */}
              <div className="absolute -top-4 -left-4 p-2 bg-cyber-darker rounded-lg border border-accent/20 text-accent/60 text-xs font-mono animate-pulse">
                SEC::AUTH
              </div>
              <div className="absolute -bottom-4 -right-4 p-2 bg-cyber-darker rounded-lg border border-accent/20 text-accent/60 text-xs font-mono animate-pulse" style={{ animationDelay: '1s' }}>
                //0x7F2C80A4
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 animate-bounce text-center">
          <a 
            href="#about"
            className="text-gray-500 hover:text-accent transition-colors inline-block group"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            <ChevronDown className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
      
      {/* Scan line effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-accent/10"></div>
    </section>
  );
};

export default HeroSection;
