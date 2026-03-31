import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Casa de Campo | JL Construção",
  description:
    "Construção em área rural ou de lazer: terreno, acesso, fundações resistentes e casa integrada ao entorno.",
  openGraph: {
    title: "Casa de Campo | JL Construção",
    description:
      "Projetos de casa de campo com atenção a drenagem, materiais e conforto fora da cidade.",
    images: ["/obras/fotos/4.jpeg"],
  },
};

export default function CasaDeCampoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
