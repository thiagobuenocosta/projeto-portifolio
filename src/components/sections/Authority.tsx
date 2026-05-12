import { Code2, Layers, Zap, Shield, BarChart3, Handshake } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { PILLARS } from '@/constants/content';

const iconMap: Record<string, React.ReactNode> = {
  Code2: <Code2 className="w-5 h-5" />,
  Zap: <Zap className="w-5 h-5" />,
  Layers: <Layers className="w-5 h-5" />,
  Shield: <Shield className="w-5 h-5" />,
  BarChart3: <BarChart3 className="w-5 h-5" />,
  Handshake: <Handshake className="w-5 h-5" />,
};

export default function Authority() {
  return (
    <Section id="processo">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-label mb-4">Por Que Escolher Nosso Estúdio</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Não somos apenas uma{' '}
            <span className="text-slate-500 line-through decoration-red-500">agência</span>.
            <br />
            <span className="gradient-text-brand">Somos seu estúdio de engenharia.</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Enquanto agências focam apenas no visual, nosso estúdio foca na infraestrutura que sustenta seu lucro. Entregamos soluções técnicas de alta performance que geram resultados mensuráveis — com suporte contínuo para sua evolução.
          </p>

          <div className="glass-card p-5">
            <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-4">Stack de Referência</p>
            <div className="flex flex-wrap gap-2">
              {['React 18+', 'TypeScript', 'Next.js', 'Vite', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'Docker', 'Vercel', 'AWS'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.07] text-xs font-mono text-slate-300 hover:border-brand-700/50 hover:text-brand-400 transition-all cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PILLARS.map((p) => (
            <div key={p.title} className="glass-card p-5 group">
              <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center mb-3 ${p.color} group-hover:scale-110 transition-transform`}>
                {iconMap[p.iconName]}
              </div>
              <h3 className="text-sm font-bold text-white mb-1.5">{p.title}</h3>
              <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
