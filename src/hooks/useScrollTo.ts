import { useCallback } from 'react';

/**
 * Hook customizado para rolagem suave até um elemento.
 * Centraliza a lógica de scroll e permite o uso em componentes funcionais de forma limpa.
 */
export const useScrollTo = () => {
  const scrollTo = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      console.warn(`Element with id "${id}" not found.`);
    }
  }, []);

  return scrollTo;
};

export default useScrollTo;
