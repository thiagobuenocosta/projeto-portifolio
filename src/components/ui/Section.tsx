import React from 'react';

interface SectionProps {
  id?: string;
  className?: string;
  containerClassName?: string;
  children: React.ReactNode;
  background?: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  className = '', 
  containerClassName = '', 
  children,
  background
}) => {
  return (
    <section 
      id={id} 
      className={`relative py-24 overflow-hidden ${className}`}
    >
      {background && (
        <div className="absolute inset-0 pointer-events-none">
          {background}
        </div>
      )}
      <div className={`relative max-w-7xl mx-auto px-6 ${containerClassName}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;
