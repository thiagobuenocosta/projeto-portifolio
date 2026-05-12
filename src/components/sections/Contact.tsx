import { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle, MessageCircle, Loader2, AlertCircle, Mail, Zap, ShieldCheck } from 'lucide-react';
import { Section, Button, FormField, Modal } from '@/components/ui';

export default function Contact({ selectedIntent }: { selectedIntent?: string }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<'validation' | 'selection'>('selection');
  const [modalMessage, setModalMessage] = useState({ title: '', text: '' });
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

  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    setStatus('loading');

    try {
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
    const text = `*NOVO PEDIDO DE DIAGNÓSTICO*

*Cliente:* ${form.name || 'Não informado'}
*E-mail:* ${form.email || 'Não informado'}
*Empresa:* ${form.company || 'Não informada'}

*Interesse:* ${selectedIntent || 'Geral'}

*Problema:* 
"${form.problem || 'Não informado'}"

*Custo de não resolver:* ${form.cost || 'Não informado'}
*Investimento disponível:* ${form.budget || 'Não informado'}

---
_Enviado via Rosa Bueno Studio Tech_`;

    const message = encodeURIComponent(text);
    window.open(`https://wa.me/5562996495389?text=${message}`, '_blank');
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
              Nossa equipe analisou seus dados. Entraremos em contato em <strong className="text-white">até 24h úteis</strong> com um diagnóstico inicial estratégico.
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

          <div className="space-y-4">
            {[
              { icon: '⚡', text: 'Análise técnica em até 24h úteis' },
              { icon: '🎯', text: 'Diagnóstico inicial estratégico' },
              { icon: '🔒', text: 'Privacidade e sigilo garantidos' },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-3 text-sm text-slate-400">
                <span className="text-brand-400">{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card p-8">
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              if (!form.name || !form.email) {
                const field = !form.name ? 'Seu nome' : 'E-mail';
                setModalMessage({
                  title: 'Dados Incompletos',
                  text: `Por favor, preencha o campo "${field}" antes de prosseguir.`
                });
                setModalType('validation');
                setShowModal(true);
                return;
              }
              setModalType('selection');
              setShowModal(true);
            }} 
            className="space-y-5"
          >
            {status === 'error' && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm mb-4">
                Erro ao processar. Tente novamente ou use o WhatsApp direto.
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
                placeholder="Ex: Meu site demora mais de 5s, minhas campanhas geram cliques..."
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
                  className="w-full bg-surface-800 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-600 transition-all"
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
                  className="w-full bg-surface-800 border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-300 focus:outline-none focus:border-brand-600 transition-all"
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
              icon={status === 'loading' ? <Loader2 className="w-4 h-4 animate-spin" /> : null}
              className="w-full justify-center mt-4 py-4 text-base"
            >
              {status === 'loading' ? 'Processando...' : 'Solicitar Diagnóstico & Consultoria'}
              {status !== 'loading' && <ArrowRight className="w-4 h-4 ml-2" />}
            </Button>

            <p className="text-[10px] text-slate-600 text-center uppercase tracking-widest font-mono pt-2">
              Engenharia de Elite para Negócios Modernos
            </p>
          </form>
        </div>
      </div>

      <Modal 
        isOpen={showModal} 
        onClose={() => setShowModal(false)} 
        title={modalType === 'validation' ? 'Dados Incompletos' : 'Escolha como prosseguir'}
      >
        {modalType === 'validation' ? (
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-red-500" />
            </div>
            <p className="text-slate-300">{modalMessage.text}</p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-slate-400 text-sm mb-6">
              Como você prefere receber seu diagnóstico e iniciar nossa consultoria?
            </p>

            <button
              onClick={() => {
                setShowModal(false);
                handleWhatsApp();
              }}
              className="w-full p-4 rounded-2xl bg-gradient-to-br from-[#25D366]/20 to-transparent border border-[#25D366]/30 hover:border-[#25D366]/60 transition-all group text-left relative overflow-hidden"
            >
              <div className="flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shadow-lg shadow-[#25D366]/20">
                  <MessageCircle className="w-6 h-6 text-white fill-white" />
                </div>
                <div>
                  <p className="text-white font-bold">WhatsApp (Prioridade)</p>
                  <p className="text-xs text-[#25D366] font-medium uppercase tracking-wider">Resposta em minutos</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-500 uppercase tracking-widest font-mono">
                <Zap className="w-3 h-3" /> Contato imediato com Tech Lead
              </div>
            </button>

            <button
              onClick={() => {
                setShowModal(false);
                handleSubmit();
              }}
              className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-brand-500/50 transition-all group text-left"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-surface-800 border border-white/10 flex items-center justify-center group-hover:border-brand-500 transition-colors">
                  <Mail className="w-6 h-6 text-slate-400 group-hover:text-brand-400" />
                </div>
                <div>
                  <p className="text-white font-bold group-hover:text-brand-400 transition-colors">E-mail (Formal)</p>
                  <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Diagnóstico em até 24h</p>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[10px] text-slate-600 uppercase tracking-widest font-mono">
                <ShieldCheck className="w-3 h-3" /> Processo qualificado e detalhado
              </div>
            </button>

            <p className="text-[10px] text-slate-600 text-center pt-2">
              Ambos os canais garantem análise técnica da nossa equipe.
            </p>
          </div>
        )}
      </Modal>
    </Section>
  );
}
