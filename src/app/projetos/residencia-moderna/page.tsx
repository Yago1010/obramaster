"use client";

import ProjetoObraPage from "@/components/ProjetoObraPage";
import { midiasObrasCompletas } from "@/data/obras-midias";

export default function ResidenciaModernaPage() {
  return (
    <ProjetoObraPage
      accent="emerald"
      categoria="Projetos • Construção residencial"
      titulo="Residência moderna do projeto à entrega"
      subtitulo="Obra alinhada à planta, com estrutura segura, instalações eficientes e acabamento que reflete o seu estilo de viver."
      heroImage="/obras/fotos/2.jpeg"
      heroImageAlt="Fachada e ambiente de residência moderna"
      breadcrumbLabel="Residência Moderna"
      galeriaTitulo="Registros da obra"
      galeriaDescricao="Momentos de execução, detalhes estruturais e acabamentos em projetos residenciais."
      slideImageAlt="Etapa de construção ou acabamento residencial"
      midias={midiasObrasCompletas}
      pilares={[
        {
          titulo: "Planejamento integrado",
          texto:
            "Alinhamos prazos, fornecedores e etapas para reduzir retrabalho e manter a obra dentro do que foi combinado.",
        },
        {
          titulo: "Estrutura e instalações",
          texto:
            "Fundações, alvenaria, esquadrias e instalações elétricas e hidráulicas com atenção às normas e ao conforto.",
        },
        {
          titulo: "Acabamento sob medida",
          texto:
            "Revestimentos, pintura, iluminação e marcenaria executados com capricho para um resultado durável e elegante.",
        },
      ]}
    />
  );
}
