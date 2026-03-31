'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const contatoHref = pathname === "/" ? "/#contato" : "#contato"

  return (
    <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logojl.png"
              alt="Obramaster"
              width={160}
              height={40}
              priority
            />
          </Link>

          {/* Menu Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/#inicio" className="hover:text-blue-400 transition">Início</Link>
            <Link href="/#servicos" className="hover:text-blue-400 transition">Serviços</Link>
            <Link href="/#projetos" className="hover:text-blue-400 transition">Projetos</Link>
            <Link href="/#sobre" className="hover:text-blue-400 transition">Sobre</Link>
            <Link href={contatoHref} className="hover:text-blue-400 transition">Contato</Link>
          </nav>

          {/* Botão Menu Mobile */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 space-y-3">
            <Link href="/#inicio" className="block hover:text-blue-400 transition">Início</Link>
            <Link href="/#servicos" className="block hover:text-blue-400 transition">Serviços</Link>
            <Link href="/#projetos" className="block hover:text-blue-400 transition">Projetos</Link>
            <Link href="/#sobre" className="block hover:text-blue-400 transition">Sobre</Link>
            <Link href={contatoHref} className="block hover:text-blue-400 transition">Contato</Link>
          </nav>
        )}
      </div>
    </header>
  )
}
