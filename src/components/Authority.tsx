import { Code2, Layers, Zap, Shield, BarChart3, Handshake } from 'lucide-react';
import { Section } from './ui/Section';

const pillars = [
  {
    icon: <Code2 className="w-5 h-5" />,
    title: 'React & Arquitetura Moderna',
    desc: 'Construído com React 18+, TypeScript e Vite — a stack que os grandes produtos usam para máxima performance e manutenibilidade.',
    color: 'text-brand-400',
    bg: 'bg-brand-600/15',
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: 'Performance como Produto',
    desc: 'Core Web Vitals no verde não é bônus, é requisito. Cada linha de código é escrita pensando em velocidade e fluidez do usuário final.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-600/15',
  },
  {
    icon: <Layers className="w-5 h-5" />,
    title: 'Escopo Fechado, Sem Surpresas',
    desc: 'Entregáveis claros, prazo definido e preço fixo antes de qualquer linha de código. Você planeja com segurança, eu entrego com precisão.',
    color: 'text-green-400',
    bg: 'bg-green-600/15',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Engenharia de Sistemas Críticos',
    desc: 'Experiência em sistemas de alta disponibilidade e missão crítica. Não é só "fazer funcionar", é garantir que nunca vai cair.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-600/15',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Foco em ROI, Não em Tecnologia',
    desc: 'Cada decisão técnica é justificada em impacto de negócio. A tecnologia existe para servir seu objetivo, não para impressionar.',
    color: 'text-violet-400',
    bg: 'bg-violet-600/15',
  },
  {
    icon: <Handshake className="w-5 h-5" />,
    title: 'Parceiro Tecnológico, Não Fornecedor',
    desc: 'A diferença entre um "fazedor de sites" e um Tech Lead que entende seu negócio, propõe soluções e assume responsabilidade pelo resultado.',
    color: 'text-brand-400',
    bg: 'bg-brand-600/15',
  },
];

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
          {pillars.map((p) => (
            <div key={p.title} className="glass-card p-5 group">
              <div className={`w-10 h-10 rounded-xl ${p.bg} flex items-center justify-center mb-3 ${p.color} group-hover:scale-110 transition-transform`}>
                {p.icon}
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
