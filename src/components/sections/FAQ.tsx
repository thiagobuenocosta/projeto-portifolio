import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { FAQS } from '@/constants/content';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" containerClassName="max-w-3xl">
      <SectionHeader 
        label="Perguntas Frequentes"
        title={
          <>
            Suas dúvidas, <span className="gradient-text-brand">respondidas.</span>
          </>
        }
      />

      <div className="space-y-3">
        {FAQS.map((faq, i) => (
          <div
            key={i}
            className={`glass-card overflow-hidden transition-all duration-300 ${open === i ? 'border-brand-700/50' : ''}`}
          >
            <button
              onClick={() => setOpen(open === i ? null : i)}
              className="w-full flex items-center justify-between p-6 text-left gap-4"
              aria-expanded={open === i}
            >
              <span className={`text-sm font-semibold leading-snug transition-colors ${open === i ? 'text-white' : 'text-slate-300'}`}>
                {faq.q}
              </span>
              <ChevronDown
                className={`w-5 h-5 flex-shrink-0 transition-all duration-300 ${
                  open === i ? 'rotate-180 text-brand-400' : 'text-slate-500'
                }`}
              />
            </button>

            <div
              className={`transition-all duration-300 overflow-hidden ${open === i ? 'max-h-64' : 'max-h-0'}`}
            >
              <div className="px-6 pb-6">
                <p className="text-sm text-slate-400 leading-relaxed">{faq.a}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
