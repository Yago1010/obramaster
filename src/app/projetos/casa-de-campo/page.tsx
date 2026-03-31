"use client";

import ProjetoObraPage from "@/components/ProjetoObraPage";
import { midiasObrasCompletas } from "@/data/obras-midias";

export default function CasaDeCampoPage() {
  return (
    <ProjetoObraPage
      accent="lime"
      categoria="Projetos • Construção casa de campo"
      titulo="Casa de campo pensada para o terreno e o clima"
      subtitulo="Obra que respeita acesso, drenagem e ventilação natural, com materiais adequados para uso contínuo ou fim de semana."
      heroImage="/obras/fotos/4.jpeg"
      heroImageAlt="Casa de campo em construção ou concluída"
      breadcrumbLabel="Casa de Campo"
      galeriaTitulo="Galeria do projeto"
      galeriaDescricao="Etapas de obra e detalhes em propriedades de lazer ou interior, sempre com a mesma seriedade técnica."
      slideImageAlt="Obra ou ambiente de casa de campo"
      midias={midiasObrasCompletas}
      pilares={[
        {
          titulo: "Terreno e acesso",
          texto:
            "Avaliamos declive, estradas de chegada e logística de materiais para evitar surpresas no meio da obra.",
        },
        {
          titulo: "Fundações e umidade",
          texto:
            "Impermeabilização, drenagem pluvial e soluções estruturais compatíveis com solo e exposição ao tempo.",
        },
        {
          titulo: "Conforto e entorno",
          texto:
            "Aberturas, pé-direito e áreas externas pensadas para integrar a casa à paisagem e ao uso em família.",
        },
      ]}
    />
  );
}
