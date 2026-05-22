import { ArrowRight, Calendar, TrendingUp, Gauge } from 'lucide-react';
import { Button } from '@/components/ui';
import { BRAND } from '@/constants/content';
import { useScrollTo } from '@/hooks/useScrollTo';

export default function Hero({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  const scrollTo = useScrollTo();
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-650/5 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/3 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(15,23,42,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(15,23,42,0.15) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <span className="tag animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse-slow" />
              Vagas de Engenharia {new Date().getFullYear()} Abertas
            </span>
          </div>

          <div className="animate-fade-up animate-delay-100">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="gradient-text">Desenvolvemos</span><br />
              <span className="gradient-text-brand">Software Sob</span><br />
              <span className="gradient-text">Medida para</span><br />
              <span className="text-slate-900">Escalar</span>
            </h1>
          </div>

          <p className="text-lg text-slate-600 leading-relaxed max-w-lg animate-fade-up animate-delay-200">
            Conectamos suas regras de negócio complexas à tecnologia de alta performance. APIs robôs, microsserviços integrados e sistemas que aguentam o tranco sem comprometer dados.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <Button icon={<ArrowRight className="w-4 h-4" />} onClick={() => onSelectIntent('Diagnóstico Técnico')}>
              Solicitar Diagnóstico
            </Button>
            <Button variant="secondary" icon={<Calendar className="w-4 h-4" />} onClick={() => scrollTo('solucoes')}>
              Ver Soluções
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-slate-200 animate-fade-up animate-delay-400">
            <Metric icon={<TrendingUp className="w-4 h-4 text-green-600" />} value="+28%" label="Conversão pós-engenharia T&amp;K Jeans" />
            <div className="w-px h-8 bg-slate-200" />
            <Metric icon={<Gauge className="w-4 h-4 text-brand-600" />} value="-77%" label="Redução de LCP com SSR" />
            <div className="w-px h-8 bg-slate-200" />
            <Metric value="15+" label="Projetos entregues" />
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-center animate-fade-up animate-delay-200">
          <HeroCard />
        </div>
      </div>
    </section>
  );
}

function Metric({ icon, value, label }: { icon?: React.ReactNode; value: string; label: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="text-xl font-bold text-slate-900" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="relative w-full max-w-md animate-float">
      <div className="glass-card p-6 bg-white/95 relative overflow-hidden shadow-brand">
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/5 rounded-full blur-2xl" />
        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="section-label mb-1">Performance Report</p>
              <p className="text-slate-900 font-semibold">T&amp;K Jeans Wear</p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-green-50 text-green-700 text-xs font-semibold border border-green-200">✓ Concluído</span>
          </div>
          <div className="space-y-4 mb-6">
            <LCPBar label="LCP Antes" value={68} color="bg-red-500" time="6.2s" bad />
            <LCPBar label="LCP Depois" value={18} color="bg-green-500" time="1.4s" />
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '+28%', label: 'Conversão', color: 'text-green-600' },
              { value: '92', label: 'PageSpeed', color: 'text-brand-600' },
              { value: '-77%', label: 'LCP Time', color: 'text-cyan-600' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-slate-50 border border-slate-200/60 p-3 text-center">
                <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="absolute -top-4 -right-4 glass-card bg-white px-4 py-2.5 shadow-brand animate-glow border border-brand-200">
        <p className="text-xs text-slate-600 font-mono">PageSpeed Score</p>
        <p className="text-2xl font-black text-green-600">92</p>
      </div>
    </div>
  );
}

function LCPBar({ label, value, color, time, bad }: { label: string; value: number; color: string; time: string; bad?: boolean }) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-slate-600">{label}</span>
        <span className={`text-xs font-mono font-semibold ${bad ? 'text-red-650' : 'text-green-600'}`}>{time}</span>
      </div>
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className={`h-full ${color} rounded-full transition-all duration-1000`} style={{ width: `${value}%` }} />
      </div>
    </div>
  );
}
