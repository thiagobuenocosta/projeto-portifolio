import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  label, 
  title, 
  description, 
  align = 'center',
  className = ''
}) => {
  const alignmentClasses = align === 'center' ? 'text-center mx-auto' : 'text-left';
  
  return (
    <div className={`max-w-2xl mb-16 ${alignmentClasses} ${className}`}>
      <p className="section-label mb-4">{label}</p>
      <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6">
        {title}
      </h2>
      {description && (
        <p className="text-lg text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
