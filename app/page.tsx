"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Brain, BarChart3, Bot, Zap, Shield, CheckCircle2, 
  ArrowRight, Search, Target, Users, Briefcase, 
  Layers, ChevronDown, Star, Check, PlayCircle
} from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);

  // Efeito para mudar o estilo da navbar ao rolar a página
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Links do WhatsApp
  const waLinkStarter = "https://wa.me/5511967585119?text=Olá!%20Gostaria%20de%20ativar%20o%20plano%20Starter%20(Free)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkPro = "https://wa.me/5511967585119?text=Olá!%20Tenho%20interesse%20no%20plano%20Professional%20(R$%20297/mês)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkEnterprise = "https://wa.me/5511967585119?text=Olá!%20Tenho%20interesse%20no%20plano%20Enterprise%20(Sob%20Consulta)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkGeral = "https://wa.me/5511967585119?text=Olá!%20Gostaria%20de%20solicitar%20uma%20demonstração%20do%20Marketing%20Intelligence%20OS.";

  return (
    <div className="min-h-screen bg-[#050505] text-slate-300 font-sans selection:bg-blue-500/30 overflow-x-hidden">
      
      {/* GLOW DE FUNDO */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-900/20 blur-[150px] pointer-events-none z-0" />
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-900/10 blur-[150px] pointer-events-none z-0" />

      {/* NAVBAR FLUTUANTE */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#050505]/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'}`}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center">
              <Brain className="w-5 h-5 text-white" />
            </div>
            <span className="font-extrabold text-xl tracking-tight text-white">Marketing OS</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <Link href="#solucao" className="text-slate-400 hover:text-white transition">Como Funciona</Link>
            <Link href="#beneficios" className="text-slate-400 hover:text-white transition">Vantagens</Link>
            <Link href="#planos" className="text-slate-400 hover:text-white transition">Preços</Link>
          </div>

          <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 text-sm font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-lg transition-all duration-200">
            Agendar Demo
          </Link>
        </nav>
      </header>

      <main className="relative z-10 pt-32">
        
        {/* 1. HERO SECTION */}
        <section className="px-6 max-w-5xl mx-auto text-center pt-16 pb-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            O Sistema Operacional para seu Crescimento
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.05]">
            Automação, Leads e Escala.<br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">
              Tudo em um só lugar.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            Pare de usar dezenas de ferramentas desconectadas. O Marketing OS analisa seus dados, gerencia seus leads e automatiza suas campanhas em tempo real usando Inteligência Artificial.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-base transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.4)] flex items-center justify-center gap-2">
              Começar Agora <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#solucao" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-lg font-bold text-base transition-all flex items-center justify-center gap-2">
              <PlayCircle className="w-5 h-5 text-slate-400" /> Ver Plataforma
            </Link>
          </div>

          <div className="mt-12 text-sm text-slate-500 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-slate-800" />
              ))}
            </div>
            <span className="ml-2">Usado por +100 operações de marketing.</span>
          </div>
        </section>

        {/* MOCKUP DA PLATAFORMA (Visual Clean) */}
        <section className="px-6 max-w-6xl mx-auto mb-32">
          <div className="rounded-2xl border border-white/10 bg-[#0A0A0A] p-2 shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none rounded-2xl" />
            <div className="rounded-xl border border-white/5 bg-[#111] overflow-hidden">
              {/* Header do Mockup */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#161616]">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto bg-black/50 border border-white/5 rounded-md px-24 py-1 text-xs text-slate-500 hidden md:block">
                  app.marketingos.com/dashboard
                </div>
              </div>
              {/* Corpo do Mockup */}
              <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-5 rounded-xl border border-white/5 bg-black/40">
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-semibold">Leads Capturados</div>
                  <div className="text-3xl font-bold text-white">4,821</div>
                  <div className="text-emerald-400 text-xs mt-2 font-medium flex items-center gap-1">
                    ↑ 12.5% nesta semana
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-white/5 bg-black/40">
                  <div className="text-xs text-slate-400 mb-2 uppercase tracking-wider font-semibold">Custo por Lead (CPL)</div>
                  <div className="text-3xl font-bold text-white">R$ 4,12</div>
                  <div className="text-emerald-400 text-xs mt-2 font-medium flex items-center gap-1">
                    ↓ Otimizado pela IA
                  </div>
                </div>
                <div className="p-5 rounded-xl border border-blue-500/20 bg-blue-500/5 relative overflow-hidden">
                  <div className="text-xs text-blue-400 mb-2 uppercase tracking-wider font-semibold">Status do Agente IA</div>
                  <div className="text-lg font-bold text-white">Otimizando Campanhas</div>
                  <div className="mt-4 h-1.5 w-full bg-blue-950 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-2/3 animate-pulse" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. RECURSOS (THE SOLUTION) */}
        <section id="solucao" className="py-24 px-6 bg-[#0A0A0A] border-y border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Tudo o que você precisa para escalar, <span className="text-blue-500">em uma aba.</span>
              </h2>
              <p className="text-slate-400 text-lg">
                Substitua softwares confusos por um sistema unificado. Da captação de leads à geração de conteúdo, nós cobrimos toda a jornada.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  title: "AI Marketing Strategist",
                  desc: "Deixe nossa IA analisar seus dados e sugerir os melhores planos de ação e orçamentos para suas campanhas."
                },
                {
                  icon: MessageSquare,
                  title: "Inbox Unificada",
                  desc: "WhatsApp, Instagram, E-mail e Leads do site caindo em um único painel. Não perca mais nenhuma venda."
                },
                {
                  icon: Zap,
                  title: "Automação de Follow-up",
                  desc: "Crie sequências automáticas de mensagens e e-mails para nutrir e fechar leads enquanto você dorme."
                },
                {
                  icon: Bot,
                  title: "Agentes Autônomos",
                  desc: "Configure robôs inteligentes para qualificar seus clientes antes mesmo deles falarem com um humano."
                },
                {
                  icon: Search,
                  title: "Gerador de Conteúdo",
                  desc: "Crie posts, anúncios e e-mails persuasivos instantaneamente usando a voz e a identidade da sua marca."
                },
                {
                  icon: BarChart3,
                  title: "Dashboards de ROI",
                  desc: "Saiba exatamente qual anúncio ou canal trouxe o cliente. Atribuição de vendas cristalina."
                }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-2xl bg-[#111] border border-white/5 hover:border-blue-500/30 transition-all group">
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. PROVA SOCIAL */}
        <section id="depoimentos" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />)}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Resultados que falam por si</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                text: "Unificamos 5 ferramentas em apenas uma. O Marketing OS reduziu nosso custo de software em 60% e aumentou nossa taxa de resposta a leads em 3x.",
                author: "Marcos Vinícius",
                role: "Fundador da Agência Scale"
              },
              {
                text: "A automação de follow-up mudou o jogo. Nossos vendedores agora só falam com quem já passou pela qualificação da IA. ROI absurdo no primeiro mês.",
                author: "Camila Silva",
                role: "Diretora Comercial B2B"
              },
              {
                text: "Os dashboards são cristalinos. Pela primeira vez na vida consigo ver exatamente de qual campanha veio o faturamento do dia.",
                author: "Rafael Mendes",
                role: "CEO de E-commerce"
              }
            ].map((dep, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#111] border border-white/5 flex flex-col justify-between">
                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">"{dep.text}"</p>
                <div>
                  <div className="font-bold text-white">{dep.author}</div>
                  <div className="text-xs text-blue-400 mt-1">{dep.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 4. PREÇOS (PRICING) */}
        <section id="planos" className="py-24 px-6 bg-[#0A0A0A] border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">Planos simples e transparentes</h2>
              <p className="text-lg text-slate-400">Pague pelo que usar. Escale conforme cresce.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  name: "Starter", 
                  price: "Grátis",
                  desc: "Perfeito para dar os primeiros passos e testar a plataforma.",
                  link: waLinkStarter,
                  features: ["1 Usuário", "CRM Básico", "Inbox Centralizada", "30 Conteúdos de IA/mês"]
                },
                { 
                  name: "Professional", 
                  price: "R$ 297",
                  period: "/mês",
                  desc: "Para negócios prontos para automatizar e escalar leads.",
                  highlight: true,
                  link: waLinkPro,
                  features: ["Até 10 Usuários", "Automações Avançadas", "Dashboards de ROI", "Conteúdo IA Ilimitado", "Agentes Autônomos (24/7)"]
                },
                { 
                  name: "Enterprise", 
                  price: "Sob Consulta",
                  desc: "Infraestrutura dedicada e integrações sob medida.",
                  link: waLinkEnterprise,
                  features: ["Usuários Ilimitados", "API e Webhooks", "Agentes IA Treinados", "SLA de 99.9%", "Gerente de Sucesso"]
                }
              ].map((plan, i) => (
                <div key={i} className={`rounded-3xl p-8 flex flex-col border ${plan.highlight ? 'bg-blue-900/10 border-blue-500 shadow-[0_0_30px_rgba(37,99,235,0.15)] relative scale-105 z-10' : 'bg-[#111] border-white/10'}`}>
                  {plan.highlight && (
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-blue-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest">
                      Recomendado
                    </div>
                  )}
                  
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-sm text-slate-400 mb-6 min-h-[40px]">{plan.desc}</p>
                  
                  <div className="mb-8 pb-8 border-b border-white/10 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    {plan.period && <span className="text-sm text-slate-400 mb-1">{plan.period}</span>}
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-center gap-3 text-sm text-slate-300">
                        <Check className="w-5 h-5 text-blue-500 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <Link href={plan.link} target="_blank" rel="noopener noreferrer" className={`w-full py-3.5 rounded-lg font-bold text-center transition-all ${plan.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white' : 'bg-white/5 hover:bg-white/10 text-white border border-white/10'}`}>
                    Começar
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA FINAL */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-blue-900/20 opacity-50 blur-[100px] pointer-events-none" />
          <div className="max-w-3xl mx-auto text-center relative z-10 p-12 rounded-3xl border border-blue-500/20 bg-blue-950/10 backdrop-blur-sm">
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Pronto para dominar seu mercado?</h2>
            <p className="text-lg text-blue-200 mb-8">
              Junte-se às empresas que já substituíram o caos operacional por crescimento previsível.
            </p>
            <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-bold text-lg transition-all shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)]">
              Falar com um Especialista <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Brain className="w-6 h-6 text-blue-500" />
              <span className="font-bold text-lg text-white">Marketing OS</span>
            </div>
            <p className="text-sm text-slate-500">O sistema operacional completo para serviços, agências e B2B.</p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Produto</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="#solucao" className="hover:text-white transition">Funcionalidades</Link></li>
              <li><Link href="#planos" className="hover:text-white transition">Preços</Link></li>
              <li><Link href="/seguranca" className="hover:text-white transition">Segurança</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Empresa</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/sobre" className="hover:text-white transition">Sobre nós</Link></li>
              <li><Link href="/carreiras" className="hover:text-white transition">Carreiras</Link></li>
              <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><Link href="/termos" className="hover:text-white transition">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-white transition">Privacidade</Link></li>
              <li><Link href="/cookies" className="hover:text-white transition">Cookies</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <p>© 2026 Marketing OS. Todos os direitos reservados.</p>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-500" /> Sistemas Operacionais Normais
          </div>
        </div>
      </footer>
    </div>
  );
}
