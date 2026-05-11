import { useState, useEffect } from 'react';

export default function Preloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    // Garante um tempo mínimo de exibição para impacto de marca
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1800);

    // Remove do DOM após a animação de fade-out
    const removeTimer = setTimeout(() => {
      setShouldRender(false);
    }, 2300);

    return () => {
      clearTimeout(timer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!shouldRender) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-surface-900 transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      style={{
        backgroundImage: `
          radial-gradient(ellipse 80% 50% at 50% -10%, rgba(10, 127, 255, 0.18), transparent),
          radial-gradient(ellipse 40% 30% at 90% 80%, rgba(6, 182, 212, 0.07), transparent)
        `
      }}
    >
      <div className="relative flex items-center justify-center w-32 h-32 animate-zoom-in mb-8">
        <div className="absolute inset-0 bg-brand-500/10 blur-[40px] rounded-full animate-pulse-slow" />
        
        {/* Anéis de energia giratórios (CSS puro) */}
        <div className="absolute inset-0 rounded-full border-t-2 border-brand-500 border-r-2 border-transparent border-b-2 border-transparent border-l-2 border-transparent animate-[spin_1.2s_linear_infinite]" />
        <div className="absolute inset-2 rounded-full border-b-2 border-cyan-400 border-t-2 border-transparent border-r-2 border-transparent border-l-2 border-transparent animate-[spin_1.7s_linear_infinite_reverse]" />
        <div className="absolute inset-4 rounded-full border-l-2 border-violet-500 border-t-2 border-transparent border-r-2 border-transparent border-b-2 border-transparent animate-[spin_2s_linear_infinite]" />
        
        {/* Centro (Logo RB) */}
        <div className="relative w-12 h-12 rounded-full bg-gradient-to-br from-brand-500 to-cyan-500 shadow-[0_0_30px_rgba(10,127,255,0.4)] flex items-center justify-center">
          <span className="font-black text-white text-base tracking-tighter">RB</span>
        </div>
      </div>

      {/* Tagline de Carregamento Sutil */}
      <div className="absolute bottom-12 flex flex-col items-center gap-2">
        <p className="text-slate-400 text-[10px] tracking-[0.3em] uppercase font-light opacity-50">
          Rosa Bueno Studio Tech
        </p>
        <div className="w-12 h-[1px] bg-gradient-to-r from-transparent via-brand-500/50 to-transparent" />
      </div>
    </div>
  );
}
