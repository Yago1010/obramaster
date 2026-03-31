import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'ObraMaster - Construção e Reforma',
  description: 'Empresa especializada em construção civil e reformas com mais de 15 anos de experiência',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} antialiased min-h-screen bg-background text-foreground`}>
        {children}

        {/* 
           Componente Sonner: 
           - richColors: deixa os avisos coloridos (verde para sucesso, vermelho para erro)
           - closeButton: adiciona o 'X' para fechar
           - position: define onde as notificações aparecem
        */}
        
      </body>
    </html>
  )
}
