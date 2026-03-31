"use client";

import ProjetoObraPage from "@/components/ProjetoObraPage";
import { midiasObrasCompletas } from "@/data/obras-midias";

export default function ReformaComercialPage() {
  return (
    <ProjetoObraPage
      accent="blue"
      categoria="Projetos • Reforma Comercial"
      titulo="Reformas comerciais que valorizam seu negócio"
      subtitulo="Planejamento, execução e acabamento de alto padrão para espaços comerciais modernos, funcionais e duráveis."
      heroImage="/obras/fotos/1.jpeg"
      heroImageAlt="Ambiente comercial em reforma"
      breadcrumbLabel="Reforma Comercial"
      galeriaTitulo="Projetos executados"
      galeriaDescricao="Exemplos de reformas comerciais com foco em eficiência, estética e segurança estrutural."
      slideImageAlt="Projeto de reforma comercial"
      midias={midiasObrasCompletas}
    />
  );
}
