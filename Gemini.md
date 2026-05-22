# GEMINI.md: A Spec que Evolui

Este documento é a fonte da verdade para o projeto **projeto-portifolio**. Ele serve como o "onboarding doc" para o agente de IA e evolui conforme novas decisões, arquiteturas e soluções foram implementadas.

---

## 0. Filosofia e Lições Aprendidas

Princípios que guiam o desenvolvimento e a manutenção deste projeto, baseados na experiência prática.

1.  **Vibe coding sem disciplina é protótipo descartável.** Engenharia de software com disciplina (CI, testes, small releases) é o que constrói produtos duradouros, mesmo com um copiloto de IA.

2.  **TDD (Test-Driven Development) é mais importante com IA, não menos.** Uma suíte de testes robusta é a rede de segurança que permite que o agente modifique o código com confiança. Sem testes, cada mudança é uma aposta.

3.  **O humano decide o "quê". O agente decide o "como".** A direção estratégica, os objetivos de negócio e a arquitetura principal são definidos pelo desenvolvedor. O agente é uma ferramenta poderosa para implementar os detalhes técnicos. Inverter essa relação leva a resultados inferiores.

4.  **Refatoração contínua é obrigatória.** O código gerado por IA pode ser funcional, mas tende a ser verboso e repetitivo. É responsabilidade do desenvolvedor "podar" a base de código regularmente: extrair componentes, aplicar o princípio DRY e simplificar interfaces para evitar a complexidade acidental.

5.  **Documentação é investimento com retorno imediato.** Manter um documento vivo como o `gemini.md` economiza horas de contexto perdido em sessões futuras e serve como uma especificação clara para o desenvolvimento.

6.  **Small releases são a chave.** Commits atômicos e focados, integrados a um pipeline de CI/CD, garantem que o projeto esteja sempre em um estado "production-ready". Isso facilita a reversão de problemas e o gerenciamento de features.

7.  **Segurança não é uma fase — é um hábito.** A segurança deve ser integrada ao processo de desenvolvimento desde o início, com varreduras automáticas e correção imediata de vulnerabilidades, em vez de ser deixada para uma "sprint de segurança" no final.

8.  **O agente nunca diz “não”. Você é o filtro.** A IA é uma ferramenta que implementará o que for pedido, seja uma solução over-engineered ou insegura. O desenvolvedor humano é o revisor de código, o arquiteto de segurança e o "adulto na sala", responsável por garantir a qualidade e a sensatez das soluções implementadas.

9.  **Engenharia gera Autoridade.** A transição do foco de "Design/Visual" para "Engenharia de Software/Missão Crítica" altera a percepção de robustez e profissionalismo, permitindo tickets médios mais altos e maior confiança do cliente que busca escala e estabilidade.

10. **Serviços Produtizados eliminam a dúvida.** Estruturar a oferta em pacotes técnicos claros (Landing Pages, SaaS, Institucionais, Portfólios) com foco em entregáveis de engenharia reduz o ciclo de venda e facilita o onboarding do cliente.

---

## 1. Stack Tecnológica (Frontend)

- **Core:** React 18+ com Vite (Última versão LTS).
- **Linguagem:** TypeScript (Modo estrito).
- **Estilização:** Tailwind CSS (Uso de Design System via `tailwind.config.js`).
- **Ícones:** Lucide React.
- **Tipografia:** `Inter` (UI/Corpo) e `JetBrains Mono` (Labels/Dados técnicos).

---

## 2. Arquitetura e Padrões

- **Estrutura de Domínio:** O código é organizado separando responsabilidades: `components/ui` para blocos reutilizáveis, `constants` para dados puros, `types` para definições TypeScript e `utils` para funções isoladas. O projeto faz uso de *Path Aliases* (`@/`) para garantir imports limpos.
- **Centralização de Conteúdo (Data-Driven UI):** Todo o copywriting, detalhes técnicos e cases devem ser mantidos em `src/constants/content.ts`. O arquivo de dados **não** deve importar a biblioteca `React` nem criar elementos JSX. O objetivo é manter os dados puros.
- **Navegação:** Uso da função utilitária `scrollTo()` centralizada para lidar com o comportamento de "smooth scroll".
- **Performance:** Uso intenso de Code Splitting (manualChunks no Vite) e *Lazy Loading* com `React.lazy()` + `Suspense` em seções não visíveis na primeira dobra.
- **Design Premium (Identidade RB):** Dark Mode nativo com foco em sobriedade técnica, usando glassmorphism (`backdrop-blur`), gradientes sutis e micro-animações que reforçam a sensação de precisão e robustez.

---

## 3. Identidade e Estratégia de Negócio

- **Nome da Marca:** `RB — Rosa Bueno Desenvolvimento de Software`.
- **Posicionamento:** Engenharia de Software Sob Medida e Sistemas de Missão Crítica.
- **UVP:** "Engenharia de software sob medida para escalar operações e conectar regras de negócio complexas a alta performance."
- **Produtos Produtizados (High Performance):**
    1. **Landing Pages:** Foco em conversão, velocidade extrema e SEO técnico.
    2. **SaaS (Software as a Service):** Sistemas escaláveis, multi-tenancy e arquitetura de nuvem.
    3. **Sites Institucionais:** Autoridade digital com integridade de dados e segurança.
    4. **Portfólios:** Diferenciação visual com excelência técnica.
- **Carro-chefe:** Case T&K Jeans Wear (Exemplo de SSR, LCP otimizado e infraestrutura inquebrável).
- **Conversão (CTAs):** Foco em "Solicitar Diagnóstico Técnico" e "Iniciar Projeto de Engenharia".

---

## 4. Progresso Consolidado (Maio 2026)

- [x] Transição de marca para RB — Rosa Bueno Desenvolvimento de Software.
- [x] Reposicionamento para foco em Engenharia de Software e Missão Crítica.
- [x] Estruturação da camada de dados em `content.ts` (desacoplada da biblioteca React).
- [x] Implementação da Seção de Autoridade com Cases Ricos (T&K Jeans Wear).
- [x] Refatoração do Hero para foco em UVP de Engenharia.
- [x] Expansão do grid de Serviços para 4 produtos produtizados.
- [x] Design System unificado no Tailwind (Paleta Brand, Surface e Accent).
- [x] Configuração de Otimização de Performance (Code Splitting, Lazy Loading).
- [x] Implementação de SEO Técnico e Dados Estruturados.
- [x] Otimização de Conversão: Modal de Diagnóstico Técnico e fluxos de qualificação.
