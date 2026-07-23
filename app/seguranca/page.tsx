"use client";
import React from 'react';
import Link from 'next/link';
import { Shield, Lock, CheckCircle2, ArrowLeft, Server, Key, EyeOff } from 'lucide-react';

export default function SegurancaPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <div className="flex items-center gap-3 mb-6">
            <Shield className="w-10 h-10 text-blue-500" />
            <h1 className="text-3xl md:text-4xl font-bold text-white">Segurança Enterprise</h1>
          </div>
          <p className="text-slate-400 leading-relaxed mb-8">
            O Marketing Intelligence OS foi arquitetado desde a sua concepção para atender aos mais rigorosos padrões globais de segurança da informação, conformidade de dados e proteção corporativa para ambientes de alto desempenho.
          </p>

          <div className="space-y-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Lock className="w-5 h-5 text-blue-400" /> Criptografia de Ponta a Ponta
              </h3>
              <p className="text-sm text-slate-400">
                Todos os dados em trânsito são rigorosamente protegidos via protocolo TLS 1.3. Os dados em repouso nos bancos de dados utilizam o padrão corporativo de criptografia AES-256.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Server className="w-5 h-5 text-blue-400" /> Isolamento de Ambientes (Multi-Tenant Seguro)
              </h3>
              <p className="text-sm text-slate-400">
                Cada organização opera em instâncias de dados isoladas e controladas por políticas estritas de acesso, garantindo total sigilo comercial e separação de ativos estratégicos.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5">
              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <EyeOff className="w-5 h-5 text-blue-400" /> Privacidade de Modelos e IA
              </h3>
              <p className="text-sm text-slate-400">
                Garantimos que os dados e insights gerados pela sua empresa através dos nossos Agentes de IA jamais são utilizados para o treinamento público de modelos de terceiros.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
