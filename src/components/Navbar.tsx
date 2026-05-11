import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui';
import { scrollTo } from '@/utils/scroll';

const navLinks = [
  { label: 'Soluções', id: 'solucoes' },
  { label: 'Processo', id: 'processo' },
  { label: 'Cases', id: 'cases' },
  { label: 'Pacotes', id: 'pacotes' },
  { label: 'FAQ', id: 'faq' },
];

export default function Navbar({ onSelectIntent }: { onSelectIntent: (intent: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    scrollTo(id);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/90 backdrop-blur-md border-b border-white/[0.06] shadow-xl shadow-black/30'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group" aria-label="Rosa Bueno Studio Tech Home">
          <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-white/10 shadow-brand group-hover:shadow-brand-lg transition-all duration-300">
            <img 
              src="/favicon.jpeg" 
              alt="RB Studio Tech Logo" 
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
            />
          </div>
          <span className="font-bold text-white tracking-tight uppercase text-sm lg:text-base">
            Rosa Bueno <span className="text-brand-400">Studio Tech</span>
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleNav(link.id)}
                className="px-4 py-2 text-sm text-slate-400 hover:text-white rounded-lg hover:bg-white/[0.05] transition-all duration-200"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <Button 
          variant="primary" 
          className="hidden md:inline-flex text-sm py-2.5 px-5"
          onClick={() => onSelectIntent('Consultoria via Navbar')}
        >
          Solicitar Consultoria
        </Button>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.08] transition-all"
          aria-label="Menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-surface-900/95 backdrop-blur-md border-b border-white/[0.06]">
          <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className="px-4 py-3 text-sm text-left text-slate-300 hover:text-white hover:bg-white/[0.05] rounded-lg transition-all"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-3 border-t border-white/[0.06] mt-2">
              <Button 
                variant="primary" 
                className="w-full justify-center text-sm"
                onClick={() => {
                  setMenuOpen(false);
                  onSelectIntent('Consultoria via Mobile Menu');
                }}
              >
                Solicitar Consultoria
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
