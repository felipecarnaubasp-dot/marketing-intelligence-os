"use client";
import React from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <h1 className="text-3xl font-bold text-white mb-6">Configurações de Cookies</h1>
          <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
            <p>Utilizamos cookies e tecnologias similares para otimizar sua experiência de navegação e garantir a segurança das sessões autenticadas na plataforma.</p>
            <h3 className="text-white font-bold text-base pt-4">Tipos de Cookies Utilizados:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Essenciais:</strong> Necessários para o funcionamento básico e segurança da plataforma.</li>
              <li><strong>Desempenho:</strong> Coletam métricas anônimas sobre como os usuários interagem com os recursos do sistema.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
