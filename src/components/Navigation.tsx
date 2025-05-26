
import React, { useState, useEffect } from 'react';
import { Shield, User, GraduationCap, Briefcase, FolderOpen, Terminal, Menu, X, Lock, Eye } from 'lucide-react';
import BSLogo from './BSLogo';
import { cn } from '@/lib/utils';

interface NavItem {
  label: string;
  href: string;
  icon: React.ReactNode;
}

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeIndicator, setActiveIndicator] = useState<string>("#about");
  const [matrixChars] = useState<string[]>('01'.split(''));

  const navItems: NavItem[] = [
    { label: 'About', href: '#about', icon: <User className="w-4 h-4" /> },
    { label: 'Education', href: '#education', icon: <GraduationCap className="w-4 h-4" /> },
    { label: 'Experience', href: '#experience', icon: <Briefcase className="w-4 h-4" /> },
    { label: 'Projects', href: '#projects', icon: <FolderOpen className="w-4 h-4" /> },
    { label: 'Skills', href: '#skills', icon: <Terminal className="w-4 h-4" /> }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop <= 100 && sectionTop >= -section.clientHeight + 100) {
          setActiveIndicator(`#${section.id}`);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
      setActiveIndicator(href);
    }
  };

  return (
    <header className={cn(
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
      isScrolled ? 'bg-cyber-dark/90 backdrop-blur-md shadow-[0_0_15px_rgba(0,255,0,0.1)]' : 'bg-transparent'
    )}>
      <div className="absolute inset-0 overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 bottom-0 flex">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="text-[8px] whitespace-nowrap text-cyber-green animate-matrix" 
                 style={{ animationDelay: `${i * 0.2}s` }}>
              {Array.from({ length: 30 }).map((_, j) => (
                <span key={j}>{matrixChars[Math.floor(Math.random() * matrixChars.length)]}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-2 group">
            <div className="relative overflow-hidden">
              <BSLogo size="sm" className="transition-transform duration-300 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>
            <div>
              <span className="font-hacker font-bold text-xl text-cyber-green group-hover:animate-pulse">
                <span className="hidden md:inline">BAAZZA</span> SALAH
              </span>
              <span className="block text-[10px] text-cyber-green/50 font-mono">SEC::SPECIALIST</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "flex items-center gap-2 px-3 py-2 rounded transition-colors relative group",
                  activeIndicator === item.href 
                    ? "text-cyber-green bg-cyber-dark-green/20" 
                    : "text-gray-400 hover:text-cyber-green hover:bg-cyber-dark-green/10"
                )}
              >
                <span className="group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="font-mono text-sm">{item.label}</span>
                {activeIndicator === item.href && (
                  <span className="absolute bottom-0 left-0 h-[2px] w-full bg-cyber-green/50"></span>
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-cyber-green focus:outline-none p-2 rounded-md hover:bg-cyber-dark-green/20 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="relative">
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              <div className={cn(
                "absolute inset-0 rounded-full bg-cyber-green/20 scale-0 transition-transform duration-300",
                mobileMenuOpen && "scale-100 opacity-0"
              )}></div>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden bg-cyber-darker/95 backdrop-blur-lg border-t border-b border-cyber-green/20 transition-all duration-300 overflow-hidden",
        mobileMenuOpen ? "max-h-96" : "max-h-0"
      )}>
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-1 gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-md transition-colors relative overflow-hidden",
                  activeIndicator === item.href 
                    ? "bg-cyber-dark-green/30 text-cyber-green" 
                    : "hover:bg-cyber-dark-green/10 text-gray-300"
                )}
              >
                <div className="rounded-full bg-cyber-dark-green/20 p-2">
                  {item.icon}
                </div>
                <span className="font-mono">{item.label}</span>
                <div className={cn(
                  "absolute bottom-0 left-0 h-[1px] bg-cyber-green/40 transition-all duration-500",
                  activeIndicator === item.href ? "w-full" : "w-0"
                )}></div>
              </a>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-6 border-t border-cyber-green/10 pt-4">
            <a href="#contact" className="p-2 hover:text-cyber-green text-gray-400" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}>
              <Shield size={20} />
            </a>
            <a href="#contact" className="p-2 hover:text-cyber-green text-gray-400" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}>
              <Lock size={20} />
            </a>
            <a href="#contact" className="p-2 hover:text-cyber-green text-gray-400" onClick={(e) => {
              e.preventDefault();
              scrollToSection('#contact');
            }}>
              <Eye size={20} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
