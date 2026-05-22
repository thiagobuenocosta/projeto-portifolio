import { ArrowUpRight, Zap, Code2, Layers, Shield, BarChart3, Building2, ShoppingCart, Wrench } from 'lucide-react';
import { Section, SectionHeader } from '@/components/ui';
import { CASES } from '@/constants/content';
import { useScrollTo } from '@/hooks/useScrollTo';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5" />,
  Code2: <Code2 className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Building2: <Building2 className="w-5 h-5" />,
  ShoppingCart: <ShoppingCart className="w-5 h-5" />,
  Wrench: <Wrench className="w-5 h-5" />,
};

export default function CaseStudies() {
  const scrollTo = useScrollTo();
  return (
    <Section id="cases">
      <SectionHeader 
        label="Engenharia em Prática"
        title={
          <>
            Resultados reais. <span className="gradient-text-brand">Engenharia de precisão.</span>
          </>
        }
        description="Cada projeto é um estudo de caso técnico e comercial. Problema identificado, arquitetura desenhada, impacto mensurável."
      />

      <div className="space-y-12">
        {CASES.map((c, i) => (
          <div
            key={c.id}
            className={`glass-card overflow-hidden bg-gradient-to-br ${c.gradient} border-slate-200/60`}
          >
            {c.featured ? (
              // Layout Rico para Case de Destaque
              <div className="p-8 lg:p-12">
                <div className="max-w-4xl mb-12">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-label text-[10px]">{c.category}</span>
                    <div className="h-px flex-1 bg-slate-200" />
                    <span className="font-mono text-xs text-slate-400">Case #0{i + 1}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-black text-slate-900 mb-6 leading-tight">
                    {c.headline || c.client}
                  </h3>
                  <p className="text-lg text-slate-600 leading-relaxed italic">
                    {c.scenario}
                  </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {c.detailedSections?.map((section) => (
                    <div key={section.title} className="glass-card p-6 bg-white/50 border-slate-200/50 flex flex-col gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center">
                        {iconMap[section.icon] || <Zap className="w-5 h-5" />}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 text-sm mb-2 leading-snug">{section.title}</h4>
                        <p className="text-xs text-slate-500 leading-relaxed mb-4">{section.desc}</p>
                        <div className="flex flex-wrap gap-2">
                          {section.metrics?.map(m => (
                            <span key={m} className="px-2 py-0.5 rounded-md bg-brand-100/50 text-brand-700 font-bold text-[9px]">
                              {m}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-8 border-t border-slate-200/60">
                  <div className="flex-1">
                    <p className="text-slate-600 font-medium leading-relaxed max-w-2xl">
                      "{c.closingQuote}"
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {c.tags.map((tag) => (
                      <span key={tag} className="tag bg-white/50">{tag}</span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => scrollTo('contato')}
                  className="mt-12 inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-brand-600 transition-all group shadow-xl shadow-slate-900/10"
                >
                  Solicitar Projeto de Engenharia
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            ) : (
              // Layout Padrão para outros cases
              <div className="p-8 grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="section-label text-[10px] mb-1 block">{c.category}</span>
                      <h3 className="text-xl font-bold text-slate-900">{c.client}</h3>
                    </div>
                    <span className="w-8 h-8 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-500 font-mono text-xs">
                      0{i + 1}
                    </span>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-red-500 uppercase tracking-widest mb-2">🔴 Problema</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.problem}</p>
                  </div>

                  <div>
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-widest mb-2">✅ Solução</p>
                    <p className="text-sm text-slate-600 leading-relaxed">{c.solution}</p>
                  </div>
                </div>

                <div className="lg:col-span-1 flex flex-col gap-4">
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">Impacto Mensurável</p>
                  {c.results.map((r) => (
                    <div key={r.label} className="rounded-xl bg-slate-50 border border-slate-200/80 p-4">
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
                    className="mt-8 inline-flex items-center gap-2 text-sm text-brand-600 hover:text-brand-700 font-semibold transition-colors group text-left"
                  >
                    Quero resultado similar
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </Section>
  );
}
