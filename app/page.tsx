"use client";
import React from 'react';
import Link from 'next/link';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050b14] text-gray-100 font-sans selection:bg-[#00FF66] selection:text-black relative overflow-x-hidden">
      
      {/* Efeito de Luz de Fundo Global */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#00FF66]/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>

      {/* ========================================== */}
      {/* HEADER / NAVEGAÇÃO                         */}
      {/* ========================================== */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050b14]/90 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#00FF66] to-emerald-600 flex items-center justify-center shadow-lg shadow-[#00FF66]/20">
              <span className="text-black font-black text-xl tracking-tighter">M</span>
            </div>
            <span className="text-xl md:text-2xl font-extrabold tracking-tight text-white">
              MARKETING<span className="text-[#00FF66]">OS</span>
            </span>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-300">
            <Link href="#dor" className="hover:text-[#00FF66] transition">O Problema</Link>
            <Link href="#solucao" className="hover:text-[#00FF66] transition">A Solução</Link>
            <Link href="#funcionalidades" className="hover:text-[#00FF66] transition">Recursos</Link>
            <Link href="#planos" className="hover:text-[#00FF66] transition">Planos</Link>
          </nav>
          <Link href="#planos" className="bg-[#00FF66] text-black font-bold px-5 py-2.5 rounded-xl hover:bg-emerald-400 transition shadow-lg shadow-[#00FF66]/10 text-sm">
            Otimizar Catálogo
          </Link>
        </div>
      </header>

      {/* HERO SECTION (VISUAL PREMIUM) */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 mb-6 leading-tight drop-shadow-sm">
            Seu catálogo está cheio de <br />
            <span className="text-[#00FF66] bg-none drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]">oportunidades perdidas</span>.
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            Milhares de produtos ficam parados porque possuem títulos fracos, descrições incompletas, imagens ruins e informações que não ajudam o cliente a comprar.<br /><br />
            O <strong className="text-white font-bold">MarketingOS</strong> transforma seu catálogo desorganizado em anúncios profissionais, otimizados e prontos para vender em múltiplos marketplaces usando Inteligência Artificial.
          </p>
          
          {/* Autoridade */}
          <div className="mb-10 max-w-3xl mx-auto">
            <p className="text-xs md:text-sm text-emerald-400 font-medium bg-emerald-950/40 border border-emerald-800/30 py-3 px-6 rounded-full backdrop-blur-sm inline-block shadow-[0_0_20px_rgba(16,185,129,0.1)]">
              (Engenharia de ponta a ponta: Arquiteto de Software Sênior, IA Generativa e Especialista Multi-Tenant focados na conversão do seu SaaS V1.0)
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mb-14">
            <Link href="#planos" className="w-full sm:w-auto bg-[#00FF66] text-black font-extrabold px-10 py-4 rounded-2xl text-lg hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_30px_rgba(0,255,102,0.3)]">
              Transformar meu catálogo agora
            </Link>
            <Link href="#como-funciona" className="w-full sm:w-auto bg-white/5 border border-white/10 text-white font-bold px-10 py-4 rounded-2xl text-lg hover:bg-white/10 hover:border-white/20 backdrop-blur-md transition-all duration-300">
              Ver como funciona
            </Link>
          </div>

          {/* Prova de Valor */}
          <div className="inline-flex flex-col items-center justify-center space-y-3 bg-white/5 border border-white/5 px-8 py-4 rounded-3xl backdrop-blur-sm">
            <div className="flex gap-1 text-[#00FF66] text-xl drop-shadow-md">
              <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
            </div>
            <p className="text-sm text-gray-300 font-medium italic">&quot;De um catálogo desorganizado para produtos preparados para competir nos maiores marketplaces.&quot;</p>
          </div>
        </div>
      </section>

      {/* SEÇÃO 2 — A DOR (GLASSMORPHISM CARDS) */}
      <section id="dor" className="py-24 relative border-t border-white/5 bg-gradient-to-b from-transparent to-[#0a1324]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">O problema não é ter muitos produtos.<br /><span className="text-gray-400">É não conseguir vender todos eles.</span></h2>
            <p className="text-gray-400 text-lg">Hoje vendedores possuem centenas ou milhares de SKUs, mas enfrentam gargalos que travam as vendas.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">👻</div>
              <h3 className="text-xl font-bold text-white mb-3">Produtos invisíveis</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Títulos genéricos fazem seus produtos desaparecerem nas buscas.</p>
            </div>
            <div className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🤷</div>
              <h3 className="text-xl font-bold text-white mb-3">Descrições que não convencem</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Informações incompletas deixam clientes inseguros e reduzem conversões.</p>
            </div>
            <div className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">🖼️</div>
              <h3 className="text-xl font-bold text-white mb-3">Imagens que não valorizam</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Fotos amadoras diminuem a percepção de valor do produto.</p>
            </div>
            <div className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-500">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">📁</div>
              <h3 className="text-xl font-bold text-white mb-3">Dados desorganizados</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Planilhas espalhadas dificultam escalar a operação.</p>
            </div>
            <div className="group bg-white/[0.02] border border-white/5 p-8 rounded-3xl hover:border-[#00FF66]/30 hover:bg-white/[0.04] transition-all duration-500 lg:col-span-2 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">⏳</div>
              <h3 className="text-xl font-bold text-white mb-3">Publicação manual interminável</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Cada marketplace exige tempo, ajustes e atenção redobrada, consumindo a energia da sua equipe.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 3 — O CUSTO INVISÍVEL (CONTRASTE ALTO) */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white">Cada produto mal cadastrado representa <span className="text-red-500 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">dinheiro parado</span>.</h2>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* A perda */}
            <div className="flex-1 bg-red-950/10 border border-red-900/30 p-10 rounded-[2rem] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 blur-[50px]"></div>
              <h3 className="text-2xl font-bold text-red-400 mb-8 flex items-center gap-3">
                <span className="bg-red-500/20 p-2 rounded-lg">🔻</span> Enquanto você perde horas:
              </h3>
              <ul className="space-y-5 text-gray-300 font-medium">
                <li className="flex items-center gap-4"><span className="text-red-500">❌</span> corrigindo planilhas;</li>
                <li className="flex items-center gap-4"><span className="text-red-500">❌</span> criando títulos;</li>
                <li className="flex items-center gap-4"><span className="text-red-500">❌</span> preenchendo informações;</li>
                <li className="flex items-center gap-4"><span className="text-red-500">❌</span> ajustando anúncios;</li>
              </ul>
            </div>
            
            {/* A concorrência */}
            <div className="flex-1 bg-[#00FF66]/5 border border-[#00FF66]/20 p-10 rounded-[2rem] relative overflow-hidden shadow-[0_0_30px_rgba(0,255,102,0.05)]">
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#00FF66]/10 blur-[50px]"></div>
              <h3 className="text-2xl font-bold text-[#00FF66] mb-8 flex items-center gap-3">
                <span className="bg-[#00FF66]/10 p-2 rounded-lg">🚀</span> Seus concorrentes estão:
              </h3>
              <ul className="space-y-5 text-gray-300 font-medium">
                <li className="flex items-center gap-4"><span className="text-[#00FF66]">✅</span> aparecendo melhor nas buscas;</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66]">✅</span> convertendo mais;</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66]">✅</span> escalando seus catálogos.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 4 — A SOLUÇÃO */}
      <section id="solucao" className="py-32 relative border-t border-white/5 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#0a1324]/50 via-[#050b14] to-[#050b14]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-6">Conheça seu novo especialista em <span className="text-[#00FF66]">catálogo inteligente</span>.</h2>
          <p className="text-xl text-gray-400 mb-20 font-light">Uma inteligência artificial criada para transformar grandes catálogos em anúncios profissionais preparados para vender.</p>
          
          <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8">
            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] w-full lg:w-1/3 shadow-2xl backdrop-blur-md">
              <div className="w-16 h-16 bg-blue-500/10 border border-blue-500/20 rounded-2xl mx-auto flex items-center justify-center text-4xl mb-6 shadow-[0_0_20px_rgba(59,130,246,0.2)]">📂</div>
              <h3 className="text-2xl font-bold text-white mb-3">Você envia:</h3>
              <p className="text-gray-400 font-medium text-lg">Seu catálogo em Excel</p>
            </div>
            
            <div className="text-white/20 text-4xl rotate-90 lg:rotate-0 my-4 lg:my-0 font-light">➔</div>
            
            <div className="bg-gradient-to-br from-[#0a1324] to-[#0d182b] border border-[#00FF66]/30 p-10 rounded-[2rem] w-full lg:w-1/3 shadow-[0_0_40px_rgba(0,255,102,0.1)] relative transform lg:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#00FF66] text-black text-sm font-black px-5 py-2 rounded-full uppercase tracking-wider shadow-[0_0_15px_rgba(0,255,102,0.5)]">
                A IA Analisa
              </div>
              <ul className="text-left space-y-4 text-gray-300 font-medium mt-6">
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">🔍</span> Produtos</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">🔍</span> Categorias</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">🔍</span> Informações técnicas</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">🔍</span> Mercado</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">🔍</span> Palavras-chave</li>
              </ul>
            </div>

            <div className="text-white/20 text-4xl rotate-90 lg:rotate-0 my-4 lg:my-0 font-light">➔</div>

            <div className="bg-white/[0.03] border border-white/10 p-10 rounded-[2rem] w-full lg:w-1/3 shadow-2xl backdrop-blur-md">
              <div className="w-16 h-16 bg-emerald-500/10 border border-emerald-500/20 rounded-2xl mx-auto flex items-center justify-center text-4xl mb-6 shadow-[0_0_20px_rgba(16,185,129,0.2)]">✅</div>
              <h3 className="text-2xl font-bold text-white mb-6">Você recebe:</h3>
              <ul className="text-left space-y-3 text-gray-300 text-sm font-medium">
                <li className="flex items-center gap-3">🚀 Produtos organizados</li>
                <li className="flex items-center gap-3">🚀 Anúncios otimizados</li>
                <li className="flex items-center gap-3">🚀 Conteúdo profissional</li>
                <li className="flex items-center gap-3">🚀 Dados completos</li>
                <li className="mt-4 p-3 bg-[#00FF66]/10 rounded-xl border border-[#00FF66]/20">
                  🚀 <span className="font-bold text-[#00FF66]">Produto Publicado com sucesso</span><br />
                  <span className="text-xs text-gray-400 mt-1 block">(Direto no Mercado Livre, Shopee, etc.)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 5 — COMO FUNCIONA (STEPS PREMIUM) */}
      <section id="como-funciona" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white">4 passos para transformar seu catálogo</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/10 relative pt-12 hover:bg-white/[0.04] transition-colors">
              <span className="absolute -top-6 left-8 w-14 h-14 bg-[#050b14] text-white font-black rounded-2xl flex items-center justify-center text-xl border border-white/20 shadow-xl">01</span>
              <h3 className="text-xl font-bold text-white mb-3">Envie seu catálogo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Importe sua planilha com centenas ou milhares de produtos.</p>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/10 relative pt-12 hover:bg-white/[0.04] transition-colors">
              <span className="absolute -top-6 left-8 w-14 h-14 bg-[#050b14] text-white font-black rounded-2xl flex items-center justify-center text-xl border border-white/20 shadow-xl">02</span>
              <h3 className="text-xl font-bold text-white mb-3">A IA organiza tudo</h3>
              <p className="text-gray-400 text-sm leading-relaxed">A plataforma identifica informações importantes e corrige inconsistências.</p>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-[#00FF66]/40 relative pt-12 bg-[#00FF66]/[0.02] shadow-[0_0_30px_rgba(0,255,102,0.05)]">
              <span className="absolute -top-6 left-8 w-14 h-14 bg-[#00FF66] text-black font-black rounded-2xl flex items-center justify-center text-xl shadow-[0_0_20px_rgba(0,255,102,0.4)]">03</span>
              <h3 className="text-xl font-bold text-white mb-3">Seus anúncios são reconstruídos</h3>
              <p className="text-gray-400 text-sm mb-4">A IA cria:</p>
              <ul className="text-sm text-gray-300 space-y-2 font-medium">
                <li className="flex items-center gap-2 text-[#00FF66]"><span className="text-white">✓</span> Títulos estratégicos</li>
                <li className="flex items-center gap-2 text-[#00FF66]"><span className="text-white">✓</span> Descrições persuasivas</li>
                <li className="flex items-center gap-2 text-[#00FF66]"><span className="text-white">✓</span> Palavras-chave</li>
                <li className="flex items-center gap-2 text-[#00FF66]"><span className="text-white">✓</span> Informações obrigatórias</li>
                <li className="flex items-center gap-2 text-[#00FF66]"><span className="text-white">✓</span> Conteúdo otimizado</li>
              </ul>
            </div>
            <div className="bg-white/[0.02] p-8 rounded-3xl border border-white/10 relative pt-12 hover:bg-white/[0.04] transition-colors">
              <span className="absolute -top-6 left-8 w-14 h-14 bg-[#050b14] text-white font-black rounded-2xl flex items-center justify-center text-xl border border-white/20 shadow-xl">04</span>
              <h3 className="text-xl font-bold text-white mb-3">Publicação Automática</h3>
              <p className="text-gray-400 text-sm leading-relaxed">Após todos os processos anteriores, o SaaS cria o produto do zero e publica automaticamente dentro das plataformas de cada marketplace. Tudo no automático.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 6 — FUNCIONALIDADES */}
      <section id="funcionalidades" className="py-24 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white">Tudo que sua operação precisa em um único sistema.</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-10 rounded-3xl border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all">IA Copywriter de Produtos</h3>
              <p className="text-gray-300 text-base mb-5">Transforme informações básicas em anúncios que despertam interesse. Gera:</p>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>títulos;</li>
                <li>descrições;</li>
                <li>benefícios;</li>
                <li>argumentos de venda.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-10 rounded-3xl border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all">SEO MarketingOS</h3>
              <p className="text-gray-300 text-base mb-5">Seus produtos encontrados pelas pessoas certas. A IA identifica:</p>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>palavras-chave;</li>
                <li>termos de busca;</li>
                <li>oportunidades de posicionamento.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-10 rounded-3xl border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all">Compliance Inteligente</h3>
              <p className="text-gray-300 text-base mb-5">Reduza riscos de problemas nos marketplaces. Identifica:</p>
              <ul className="text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>informações faltantes;</li>
                <li>campos obrigatórios;</li>
                <li>possíveis erros.</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-10 rounded-3xl border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group md:col-span-1 lg:col-span-2">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all">Imagens Premium com IA</h3>
              <p className="text-gray-300 text-base mb-4 max-w-lg">Transforme imagens simples em apresentações profissionais. Melhore: <span className="font-bold text-white">aparência; contexto; percepção de valor.</span></p>
            </div>
            <div className="bg-gradient-to-br from-white/[0.04] to-transparent p-10 rounded-3xl border border-white/10 hover:border-[#00FF66]/50 transition-all duration-300 group">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-4 group-hover:drop-shadow-[0_0_10px_rgba(0,255,102,0.5)] transition-all">Exportação Inteligente</h3>
              <p className="text-gray-300 text-base">Catálogo estruturado e pronto para publicação imediata.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 7 — ANTES VS DEPOIS */}
      <section className="py-24 relative border-t border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-white/[0.02] border border-white/5 p-10 rounded-[2.5rem] relative overflow-hidden backdrop-blur-sm">
              <div className="absolute inset-0 bg-red-500/5 -z-10"></div>
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">Antes do MarketingOS</h3>
              <ul className="space-y-5 text-gray-400 font-medium text-lg">
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Horas cadastrando produtos</li>
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Equipes grandes para tarefas repetitivas</li>
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Títulos sem estratégia</li>
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Descrições copiadas</li>
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Produtos difíceis de encontrar</li>
                <li className="flex items-center gap-4"><span className="text-red-500 bg-red-500/10 p-1.5 rounded-md">❌</span> Catálogo parado</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#00FF66]/10 to-transparent border border-[#00FF66]/30 p-10 rounded-[2.5rem] relative overflow-hidden shadow-[0_0_50px_rgba(0,255,102,0.1)] backdrop-blur-sm transform md:-translate-y-4">
              <h3 className="text-2xl font-bold text-[#00FF66] mb-8 border-b border-[#00FF66]/20 pb-4 drop-shadow-[0_0_8px_rgba(0,255,102,0.4)]">Depois do MarketingOS</h3>
              <ul className="space-y-5 text-white font-bold text-lg">
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Catálogo organizado</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Produtos otimizados</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Anúncios profissionais</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Mais velocidade operacional</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Melhor posicionamento</li>
                <li className="flex items-center gap-4"><span className="text-[#00FF66] bg-[#00FF66]/20 p-1.5 rounded-md">✅</span> Pronto para escalar</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 8 — PARA QUEM É */}
      <section className="py-24 relative border-t border-white/5 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#0a1324]/40 via-[#050b14] to-[#050b14]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16">Criado para operações que precisam crescer.</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-5">🛒</div>
              <h3 className="text-lg font-bold text-white mb-2">Lojistas Marketplace</h3>
              <p className="text-sm text-gray-400">Tenha milhares de produtos preparados sem aumentar sua equipe.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-5">📦</div>
              <h3 className="text-lg font-bold text-white mb-2">Distribuidores</h3>
              <p className="text-sm text-gray-400">Transforme grandes catálogos em oportunidades de venda.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-5">🏭</div>
              <h3 className="text-lg font-bold text-white mb-2">Indústrias</h3>
              <p className="text-sm text-gray-400">Digitalize seus produtos com qualidade profissional.</p>
            </div>
            <div className="p-8 border border-white/10 rounded-3xl bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
              <div className="w-16 h-16 mx-auto bg-white/5 rounded-2xl flex items-center justify-center text-3xl mb-5">📈</div>
              <h3 className="text-lg font-bold text-white mb-2">Agências Ecommerce</h3>
              <p className="text-sm text-gray-400">Escalone o cadastro dos seus clientes rapidamente.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO 9 — PLANOS (PRICING PREMIUM) */}
      <section id="planos" className="py-32 relative border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Comece pequeno. <span className="text-[#00FF66]">Escale quando precisar.</span></h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
            <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-8">Para vendedores iniciando a automação.</p>
              <div className="text-4xl font-black text-white mb-8">R$ 47,90<span className="text-lg text-gray-500 font-normal">/mês</span></div>
              <ul className="space-y-4 text-sm text-gray-300 mb-10 font-medium">
                <li className="flex items-center gap-3"><span className="text-white">✓</span> Até 100 SKUs/mês</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> Títulos IA</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> Descrições IA</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> Palavras-chave</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> Exportação otimizada</li>
              </ul>
              <Link href="https://www.marketingos.shop" className="block w-full text-center border border-white/20 text-white font-bold py-4 rounded-2xl hover:bg-white/10 transition-colors">Assinar Starter</Link>
            </div>
            
            <div className="bg-gradient-to-b from-[#0a1324] to-[#0d1a2e] border-2 border-[#00FF66] p-12 rounded-[2.5rem] relative transform md:scale-105 shadow-[0_0_50px_rgba(0,255,102,0.15)] z-10">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#00FF66] text-black text-sm font-black uppercase px-6 py-2 rounded-full shadow-[0_0_20px_rgba(0,255,102,0.5)]">
                🔥 Mais escolhido
              </div>
              <h3 className="text-3xl font-bold text-white mb-2">Professional</h3>
              <p className="text-gray-400 text-sm mb-8">Para operações que querem crescer.</p>
              <div className="text-6xl font-black text-[#00FF66] mb-8 drop-shadow-[0_0_10px_rgba(0,255,102,0.3)]">R$ 297<span className="text-xl text-gray-500 font-normal">/mês</span></div>
              <ul className="space-y-4 text-base text-gray-200 mb-10 font-semibold">
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">✓</span> Até 1.000 SKUs/mês</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">✓</span> Todos recursos Starter</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">✓</span> Imagens premium</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">✓</span> Compliance inteligente</li>
                <li className="flex items-center gap-3"><span className="text-[#00FF66]">✓</span> Processamento avançado</li>
              </ul>
              <Link href="https://www.marketingos.shop" className="block w-full text-center bg-[#00FF66] text-black font-extrabold py-5 rounded-2xl hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(0,255,102,0.4)] hover:shadow-[0_0_30px_rgba(0,255,102,0.6)]">Assinar Professional</Link>
            </div>
            
            <div className="bg-white/[0.02] border border-white/10 p-10 rounded-[2.5rem] backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-8">Para grandes catálogos e indústrias.</p>
              <div className="text-4xl font-black text-white mb-8">Personalizado</div>
              <ul className="space-y-4 text-sm text-gray-300 mb-10 font-medium">
                <li className="flex items-center gap-3"><span className="text-white">✓</span> milhares de SKUs</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> operação personalizada</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> suporte dedicado</li>
                <li className="flex items-center gap-3"><span className="text-white">✓</span> integrações</li>
              </ul>
              <Link href="https://www.marketingos.shop" className="block w-full text-center border border-white/20 text-white font-bold py-4 rounded-2xl hover:bg-white/10 transition-colors">Fale com especialistas</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO FINAL CTA (ALTO IMPACTO) */}
      <section className="py-32 relative border-t border-white/5 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-[#00FF66]/10 via-[#050b14] to-[#050b14] -z-10"></div>
        
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
            Seu catálogo já existe.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF66] to-emerald-400 drop-shadow-[0_0_15px_rgba(0,255,102,0.3)]">Agora transforme ele em uma máquina de vendas.</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12 font-light">Pare de perder tempo cadastrando produtos manualmente. Deixe a inteligência artificial preparar seus anúncios enquanto você foca no crescimento da sua operação.</p>
          <Link href="https://www.marketingos.shop" className="inline-block bg-[#00FF66] text-black font-black px-12 py-6 rounded-2xl text-xl hover:bg-emerald-400 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(0,255,102,0.3)]">
            Quero otimizar meu catálogo agora
          </Link>
        </div>
      </section>

      {/* ========================================== */}
      {/* FOOTER                                     */}
      {/* ========================================== */}
      <footer className="py-12 bg-[#050b14] border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-6">
          <h4 className="text-white font-bold text-lg mb-2">MarketingOS.shop</h4>
          <p className="text-gray-500 text-sm">O cérebro inteligente por trás dos maiores catálogos de ecommerce.</p>
          <p className="text-gray-600 text-xs mt-8">&copy; 2026 MarketingOS. Todos os direitos reservados.</p>
        </div>
      </footer>

    </div>
  );
}
