import { Quote } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { TESTIMONIALS } from '@/constants/content';

export default function SocialProof() {
  return (
    <Section id="depoimentos">
      <SectionHeader 
        label="Depoimentos"
        title={
          <>
            Quem viveu, <span className="gradient-text-brand">conta.</span>
          </>
        }
      />

      <div className="grid md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t) => (
          <div key={t.id} className="glass-card p-7 flex flex-col">
            <Quote className="w-8 h-8 text-brand-700 mb-4" />
            <p className="text-sm text-slate-300 leading-relaxed flex-1 mb-6">"{t.text}"</p>

            <div className="pt-5 border-t border-white/[0.06] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${t.color} flex items-center justify-center text-xs font-bold text-white`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </div>
              <span className="tag text-[10px]">{t.metric}</span>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
