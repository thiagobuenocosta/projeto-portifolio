// ============================================================
// Tipos centralizados do projeto Rosa Bueno Studio Tech
// ============================================================

/** Identificadores de ícones disponíveis no projeto */
export type IconName =
  | 'Building2'
  | 'ShoppingCart'
  | 'Wrench'
  | 'Code2'
  | 'Layers'
  | 'Zap'
  | 'Shield'
  | 'BarChart3'
  | 'Handshake'
  | 'Clock'
  | 'TrendingDown'
  | 'ShieldOff'
  | 'AlertTriangle';

/** Serviço produtizado (Soluções) */
export interface Service {
  id: string;
  iconName: IconName;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  gradient: string;
  border: string;
  iconBg: string;
  cta: string;
  featured?: boolean;
}

/** Tier de preço */
export interface PricingTier {
  id: string;
  name: string;
  tagline: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  variant: 'primary' | 'secondary';
  highlight: boolean;
  badge?: string;
}

/** Pergunta frequente */
export interface Faq {
  q: string;
  a: string;
}

/** Depoimento de cliente */
export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  metric: string;
  avatar: string;
  color: string;
}

/** Resultado de um case study */
export interface CaseResult {
  label: string;
  value: string;
  color: string;
}

/** Pilar técnico detalhado (para case de destaque) */
export interface CasePillar {
  icon: string;
  title: string;
  desc: string;
  metrics?: string[];
}

/** Case study */
export interface Case {
  id: string;
  client: string;
  category: string;
  problem: string;
  solution: string;
  results: CaseResult[];
  tags: string[];
  gradient: string;
  // Campos ricos para case de destaque
  headline?: string;
  scenario?: string;
  detailedSections?: CasePillar[];
  closingQuote?: string;
  featured?: boolean;
}

/** Pilar de autoridade */
export interface Pillar {
  iconName: IconName;
  title: string;
  desc: string;
  color: string;
  bg: string;
}

/** Ponto de dor do cliente */
export interface Pain {
  iconName: IconName;
  title: string;
  desc: string;
}
