import type { Service, PricingTier, Faq, Testimonial, Case, Pillar, Pain } from '@/types';

// ============================================================
// Brand — RB
// ============================================================

export const BRAND = {
  name: "RB — Rosa Bueno Desenvolvimento de Software",
  shortName: "RB",
  uvp: "Desenvolvemos software sob medida para escalar a sua operação e conectar suas regras de negócio complexas à tecnologia de alta performance",
  headline: "Engenharia de Software Sob Medida para Operações de Alto Volume",
  subheadline: "Não construímos sites bonitos. Construímos estruturas invisíveis ao olho do usuário, mas vitais para o negócio: APIs robustas, microsserviços integrados, transações seguras e sistemas que aguentam o tranco.",
};

// ============================================================
// Serviços (Soluções) — 4 Produtos Produtizados
// ============================================================

export const SERVICES: Service[] = [
  {
    id: 'landing-pages',
    iconName: 'Zap',
    tag: 'Produto 1',
    title: 'Landing Pages de Alta Performance',
    subtitle: 'Conversão e Velocidade para Tráfego Pago',
    description:
      'Desenvolvidas com código limpo e arquitetura modular, garantindo taxas de rejeição mínimas e velocidade máxima no carregamento mobile para otimizar o ROI dos seus anúncios no Meta Ads e Google Ads.',
    deliverables: [
      'Arquitetura modular com Code Splitting',
      'Core Web Vitals A+ desde o primeiro deploy',
      'Integração nativa com UTMs e pixels de conversão',
      'A/B testing de elementos críticos de CTA',
      'Relatório de velocidade antes/depois',
      'Deploy em CDN global para latência mínima',
    ],
    gradient: 'from-brand-50 to-cyan-50/50',
    border: 'border-brand-100',
    iconBg: 'bg-brand-50 text-brand-600',
    cta: 'Iniciar Projeto',
  },
  {
    id: 'saas',
    iconName: 'Layers',
    tag: 'Produto 2 — Mais Solicitado',
    title: 'Plataformas SaaS Escaláveis',
    subtitle: 'Escala, Multi-Tenancy e Segurança Transacional',
    description:
      'Arquitetura robusta em microsserviços, isolamento lógico de dados (Multi-Tenant), segurança transacional e integrações de API complexas para transformar sua ideia em um produto digital pronto para o mercado.',
    deliverables: [
      'Arquitetura Multi-Tenant com isolamento lógico de dados',
      'APIs RESTful documentadas e versionadas',
      'Autenticação OAuth 2.0 e RBAC por perfil',
      'Pooling de conexões e cache em Redis',
      'Monitoramento de saúde e alertas em tempo real',
      'Pipeline CI/CD com testes automatizados',
    ],
    gradient: 'from-violet-50 to-brand-50/50',
    border: 'border-violet-100',
    iconBg: 'bg-violet-50 text-violet-600',
    featured: true,
    cta: 'Arquitetar Solução',
  },
  {
    id: 'sites-institucionais',
    iconName: 'Building2',
    tag: 'Produto 3',
    title: 'Portais Corporativos e Sites Institucionais',
    subtitle: 'Autoridade, Presença Digital e SEO Técnico',
    description:
      'Unimos identidade de marca forte a uma infraestrutura tecnológica veloz (Core Web Vitals excelentes) e totalmente gerenciável, elevando o posicionamento digital da sua empresa no mercado B2B.',
    deliverables: [
      'SEO técnico com Schema.org e dados estruturados',
      'Server-Side Rendering (SSR) para indexação máxima',
      'CMS headless para autonomia editorial total',
      'Análise semântica para palavras-chave de alto valor',
      'Otimização avançada de imagens e Web Fonts',
      'Integração com CRM, ERP e sistemas legados',
    ],
    gradient: 'from-green-50 to-brand-50/50',
    border: 'border-green-100',
    iconBg: 'bg-green-50 text-green-600',
    cta: 'Elevar Posicionamento',
  },
  {
    id: 'portfolios',
    iconName: 'BarChart3',
    tag: 'Produto 4',
    title: 'Portfólios Digitais de Alto Padrão',
    subtitle: 'Exclusividade e Diferenciação para Profissionais',
    description:
      'Interfaces exclusivas com carregamento sob demanda (Code Splitting) e otimização sistemática de ativos visuais para apresentar seus projetos com o impacto visual e a sofisticação que seu público exige.',
    deliverables: [
      'Design exclusivo com identidade visual única',
      'Lazy Loading e otimização de ativos visuais',
      'Animações CSS performáticas sem JavaScript pesado',
      'Galeria de projetos com transições premium',
      'SEO pessoal e Google Knowledge Panel',
      'Performance 95+ no Google Lighthouse',
    ],
    gradient: 'from-amber-50 to-brand-50/50',
    border: 'border-amber-100',
    iconBg: 'bg-amber-50 text-amber-600',
    cta: 'Criar Portfólio',
  },
];

// ============================================================
// Pricing
// ============================================================

export const PRICING_TIERS: PricingTier[] = [
  {
    id: 'foundation',
    name: 'Foundation',
    tagline: 'Auditoria & Diagnóstico Técnico',
    price: 'R$ 1.490',
    period: 'Entrega em 5 dias úteis',
    description: 'O ponto de partida inteligente. Nossa equipe faz engenharia reversa dos seus sistemas para descobrir exatamente onde está o gargalo antes de investir em qualquer solução.',
    features: [
      'Auditoria completa de Core Web Vitals',
      'Análise de gargalos de banco de dados (N+1 queries)',
      'Diagnóstico de segurança e vulnerabilidades',
      'Análise de SEO técnico e indexabilidade',
      'Relatório de oportunidades com ROI estimado',
      'Chamada estratégica de 60min com Tech Lead',
    ],
    cta: 'Solicitar Diagnóstico',
    variant: 'secondary',
    highlight: false,
  },
  {
    id: 'transformation',
    name: 'Transformation',
    tagline: 'Desenvolvimento / Modernização Completa',
    price: 'R$ 6.900',
    period: 'Entrega em 2–4 semanas',
    description: 'A intervenção completa de engenharia. Seja modernização de sistema legado ou construção do zero — arquitetura SOLID, CI/CD e garantia de performance e integridade de dados.',
    features: [
      'Tudo do plano Foundation incluído',
      'Desenvolvimento ou refatoração completa pela equipe',
      'Arquitetura limpa com padrões SOLID e DRY',
      'Performance A+ garantida no PageSpeed',
      'Pipeline CI/CD com testes automatizados',
      '60 dias de suporte técnico pós-entrega',
      'Documentação técnica completa do sistema',
    ],
    badge: 'Mais Escolhido',
    cta: 'Iniciar Engenharia',
    variant: 'primary',
    highlight: true,
  },
  {
    id: 'partnership',
    name: 'Partnership',
    tagline: 'Tech Lead Dedicado — Retainer Mensal',
    price: 'R$ 3.900',
    period: '/mês · Mínimo 3 meses',
    description: 'Para empresas que precisam de evolução contínua. Tenha uma equipe de engenharia dedicada para proteger, evoluir e escalar seus sistemas críticos com previsibilidade total.',
    features: [
      'Até 40h de engenharia de software/mês',
      'Monitoramento de disponibilidade 24/7',
      'Reuniões semanais de alinhamento técnico',
      'Prioridade máxima em incidentes críticos',
      'Evolução de funcionalidades baseada em métricas',
      'Relatórios mensais de saúde e performance do sistema',
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
    q: 'Qual é o prazo de entrega dos projetos?',
    a: 'Depende do escopo. A Auditoria técnica é entregue em 5 dias úteis. Projetos de desenvolvimento completo levam de 2 a 4 semanas. Para sistemas mais complexos (SaaS, microsserviços), definimos o cronograma em detalhes no documento de escopo antes de iniciar.',
  },
  {
    q: 'Como funciona a garantia de escopo e integridade de dados?',
    a: 'Antes de iniciar, nossa equipe define um documento de escopo com todos os entregáveis técnicos e regras de negócio mapeadas. Para migrações e refatorações, garantimos integridade total do banco de dados com engenharia reversa cirúrgica — sem perda de dados, sem quebra de regras de negócio.',
  },
  {
    q: 'A RB oferece suporte após a entrega?',
    a: 'Sim. Todos os projetos incluem pelo menos 60 dias de suporte técnico pós-entrega. Para monitoramento contínuo, evolução e gestão de sistemas críticos, o plano Partnership (Tech Lead Dedicado) é o ideal.',
  },
  {
    q: 'Quem lidera tecnicamente o meu projeto?',
    a: 'Cada projeto na RB é liderado por um Tech Lead sênior com experiência em sistemas de missão crítica, apoiado por especialistas em banco de dados, segurança e infraestrutura. Você tem canal direto com o tech lead para garantir agilidade e qualidade.',
  },
  {
    q: 'Como funciona o pagamento?',
    a: 'Para projetos: 50% na assinatura do contrato e 50% na entrega. Para o Retainer mensal: pagamento antecipado. Aceitamos transferência bancária, PIX e cartão de crédito em até 12x.',
  },
  {
    q: 'Meu sistema é legado. Vale a pena modernizar ou refazer do zero?',
    a: 'Essa é exatamente a pergunta que nossa Auditoria Técnica (Foundation) responde com dados. Nossa equipe aplica engenharia reversa para mapear o que tem valor e pode ser aproveitado versus o que é custo e risco. A decisão é sempre baseada em ROI real, não em preferência técnica.',
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
    text: 'A equipe da RB chegou quando nosso e-commerce estava literalmente jogando dinheiro fora. Em duas semanas com a nova arquitetura, nossas vendas online subiram 28%. É o tipo de parceiro que assume o resultado junto com você.',
    metric: '+28% conversão',
    avatar: 'CM',
    color: 'bg-brand-700',
  },
  {
    id: 2,
    name: 'Fernanda Lima',
    role: 'Diretora de Marketing · Agência Digital',
    text: 'Precisávamos de uma equipe que entendesse tanto de negócio quanto de engenharia. A RB entregou uma plataforma que não é só robusta — é uma máquina de geração de leads qualificados.',
    metric: '+320% em leads',
    avatar: 'FL',
    color: 'bg-violet-700',
  },
  {
    id: 3,
    name: 'Roberto Alves',
    role: 'CTO · Empresa Industrial B2B',
    text: 'Nosso sistema legado era uma caixa preta que emperrava o crescimento. A RB aplicou engenharia reversa, documentou tudo e entregou uma arquitetura que nossa equipe inteira consegue manter e evoluir. Valor imenso.',
    metric: '-60% tempo de onboarding',
    avatar: 'RA',
    color: 'bg-green-700',
  },
];

// ============================================================
// Cases — com T&K Jeans Wear em formato de destaque rico
// ============================================================

export const CASES: Case[] = [
  {
    id: 'tk-jeans',
    client: 'T&K Jeans Wear',
    category: 'E-commerce · Engenharia de Software Sob Medida',
    problem: 'Plataforma de moda com performance crítica: alta taxa de rejeição e abandono de carrinho causados por gargalos de banco de dados e ausência de SSR, impossibilitando o crescimento das vendas online.',
    solution: 'Arquitetura de missão crítica desenvolvida do zero: migração para Next.js com SSR, automação de cadastro com IA Vision (Gemini 1.5 Flash), infraestrutura serverless com Neon Postgres e Vercel.',
    results: [
      { label: 'Aumento em Conversão', value: '+28%', color: 'text-green-600' },
      { label: 'Redução no LCP', value: '-77%', color: 'text-brand-600' },
      { label: 'PageSpeed Score', value: '92/100', color: 'text-cyan-600' },
    ],
    tags: ['Next.js', 'SSR', 'Gemini AI', 'Neon Postgres', 'Vercel', 'Serverless'],
    gradient: 'from-brand-50/60 to-surface-800/80',
    featured: true,
    headline: 'E-commerce de Alta Performance: Como transformamos a experiência digital da T&K Jeans Wear com Engenharia de Software Sob Medida.',
    scenario: 'No mercado de moda de alto padrão, a velocidade e a estabilidade da plataforma ditam o volume de vendas. Soluções prontas e engessadas falham quando o tráfego escala ou quando o negócio precisa de regras customizadas. Para a T&K Jeans Wear, não construímos apenas uma loja virtual; arquitetamos um ecossistema de software de missão crítica. Desenvolvido totalmente do zero, o projeto une o que há de mais avançado em engenharia web para entregar velocidade extrema, segurança e autonomia total de gestão.',
    detailedSections: [
      {
        icon: 'Zap',
        title: 'Velocidade Brutal e SEO Nativo (SSR & LCP)',
        desc: 'O e-commerce foi migrado para uma arquitetura híbrida com Server-Side Rendering. O HTML chega ao navegador totalmente pronto e otimizado para o Google. Resultado: eliminação de travamentos visuais, carregamento instantâneo de imagens e posicionamento orgânico privilegiado.',
        metrics: ['+28% Conversão', '-77% LCP', '92/100 PageSpeed'],
      },
      {
        icon: 'Code2',
        title: 'Automação Inteligente com IA Vision',
        desc: 'Criamos uma esteira de upload em lote capaz de processar até 90 imagens simultaneamente. Integrado ao Gemini 1.5 Flash, o sistema analisa fotos de moda em tempo real e gera automaticamente títulos focados em SEO e descrições persuasivas alinhadas à marca.',
        metrics: ['90 imagens/lote', 'Títulos automáticos', 'Gemini 1.5 Flash'],
      },
      {
        icon: 'Layers',
        title: 'Design Fluido e Experiência Premium',
        desc: 'Substituímos layouts poluídos por um catálogo com grid de tela cheia e sistema de filtros premium em modal preditivo. Interface limpa, responsiva e focada em conversão — exibindo informações cruciais sem ruído visual.',
        metrics: ['Grid tela cheia', 'Filtros preditivos', 'Mobile-first'],
      },
      {
        icon: 'Shield',
        title: 'Infraestrutura Serverless Inquebrável',
        desc: 'Sustentado pelo Next.js, banco de dados Neon Postgres e hospedagem na Vercel. O sistema gerencia pooling de conexões automaticamente, garantindo que a plataforma permaneça estável e rápida mesmo durante picos massivos de acesso ou campanhas de vendas.',
        metrics: ['Neon Postgres', 'Vercel Edge', '99.9% uptime'],
      },
    ],
    closingQuote: 'O e-commerce da T&K Jeans Wear prova que software de alta performance gera eficiência operacional e vendas. Se a sua empresa precisa de uma plataforma robusta, veloz e sob medida, a RB tem a engenharia necessária para construir.',
  },
  {
    id: 'consultoria-b2b',
    client: 'Plataforma B2B Industrial',
    category: 'Portal Corporativo · Modernização de Sistema Legado',
    problem: 'Monolito legado sem responsividade e com gargalos graves de N+1 queries no banco, impossibilitando o acesso mobile da equipe comercial e travando o crescimento operacional.',
    solution: 'Refatoração com engenharia reversa cirúrgica: migração para React + TypeScript com arquitetura desacoplada, otimização de queries críticas e implementação de PWA para acesso mobile offline.',
    results: [
      { label: 'Tempo de Onboarding', value: '-60%', color: 'text-green-600' },
      { label: 'Satisfação de Clientes', value: '+45%', color: 'text-brand-600' },
      { label: 'Pedidos via Mobile', value: '+190%', color: 'text-cyan-600' },
    ],
    tags: ['React', 'TypeScript', 'PWA', 'Refatoração', 'B2B'],
    gradient: 'from-violet-50/60 to-surface-800/80',
  },
];

// ============================================================
// Pillars (Authority) — Foco em Engenharia de Software
// ============================================================

export const PILLARS: Pillar[] = [
  {
    iconName: 'Code2',
    title: 'Arquitetura SOLID e Código Limpo',
    desc: 'Aplicamos os princípios SOLID, DRY e Clean Architecture em cada projeto. Código que não só funciona — é mantível, testável e evoluível sem acumular dívida técnica.',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
  {
    iconName: 'Zap',
    title: 'Performance como Requisito de Negócio',
    desc: 'Eliminamos gargalos de N+1 queries, otimizamos consultas críticas e implementamos cache inteligente. Core Web Vitals no verde não é bônus — é parte do contrato.',
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
  },
  {
    iconName: 'Layers',
    title: 'Escopo Fechado, Integridade Garantida',
    desc: 'Documento de escopo detalhado com todas as regras de negócio mapeadas antes de iniciar. Para migrações, garantia de integridade transacional total do banco de dados.',
    color: 'text-green-600',
    bg: 'bg-green-50',
  },
  {
    iconName: 'Shield',
    title: 'Segurança Transacional e Alta Disponibilidade',
    desc: 'Experiência em sistemas multi-tenant, ambientes SaaS e Fintech. Não é só "fazer funcionar" — é garantir que o sistema resiste a picos de carga e nunca compromete dados.',
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
  },
  {
    iconName: 'BarChart3',
    title: 'ROI Mensurável, Não Código por Código',
    desc: 'Cada decisão técnica é justificada em impacto financeiro. Um sistema com gargalo de banco de dados faz a empresa perder dinheiro em conversão e gastar demais com servidores.',
    color: 'text-violet-600',
    bg: 'bg-violet-50',
  },
  {
    iconName: 'Handshake',
    title: 'Tech Lead Dedicado, Não Fornecedor',
    desc: 'A diferença entre um "fazedor de código" e um Tech Lead que entende suas regras de negócio, propõe arquitetura adequada e assume responsabilidade pelo resultado final.',
    color: 'text-brand-600',
    bg: 'bg-brand-50',
  },
];

// ============================================================
// Pains (Problem) — Dores de Negócio com Causa Técnica
// ============================================================

export const PAINS: Pain[] = [
  {
    iconName: 'Clock',
    title: 'Sistema lento travando a operação e espantando clientes?',
    desc: 'Gargalos de N+1 queries, ausência de cache e infraestrutura subdimensionada custam até 7% em conversões por segundo de latência. Seu sistema lento é custo real no P&L.',
  },
  {
    iconName: 'TrendingDown',
    title: 'Tráfego cai no funil sem converter nem gerar leads?',
    desc: 'Sem SSR, o Google penaliza o ranqueamento. Sem otimização de LCP, o usuário abandona. Tráfego pago jogado fora é consequência de engenharia ruim na base.',
  },
  {
    iconName: 'ShieldOff',
    title: 'Preso em sistema legado que ninguém consegue mexer ou escalar?',
    desc: 'Monolitos sem documentação e com dívida técnica acumulada travam qualquer evolução do negócio. A cada nova feature, o risco de quebrar algo aumenta exponencialmente.',
  },
  {
    iconName: 'AlertTriangle',
    title: 'Projeto de software sem fim consumindo budget e tempo?',
    desc: 'Escopo sem controle, falta de CI/CD e ausência de testes automatizados são os principais culpados. Sem disciplina de engenharia, cada sprint vira uma caixa-preta de incerteza.',
  },
];
