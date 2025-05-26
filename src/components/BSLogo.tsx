
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { Shield, Terminal, Wifi, Bug, Key, Lock } from 'lucide-react';

interface BSLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

const BSLogo: React.FC<BSLogoProps> = ({ size = 'md', className, animated = true }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [currentIcon, setCurrentIcon] = useState<number>(0);
  
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  // Icons that will rotate for the animated version
  const securityIcons = [
    <Shield key="shield" className="text-blue-400 w-full h-full" />,
    <Terminal key="terminal" className="text-blue-400 w-full h-full" />,
    <Wifi key="wifi" className="text-blue-400 w-full h-full" />,
    <Bug key="bug" className="text-blue-400 w-full h-full" />,
    <Key key="key" className="text-blue-400 w-full h-full" />,
    <Lock key="lock" className="text-blue-400 w-full h-full" />
  ];

  // Rotate icons
  useEffect(() => {
    if (!animated) return;
    
    const interval = setInterval(() => {
      setCurrentIcon((prev) => (prev + 1) % securityIcons.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [animated]);

  useEffect(() => {
    if (!canvasRef.current || !animated) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const setCanvasSize = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };
    setCanvasSize();

    // Particles for circuit-like connections
    const particles: {
      x: number;
      y: number;
      size: number;
      speed: number;
      connections: number[];
    }[] = [];

    // Create particles
    const createParticles = () => {
      particles.length = 0;
      const particleCount = Math.min(20, Math.floor(canvas.width / 15));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speed: Math.random() * 0.5 + 0.1,
          connections: [] // Will store indices of connected particles
        });
      }
      
      // Create connections
      particles.forEach((particle, i) => {
        const connectionCount = Math.floor(Math.random() * 2) + 1;
        for (let c = 0; c < connectionCount; c++) {
          const targetIndex = Math.floor(Math.random() * particles.length);
          if (targetIndex !== i && !particle.connections.includes(targetIndex)) {
            particle.connections.push(targetIndex);
          }
        }
      });
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Create hexagonal background
      ctx.fillStyle = '#0a2342'; // Dark blue background
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw honeycomb pattern
      const hexSize = canvas.width * 0.1;
      const hexHeight = Math.sqrt(3) * hexSize;
      ctx.strokeStyle = 'rgba(75, 145, 241, 0.15)';
      ctx.lineWidth = 0.5;
      
      for (let y = -hexHeight; y < canvas.height + hexHeight; y += hexHeight) {
        for (let x = -hexSize * 1.5, j = 0; x < canvas.width + hexSize * 1.5; x += hexSize * 3, j++) {
          const offset = j % 2 === 0 ? 0 : hexSize * 1.5;
          drawHexagon(ctx, x + offset, y, hexSize);
        }
      }
      
      // Draw circuit connections
      ctx.strokeStyle = 'rgba(114, 177, 255, 0.6)'; // Bright blue
      ctx.lineWidth = 0.8;
      
      particles.forEach((particle, i) => {
        // Animate particles
        particle.y += particle.speed;
        if (particle.y > canvas.height) {
          particle.y = 0;
          particle.x = Math.random() * canvas.width;
        }
        
        // Draw connections
        particle.connections.forEach(targetIndex => {
          if (targetIndex < particles.length) {
            const target = particles[targetIndex];
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(target.x, target.y);
            ctx.stroke();
            
            // Add data pulse effect
            const pulsePosition = (Date.now() / 20) % Math.hypot(target.x - particle.x, target.y - particle.y);
            const angle = Math.atan2(target.y - particle.y, target.x - particle.x);
            const pulseX = particle.x + Math.cos(angle) * pulsePosition;
            const pulseY = particle.y + Math.sin(angle) * pulsePosition;
            
            ctx.fillStyle = '#72b1ff';
            ctx.beginPath();
            ctx.arc(pulseX, pulseY, 1.5, 0, Math.PI * 2);
            ctx.fill();
          }
        });
        
        // Draw particles
        ctx.fillStyle = i % 3 === 0 ? '#4b91f1' : '#72b1ff';
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fill();
      });
      
      // Draw binary data overflow
      ctx.font = '8px monospace';
      ctx.fillStyle = 'rgba(75, 145, 241, 0.4)';
      for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        ctx.fillText(Math.random() > 0.5 ? '1' : '0', x, y);
      }
      
      animationFrame = requestAnimationFrame(animate);
    };
    
    // Helper function to draw hexagon
    const drawHexagon = (ctx: CanvasRenderingContext2D, x: number, y: number, size: number) => {
      ctx.beginPath();
      for (let i = 0; i < 6; i++) {
        const angle = i * Math.PI / 3;
        const pointX = x + size * Math.cos(angle);
        const pointY = y + size * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(pointX, pointY);
        } else {
          ctx.lineTo(pointX, pointY);
        }
      }
      ctx.closePath();
      ctx.stroke();
    };

    // Initialize and start animation
    window.addEventListener('resize', setCanvasSize);
    createParticles();
    let animationFrame = requestAnimationFrame(animate);

    // Cleanup
    return () => {
      window.removeEventListener('resize', setCanvasSize);
      cancelAnimationFrame(animationFrame);
    };
  }, [animated]);

  return (
    <div className={cn('relative overflow-hidden rounded-lg', sizeClasses[size], className)}>
      {animated ? (
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0"></canvas>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-tr from-cyber-dark-blue/90 to-cyber-darker z-0">
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-[1px] opacity-20">
            {Array.from({ length: 9 }).map((_, i) => (
              <div key={i} className="border border-cyber-blue/10"></div>
            ))}
          </div>
        </div>
      )}
      
      {/* Rotating security icons */}
      <div className="absolute inset-0 flex items-center justify-center z-10">
        <div className={`relative transition-opacity duration-500 ${animated ? 'animate-pulse' : ''}`}>
          {animated ? (
            <div className="transform transition-transform duration-500">
              {securityIcons[currentIcon]}
            </div>
          ) : (
            <Lock className="text-cyber-blue w-full h-full" />
          )}
        </div>
      </div>
      
      {/* Digital effects */}
      <div className="absolute inset-0 z-20 overflow-hidden pointer-events-none">
        {/* Horizontal scan line */}
        <div className="absolute left-0 w-full h-[1px] bg-cyber-blue/40 animate-scan-line"></div>
        
        {/* Digital glitch effect */}
        {animated && (
          <>
            <div className="absolute top-1/4 left-1/4 w-1/2 h-[1px] bg-cyber-blue/30 animate-glitch"></div>
            <div className="absolute top-3/4 right-1/4 w-1/2 h-[1px] bg-cyber-blue/30 animate-glitch" style={{ animationDelay: '1s' }}></div>
          </>
        )}
      </div>
      
      {/* Letters BS with hacker effect */}
      <div className="absolute inset-0 flex items-center justify-center z-30">
        <div className="relative">
          <span 
            className="font-mono font-bold text-cyber-blue glitch-text"
            style={{
              fontSize: size === 'sm' ? '0.75rem' : size === 'md' ? '1.1rem' : size === 'lg' ? '1.5rem' : '2.2rem',
              textShadow: '0 0 5px #4b91f1, 0 0 10px #4b91f1'
            }}
          >
            BS
          </span>
          
          {/* Noise overlay */}
          <div className="absolute inset-0 mix-blend-overlay opacity-10 animate-noise"></div>
        </div>
      </div>
      
      {/* Border */}
      <div className="absolute inset-0 border border-cyber-blue/40 rounded-lg z-40 pointer-events-none">
        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-cyber-blue/80"></div>
        <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-cyber-blue/80"></div>
        <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-cyber-blue/80"></div>
        <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-cyber-blue/80"></div>
      </div>
    </div>
  );
};

export default BSLogo;
