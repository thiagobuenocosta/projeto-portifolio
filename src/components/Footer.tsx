import { ArrowRight, Zap } from 'lucide-react';
import { Button } from './ui/Button';

export default function Footer({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-950/20 to-surface-900/50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[400px] bg-brand-600/15 rounded-full blur-[140px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <span className="section-label mb-6 block">Pronto para começar?</span>
          <h2 className="text-5xl lg:text-7xl font-black tracking-tight text-white mb-6 leading-[1.02]">
            Vamos transformar seu{' '}
            <span className="gradient-text-brand">site em ativo</span>?
          </h2>
          <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
            Cada dia com um site que não converte é receita perdida. A conversa inicial é gratuita e sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              icon={<ArrowRight className="w-5 h-5" />}
              className="px-8 py-4 text-base"
              onClick={() => onSelectIntent('Consultoria Geral')}
            >
              Solicitar Consultoria
            </Button>
            <Button 
              variant="secondary"
              className="px-8 py-4 text-base"
              onClick={() => scrollTo('pacotes')}
            >
              Ver Pacotes
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/[0.06] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-brand-500 to-cyan-500 flex items-center justify-center">
                <Zap className="w-3.5 h-3.5 text-white fill-white" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight uppercase">
                Rosa Bueno <span className="text-brand-400">Studio Tech</span>
              </span>
            </div>

            <nav className="flex items-center gap-6">
              {['Soluções', 'Cases', 'Pacotes', 'FAQ', 'Contato'].map((link) => (
                <button
                  key={link}
                  onClick={() => scrollTo(link.toLowerCase())}
                  className="text-xs text-slate-500 hover:text-slate-300 transition-colors"
                >
                  {link}
                </button>
              ))}
            </nav>

          </div>

          <div className="mt-8 pt-6 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-slate-600">
              © {new Date().getFullYear()} Rosa Bueno Studio Tech. Todos os direitos reservados.
            </p>
            <p className="text-xs text-slate-700 font-mono">
              Elite Engineering for Modern Business
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
