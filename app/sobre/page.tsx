"use client";
import React from 'react';
import Link from 'next/link';
import { Brain, ArrowLeft, Target, Lightbulb, Users } from 'lucide-react';

export default function SobrePage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Sobre o Marketing OS</h1>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            Nascemos com uma missão clara: eliminar o achismo do ecossistema de marketing corporativo. Unimos inteligência artificial de última geração, engenharia de dados em tempo real e automação avançada para transformar departamentos inteiros em verdadeiras máquinas previsíveis de crescimento.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <Target className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Visão</h3>
              <p className="text-xs text-slate-400">Ser o sistema operacional padrão de inteligência para empresas líderes de mercado em todo o mundo.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <Lightbulb className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Inovação</h3>
              <p className="text-xs text-slate-400">Desenvolvimento contínuo de Agentes autônomos que operam 24/7 em favor da sua conversão.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <Users className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Parceria</h3>
              <p className="text-xs text-slate-400">Comprometimento absoluto com o sucesso financeiro e operacional de nossos clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
