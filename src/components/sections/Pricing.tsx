import { ArrowRight, Check, Star } from 'lucide-react';
import { Section, SectionHeader, Button } from '@/components/ui';
import { PRICING_TIERS } from '@/constants/content';

export default function Pricing({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  return (
    <Section 
      id="pacotes"
      background={
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-brand-600/8 rounded-full blur-[120px]" />
      }
    >
      <SectionHeader 
        label="Investimento"
        title={
          <>
            Preços transparentes. <span className="gradient-text-brand">Zero surpresas.</span>
          </>
        }
        description="Chega de brigas por orçamento. Escolha o pacote certo para o seu momento e comece com clareza total de investimento e retorno."
      />

      <div className="grid lg:grid-cols-3 gap-6 items-start">
        {PRICING_TIERS.map((tier) => (
          <div
            key={tier.id}
            className={`relative glass-card flex flex-col ${
              tier.highlight
                ? 'ring-2 ring-brand-500/50 shadow-brand-lg scale-[1.02]'
                : ''
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                <span className="flex items-center gap-1 px-4 py-1.5 rounded-full text-xs font-bold bg-gradient-to-r from-brand-600 to-cyan-600 text-white shadow-brand">
                  <Star className="w-3 h-3 fill-white" />
                  {tier.badge}
                </span>
              </div>
            )}

            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-8">
                <p className="section-label text-[10px] mb-2">{tier.tagline}</p>
                <h3 className="text-2xl font-black text-white mb-1">{tier.name}</h3>
                <div className="flex items-end gap-2 my-4">
                  <span className={`text-4xl font-black ${tier.highlight ? 'gradient-text-brand' : 'text-white'}`}>
                    {tier.price}
                  </span>
                </div>
                <p className="text-xs text-slate-500 font-mono">{tier.period}</p>
                <p className="text-sm text-slate-400 mt-3 leading-relaxed">{tier.description}</p>
              </div>

              <div className="flex-1 mb-8">
                <ul className="space-y-3">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${tier.highlight ? 'text-brand-400' : 'text-green-400'}`} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                variant={tier.variant}
                icon={<ArrowRight className="w-4 h-4" />}
                className="w-full justify-center"
                onClick={() => onSelectIntent(tier.name)}
              >
                {tier.cta}
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-slate-500">
          🔒 <strong className="text-slate-400">Garantia de escopo:</strong> O que foi acordado é o que será entregue. Sem custos extras, sem surpresas.
        </p>
      </div>
    </Section>
  );
}
