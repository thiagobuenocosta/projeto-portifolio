import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  icon, 
  children, 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-950";
  
  const variants = {
    primary: "text-white bg-brand-600 hover:bg-brand-500 active:bg-brand-700 shadow-brand hover:shadow-brand-lg",
    secondary: "text-brand-600 border border-brand-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
      {icon && <span className="flex-shrink-0">{icon}</span>}
    </button>
  );
};

export default Button;
