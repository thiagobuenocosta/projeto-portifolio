import { AlertTriangle, Clock, TrendingDown, ShieldOff } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { PAINS } from '@/constants/content';
import { scrollTo } from '@/utils/scroll';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-red-400" />,
  TrendingDown: <TrendingDown className="w-6 h-6 text-orange-400" />,
  ShieldOff: <ShieldOff className="w-6 h-6 text-yellow-400" />,
  AlertTriangle: <AlertTriangle className="w-6 h-6 text-red-400" />,
};

export default function Problem() {
  return (
    <Section 
      id="problema"
      background={
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[300px] bg-red-950/20 rounded-full blur-[100px]" />
      }
    >
      <SectionHeader 
        label="O Problema Real"
        title={
          <>
            Quanto custa <span className="gradient-text-brand">não resolver isso hoje?</span>
          </>
        }
        description="Problemas técnicos não são apenas 'chateação para o TI'. São receita perdida, clientes que foram para o concorrente e oportunidades que não voltam."
      />

      <div className="grid md:grid-cols-2 gap-6 mb-16">
        {PAINS.map((pain) => (
          <div
            key={pain.title}
            className="glass-card p-6 flex gap-5 group"
          >
            <div className="mt-0.5 flex-shrink-0 w-12 h-12 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center group-hover:border-brand-700/40 transition-all">
              {iconMap[pain.iconName]}
            </div>
            <div>
              <h3 className="text-base font-semibold text-white mb-2 leading-snug">{pain.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{pain.desc}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="glass-card p-8 flex flex-col md:flex-row items-center gap-6 border-brand-700/30 bg-gradient-to-r from-brand-950/60 to-surface-800/60">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-2">
            A solução: eliminar a <span className="gradient-text-brand">incerteza tecnológica</span>
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed">
            Serviços produtizados com escopo fechado significam que você sabe exatamente o que vai receber, quando e por quanto — antes de assinar qualquer coisa.
          </p>
        </div>
        <Button 
          onClick={() => scrollTo('solucoes')}
        >
          Ver como funciona
        </Button>
      </div>
    </Section>
  );
}
