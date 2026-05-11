import { ArrowRight, Calendar, TrendingUp, Gauge } from 'lucide-react';
import { Button } from './ui/Button';
import { BRAND } from '../constants/content';

export default function Hero({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-brand-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex">
            <span className="tag animate-fade-up">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse-slow" />
              Cronograma de Projetos {new Date().getFullYear()} Aberto
            </span>
          </div>

          <div className="animate-fade-up animate-delay-100">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.05] tracking-tight">
              <span className="gradient-text">Construímos seu</span>
              <br />
              <span className="gradient-text-brand">Posicionamento</span>
              <br />
              <span className="gradient-text">Digital do</span>
              <br />
              <span className="text-white">Zero</span>
            </h1>
          </div>

          <p className="text-lg text-slate-400 leading-relaxed max-w-lg animate-fade-up animate-delay-200">
            {BRAND.subheadline}
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-up animate-delay-300">
            <Button 
              icon={<ArrowRight className="w-4 h-4" />}
              onClick={() => document.getElementById('solucoes')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Soluções
            </Button>
            <Button 
              variant="secondary"
              icon={<Calendar className="w-4 h-4" />}
              onClick={() => onSelectIntent('Diagnóstico Gratuito')}
            >
              Diagnóstico Gratuito
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-4 border-t border-white/[0.06] animate-fade-up animate-delay-400">
            <Metric icon={<TrendingUp className="w-4 h-4 text-green-400" />} value="+40%" label="Média de aumento em conversões" />
            <div className="w-px h-8 bg-white/10" />
            <Metric icon={<Gauge className="w-4 h-4 text-brand-400" />} value="&lt;2s" label="LCP médio pós-otimização" />
            <div className="w-px h-8 bg-white/10" />
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
        <span className="text-xl font-bold text-white" dangerouslySetInnerHTML={{ __html: value }} />
      </div>
      <span className="text-xs text-slate-500">{label}</span>
    </div>
  );
}

function HeroCard() {
  return (
    <div className="relative w-full max-w-md animate-float">
      <div className="glass-card p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-48 h-48 bg-brand-500/10 rounded-full blur-2xl" />

        <div className="relative">
          <div className="flex items-center justify-between mb-6">
            <div>
              <p className="section-label mb-1">Performance Report</p>
              <p className="text-white font-semibold">T&amp;K Jeans Wear</p>
            </div>
            <span className="px-2.5 py-1 rounded-lg bg-green-500/15 text-green-400 text-xs font-semibold border border-green-500/20">
              ✓ Concluído
            </span>
          </div>

          <div className="space-y-4 mb-6">
            <LCPBar label="LCP Antes" value={68} color="bg-red-500" time="6.2s" bad />
            <LCPBar label="LCP Depois" value={18} color="bg-green-500" time="1.4s" />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '+28%', label: 'Conversão', color: 'text-green-400' },
              { value: '92', label: 'PageSpeed', color: 'text-brand-400' },
              { value: '-77%', label: 'LCP Time', color: 'text-cyan-400' },
            ].map((item) => (
              <div key={item.label} className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-3 text-center">
                <p className={`text-lg font-bold ${item.color}`}>{item.value}</p>
                <p className="text-xs text-slate-500 mt-0.5">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute -top-4 -right-4 glass-card px-4 py-2.5 shadow-brand animate-glow">
        <p className="text-xs text-slate-400 font-mono">PageSpeed Score</p>
        <p className="text-2xl font-black text-green-400">92</p>
      </div>
    </div>
  );
}

function LCPBar({ label, value, color, time, bad }: {
  label: string; value: number; color: string; time: string; bad?: boolean
}) {
  return (
    <div>
      <div className="flex justify-between mb-1.5">
        <span className="text-xs text-slate-400">{label}</span>
        <span className={`text-xs font-mono font-semibold ${bad ? 'text-red-400' : 'text-green-400'}`}>{time}</span>
      </div>
      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
        <div
          className={`h-full ${color} rounded-full transition-all duration-1000`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}
