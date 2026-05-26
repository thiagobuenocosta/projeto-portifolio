import React from 'react';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export const FormField: React.FC<FormFieldProps> = ({
  id, label, type, placeholder, value, onChange, required,
}) => {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-600 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500/20 transition-all"
      />
    </div>
  );
};

export default FormField;
