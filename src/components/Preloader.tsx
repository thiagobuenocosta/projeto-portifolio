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
      <div className="relative w-full max-w-4xl flex items-center justify-center px-6">
        {/* Glow Effect ao fundo do vídeo - mais largo para acompanhar */}
        <div className="absolute inset-0 bg-brand-500/10 blur-[120px] rounded-full animate-pulse" />
        
        <div className="relative w-full rounded-[20px] overflow-hidden border border-white/5 shadow-2xl bg-black/20">
          <video
            src="/loader.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain mix-blend-screen animate-zoom-in"
          />
          
          {/* Sombra gradiente interna (Vinheta) - Usando a cor de fundo surface-900 para fusão perfeita */}
          <div className="absolute inset-0 pointer-events-none rounded-[20px] shadow-[inset_0_0_100px_rgba(6,12,24,0.9)] bg-[radial-gradient(circle,transparent_40%,rgba(6,12,24,0.6)_100%)]" />
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
