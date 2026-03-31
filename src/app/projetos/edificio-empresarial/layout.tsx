import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Edifício Empresarial | JL Construção",
  description:
    "Obras corporativas e edificações comerciais: cronograma, interfaces técnicas e segurança em obra vertical.",
  openGraph: {
    title: "Edifício Empresarial | JL Construção",
    description:
      "Construção e ampliação de espaços empresariais com logística de canteiro e entrega por fases.",
    images: ["/obras/fotos/3.jpeg"],
  },
};

export default function EdificioEmpresarialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
