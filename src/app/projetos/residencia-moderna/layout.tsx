import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residência Moderna | JL Construção",
  description:
    "Construção residencial de alto padrão: planta, estrutura, instalações e acabamentos sob medida.",
  openGraph: {
    title: "Residência Moderna | JL Construção",
    description:
      "Casas modernas com planejamento integrado e execução criteriosa do projeto à entrega.",
    images: ["/obras/fotos/2.jpeg"],
  },
};

export default function ResidenciaModernaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
