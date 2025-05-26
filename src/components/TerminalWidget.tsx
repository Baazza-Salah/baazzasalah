import React, { useEffect, useState, useRef } from 'react';
import { Terminal, Shield, Lock, User, Zap, Check, X, ChevronRight, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Command {
  text: string;
  output?: string[];
  loading?: boolean;
  success?: boolean;
  error?: boolean;
  danger?: boolean;
  duration?: number;
}

interface TerminalWidgetProps {
  title?: string;
  className?: string;
  autoRun?: boolean;
  interactive?: boolean;
}

const TerminalWidget: React.FC<TerminalWidgetProps> = ({ 
  title = "visitor@portfolio:~", 
  className = "",
  autoRun = true,
  interactive = false
}) => {
  const [commands, setCommands] = useState<Command[]>([]);
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [typedCommand, setTypedCommand] = useState("");
  const [blinkCursor, setBlinkCursor] = useState(true);
  const terminalRef = useRef<HTMLDivElement>(null);

  const securityCommands: Command[] = [
    { 
      text: "welcome.sh --name visitor", 
      loading: false, 
      success: true,
      output: [
        "Welcome to BAAZZA SALAHEDDINE's portfolio",
        "Cybersecurity Professional"
      ]
    },
    { 
      text: 'whoami', 
      output: ['> security_specialist'], 
    },
    {
      text: 'ls -la portfolio', 
 
      output: [

        '> about.sec',
        '> skills.enc',
        '> projects.dat',
        '> contact.key'
      ] 
    }
  ];
  
  const interactiveCommands: {[key: string]: Command} = {
    "help": {
      text: "help",
      output: [
        "Available commands:",
        "  help     - Show this help message",
        "  clear    - Clear the terminal",
        "  scan     - Run a security scan",
        "  nmap     - Run an nmap scan",
        "  ssh      - Connect to a remote server",
        "  whoami   - Show current user",
        "  ls       - List files",
        "  exit     - Exit terminal session"
      ]
    },
    "clear": {
      text: "clear",
      success: true
    },
    "scan": {
      text: "scan",
      loading: true,
      duration: 2000,
      output: [
        "Starting security scan...",
        "Checking for known vulnerabilities...",
        "Analyzing network traffic...",
        "Inspecting system configurations...",
        "Scan complete. No critical issues found."
      ]
    },
    "nmap": {
      text: "nmap -sV localhost",
      loading: true,
      duration: 1500,
      output: [
        "Starting Nmap 7.92 ( https://nmap.org )",
        "Scanning localhost (127.0.0.1)",
        "PORT     STATE  SERVICE     VERSION",
        "22/tcp   open   ssh         OpenSSH 8.6",
        "80/tcp   open   http        nginx 1.21.0",
        "443/tcp  open   https       nginx 1.21.0",
        "3306/tcp open   mysql       MySQL 8.0.27",
        "Nmap done: 1 IP address (1 host up) scanned in 1.82 seconds"
      ]
    },
    "ssh": {
      text: "ssh user@server",
      output: [
        "Permission denied (publickey)",
        "Connection closed"
      ],
      error: true
    },
    "whoami": {
      text: "whoami",
      output: [
        "security-analyst"
      ],
      success: true
    },
    "ls": {
      text: "ls -la",
      output: [
        "total 32",
        "drwxr-xr-x  5 user group 4096 May  1 14:23 .",
        "drwxr-xr-x  3 user group 4096 May  1 12:15 ..",
        "-rw-r--r--  1 user group  220 May  1 13:46 .bash_logout",
        "-rw-r--r--  1 user group 3771 May  1 13:46 .bashrc",
        "drwxr-xr-x  3 user group 4096 May  1 13:56 .config",
        "-rw-r--r--  1 user group  807 May  1 13:46 .profile",
        "drwxr-xr-x  2 user group 4096 May  1 14:12 scripts",
        "-rwxr-xr-x  1 user group 2345 May  1 14:22 vulnerability-scanner"
      ],
      success: true
    },
    "exit": {
      text: "exit",
      output: [
        "Closing secure connection...",
        "Connection to bs-terminal closed."
      ],
      success: true
    }
  };

  useEffect(() => {
    if (!autoRun) return;
    
    const runCommand = (index: number) => {
      if (index >= securityCommands.length) return;
      
      const command = securityCommands[index];
      setCommands(prev => [...prev, { ...command, loading: true }]);
      
      // Simulate command execution time
      const timer1 = setTimeout(() => {
        setCommands(prev => {
          const updated = [...prev];
          updated[index] = { ...updated[index], loading: false, success: true };
          return updated;
        });
        
        // Move to next command
        setCurrentCommandIndex(index + 1);
        
        // Run next command after delay
        const timer2 = setTimeout(() => runCommand(index + 1), 1500);
        return () => clearTimeout(timer2);
      }, command.duration || 800 + Math.random() * 500);
      
      return () => clearTimeout(timer1);
    };
    
    const initialTimer = setTimeout(() => runCommand(0), 800);
    return () => clearTimeout(initialTimer);
  }, [autoRun]);

  useEffect(() => {
    // Scroll to bottom when new commands are added
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  // Blinking cursor effect
  useEffect(() => {
    const timer = setInterval(() => {
      setBlinkCursor(prev => !prev);
    }, 500);
    return () => clearInterval(timer);
  }, []);

  // Handle interactive command execution
  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!interactive) return;

    if (e.key === 'Enter' && typedCommand.trim()) {
      const commandKey = Object.keys(interactiveCommands).find(key => 
        typedCommand.trim().startsWith(key)
      );
      
      const newCommand = commandKey 
        ? { ...interactiveCommands[commandKey], text: typedCommand.trim() }
        : {
            text: typedCommand.trim(),
            output: [`Command not found: ${typedCommand.trim()}`],
            error: true
          };
      
      if (commandKey === 'clear') {
        setCommands([]);
      } else {
        setCommands(prev => [...prev, { ...newCommand, loading: newCommand.loading }]);
        
        if (newCommand.loading) {
          setTimeout(() => {
            setCommands(prev => {
              const updated = [...prev];
              const lastIndex = updated.length - 1;
              updated[lastIndex] = { 
                ...updated[lastIndex], 
                loading: false, 
                success: !newCommand.error
              };
              return updated;
            });
          }, newCommand.duration || 1000);
        }
      }
      
      setTypedCommand('');
    }
  };

  const renderCommandIcon = (command: Command) => {
    if (command.loading) {
      return <div className="w-4 h-4 rounded-full border-2 border-accent/80 border-t-transparent animate-spin"></div>;
    }
    if (command.error) {
      return <X size={16} className="text-cyber-red" />;
    }
    if (command.danger) {
      return <Info size={16} className="text-amber-500" />;
    }
    return <Check size={16} className="text-accent" />;
  };

  return (
    <div className={`terminal-window relative overflow-hidden ${className}`}>
      <div className="terminal-header relative z-10">
        <Terminal size={16} />
        <span className="text-xs text-accent/80">{title}</span>
        <div className="ml-auto flex gap-1">
          <div className="terminal-dot bg-red-500/70"></div>
          <div className="terminal-dot bg-yellow-500/70"></div>
          <div className="terminal-dot bg-accent/70"></div>
        </div>
      </div>
      
      {/* Scan line effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute w-full h-[1px] bg-accent/10 animate-scan-line"></div>
      </div>
      
      {/* Noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-5 pointer-events-none"></div>
      
      {/* Terminal content */}
      <div 
        ref={terminalRef}
        className="max-h-96 overflow-y-auto py-2 space-y-3 font-mono text-sm scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent" 
        style={{ scrollBehavior: 'smooth' }}
        tabIndex={interactive ? 0 : -1}
        onKeyDown={(e) => {
          if (!interactive) return;

          if (e.key === 'Enter' && typedCommand.trim()) {
            const commandKey = Object.keys(interactiveCommands).find(key => 
              typedCommand.trim().startsWith(key)
            );
            
            const newCommand = commandKey 
              ? { ...interactiveCommands[commandKey], text: typedCommand.trim() }
              : {
                  text: typedCommand.trim(),
                  output: [`Command not found: ${typedCommand.trim()}`],
                  error: true
                };
            
            if (commandKey === 'clear') {
              setCommands([]);
            } else {
              setCommands(prev => [...prev, { ...newCommand, loading: newCommand.loading }]);
              
              if (newCommand.loading) {
                setTimeout(() => {
                  setCommands(prev => {
                    const updated = [...prev];
                    const lastIndex = updated.length - 1;
                    updated[lastIndex] = { 
                      ...updated[lastIndex], 
                      loading: false, 
                      success: !newCommand.error
                    };
                    return updated;
                  });
                }, newCommand.duration || 1000);
              }
            }
            
            setTypedCommand('');
          }
        }}
      >
        {commands.length === 0 && !interactive && (
          <div className="terminal-welcome text-accent/70 px-1 pb-2">
            <div>Welcome to Portfolio Terminal v1.0</div>
            <div>Loading portfolio content...</div>
          </div>
        )}
        
        {commands.map((cmd, i) => (
          <div key={i} className="command-line" style={{ animationDelay: `${i * 0.2}s` }}>
            <div className="terminal-command flex items-center gap-2">
              <span className="terminal-prompt flex items-center gap-1">
                <ChevronRight size={14} className="text-accent" />
              </span>
              <span className="text-accent break-all">{cmd.text}</span>
            </div>
            
            {cmd.loading && (
              <div className="package-loading mt-2 relative overflow-hidden">
                <div className="package-progress"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent animate-pulse"></div>
              </div>
            )}
            
            {!cmd.loading && cmd.output && (
              <div className="mt-1 pl-6 space-y-1">
                {cmd.output.map((line, j) => (
                  <div 
                    key={j} 
                    className={cn(
                      "text-xs break-all",
                      cmd.error ? "text-cyber-red/80" : 
                      cmd.danger && line.includes("CRITICAL") ? "text-cyber-red/90 font-bold" :
                      cmd.danger && line.includes("HIGH") ? "text-amber-500/90 font-bold" :
                      "text-foreground/80"
                    )}
                    style={{ animationDelay: `${j * 0.1}s` }}
                  >
                    {line}
                  </div>
                ))}
              </div>
            )}
            
            {!cmd.loading && cmd.success && !cmd.output && (
              <div className="mt-1 pl-6 flex items-center gap-2">
                {renderCommandIcon(cmd)}
                <span className="text-xs">Operation completed successfully</span>
              </div>
            )}
          </div>
        ))}
        
        {/* Current command input line */}
        {interactive && (
          <div className="terminal-command flex items-center gap-2">
            <span className="terminal-prompt flex items-center gap-1">
              <ChevronRight size={14} className="text-accent" />
            </span>
            <div className="flex-1">
              <span className="text-accent">{typedCommand}</span>
              <span className={`terminal-cursor inline-block w-2 h-4 bg-accent ml-0.5 ${blinkCursor ? 'opacity-100' : 'opacity-0'}`}></span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TerminalWidget;
