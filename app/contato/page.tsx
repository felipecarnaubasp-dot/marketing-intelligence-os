"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Mail, MessageSquare } from 'lucide-react';

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <MessageSquare className="w-12 h-12 text-blue-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Central de Contato</h1>
          <p className="text-slate-400 leading-relaxed mb-6">
            Precisa falar com nossa equipe comercial ou de suporte técnico especializado? Entre em contato diretamente através do e-mail corporativo:
          </p>
          <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-300 font-mono text-sm inline-flex items-center gap-2">
            <Mail className="w-4 h-4" /> suporte@marketingos.shop
          </div>
        </div>
      </div>
    </div>
  );
}
