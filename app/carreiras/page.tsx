"use client";
import React from 'react';
import Link from 'next/link';
import { Briefcase, ArrowLeft, Send } from 'lucide-react';

export default function CarreirasPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Carreiras no Marketing OS</h1>
          </div>
          <p className="text-slate-400 leading-relaxed mb-6">
            Estamos em constante expansão e sempre buscamos mentes brilhantes apaixonadas por engenharia de software de alta performance, inteligência artificial generativa e arquitetura de dados escalável.
          </p>

          <div className="p-6 rounded-2xl bg-blue-950/20 border border-blue-500/30 mb-8">
            <h3 className="text-xl font-bold text-white mb-2">Banco de Talentos Aberto</h3>
            <p className="text-sm text-slate-300 mb-4">
              Ainda que não tenhamos vagas abertas no momento para o seu perfil exato, adoramos conhecer profissionais fora da curva. Envie seu currículo e portfólio para nossa equipe de recrutamento:
            </p>
            <a href="mailto:carreiras@marketingos.shop" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition">
              <Send className="w-4 h-4" /> Enviar Currículo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
