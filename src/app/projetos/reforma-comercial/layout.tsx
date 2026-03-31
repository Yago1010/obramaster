import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reforma Comercial | JL Construção",
  description:
    "Projetos de reforma comercial com alto padrão de acabamento, eficiência e design profissional.",
  openGraph: {
    title: "Reforma Comercial | JL Construção",
    description:
      "Veja nossos projetos de reforma comercial executados com excelência.",
    images: ["/obras/fotos/1.jpeg"],
  },
};

export default function ReformaComercialLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
