"use client"

import { useState } from "react"
import { Instagram, TrendingUp, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function HeroSection() {
  const [username, setUsername] = useState("")

  const handleAnalyzeClick = () => {
    if (username.trim()) {
      // Scroll to demo section
      document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Vim do Instagram Analyzer e gostaria de saber mais sobre a análise personalizada do meu perfil.",
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-purple-300">
                <Instagram className="w-6 h-6" />
                <span className="text-sm font-medium">Instagram Analyzer</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Transforme seu Instagram em uma{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Máquina de Autoridade Digital
                </span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Análise profissional baseada em dados reais, que vai potencializar seu crescimento no Instagram e
                transformar seu perfil em uma ferramenta de vendas e autoridade no seu nicho.
              </p>
            </div>

            {/* CTA Section */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  placeholder="@seu_usuario_instagram"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button
                  onClick={handleAnalyzeClick}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8"
                >
                  Analisar Grátis
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <p className="text-sm text-gray-400">✨ Análise gratuita em segundos • 🔒 100% seguro e confidencial</p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-400">+500</div>
                <div className="text-sm text-gray-400">Perfis Analisados</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">+127%</div>
                <div className="text-sm text-gray-400">Crescimento Médio</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400">98%</div>
                <div className="text-sm text-gray-400">Satisfação</div>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Card */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold">Análise em Tempo Real</h3>
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-300">Score de Qualidade</span>
                    <span className="text-green-400 font-bold">87%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div className="bg-gradient-to-r from-green-400 to-blue-400 h-2 rounded-full w-[87%]"></div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />
                    <div className="text-lg font-bold">12.5K</div>
                    <div className="text-xs text-gray-400">Seguidores</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-400" />
                    <div className="text-lg font-bold">4.2%</div>
                    <div className="text-xs text-gray-400">Engajamento</div>
                  </div>
                </div>

                <Button onClick={handleWhatsAppContact} className="w-full bg-green-600 hover:bg-green-700 mt-4">
                  Solicitar Análise Completa
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
