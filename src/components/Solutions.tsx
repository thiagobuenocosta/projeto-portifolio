import { ArrowRight, Check } from 'lucide-react';
import { Section } from './ui/Section';
import { SectionHeader } from './ui/SectionHeader';
import { Button } from './ui/Button';
import { SERVICES } from '../constants/content';

export default function Solutions({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  return (
    <Section 
      id="solucoes"
      background={
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-brand-600/5 rounded-full blur-[100px]" />
      }
    >
      <SectionHeader 
        label="Nossas Soluções"
        title={
          <>
            Serviços produtizados. <span className="gradient-text-brand">Resultados definidos.</span>
          </>
        }
        description="Não vendemos 'horas de código'. Entregamos soluções fechadas com escopo, prazo e investimento definidos — para você poder planejar e crescer."
      />

      <div className="grid lg:grid-cols-3 gap-6">
        {SERVICES.map((service) => (
          <div
            key={service.id}
            className={`relative glass-card p-8 flex flex-col bg-gradient-to-b ${service.gradient} ${service.border} ${
              service.featured ? 'ring-1 ring-violet-500/30 shadow-lg shadow-violet-900/20' : ''
            }`}
          >
            {service.featured && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-violet-600 to-brand-600 text-white shadow-lg">
                  ⭐ Mais Escolhido
                </span>
              </div>
            )}

            <div className="mb-6">
              <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-4`}>
                {service.icon}
              </div>
              <span className="section-label text-[10px] mb-2 block">{service.tag}</span>
              <h3 className="text-2xl font-black text-white mb-1">{service.title}</h3>
              <p className="text-sm text-slate-500 mb-4">{service.subtitle}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
            </div>

            <div className="flex-1 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">O que está incluído</p>
              <ul className="space-y-2.5">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-2.5 text-sm text-slate-300">
                    <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>

            <Button
              variant={service.featured ? 'primary' : 'secondary'}
              icon={<ArrowRight className="w-4 h-4" />}
              className={service.featured ? 'bg-gradient-to-r from-violet-600 to-brand-600' : ''}
              onClick={() => onSelectIntent(service.title)}
            >
              {service.cta}
            </Button>
          </div>
        ))}
      </div>
    </Section>
  );
}
