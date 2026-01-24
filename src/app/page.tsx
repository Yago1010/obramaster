import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Servicos from '@/components/Servicos'
import Projetos from '@/components/Projetos'
import Sobre from '@/components/Sobre'
import Contato from '@/components/Contato'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Servicos />
      <Projetos />
      <Sobre />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}