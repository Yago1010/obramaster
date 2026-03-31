'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [mensagem, setMensagem] = useState('')

  const handleSubmit = () => {
    if (!nome || !email || !mensagem) {
      alert('Preencha todos os campos')
      return
    }

    const telefoneWhatsApp = '5521971295237' // ← coloque o número aqui

    const texto = `
Olá! Gostaria de um orçamento.

Nome: ${nome}
Email: ${email}
Mensagem: ${mensagem}
    `

    const url = `https://wa.me/${telefoneWhatsApp}?text=${encodeURIComponent(texto)}`

    window.open(url, '_blank')
  }

  return (
    <section id="contato" className="py-16 md:py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Entre em Contato
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* INFO */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Informações</h3>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="mt-1 text-blue-400" />
                <div>
                  <div className="font-semibold">Telefone</div>
                  <div className="text-gray-300">(21) 971295237</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="mt-1 text-blue-400" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-300">joselima78321@gmail.com</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="mt-1 text-blue-400" />
                <div>
                  <div className="font-semibold">Endereço</div>
                  <div className="text-gray-300">
                    Rua do Doutor César da Fonseca 
                    42-B Piratininga, Niterói
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Facebook size={32} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Instagram size={32} />
              </a>
              <a href="#" className="text-blue-400 hover:text-blue-300">
                <Linkedin size={32} />
              </a>
            </div>
          </div>

          {/* FORM */}
          <div>
            <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />

              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />

              <textarea
                placeholder="Mensagem"
                rows={4}
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-slate-800 border border-slate-700 focus:border-blue-500 focus:outline-none"
              />

              <button
                onClick={handleSubmit}
                className="w-full bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition"
              >
                Enviar no WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}