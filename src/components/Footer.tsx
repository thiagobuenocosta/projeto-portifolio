import { ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui';
import { useScrollTo } from '@/hooks/useScrollTo';

export default function Footer({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  const scrollTo = useScrollTo();
  return (
    <>
      <section className="relative py-24 overflow-hidden bg-surface-950">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-50/50 to-surface-950" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-600/10 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-6 block">Pronto para começar?</span>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.02]">
            Transforme seu sistema em{' '}
            <span className="gradient-text-brand">vantagem real</span>.
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada dia com um sistema lento ou ineficiente é receita perdida. Solicite um diagnóstico técnico gratuito e sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              icon={<ArrowRight className="w-5 h-5" />}
              className="px-8 py-4 text-base"
              onClick={() => onSelectIntent('Diagnóstico Final')}
            >
              Solicitar Diagnóstico Técnico
            </Button>
            <Button 
              variant="secondary"
              className="px-8 py-4 text-base"
              onClick={() => scrollTo('solucoes')}
            >
              Ver Soluções
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200/80 bg-surface-900 py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-bold text-slate-900 text-sm tracking-tight uppercase">
                RB | <span className="text-brand-600">Rosa Bueno</span>
              </span>
            </div>

            <nav className="flex items-center gap-6">
              {[
                { label: 'Soluções', id: 'solucoes' },
                { label: 'Cases', id: 'cases' },
                { label: 'Pacotes', id: 'pacotes' },
                { label: 'FAQ', id: 'faq' },
                { label: 'Contato', id: 'contato' },
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-medium"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-500">
              © {new Date().getFullYear()} Rosa Bueno Desenvolvimento de Software (RB). Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-500 font-mono">
              Elite Engineering for Mission Critical Operations
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
