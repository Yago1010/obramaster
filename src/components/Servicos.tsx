import React from 'react'
import { servicos } from '@/data/servicos'

export default function Servicos() {
  return (
    <section id="servicos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Nossos Serviços
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicos.map((servico, index) => (
            <div key={index} className="bg-slate-50 p-6 rounded-lg shadow-md hover:shadow-xl transition">
              <div className="text-5xl mb-4">{servico.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-900">{servico.titulo}</h3>
              <p className="text-gray-600">{servico.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

