import React from "react";
import Link from "next/link";

export default function Projetos() {
 const projetos = [
  {
    titulo: "Residência Moderna",
    tipo: "Construção",
    imagem: "🏠",
    link: "/projetos/residencia-moderna/"
  },
  {
    titulo: "Reforma Comercial",
    tipo: "Reforma",
    imagem: "🏢",
    link: "/projetos/reforma-comercial/"
  },
  {
    titulo: "Edifício Empresarial",
    tipo: "Construção",
    imagem: "🏛️",
    link: "/projetos/edificio-empresarial/"
  },
  {
    titulo: "Casa de Campo",
    tipo: "Construção",
    imagem: "🏡",
    link: "/projetos/casa-de-campo/"
  }
];

  return (
    <section id="projetos" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
          Projetos Realizados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projetos.map((projeto, index) => (
            <Link
              key={index}
              href={projeto.link}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition">
                <div className="h-48 bg-linear-to-br from-blue-500 to-slate-700 flex items-center justify-center text-7xl">
                  {projeto.imagem}
                </div>

                <div className="p-4">
                  <h3 className="font-bold text-lg text-slate-900 group-hover:text-blue-600 transition">
                    {projeto.titulo}
                  </h3>
                  <p className="text-blue-600">{projeto.tipo}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
