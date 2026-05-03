import React from 'react';
import { Building2, ShoppingCart, Wrench } from 'lucide-react';

export const SERVICES = [
  {
    id: 'presenca',
    icon: React.createElement(Building2, { className: "w-7 h-7" }),
    tag: 'Produto 1',
    title: 'Presença & Autoridade',
    subtitle: 'Portfólios e Sites Empresariais',
    description:
      'Um site de alta velocidade que funciona como seu melhor vendedor 24/7. Construído com React e arquitetura moderna para gerar leads qualificados e transmitir autoridade imediata.',
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
    cta: 'Quero esse produto',
  },
  {
    id: 'maquina-de-vendas',
    icon: React.createElement(ShoppingCart, { className: "w-7 h-7" }),
    tag: 'Produto 2 — Mais Popular',
    title: 'Máquina de Vendas',
    subtitle: 'E-commerce & Plataformas B2B',
    description:
      'E-commerce customizado ou plataforma B2B completa, com foco obsessivo em performance e UX para maximizar cada etapa do funil — do primeiro clique ao pagamento confirmado.',
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
    cta: 'Quero esse produto',
  },
  {
    id: 'website-rescue',
    icon: React.createElement(Wrench, { className: "w-7 h-7" }),
    tag: 'Produto 3',
    title: 'Evolução & Website Rescue',
    subtitle: 'Resgate e Otimização de Projetos',
    description:
      'Auditoria profunda, refatoração de código e melhorias de conversão para sites que já existem mas não estão performando. Diagnóstico em 48h, plano de ação em 72h.',
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
    cta: 'Resgatar meu site',
  },
];

export const PRICING_TIERS = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Auditoria & Diagnóstico',
    price: 'R$ 1.490',
    period: 'Entrega em 5 dias',
    description: 'O ponto de partida inteligente. Descubra exatamente o que está trancando o crescimento do seu site antes de investir em qualquer solução.',
    features: [
      'Auditoria completa de Core Web Vitals',
      'Diagnóstico de UX e taxa de conversão',
      'Análise de SEO técnico',
      'Relatório de oportunidades priorizadas',
      'Plano de ação detalhado',
      'Chamada de 60min para apresentação',
    ],
    cta: 'Solicitar Auditoria',
    variant: 'secondary' as const,
    highlight: false,
  },
  {
    id: 'transformation',
    name: 'Transformation',
    tagline: 'Website Rescue / Novo Site',
    price: 'R$ 6.900',
    period: 'Entrega em 2–4 semanas',
    description: 'A intervenção completa. Seja um resgate do seu site atual ou a construção de um novo — com foco total em performance e conversão.',
    features: [
      'Tudo do plano Foundation incluído',
      'Implementação completa das melhorias',
      'Design responsivo e moderno',
      'Performance A+ garantida no PageSpeed',
      'Integração com CRM e Analytics',
      '60 dias de suporte pós-entrega',
      'Treinamento de uso para equipe',
    ],
    badge: 'Mais Escolhido',
    cta: 'Começar Projeto',
    variant: 'primary' as const,
    highlight: true,
  },
  {
    id: 'partnership',
    name: 'Partnership',
    tagline: 'Retainer Mensal',
    price: 'R$ 3.900',
    period: '/mês · Mínimo 3 meses',
    description: 'Para empresas que querem evolução contínua. Seu Tech Lead dedicado, disponível para desenvolver, otimizar e proteger seus sistemas críticos.',
    features: [
      'Até 40h de desenvolvimento/mês',
      'Monitoramento de performance 24/7',
      'Reuniões semanais de alinhamento',
      'Prioridade máxima em suporte crítico',
      'Evolução contínua baseada em dados',
      'Relatório mensal de impacto e métricas',
    ],
    cta: 'Conversar sobre Retainer',
    variant: 'secondary' as const,
    highlight: false,
  },
];

export const FAQS = [
  {
    q: 'Qual é o prazo de entrega?',
    a: 'Depende do pacote escolhido. A Auditoria é entregue em 5 dias úteis. O Website Rescue / Novo Site leva de 2 a 4 semanas dependendo da complexidade. Você terá o prazo exato antes de assinar qualquer contrato.',
  },
  {
    q: 'Como funciona a garantia de escopo?',
    a: 'Antes de iniciar, definimos juntos um documento de escopo com todos os entregáveis. O que está no documento é o que será entregue — sem custos extras por "alterações de escopo" dentro do combinado. Mudanças fora do escopo são orçadas separadamente e só executadas com sua aprovação.',
  },
  {
    q: 'Vocês oferecem suporte depois de pronto?',
    a: 'Sim. Todos os projetos incluem pelo menos 60 dias de suporte pós-entrega para correção de bugs e dúvidas de uso. Para suporte contínuo e evolução do produto, o plano Partnership (Retainer) é a escolha certa.',
  },
  {
    q: 'Preciso ter o domínio e hospedagem antes de contratar?',
    a: 'Não é necessário. Posso ajudar a configurar toda a infraestrutura — domínio, hospedagem na Vercel ou AWS, CDN, SSL. Isso faz parte do serviço.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Para projetos: 50% na assinatura do contrato e 50% na entrega. Para o Retainer mensal: pagamento antecipado no início de cada mês. Aceitamos transferência, PIX e cartão de crédito.',
  },
  {
    q: 'Meu site já existe. Vale a pena o resgate ou é melhor refazer do zero?',
    a: 'Essa é exatamente a pergunta que a Auditoria responde. Muitas vezes o código existente tem valor e pode ser otimizado — o que é mais rápido e econômico. Outras vezes, refazer do zero é a decisão certa. Você receberá uma análise honesta, sem conflito de interesse.',
  },
  {
    q: 'Você trabalha sozinho ou tem uma equipe?',
    a: 'Sou um Tech Lead que trabalha com uma rede de especialistas de confiança (designers, copywriters, especialistas em tráfego) quando o projeto exige. Você tem um ponto de contato único — eu — e a qualidade não se dilui.',
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Carlos Mendonça',
    role: 'CEO · T&K Jeans Wear',
    text: 'Thiago chegou quando nosso site estava literalmente jogando dinheiro fora. Em duas semanas, nossas vendas online subiram 28%. É o tipo de parceiro que assume o resultado junto com você.',
    metric: '+28% conversão',
    avatar: 'CM',
    color: 'bg-brand-700',
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    role: 'Diretora de Marketing · Agência Digital',
    text: 'Precisávamos de alguém que entendesse tanto de negócio quanto de tecnologia. Thiago entregou um site que não é só bonito — é uma máquina de capturar leads. Recomendo sem hesitar.',
    metric: '+320% em leads',
    avatar: 'FL',
    color: 'bg-violet-700',
  },
  {
    id: 3,
    name: 'Roberto Alves',
    role: 'CTO · Empresa Industrial B2B',
    text: 'Nosso sistema legado era uma caixa preta que só eu entendia. Thiago documentou, refatorou e entregou algo que a equipe inteira consegue manter. Isso tem um valor imenso.',
    metric: '-60% tempo de onboarding',
    avatar: 'RA',
    color: 'bg-green-700',
  },
];

export const CASES = [
  {
    id: 'tk-jeans',
    client: 'T&K Jeans Wear',
    category: 'E-commerce · Website Rescue',
    problem: 'Site com LCP de 6.2s, taxa de rejeição de 78% e carrinho abandonado por lentidão. Perdendo vendas para concorrentes mais rápidos.',
    solution: 'Refatoração completa com Next.js, otimização de imagens via WebP, implementação de CDN e lazy loading estratégico nos produtos.',
    results: [
      { label: 'Aumento em Conversão', value: '+28%', color: 'text-green-400' },
      { label: 'Redução no LCP', value: '-77%', color: 'text-brand-400' },
      { label: 'PageSpeed Score', value: '92/100', color: 'text-cyan-400' },
    ],
    tags: ['Next.js', 'WebP', 'CDN', 'Core Web Vitals'],
    gradient: 'from-brand-900/60 to-surface-800/80',
  },
  {
    id: 'consultoria-b2b',
    client: 'Plataforma B2B Industrial',
    category: 'Portal Corporativo · Do zero',
    problem: 'Sistema legado em PHP sem responsividade, gerando confusão na equipe comercial e impossibilitando acesso mobile dos clientes.',
    solution: 'Redesign completo com React + TypeScript, sistema de autenticação JWT, painel de pedidos em tempo real e PWA para acesso mobile.',
    results: [
      { label: 'Tempo de Onboarding', value: '-60%', color: 'text-green-400' },
      { label: 'Satisfação de Clientes', value: '+45%', color: 'text-brand-400' },
      { label: 'Pedidos via Mobile', value: '+190%', color: 'text-cyan-400' },
    ],
    tags: ['React', 'TypeScript', 'JWT', 'PWA'],
    gradient: 'from-violet-900/40 to-surface-800/80',
  },
  {
    id: 'landing-page',
    client: 'Agência de Marketing Digital',
    category: 'Landing Page · Alta Conversão',
    problem: 'Landing pages com taxa de conversão abaixo de 1.5%, sem testes A/B e carregando scripts desnecessários que bloqueavam a renderização.',
    solution: 'Reestruturação do funil de conversão, eliminação de scripts bloqueantes, implementação de testes A/B e otimização de formulários.',
    results: [
      { label: 'Taxa de Conversão', value: '+320%', color: 'text-green-400' },
      { label: 'Custo por Lead', value: '-42%', color: 'text-brand-400' },
      { label: 'Tempo de Carregamento', value: '0.8s', color: 'text-cyan-400' },
    ],
    tags: ['Performance', 'A/B Testing', 'CRO', 'Vite'],
    gradient: 'from-green-900/30 to-surface-800/80',
  },
];
