"use client";

import ProjetoObraPage from "@/components/ProjetoObraPage";
import { midiasObrasCompletas } from "@/data/obras-midias";

export default function EdificioEmpresarialPage() {
  return (
    <ProjetoObraPage
      accent="amber"
      categoria="Projetos • Construção empresarial"
      titulo="Edifícios e espaços corporativos com rigor de obra"
      subtitulo="Da estrutura à fachada e acabamentos internos, com foco em prazo, normas técnicas e operação segura do canteiro."
      heroImage="/obras/fotos/3.jpeg"
      heroImageAlt="Fachada ou interior de edifício empresarial"
      breadcrumbLabel="Edifício Empresarial"
      galeriaTitulo="Obras e reformas corporativas"
      galeriaDescricao="Registros de execução em ambientes de maior porte: estrutura, instalações e entrega alinhada ao uso empresarial."
      slideImageAlt="Obra ou reforma em edifício empresarial"
      midias={midiasObrasCompletas}
      pilares={[
        {
          titulo: "Cronograma e interfaces",
          texto:
            "Coordenamos fornecedores, projetos complementares e liberações para evitar gargalos entre estrutura, fachada e interior.",
        },
        {
          titulo: "Segurança e normas",
          texto:
            "Trabalho em altura, sinalização e procedimentos alinhados às exigências de obra vertical e uso coletivo.",
        },
        {
          titulo: "Entrega por fases",
          texto:
            "Quando o cliente precisa ocupar parte do prédio antes do término total, planejamos entregas parciais organizadas.",
        },
      ]}
    />
  );
}
