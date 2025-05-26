
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, children, className }) => {
  return (
    <section id={id} className={cn('py-16 relative', className)}>
      <div className="container max-w-6xl mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-glow inline-block">
          {title}
          <div className="h-[2px] bg-cyber-blue mt-2 w-full"></div>
        </h2>
        {children}
      </div>
    </section>
  );
};

export default Section;
