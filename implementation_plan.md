# Plano de Implementação — Transição para RBDS (Rosa Bueno Desenvolvimento de Software)

Este plano detalha a migração do portfólio de **Rosa Bueno Studio Tech** para **RBDS — Rosa Bueno Desenvolvimento de Software**. O foco da comunicação muda de "estúdio digital visual" para "engenharia de software sob medida, robustez, integridade de dados e alta performance (missão crítica)".

---

## User Review Required

> [!IMPORTANT]
> * **Transição de Marca**: O nome em todas as telas, Navbar, Footer e constantes será alterado para **RBDS — Rosa Bueno Desenvolvimento de Software** (ou Rosa Bueno Desenvolvimento de Software).
> * **Mudança de Mindset na Copy**: Substituiremos termos como "design de elite", "design focado em conversão" e "estúdio digital" por "engenharia de software", "sistemas de missão crítica", "microsserviços", "segurança transacional" e "integração de dados".
> * **Case T&K Jeans Wear**: Implementado com a nova copy rica (headline, cenário detalhado de dor vs solução, 4 pilares comerciais/técnicos e frase de fechamento).
> * **4 Produtos Otimizados**: A seção de serviços exibirá Landing Pages, SaaS, Sites Institucionais e Portfólios com o posicionamento comercial e técnico descrito.

---

## Proposed Changes

### Componente: Regras e Tipos

#### [MODIFY] [Gemini.md](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/Gemini.md)
* Atualizar a seção 3 (Identidade e Estratégia de Negócio) para registrar a marca **Rosa Bueno Desenvolvimento de Software (RBDS)** e o posicionamento focado em software sob medida de missão crítica.

#### [MODIFY] [index.ts](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/types/index.ts)
* Ajustar e expandir o tipo `Case` para suportar os dados estruturados do case de destaque (`headline`, `scenario`, `detailedSections`, `closingQuote`).

---

### Componente: Dados Estáticos (`content.ts`)

#### [MODIFY] [content.ts](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/constants/content.ts)
* **Informações Globais (`BRAND`)**:
  - Alterar o nome para `RBDS — Rosa Bueno Desenvolvimento de Software`.
  - Atualizar headlines e subheadlines com foco em software sob medida para escalar operações e conectar regras de negócio complexas a alta performance.
* **Serviços (`SERVICES`)**:
  - Substituir os serviços antigos pelos 4 produtos otimizados:
    1. **Landing Pages** (Foco: Conversão e Velocidade)
    2. **SaaS — Software as a Service** (Foco: Escala e Multi-Tenancy)
    3. **Sites Institucionais** (Foco: Autoridade e Presença Digital)
    4. **Portfólios** (Foco: Exclusividade e Diferenciação)
  - Descrever os entregáveis técnicos focando em código limpo, arquitetura modular, LGPD, APIs e microsserviços.
* **Case Principal (`CASES`)**:
  - Inserir a nova copy estruturada da **T&K Jeans Wear** detalhando o cenário complexo, o volume de vendas e os 4 pilares de engenharia (SSR & LCP, IA Gemini 1.5 Flash, Experiência Premium e Infraestrutura Serverless Inquebrável).
* **Pilares de Autoridade (`PILLARS`)**:
  - Ajustar o copywriting dos pilares focando em arquitetura SOLID, CI/CD, testes, segurança transacional e engenharia reversa de sistemas legados.

---

### Componente: Componentes Visuais do Site

#### [MODIFY] [Navbar.tsx](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/components/Navbar.tsx)
* Atualizar a logo de texto para exibir **RBDS** / **Rosa Bueno Desenvolvimento de Software**.

#### [MODIFY] [Hero.tsx](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/components/sections/Hero.tsx)
* Adequar textos do Hero para refletir a transição da marca para Desenvolvimento de Software.

#### [MODIFY] [Solutions.tsx](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/components/sections/Solutions.tsx)
* Mudar a exibição de 3 colunas para um grid equilibrado de 4 colunas (`grid md:grid-cols-2 lg:grid-cols-4 gap-6`) para apresentar os 4 serviços produtizados de alta performance.

#### [MODIFY] [CaseStudies.tsx](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/components/sections/CaseStudies.tsx)
* Adaptar o renderizador de cases de sucesso.
* Para cases com dados expandidos (como o da T&K), exibir uma visualização rica:
  - Headline principal.
  - O Cenário (A Dor vs Solução).
  - Um grid de 2 ou 4 cards detalhando os pilares técnicos de engenharia em formato comercial.
  - Bloco de citação de impacto com a Frase de Fechamento.
  - Botão de CTA.

#### [MODIFY] [Footer.tsx](file:///c:/Users/dev.theago/WebstormProjects/projeto-portifolio/src/components/Footer.tsx)
* Atualizar o nome da marca na logo inferior e no copyright para **Rosa Bueno Desenvolvimento de Software (RBDS)**.

---

## Verification Plan

### Manual Verification
* Verificar a correta aplicação do novo copywriting centrado em engenharia e integridade em todas as páginas do site.
* Validar o design responsivo de 4 colunas no grid de soluções.
* Validar a exibição rica e interativa do Case da T&K Jeans Wear no White Mode.
* Certificar-se de que a navegação interna e botões de chamada de ação estão alinhados e funcionais.
