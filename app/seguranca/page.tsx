"use client";
import React from 'react';
import Link from 'next/link';
import { Shield, Lock, CheckCircle2, ArrowLeft } from 'lucide-react';
export default function SegurancaPage() {
  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans p-6 md:p-12">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 text-sm mb-8 transition">
          <ArrowLeft className="w-4 h-4" /> Voltar para a Página Principal
        </Link>
        <div className="p-8 md:p-12 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl">
          <Shield className="w-12 h-12 text-blue-500 mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">Segurança Enterprise</h1>
          <p className="text-slate-400 leading-relaxed mb-6">
            O Marketing Intelligence OS foi arquitetado desde o primeiro dia para atender aos mais rigorosos padrões globais de segurança da informação, conformidade de dados e proteção corporativa.
          </p>
          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <p className="text-sm text-slate-300"><strong>Criptografia de Ponta a Ponta:</strong> Todos os dados em trânsito são protegidos via TLS 1.3 e os dados em repouso utilizam criptografia AES-256.</p>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
              <p className="text-sm text-slate-300"><strong>Isolamento de Ambientes:</strong> Cada organização opera em camadas de banco de dados isoladas, garantindo total sigilo comercial.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
