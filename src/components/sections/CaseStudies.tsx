import { ArrowUpRight } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { CASES } from '@/constants/content';
import { useScrollTo } from '@/hooks/useScrollTo';

export default function CaseStudies() {
  const scrollTo = useScrollTo();
  return (
    <Section id="cases">
      <SectionHeader 
        label="Portfólio de Impacto"
        title={
          <>
            Resultados reais. <span className="gradient-text-brand">Números que falam.</span>
          </>
        }
        description="Cada projeto é um estudo de caso. Problema identificado, solução aplicada, impacto mensurável — sem rodeios."
      />

      <div className="space-y-8">
        {CASES.map((c, i) => (
          <div
            key={c.id}
            className={`glass-card overflow-hidden bg-gradient-to-br ${c.gradient}`}
          >
            <div className="p-8 grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <span className="section-label text-[10px] mb-1 block">{c.category}</span>
                    <h3 className="text-xl font-bold text-white">{c.client}</h3>
                  </div>
                  <span className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-slate-500 font-mono text-xs">
                    0{i + 1}
                  </span>
                </div>

                <div className="mb-4">
                  <p className="text-xs font-semibold text-red-400 uppercase tracking-widest mb-2">🔴 Problema</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.problem}</p>
                </div>

                <div>
                  <p className="text-xs font-semibold text-green-400 uppercase tracking-widest mb-2">✅ Solução</p>
                  <p className="text-sm text-slate-400 leading-relaxed">{c.solution}</p>
                </div>
              </div>

              <div className="lg:col-span-1 flex flex-col gap-4">
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Impacto Mensurável</p>
                {c.results.map((r) => (
                  <div key={r.label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
                    <p className={`text-3xl font-black ${r.color}`}>{r.value}</p>
                    <p className="text-xs text-slate-500 mt-1">{r.label}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-1 flex flex-col justify-between">
                <div>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Stack Utilizada</p>
                  <div className="flex flex-wrap gap-2">
                    {c.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollTo('contato')}
                  className="mt-8 inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 font-semibold transition-colors group text-left"
                >
                  Quero resultado similar
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
