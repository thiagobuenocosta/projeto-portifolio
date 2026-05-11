import type { Service, PricingTier, Faq, Testimonial, Case, Pillar, Pain } from '@/types';

// ============================================================
// Brand
// ============================================================

export const BRAND = {
  name: "Rosa Bueno Studio Tech",
  uvp: "Nossa equipe projeta e constrói posicionamentos digitais de alto impacto do zero para transformar tecnologia em lucro",
  headline: "Especialistas em Posicionamento Digital & Engenharia de Performance",
  subheadline: "Unimos design de elite, engenharia de software e estratégia de negócio para construir ecossistemas digitais que vendem sozinhos.",
};

// ============================================================
// Serviços (Soluções)
// ============================================================

export const SERVICES: Service[] = [
  {
    id: 'presenca',
    iconName: 'Building2',
    tag: 'Produto 1',
    title: 'Presença & Autoridade',
    subtitle: 'Portfólios e Sites Empresariais',
    description:
      'Projetamos sites de alta velocidade que funcionam como os melhores vendedores 24/7 da sua marca. Construídos com arquitetura moderna para gerar leads qualificados e transmitir autoridade imediata.',
    deliverables: [
      'Design exclusivo orientado a conversão',
      'Performance A+ no PageSpeed (>90)',
      'SEO técnico e semântico desde a base',
      'Formulários inteligentes de captura de leads',
      'Integração com CRM e Analytics',
      'Responsivo para todos os dispositivos',
    ],
    gradient: 'from-brand-600/20 to-cyan-600/10',
    border: 'border-brand-700/30',
    iconBg: 'bg-brand-600/20 text-brand-400',
    cta: 'Agendar Projeto',
  },
  {
    id: 'maquina-de-vendas',
    iconName: 'ShoppingCart',
    tag: 'Produto 2 — Mais Popular',
    title: 'Máquina de Vendas',
    subtitle: 'E-commerce & Plataformas B2B',
    description:
      'Nossa equipe desenvolve e-commerces customizados ou plataformas B2B completas, com foco obsessivo em performance e UX para maximizar cada etapa do funil — do primeiro clique ao pagamento.',
    deliverables: [
      'Checkout otimizado (menos abandono de carrinho)',
      'Catálogo dinâmico com filtros avançados',
      'Integração com gateways de pagamento BR',
      'Dashboard de pedidos e estoque',
      'Core Web Vitals no verde desde o lançamento',
      'Estratégia de upsell e cross-sell embutida',
    ],
    gradient: 'from-violet-600/20 to-brand-600/15',
    border: 'border-violet-700/40',
    iconBg: 'bg-violet-600/20 text-violet-400',
    featured: true,
    cta: 'Agendar Projeto',
  },
  {
    id: 'website-rescue',
    iconName: 'Wrench',
    tag: 'Produto 3',
    title: 'Evolução & Website Rescue',
    subtitle: 'Resgate e Otimização de Projetos',
    description:
      'Nossa equipe realiza auditorias profundas, refatoração de código e melhorias de conversão para sites que já existem mas não estão performando como deveriam.',
    deliverables: [
      'Auditoria completa de Core Web Vitals',
      'Diagnóstico de UX e taxa de conversão',
      'Refatoração de código crítico',
      'Otimização de imagens e assets',
      'Implementação de cache e CDN',
      'Relatório de impacto antes/depois',
    ],
    gradient: 'from-green-600/15 to-brand-600/10',
    border: 'border-green-700/30',
    iconBg: 'bg-green-600/20 text-green-400',
    cta: 'Solicitar Resgate',
  },
];

// ============================================================
// Pricing
// ============================================================

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Auditoria & Diagnóstico',
    price: 'R$ 1.490',
    period: 'Entrega em 5 dias',
    description: 'O ponto de partida inteligente. Nossa equipe descobre exatamente o que está travando o crescimento do seu site antes de investir em qualquer solução.',
    features: [
      'Auditoria completa de Core Web Vitals',
      'Diagnóstico de UX e taxa de conversão',
      'Análise de SEO técnico',
      'Relatório de oportunidades priorizadas',
      'Plano de ação detalhado',
      'Chamada estratégica de 60min',
    ],
    cta: 'Solicitar Auditoria',
    variant: 'secondary',
    highlight: false,
  },
  {
    id: 'transformation',
    name: 'Transformation',
    tagline: 'Website Rescue / Novo Site',
    price: 'R$ 6.900',
    period: 'Entrega em 2–4 semanas',
    description: 'A intervenção completa. Seja um resgate do seu site atual ou a construção de um novo posicionamento — com foco total em performance e conversão.',
    features: [
      'Tudo do plano Foundation incluído',
      'Implementação completa pela nossa equipe',
      'Design responsivo e moderno',
      'Performance A+ garantida no PageSpeed',
      'Integração com CRM e Analytics',
      '60 dias de suporte pós-entrega',
      'Treinamento estratégico para sua equipe',
    ],
    badge: 'Mais Escolhido',
    cta: 'Iniciar Projeto',
    variant: 'primary',
    highlight: true,
  },
  {
    id: 'partnership',
    name: 'Partnership',
    tagline: 'Retainer Mensal',
    price: 'R$ 3.900',
    period: '/mês · Mínimo 3 meses',
    description: 'Para empresas que buscam evolução contínua. Tenha uma equipe de Tech Leads dedicada, disponível para desenvolver e proteger seus sistemas críticos.',
    features: [
      'Até 40h de desenvolvimento/mês',
      'Monitoramento de performance 24/7',
      'Reuniões semanais de alinhamento',
      'Prioridade máxima em suporte crítico',
      'Evolução contínua baseada em dados',
      'Relatórios mensais de impacto e ROI',
    ],
    cta: 'Conversar sobre Retainer',
    variant: 'secondary',
    highlight: false,
  },
];

// ============================================================
// FAQ
// ============================================================

export const FAQS: Faq[] = [
  {
    q: 'Qual é o prazo de entrega?',
    a: 'Depende do pacote escolhido. A Auditoria é entregue em 5 dias úteis. O Website Rescue / Novo Site leva de 2 a 4 semanas dependendo da complexidade. Nossa equipe define o cronograma exato antes de iniciar.',
  },
  {
    q: 'Como funciona a garantia de escopo?',
    a: 'Antes de iniciar, nossa equipe define um documento de escopo com todos os entregáveis. O que está no documento é o que será entregue — sem custos extras por alterações de escopo dentro do combinado.',
  },
  {
    q: 'O estúdio oferece suporte depois de pronto?',
    a: 'Sim. Todos os projetos incluem pelo menos 60 dias de suporte pós-entrega para correção de bugs e dúvidas. Para evolução contínua, o plano Partnership (Retainer) é o ideal.',
  },
  {
    q: 'Quem estará à frente do meu projeto?',
    a: 'Cada projeto na Rosa Bueno Studio Tech é liderado por um Tech Lead sênior, apoiado por uma equipe de especialistas em design, copy e infraestrutura. Você terá um canal direto de comunicação para garantir agilidade e qualidade.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Para projetos: 50% na assinatura e 50% na entrega. Para o Retainer mensal: pagamento antecipado. Aceitamos transferência, PIX e cartão de crédito.',
  },
  {
    q: 'Meu site já existe. Vale a pena o resgate ou é melhor refazer do zero?',
    a: 'Essa é exatamente a pergunta que nossa Auditoria responde. Muitas vezes o código existente tem valor e pode ser otimizado — o que é mais rápido e econômico. Outras vezes, o desenvolvimento do zero é a decisão certa para o ROI de longo prazo.',
  },
];

// ============================================================
// Testimonials
// ============================================================

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Carlos Mendonça',
    role: 'CEO · T&K Jeans Wear',
    text: 'A equipe da Rosa Bueno chegou quando nosso site estava literalmente jogando dinheiro fora. Em duas semanas, nossas vendas online subiram 28%. É o tipo de parceiro que assume o resultado junto com você.',
    metric: '+28% conversão',
    avatar: 'CM',
    color: 'bg-brand-700',
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    role: 'Diretora de Marketing · Agência Digital',
    text: 'Precisávamos de um estúdio que entendesse tanto de negócio quanto de tecnologia. Eles entregaram um posicionamento que não é só bonito — é uma máquina de leads.',
    metric: '+320% em leads',
    avatar: 'FL',
    color: 'bg-violet-700',
  },
  {
    id: 3,
    name: 'Roberto Alves',
    role: 'CTO · Empresa Industrial B2B',
    text: 'Nosso sistema legado era uma caixa preta. A equipe documentou, refatorou e entregou algo que nossa equipe inteira consegue manter. Isso tem um valor imenso.',
    metric: '-60% tempo de onboarding',
    avatar: 'RA',
    color: 'bg-green-700',
  },
];

// ============================================================
// Cases
// ============================================================

export const CASES: Case[] = [
  {
    id: 'tk-jeans',
    client: 'T&K Jeans Wear',
    category: 'E-commerce · Website Rescue',
    problem: 'Site com performance crítica, alta taxa de rejeição e abandono de carrinho por lentidão.',
    solution: 'Nossa equipe realizou uma refatoração completa com Next.js, otimização de infraestrutura e implementação de funis de conversão acelerada.',
    results: [
      { label: 'Aumento em Conversão', value: '+28%', color: 'text-green-400' },
      { label: 'Redução no LCP', value: '-77%', color: 'text-brand-400' },
      { label: 'PageSpeed Score', value: '92/100', color: 'text-cyan-400' },
    ],
    tags: ['Next.js', 'WebP', 'CDN', 'Performance'],
    gradient: 'from-brand-900/60 to-surface-800/80',
  },
  {
    id: 'consultoria-b2b',
    client: 'Plataforma B2B Industrial',
    category: 'Portal Corporativo · Desenvolvimento do Zero',
    problem: 'Sistema legado sem responsividade, impossibilitando o acesso mobile da equipe comercial e dos clientes.',
    solution: 'Desenvolvimento completo do posicionamento digital do zero com React + TypeScript, sistema de pedidos em tempo real e PWA.',
    results: [
      { label: 'Tempo de Onboarding', value: '-60%', color: 'text-green-400' },
      { label: 'Satisfação de Clientes', value: '+45%', color: 'text-brand-400' },
      { label: 'Pedidos via Mobile', value: '+190%', color: 'text-cyan-400' },
    ],
    tags: ['React', 'TypeScript', 'PWA', 'B2B'],
    gradient: 'from-violet-900/40 to-surface-800/80',
  },
];

// ============================================================
// Pillars (Authority)
// ============================================================

export const PILLARS: Pillar[] = [
  {
    iconName: 'Code2',
    title: 'React & Arquitetura Moderna',
    desc: 'Construído com React 18+, TypeScript e Vite — a stack que os grandes produtos usam para máxima performance e manutenibilidade.',
    color: 'text-brand-400',
    bg: 'bg-brand-600/15',
  },
  {
    iconName: 'Zap',
    title: 'Performance como Produto',
    desc: 'Core Web Vitals no verde não é bônus, é requisito. Cada linha de código é escrita pensando em velocidade e fluidez do usuário final.',
    color: 'text-yellow-400',
    bg: 'bg-yellow-600/15',
  },
  {
    iconName: 'Layers',
    title: 'Escopo Fechado, Sem Surpresas',
    desc: 'Entregáveis claros, prazo definido e preço fixo antes de qualquer linha de código. Você planeja com segurança, eu entrego com precisão.',
    color: 'text-green-400',
    bg: 'bg-green-600/15',
  },
  {
    iconName: 'Shield',
    title: 'Engenharia de Sistemas Críticos',
    desc: 'Experiência em sistemas de alta disponibilidade e missão crítica. Não é só "fazer funcionar", é garantir que nunca vai cair.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-600/15',
  },
  {
    iconName: 'BarChart3',
    title: 'Foco em ROI, Não em Tecnologia',
    desc: 'Cada decisão técnica é justificada em impacto de negócio. A tecnologia existe para servir seu objetivo, não para impressionar.',
    color: 'text-violet-400',
    bg: 'bg-violet-600/15',
  },
  {
    iconName: 'Handshake',
    title: 'Parceiro Tecnológico, Não Fornecedor',
    desc: 'A diferença entre um "fazedor de sites" e um Tech Lead que entende seu negócio, propõe soluções e assume responsabilidade pelo resultado.',
    color: 'text-brand-400',
    bg: 'bg-brand-600/15',
  },
];

// ============================================================
// Pains (Problem)
// ============================================================

export const PAINS: Pain[] = [
  {
    iconName: 'Clock',
    title: 'Seu site demora mais de 3 segundos para carregar?',
    desc: 'Cada segundo a mais no carregamento custa até 7% em conversões. Seu site lento é um vendedor que espanta clientes antes mesmo de abrir a boca.',
  },
  {
    iconName: 'TrendingDown',
    title: 'Visitantes chegam mas não compram nem ligam?',
    desc: 'Tráfego sem conversão é dinheiro jogado fora. A maioria dos sites tem UX quebrada e CTAs invisíveis que sabotam qualquer campanha de marketing.',
  },
  {
    iconName: 'ShieldOff',
    title: 'Preso em tecnologia legada que ninguém consegue mexer?',
    desc: 'Plataformas engessadas travam o crescimento e encarecem qualquer mudança. Você paga caro por menos e ainda depende de quem sabe o "segredo" do sistema.',
  },
  {
    iconName: 'AlertTriangle',
    title: 'Projeto inacabado consumindo tempo e dinheiro?',
    desc: 'Prazos que não se cumprem, escopo que cresce sem controle e orçamentos que explodem. A incerteza tecnológica paralisa decisões e drena recursos.',
  },
];
