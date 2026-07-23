"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, MessageSquare, PhoneCall, Send, CheckCircle2 } from 'lucide-react';

export default function ContatoPage() {
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setEnviado(true);
  };

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Central de Atendimento e Solicitação</h1>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            Preencha os dados abaixo para solicitar acesso antecipado à plataforma ou falar diretamente com nossa equipe de especialistas corporativos.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* FORMULÁRIO DE CAPTAÇÃO DE LEADS (2 colunas) */}
            <div className="md:col-span-2">
              {enviado ? (
                <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 text-center">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-2">Solicitação Recebida!</h3>
                  <p className="text-sm text-slate-300">
                    Nossa equipe analisará o seu perfil e entrará em contato em breve via WhatsApp ou e-mail.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Nome Completo</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ex: Carlos Silva" 
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">E-mail Corporativo</label>
                      <input 
                        type="email" 
                        required 
                        placeholder="carlos@suaempresa.com" 
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">WhatsApp</label>
                      <input 
                        type="tel" 
                        required 
                        placeholder="(11) 99999-9999" 
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">Nome da Empresa</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Ex: Growth Marketing Ltda" 
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm focus:outline-none focus:border-blue-500 transition"
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)] flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" /> Solicitar Análise de Acesso
                  </button>
                </form>
              )}
            </div>

            {/* COLUNA LATERAL DE APOIO (WhatsApp) */}
            <div className="flex flex-col justify-between p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <div>
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">Atendimento Direto</h3>
                <p className="text-xs text-slate-400 mb-6">Prefere falar agora mesmo com um consultor especialista?</p>
              </div>

              <div>
                <span className="block text-xs text-slate-400 font-mono mb-2">WhatsApp Comercial:</span>
                <a 
                  href="https://wa.me/5511967585119?text=Olá!%20Gostaria%20de%20falar%20com%20o%20suporte%20do%20Marketing%20Intelligence%20OS." 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-sm font-bold text-emerald-400 hover:underline block"
                >
                  (11) 96758-5119
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
