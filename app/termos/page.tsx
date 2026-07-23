"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Termos de Uso</h1>
          <p className="text-slate-400 leading-relaxed text-sm mb-4">
            Estes Termos de Uso regulam o acesso e a utilização da plataforma Marketing Intelligence OS. Ao utilizar nossos serviços, você concorda integralmente com as diretrizes estabelecidas.
          </p>
        </div>
      </div>
    </div>
  );
}
