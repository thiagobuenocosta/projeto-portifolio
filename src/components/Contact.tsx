import { useState, useEffect } from 'react';
import { Send, ArrowRight, CheckCircle, MessageCircle, Loader2 } from 'lucide-react';
import { Section, Button, FormField } from '@/components/ui';

export default function Contact({ selectedIntent }: { selectedIntent?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    problem: '',
    cost: '',
    budget: '',
  });

  useEffect(() => {
    if (selectedIntent) {
      setForm(prev => ({
        ...prev,
        problem: `Gostaria de solicitar um diagnóstico para o pacote: ${selectedIntent}.`
      }));
    }
  }, [selectedIntent]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      // Nota: ID do Formspree configurado
      const response = await fetch('https://formspree.io/f/xkoyqqjz', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (_error) {
      setStatus('error');
    }
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Olá! Vim através do site e gostaria de um diagnóstico.\n\nNome: ${form.name || 'Não informado'}\nEmpresa: ${form.company || 'Não informada'}\nInteresse: ${selectedIntent || 'Geral'}`
    );
    window.open(`https://wa.me/556299645389?text=${message}`, '_blank');
  };

  if (status === 'success') {
    return (
      <Section id="contato">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500 to-cyan-500" />
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">Mensagem Recebida! 🚀</h2>
            <p className="text-slate-400 mb-2">
              Obrigado, <strong className="text-white">{form.name}</strong>!
            </p>
            <p className="text-slate-400 leading-relaxed">
              Nossa equipe analisou centenas de projetos similares. Entraremos em contato em <strong className="text-white">até 24h úteis</strong> com um diagnóstico inicial e próximos passos estratégicos.
            </p>
            <Button 
              variant="secondary" 
              className="mt-8"
              onClick={() => setStatus('idle')}
            >
              Enviar outra mensagem
            </Button>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section 
      id="contato"
      background={
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-brand-600/10 rounded-full blur-[120px]" />
      }
    >
      <div className="grid lg:grid-cols-2 gap-16 items-start">
        <div>
          <p className="section-label mb-4">Solicitar Consultoria</p>
          <h2 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Pronto para transformar{' '}
            <span className="gradient-text-brand">gargalos em crescimento?</span>
          </h2>
          <p className="text-lg text-slate-400 leading-relaxed mb-8">
            Preencha o formulário com detalhes do seu projeto. Quanto mais contexto você der, mais objetivo e útil será o retorno — sem "vou fazer um orçamento" genérico.
          </p>

          <div className="space-y-4 mb-10">
            {[
              { icon: '⚡', text: 'Resposta em até 24h úteis' },
              { icon: '🎯', text: 'Diagnóstico inicial sem custo' },
              { icon: '🔒', text: 'Suas informações são sigilosas' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm text-slate-400">
                <span>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          <div className="relative p-8 rounded-3xl bg-gradient-to-br from-[#25D366]/10 via-transparent to-brand-600/5 border border-[#25D366]/20 overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#25D366]/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-[#25D366]/20 transition-all duration-500" />
            
            <div className="relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-[#25D366] flex items-center justify-center text-white shadow-lg shadow-[#25D366]/20 animate-pulse-slow">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <p className="text-lg font-black text-white">Contato Imediato</p>
                  <p className="text-xs text-[#25D366] font-bold uppercase tracking-wider">Resposta em até 15 min</p>
                </div>
              </div>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Se você tem pressa e quer falar diretamente com um Tech Lead agora, o WhatsApp é o caminho mais rápido.
              </p>

              <button 
                onClick={handleWhatsApp}
                className="flex items-center justify-center gap-3 w-full py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#25D366]/20"
              >
                Falar no WhatsApp Agora
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-4">
                Ocorreu um erro ao enviar. Por favor, tente novamente ou use o WhatsApp.
              </div>
            )}

            <div className="grid sm:grid-cols-2 gap-4">
              <FormField
                id="name"
                label="Seu nome *"
                type="text"
                placeholder="João Silva"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <FormField
                id="email"
                label="E-mail *"
                type="email"
                placeholder="joao@empresa.com"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>

            <FormField
              id="company"
              label="Empresa / Projeto"
              type="text"
              placeholder="Nome da sua empresa ou projeto"
              value={form.company}
              onChange={(v) => setForm({ ...form, company: v })}
            />

            <div>
              <label htmlFor="problem" className="block text-xs font-semibold text-slate-400 mb-1.5">
                Qual o principal problema que você quer resolver? *
              </label>
              <textarea
                id="problem"
                rows={3}
                placeholder="Ex: Meu site demora mais de 5s, minhas campanhas geram cliques mas não geram contatos..."
                value={form.problem}
                onChange={(e) => setForm({ ...form, problem: e.target.value })}
                required
                className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 transition-all resize-none"
              />
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cost" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Custo de NÃO resolver (mensal)
                </label>
                <select
                  id="cost"
                  value={form.cost}
                  onChange={(e) => setForm({ ...form, cost: e.target.value })}
                  className="w-full bg-surface-800 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="ate-5k">Até R$ 5k/mês</option>
                  <option value="5k-20k">R$ 5k – R$ 20k/mês</option>
                  <option value="20k-50k">R$ 20k – R$ 50k/mês</option>
                  <option value="acima-50k">Acima de R$ 50k/mês</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-xs font-semibold text-slate-400 mb-1.5">
                  Investimento disponível
                </label>
                <select
                  id="budget"
                  value={form.budget}
                  onChange={(e) => setForm({ ...form, budget: e.target.value })}
                  className="w-full bg-surface-800 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 transition-all"
                >
                  <option value="">Selecione...</option>
                  <option value="ate-2k">Até R$ 2k</option>
                  <option value="2k-7k">R$ 2k – R$ 7k</option>
                  <option value="7k-15k">R$ 7k – R$ 15k</option>
                  <option value="acima-15k">Acima de R$ 15k</option>
                </select>
              </div>
            </div>

            <Button
              type="submit"
              disabled={status === 'loading'}
              icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
              className="w-full justify-center"
            >
              {status === 'loading' ? 'Enviando...' : 'Enviar e Solicitar Diagnóstico'}
              {status !== 'loading' && <ArrowRight className="w-4 h-4" />}
            </Button>

            <div className="relative py-2">
              <div className="absolute inset-0 flex items-center" aria-hidden="true">
                <div className="w-full border-t border-white/[0.06]"></div>
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-surface-900 px-2 text-slate-500 font-mono">Ou se preferir</span>
              </div>
            </div>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-[#25D366]/30 text-[#25D366] text-sm font-bold hover:bg-[#25D366]/10 transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-[#25D366]" />
              Conversar via WhatsApp
            </button>

            <p className="text-xs text-slate-600 text-center">
              Ao enviar, você concorda que suas informações sejam usadas para retorno de contato.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}
