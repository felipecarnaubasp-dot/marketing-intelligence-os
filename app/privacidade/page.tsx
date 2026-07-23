"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <h1 className="text-3xl font-bold text-white mb-6">Política de Privacidade</h1>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
            <p>A sua privacidade é prioridade máxima. Coletamos apenas os dados essenciais para o funcionamento dos módulos de inteligência, garantindo total conformidade com a LGPD (Lei Geral de Proteção de Dados).</p>
            <h3 className="text-white font-bold text-base pt-4">1. Coleta de Dados</h3>
            <p>Coletamos informações cadastrais fornecidas diretamente por você no momento da contratação e dados operacionais de uso dos dashboards para otimização de performance.</p>
            <h3 className="text-white font-bold text-base pt-4">2. Compartilhamento</h3>
            <p>Seus dados comerciais e estratégicos nunca são comercializados ou compartilhados com terceiros sob nenhuma hipótese.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
