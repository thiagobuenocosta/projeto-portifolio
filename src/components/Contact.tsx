import { useState } from 'react';
import { Send, ArrowRight, CheckCircle } from 'lucide-react';
import { Section } from './ui/Section';
import { Button } from './ui/Button';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    problem: '',
    cost: '',
    budget: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => setSubmitted(true), 600);
  };

  if (submitted) {
    return (
      <Section id="contato">
        <div className="max-w-2xl mx-auto text-center">
          <div className="glass-card p-12">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-6" />
            <h2 className="text-3xl font-black text-white mb-4">Mensagem Recebida! 🚀</h2>
            <p className="text-slate-400 mb-2">
              Obrigado, <strong className="text-white">{form.name}</strong>!
            </p>
            <p className="text-slate-400 leading-relaxed">
              Analisei centenas de projetos similares. Entrarei em contato em <strong className="text-white">até 24h úteis</strong> com um diagnóstico inicial e próximos passos.
            </p>
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
        </div>

        <div className="glass-card p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-4">
              <Field
                id="name"
                label="Seu nome *"
                type="text"
                placeholder="João Silva"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                required
              />
              <Field
                id="email"
                label="E-mail *"
                type="email"
                placeholder="joao@empresa.com"
                value={form.email}
                onChange={(v) => setForm({ ...form, email: v })}
                required
              />
            </div>

            <Field
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
              icon={<Send className="w-4 h-4" />}
              className="w-full justify-center"
            >
              Enviar e Solicitar Diagnóstico
              <ArrowRight className="w-4 h-4" />
            </Button>

            <p className="text-xs text-slate-600 text-center">
              Ao enviar, você concorda que suas informações sejam usadas para retorno de contato.
            </p>
          </form>
        </div>
      </div>
    </Section>
  );
}

function Field({
  id, label, type, placeholder, value, onChange, required,
}: {
  id: string; label: string; type: string; placeholder: string;
  value: string; onChange: (v: string) => void; required?: boolean
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-xs font-semibold text-slate-400 mb-1.5">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required={required}
        className="w-full bg-white/[0.04] border border-white/[0.09] rounded-xl px-4 py-3 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-brand-600 focus:ring-1 focus:ring-brand-600/30 transition-all"
      />
    </div>
  );
}
