"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare, PhoneCall } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <MessageSquare className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Central de Atendimento</h1>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            Precisa de suporte técnico especializado, deseja tirar dúvidas sobre implantação ou falar com o nosso setor comercial? Estamos prontos para atender sua empresa.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 w-fit mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">E-mail Corporativo</h3>
                <p className="text-xs text-slate-400 mb-4">Para propostas, parcerias e solicitações oficiais.</p>
              </div>
              <a href="mailto:suporte@marketingos.shop" className="text-sm font-mono text-blue-400 hover:underline">
                suporte@marketingos.shop
              </a>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col justify-between">
              <div>
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-400 w-fit mb-4">
                  <PhoneCall className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-1">WhatsApp Comercial</h3>
                <p className="text-xs text-slate-400 mb-4">Atendimento rápido para dúvidas e ativações.</p>
              </div>
              <a href="https://wa.me/5511967585119" target="_blank" rel="noopener noreferrer" className="text-sm font-mono text-emerald-400 hover:underline">
                (11) 96758-5119
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
