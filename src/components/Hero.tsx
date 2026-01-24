import React from 'react'

export default function Hero() {
  return (
    <section id="inicio" className="bg-linear-to-br from-slate-900 via-blue-900 to-slate-900 text-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Construindo o Futuro, Reformando Sonhos
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Há mais de 45 anos, unimos tradição e inovação para dar vida a espaços que inspiram.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contato" className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-center transition">
              Solicitar Orçamento
            </a>
            <a href="#projetos" className="bg-white hover:bg-gray-100 text-slate-900 px-8 py-3 rounded-lg font-semibold text-center transition">
              Ver Projetos
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}