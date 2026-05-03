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
- **Design Premium:** Dark Mode nativo com uso de glassmorphism (`backdrop-blur`), gradientes radiais e micro-animações (framer-motion opcional, CSS animations preferencial para performance).

---

## 3. Identidade e Conversão

- **Nome da Marca:** `dev.ThiagoBueno`.
- **Foco de Negócio:** Serviços Produtizados (Productized Services) — venda de resultados com escopo e preço fechados.
- **Funil de Venda:** Homepage estruturada em: Atenção (Hero) -> Agitação do Problema -> Solução (Produtos) -> Prova Social -> Objeções (FAQ) -> Chamada para Ação (Contato Qualificado).
- **Lead Qualification:** O formulário de contato deve capturar a "dor" e o "custo do problema" para pré-selecionar clientes de alto valor.