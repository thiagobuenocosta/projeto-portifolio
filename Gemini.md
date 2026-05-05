# GEMINI.md: A Spec que Evolui

Este documento é a fonte da verdade para o projeto **projeto-portifolio**. Ele serve como o "onboarding doc" para o agente de IA e evolui conforme novas decisões, arquiteturas e soluções são implementadas.

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

9.  **Institucionalização gera Autoridade.** A transição do tom de voz de "Eu" (Freelancer) para "Nós/Nossa Equipe" (Estúdio/Agência) altera a percepção de escala e profissionalismo, permitindo tickets médios mais altos e maior confiança do cliente B2B.

10. **Serviços Produtizados eliminam a dúvida.** Estruturar a oferta em pacotes fechados (Tiers: Foundation, Transformation, Partnership) com preços e prazos claros reduz o ciclo de venda e facilita o onboarding do cliente.

---

## 1. Stack Tecnológica (Frontend)

- **Core:** React 18+ com Vite (Última versão LTS).
- **Linguagem:** TypeScript (Modo estrito).
- **Estilização:** Tailwind CSS (Uso de Design System via `tailwind.config.js`).
- **Ícones:** Lucide React.
- **Tipografia:** `Inter` (UI/Corpo) e `JetBrains Mono` (Labels/Dados técnicos).

---

## 2. Arquitetura e Padrões

- **Atomic UI Components:** Componentes fundamentais residem em `src/components/ui/` (`Button`, `Section`, `SectionHeader`). Eles devem ser agnósticos a dados e focar apenas na apresentação.
- **Centralização de Conteúdo (Data-Driven UI):** Todo o copywriting, preços e detalhes de serviços devem ser mantidos em `src/constants/content.ts`. O objetivo é separar a camada de dados da lógica do React.
- **Navegação:** Uso de IDs de âncora com `scrollIntoView({ behavior: 'smooth' })`.
- **Design Premium (Identidade Nexus):** Dark Mode nativo com uso de glassmorphism (`backdrop-blur`), gradientes radiais saturados e micro-animações CSS. O foco é uma estética futurista, limpa e de alta performance.

---

## 3. Identidade e Estratégia de Negócio

- **Nome da Marca:** `Rosa Bueno Studio Tech`.
- **Posicionamento:** Estúdio de Consultoria Tecnológica e Engenharia de Elite — "Nossa equipe projeta e constrói posicionamentos digitais de alto impacto do zero".
- **UVP:** "Nossa equipe projeta e constrói posicionamentos digitais de alto impacto do zero para transformar tecnologia em lucro".
- **Serviços Produtizados (Tiers):**
    1. **Foundation (Auditoria de Posicionamento):** Diagnóstico técnico e estratégico com plano de ação (Entrega em 5 dias).
    2. **Transformation (Website Rescue / Novo Site):** Intervenção completa para resgatar autoridade e acelerar conversão (Entrega em 2-4 semanas).
    3. **Partnership (Retainer Mensal):** Evolução contínua e suporte estratégico como equipe de Tech Lead dedicada.
- **Carro-chefe:** Case T&K Jeans Wear como exemplo de impacto real em ROI (vendas e performance).
- **Conversão (CTAs):** Foco em "Solicitar Diagnóstico" e "Iniciar Projeto" para qualificar leads de alto valor.

---

## 4. Progresso Consolidado (Maio 2026)

- [x] Reposicionamento completo da marca (de Thiago Bueno para Rosa Bueno Studio Tech).
- [x] Institucionalização do Copywriting (plural majestático "Nós").
- [x] Estruturação da camada de dados em `content.ts`.
- [x] Implementação da Seção de Autoridade com Cases Reais.
- [x] Refatoração do Hero para foco em UVP (Unique Value Proposition).
- [x] Configuração de FAQ para quebra de objeções.
- [x] Design System unificado no Tailwind (Paleta Brand, Surface e Accent).
- [x] Implementação do Vercel Speed Insights para monitoramento de performance.
- [x] Implementação do Vercel Analytics para métricas de tráfego.
- [x] Implementação de Pre-loader premium com animação fluida em vídeo.