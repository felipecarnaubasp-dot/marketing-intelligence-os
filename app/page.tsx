"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Brain, BarChart3, Bot, Zap, Shield, CheckCircle2, 
  ArrowRight, Search, Target, Users, Briefcase, 
  Layers, LineChart, Lock, ChevronDown, Star 
} from 'lucide-react';

export default function LandingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Links do WhatsApp com mensagens customizadas para cada plano
  const waLinkStarter = "https://wa.me/5511967585119?text=Olá!%20Gostaria%20de%20ativar%20o%20plano%20Starter%20(Free)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkPro = "https://wa.me/5511967585119?text=Olá!%20Tenho%20interesse%20no%20plano%20Professional%20(R$%20297/mês)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkEnterprise = "https://wa.me/5511967585119?text=Olá!%20Tenho%20interesse%20no%20plano%20Enterprise%20(Sob%20Consulta)%20do%20Marketing%20Intelligence%20OS.";
  const waLinkGeral = "https://wa.me/5511967585119?text=Olá!%20Gostaria%20de%20solicitar%20acesso%20ao%20Marketing%20Intelligence%20OS.";

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 selection:bg-blue-500/30 font-sans overflow-hidden">
      
      {/* BACKGROUND GLOW EFFECTS */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-600/10 blur-[120px]" />
      </div>

      <div className="relative z-10">
        
        {/* NAV */}
        <nav className="flex items-center justify-between px-6 py-6 max-w-7xl mx-auto border-b border-white/5">
          <div className="flex items-center gap-2">
            <Brain className="w-8 h-8 text-blue-500" />
            <span className="font-bold text-xl tracking-tight text-white">Marketing OS</span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-400">
            <Link href="#solucao" className="hover:text-white transition">Solução</Link>
            <Link href="#beneficios" className="hover:text-white transition">Benefícios</Link>
            <Link href="#depoimentos" className="hover:text-white transition">Resultados</Link>
            <Link href="#planos" className="hover:text-white transition">Planos</Link>
          </div>
          <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="px-5 py-2 text-sm font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-full backdrop-blur-md transition">
            Solicitar Acesso
          </Link>
        </nav>

        {/* 1. HERO SECTION */}
        <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse"></span>
            A Nova Era do Marketing B2B
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-8 leading-[1.1]">
            Transforme seu marketing em uma <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              máquina inteligente
            </span> de crescimento.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
            O Marketing Intelligence OS une Inteligência Artificial, dados, automação e estratégia para ajudar empresas a tomar decisões melhores, criar campanhas mais eficientes e acelerar resultados.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-semibold text-lg transition shadow-[0_0_30px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2">
              Começar minha jornada inteligente <ArrowRight className="w-5 h-5" />
            </Link>
            <Link href="#solucao" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-full font-semibold text-lg backdrop-blur-sm transition flex items-center justify-center gap-2">
              Ver como funciona
            </Link>
          </div>

          {/* DASHBOARD MOCKUP */}
          <div className="mt-20 relative mx-auto max-w-5xl">
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c] via-transparent to-transparent z-10 pointer-events-none" />
            <div className="rounded-2xl border border-blue-500/30 bg-slate-950/80 backdrop-blur-2xl p-4 shadow-[0_0_50px_-10px_rgba(37,99,235,0.3)] overflow-hidden ring-1 ring-white/10">
              
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                  <span className="text-xs font-mono text-slate-400 ml-2">marketing-intelligence-os.app/dashboard</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  IA Agents: Ativos (24/7)
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
                  <div className="text-xs text-slate-400 mb-1">ROI das Campanhas</div>
                  <div className="text-2xl font-bold text-white mb-2">+348.5%</div>
                  <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-full w-[85%]"></div>
                  </div>
                  <span className="text-[10px] text-blue-400 mt-2 inline-block">Otimizado por IA há 2 min</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden">
                  <div className="text-xs text-slate-400 mb-1">Leads Qualificados</div>
                  <div className="text-2xl font-bold text-white mb-2">14,820</div>
                  <div className="flex items-center gap-1 text-xs text-emerald-400 font-medium">
                    <span>↑ +28.4% vs mês anterior</span>
                  </div>
                  <span className="text-[10px] text-slate-400 mt-2 inline-block">Segmentação preditiva ativa</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5 relative overflow-hidden flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-400 mb-1">Insights Automáticos</div>
                    <div className="text-sm font-semibold text-white">4 Estratégias geradas</div>
                  </div>
                  <div className="mt-2 text-[11px] bg-blue-500/20 text-blue-300 px-2.5 py-1 rounded border border-blue-500/35 inline-block w-fit">
                    Revisar sugestões →
                  </div>
                </div>
              </div>

              <div className="mt-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-400">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-white">Agente Estrategista em Execução</div>
                    <div className="text-xs text-slate-400">Analisando gargalos de conversão e ajustando lances de anúncios...</div>
                  </div>
                </div>
                <div className="hidden sm:block text-xs font-mono text-purple-400 bg-purple-500/10 px-3 py-1.5 rounded-lg border border-purple-500/20">
                  Status: 100% Autônomo
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 2. A DOR DO MERCADO */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              O problema não é falta de marketing.<br />
              <span className="text-slate-500">É falta de inteligência.</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Você investe em marketing, mas não sabe exatamente o que funciona.",
                points: ["Campanhas sem análise profunda", "Dinheiro desperdiçado", "Decisões baseadas em opinião"]
              },
              {
                title: "Sua equipe perde horas criando estratégias manualmente.",
                points: ["Pesquisas demoradas", "Relatórios manuais", "Criação de conteúdo lenta"]
              },
              {
                title: "Os dados estão espalhados em vários lugares.",
                points: ["Planilhas sem fim", "Ferramentas desconectadas", "Informações perdidas"]
              },
              {
                title: "Sua empresa cresce, mas o marketing não acompanha.",
                points: ["Falta de processos", "Falta de previsibilidade", "Dificuldade de escala"]
              }
            ].map((pain, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-red-500/30 transition-colors group">
                <h3 className="text-xl font-semibold text-white mb-6">{pain.title}</h3>
                <ul className="space-y-3">
                  {pain.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-400">
                      <span className="mt-1 block w-1.5 h-1.5 rounded-full bg-red-500/50 group-hover:bg-red-500 transition-colors" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 3. A SOLUÇÃO */}
        <section id="solucao" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Conheça o sistema operacional inteligente do seu marketing.
            </h2>
            <p className="text-xl text-slate-400">
              O Marketing Intelligence OS transforma informações complexas em decisões estratégicas simples.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "AI Marketing Strategist",
                desc: "Seu estrategista de marketing com inteligência artificial.",
                items: ["Cria planos estratégicos", "Analisa oportunidades", "Identifica gargalos", "Sugere ações"]
              },
              {
                icon: BarChart3,
                title: "Analytics Intelligence",
                desc: "Transforme dados brutos em decisões precisas.",
                items: ["Dashboards inteligentes", "Acompanhamento de KPIs", "Análise de campanhas", "Identificação de padrões"]
              },
              {
                icon: Search,
                title: "AI Content Creator",
                desc: "Crie conteúdos estratégicos e direcionados com IA.",
                items: ["Posts e Artigos", "Anúncios (Ads)", "Roteiros de vídeo", "Calendários editoriais"]
              },
              {
                icon: Zap,
                title: "Campaign Intelligence",
                desc: "Melhore a performance das suas campanhas em tempo real.",
                items: ["Analisa desempenho", "Identifica oportunidades", "Sugere otimizações"]
              },
              {
                icon: Users,
                title: "CRM Intelligence",
                desc: "Centralize e aprofunde o relacionamento com o cliente.",
                items: ["Gestão de leads", "Histórico de clientes", "Mapeamento de oportunidades", "Acompanhamento comercial"]
              },
              {
                icon: Bot,
                title: "AI Marketing Agents",
                desc: "Uma equipe de especialistas trabalhando 24/7 para você.",
                items: ["Agente Estrategista", "Agente Analista", "Agente Criador", "Agente Pesquisador"]
              }
            ].map((module, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 transition-all hover:-translate-y-1 relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <module.icon className="w-24 h-24" />
                </div>
                <module.icon className="w-10 h-10 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold text-white mb-2">{module.title}</h3>
                <p className="text-sm text-slate-400 mb-6">{module.desc}</p>
                <ul className="space-y-2">
                  {module.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-blue-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* 4. COMO FUNCIONA */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Do caos ao crescimento em poucos passos.
            </h2>
          </div>
          
          <div className="relative">
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0" />
            
            <div className="space-y-12">
              {[
                {
                  step: "01",
                  title: "Conecte sua empresa",
                  desc: "Cadastre as informações vitais, integre suas fontes de dados e defina seu cenário atual."
                },
                {
                  step: "02",
                  title: "A IA entende seu negócio",
                  desc: "Nossos algoritmos analisam o mercado, mapeiam seu público, processam dados históricos e alinham seus objetivos."
                },
                {
                  step: "03",
                  title: "Receba inteligência estratégica",
                  desc: "A plataforma gera automaticamente insights acionáveis, recomendações de alto impacto e planos de ação detalhados."
                },
                {
                  step: "04",
                  title: "Execute e acompanhe resultados",
                  desc: "Tenha controle total da operação. Monitore a execução, meça os KPIs e deixe a IA otimizar em tempo real."
                }
              ].map((step, i) => (
                <div key={i} className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${i % 2 !== 0 ? 'text-left' : 'md:text-right'}`}>
                    <span className="text-blue-500 font-mono text-xl font-bold mb-2 block">{step.step}</span>
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-slate-400 text-lg">{step.desc}</p>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-[#0a0f1c] border-2 border-blue-500 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                  </div>
                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. BENEFÍCIOS */}
        <section id="beneficios" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Uma nova forma de administrar marketing.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Mais decisões inteligentes", desc: "Troque intuições e opiniões por dados concretos e precisos." },
              { title: "Menos trabalho manual", desc: "Automatize processos repetitivos e libere tempo para estratégia." },
              { title: "Mais velocidade", desc: "Crie estratégias complexas e campanhas direcionadas em minutos." },
              { title: "Mais controle", desc: "Tenha uma visão 360º e em tempo real de toda a operação de marketing." },
              { title: "Mais escala", desc: "Cresça seu faturamento e impacto sem precisar aumentar a complexidade." }
            ].map((benefit, i) => (
              <div key={i} className={`p-8 rounded-2xl bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 ${i === 4 ? 'lg:col-span-2' : ''}`}>
                <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-3">
                  <CheckCircle2 className="text-purple-400 w-5 h-5" />
                  {benefit.title}
                </h3>
                <p className="text-slate-400">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* DEPOIMENTOS / PROVA SOCIAL */}
        <section id="depoimentos" className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-1 text-yellow-400 mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" />
              ))}
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Amado por líderes de marketing e agências
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Veja como empresas de diferentes portes estão escalando os resultados com inteligência automatizada.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "O Marketing Intelligence OS mudou completamente nossa tomada de decisão. Reduzimos o tempo de relatórios em 80% e aumentamos o ROI das campanhas.",
                author: "Marcos Vinícius",
                role: "CMO na TechGrowth B2B"
              },
              {
                quote: "Gerenciar múltiplas contas de clientes costumava ser um caos de planilhas. Agora temos agentes de IA trabalhando 24/7 identificando padrões.",
                author: "Camila Sampaio",
                role: "Diretora de Operações na Vibe Agência"
              },
              {
                quote: "A clareza dos dashboards e as recomendações automáticas de estratégia nos deram uma previsibilidade de crescimento que nunca tivemos antes.",
                author: "Rafael Mendes",
                role: "Fundador e CEO da ScaleUp SaaS"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-8 rounded-3xl bg-white/[0.02] border border-white/5 flex flex-col justify-between hover:border-blue-500/30 transition">
                <p className="text-slate-300 text-sm leading-relaxed mb-8 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-bold text-white text-base">{testimonial.author}</div>
                  <div className="text-xs text-blue-400 mt-0.5">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. PARA QUEM É */}
        <section className="py-24 px-6 max-w-7xl mx-auto border-t border-white/5">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: "Empresas", desc: "Que precisam estruturar e profissionalizar o marketing." },
              { icon: Target, title: "Gestores", desc: "Que precisam de visão estratégica e controle de KPIs." },
              { icon: Layers, title: "Agências", desc: "Que precisam entregar mais valor e escalar operações." },
              { icon: Zap, title: "Startups", desc: "Que precisam tracionar rápido com recursos otimizados." }
            ].map((target, i) => (
              <div key={i} className="p-8 rounded-2xl bg-white/[0.02] border border-white/5 text-center hover:bg-white/[0.04] transition">
                <target.icon className="w-12 h-12 text-blue-400 mx-auto mb-6" />
                <h3 className="text-xl font-bold text-white mb-3">{target.title}</h3>
                <p className="text-slate-400">{target.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 7. COMPARAÇÃO */}
        <section className="py-24 px-6 max-w-4xl mx-auto border-t border-white/5">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Marketing tradicional vs <span className="text-blue-400">Marketing inteligente</span>
            </h2>
          </div>
          
          <div className="rounded-2xl border border-white/10 overflow-hidden bg-white/[0.02] backdrop-blur-sm">
            <div className="grid grid-cols-2 border-b border-white/10 bg-white/[0.05]">
              <div className="p-6 text-lg font-semibold text-slate-300">Marketing Tradicional</div>
              <div className="p-6 text-lg font-bold text-blue-400 border-l border-white/10">Marketing Intelligence OS</div>
            </div>
            {[
              ["Decisões por opinião", "Decisões por dados"],
              ["Processos manuais", "Automação inteligente"],
              ["Muitas ferramentas desconectadas", "Plataforma integrada (All-in-one)"],
              ["Relatórios demorados", "Insights instantâneos e preditivos"],
              ["Estratégia limitada", "Inteligência contínua 24/7"]
            ].map((row, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-white/5 last:border-0 hover:bg-white/[0.02] transition">
                <div className="p-6 text-slate-400">{row[0]}</div>
                <div className="p-6 font-medium text-white border-l border-white/10 flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-500" /> {row[1]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 8. SEGURANÇA E CONFIANÇA */}
        <section className="py-20 px-6 border-y border-white/5 bg-black/20">
          <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
            <Shield className="w-16 h-16 text-slate-300 mb-6" />
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Construído para empresas que precisam de inteligência, segurança e escala.
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Arquitetura SaaS Premium</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Dados 100% Protegidos</span>
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium">Ambiente Profissional Seguro</span>
            </div>
          </div>
        </section>

        {/* 9. PLANOS (ATUALIZADO COM OS NOVOS VALORES) */}
        <section id="planos" className="py-24 px-6 max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Pronto para escalar?</h2>
            <p className="text-xl text-slate-400">Escolha o plano ideal para estruturar a inteligência do seu marketing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Starter", 
                subtitle: "Para iniciantes e testes",
                price: "Grátis",
                period: "",
                desc: "Ideal para estruturar os primeiros processos e organizar os dados de marketing.", 
                highlight: false,
                link: waLinkStarter,
                features: [
                  "1 usuário na plataforma",
                  "Módulo AI Marketing Strategist básico",
                  "Analytics Intelligence essenciais",
                  "Geração de até 30 conteúdos/mês com IA",
                  "Suporte via comunidade"
                ]
              },
              { 
                name: "Professional", 
                subtitle: "Para equipes de marketing",
                price: "R$ 297",
                period: "/mês",
                desc: "Perfeito para empresas em expansão que exigem automação avançada e escala.", 
                highlight: true,
                link: waLinkPro,
                features: [
                  "Até 10 usuários na plataforma",
                  "Todos os 6 módulos de inteligência inclusos",
                  "Dashboards e KPIs em tempo real",
                  "Geração ilimitada de conteúdos e campanhas",
                  "Equipe completa de Agentes IA (24/7)",
                  "Suporte prioritário dedicado"
                ]
              },
              { 
                name: "Enterprise", 
                subtitle: "Para grandes operações",
                price: "Sob Consulta",
                period: "",
                desc: "Inteligência avançada, máxima segurança e personalização sob medida.", 
                highlight: false,
                link: waLinkEnterprise,
                features: [
                  "Usuários ilimitados",
                  "Arquitetura SaaS dedicada",
                  "APIs e integrações customizadas (CRM e ERP)",
                  "Agentes IA treinados com dados proprietários",
                  "Gerente de conta e Customer Success exclusivo",
                  "SLA de disponibilidade de 99.9%"
                ]
              }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-3xl border flex flex-col justify-between ${plan.highlight ? 'bg-blue-950/20 border-blue-500/50 shadow-[0_0_40px_-10px_rgba(37,99,235,0.3)] relative transform md:-translate-y-4' : 'bg-white/[0.02] border-white/10'}`}>
                {plan.highlight && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 bg-blue-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                    Mais Escolhido
                  </span>
                )}
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">{plan.subtitle}</p>
                  
                  {/* Bloco de Valor */}
                  <div className="mb-6 pb-6 border-b border-white/10 flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                    <span className="text-sm text-slate-400">{plan.period}</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-6 pb-6 border-b border-white/10">{plan.desc}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feat, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10">
                  <Link href={plan.link} target="_blank" rel="noopener noreferrer" className={`w-full block text-center py-3.5 rounded-full font-semibold transition ${plan.highlight ? 'bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]' : 'bg-white/10 hover:bg-white/20 text-white'}`}>
                    Solicitar acesso
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 10. FAQ INTERATIVO */}
        <section className="py-24 px-6 max-w-3xl mx-auto border-t border-white/5">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Perguntas Frequentes</h2>
          <div className="space-y-4">
            {[
              {
                q: "O Marketing Intelligence OS substitui minha equipe?",
                a: "Não. Ele aumenta a capacidade da sua equipe, trazendo inteligência, velocidade e automação para que eles foquem no que importa."
              },
              {
                q: "Preciso entender IA para usar?",
                a: "Não. A plataforma foi criada do zero para simplificar o uso de inteligência artificial em processos de negócios."
              },
              {
                q: "Serve para qualquer empresa?",
                a: "Sim. A estrutura da nossa inteligência adapta-se a diferentes segmentos, tamanhos e objetivos de mercado."
              },
              {
                q: "Posso começar pequeno?",
                a: "Sim. A plataforma cresce de forma escalonável junto com a sua operação e as suas demandas."
              }
            ].map((faq, i) => (
              <div key={i} className="rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden transition">
                <button 
                  onClick={() => toggleFaq(i)}
                  className="w-full p-6 text-left flex items-center justify-between text-white font-semibold focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === i ? 'rotate-180 text-blue-400' : ''}`} />
                </button>
                
                {openFaq === i && (
                  <div className="px-6 pb-6 pt-0 text-slate-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 11. SEÇÃO FINAL */}
        <section className="py-32 px-6 border-t border-white/5 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/10 pointer-events-none" />
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              O futuro do marketing não será manual.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Será inteligente.</span>
            </h2>
            <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
              Comece agora a transformar dados em decisões e decisões em crescimento acelerado.
            </p>
            <Link href={waLinkGeral} target="_blank" rel="noopener noreferrer" className="inline-block px-10 py-5 bg-blue-600 hover:bg-blue-500 text-white rounded-full font-bold text-lg transition shadow-[0_0_40px_-10px_rgba(37,99,235,0.6)]">
              Entrar para o Marketing Intelligence OS
            </Link>
          </div>
        </section>
        
        {/* RODAPÉ CORPORATIVO COMPLETO */}
        <footer className="py-16 px-6 max-w-7xl mx-auto border-t border-white/5 text-slate-500 text-sm">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Brain className="w-6 h-6 text-blue-500" />
                <span className="font-bold text-lg text-white">Marketing OS</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                O sistema operacional inteligente definitivo para comandar todo o ecossistema de marketing da sua empresa através de dados e IA.
              </p>
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Produto</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link href="#solucao" className="hover:text-white transition">Módulos IA</Link></li>
                <li><Link href="#planos" className="hover:text-white transition">Planos e Preços</Link></li>
                <li><Link href="/seguranca" className="hover:text-white transition">Segurança Enterprise</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Empresa</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link href="/sobre" className="hover:text-white transition">Sobre nós</Link></li>
                <li><Link href="/carreiras" className="hover:text-white transition">Carreiras</Link></li>
                <li><Link href="/contato" className="hover:text-white transition">Contato</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-xs uppercase tracking-wider mb-4">Legal</h4>
              <ul className="space-y-2.5 text-xs">
                <li><Link href="/termos" className="hover:text-white transition">Termos de Uso</Link></li>
                <li><Link href="/privacidade" className="hover:text-white transition">Política de Privacidade</Link></li>
                <li><Link href="/cookies" className="hover:text-white transition">Configurações de Cookies</Link></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2026 Marketing Intelligence OS. Todos os direitos reservados.</p>
            <p className="text-slate-400 font-mono">Arquitetura SaaS Enterprise V1.0</p>
          </div>
        </footer>

      </div>
    </div>
  );
}
