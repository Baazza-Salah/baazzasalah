
import React from 'react';
import BSLogo from './BSLogo';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-cyber-navy py-10 border-t border-cyber-blue/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-3 mb-4 md:mb-0">
            <BSLogo size="sm" />
            <div>
              <div className="font-mono font-bold">BAAZZA SALAH</div>
              <div className="text-sm text-gray-400">CYBERSECURITY ENGINEER</div>
            </div>
          </div>
          
          <div className="text-gray-400 text-sm">
            &copy; {currentYear} BAAZZA SALAH. All rights reserved.
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-cyber-blue/10 text-center text-xs text-gray-500">
          Designed and developed with <span className="text-cyber-blue">❤</span> in the digital realm
        </div>
      </div>
    </footer>
  );
};

export default Footer;
