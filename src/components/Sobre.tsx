import React from 'react'

export default function Sobre() {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-slate-900">
            Sobre Nós
          </h2>
          <p className="text-lg text-gray-700 mb-6">
Com mais de 45 anos de protagonismo na construção civil, a Jl Construção combina tradição e inovação para entregar muito mais do que obras: entregamos confiança. Nossa trajetória é pautada pela transparência absoluta e pelo rigor técnico em cada detalhe, do planejamento ao acabamento.

Unimos uma equipe multidisciplinar de engenheiros e arquitetos a processos modernos e materiais de alto padrão. Na Jl Construção, sua visão ganha forma com a precisão de quem domina o mercado e o compromisso de quem cumpre prazos à risca.          </p>
          <p className="text-lg text-gray-700 mb-6">
            Contamos com uma equipe altamente qualificada de engenheiros, arquitetos e profissionais especializados, utilizando materiais de primeira qualidade e as melhores práticas do mercado.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Projetos Concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">45+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-600">Clientes Satisfeitos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}