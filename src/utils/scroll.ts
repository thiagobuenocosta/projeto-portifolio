/**
 * Rola suavemente até o elemento com o ID fornecido.
 * Substitui as 6+ chamadas inline de `scrollIntoView` espalhadas pelo projeto.
 */
export const scrollTo = (id: string): void => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};
