"use client"

import { useState, useEffect } from "react"
import { CheckCircle, Zap, MessageCircle, Shield, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PersonalMessageSection() {
  const [isOnline, setIsOnline] = useState(true)

  // Simular status online
  useEffect(() => {
    const interval = setInterval(() => {
      setIsOnline((prev) => !prev)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleStartNow = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleTalkFirst = () => {
    const message = encodeURIComponent(
      "Olá Tetel! Li sua mensagem pessoal no Instagram Analyzer e gostaria de conversar antes de solicitar minha análise. Tenho algumas dúvidas sobre como funciona.",
    )
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `https://wa.me/5582999176900?text=${message}`
    } else {
      window.open(`https://web.whatsapp.com/send?phone=5582999176900&text=${message}`, "_blank")
    }
  }

  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-blue-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl"></div>

      <div className="relative container mx-auto px-4 max-w-4xl">
        {/* Online Status */}
        <div className="flex justify-end mb-8">
          <Badge
            className={`${
              isOnline ? "bg-green-500 animate-pulse" : "bg-gray-500"
            } text-white px-4 py-2 text-sm font-semibold`}
          >
            {isOnline ? "🟢 ONLINE AGORA" : "🔴 OFFLINE"}
          </Badge>
        </div>

        {/* Header with Photo */}
        <div className="text-center mb-12">
          <div className="relative inline-block mb-6">
            <img
              src="/images/founder-photo.jpg"
              alt="Tetel - Especialista em Instagram"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-400 shadow-2xl"
            />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white animate-pulse"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Uma Mensagem Pessoal Para Você</h2>
        </div>

        {/* Personal Message */}
        <div className="space-y-6 text-lg md:text-xl leading-relaxed text-center mb-12">
          <p>
            <strong className="text-blue-300">Olá, sou o Tetel.</strong> Depois de 25+ anos no mundo da tecnologia,
            aprendi uma verdade fundamental sobre Instagram:{" "}
            <span className="text-yellow-400 font-semibold">
              não é sobre ter o melhor conteúdo, é sobre ter a estratégia certa.
            </span>
          </p>

          <p>
            Vi muitos empreendedores talentosos — coaches inspiradores, consultores brilhantes, profissionais
            visionários — ficarem invisíveis no Instagram simplesmente porque{" "}
            <span className="text-yellow-400 font-semibold">
              ninguém os ensinou a construir autoridade digital de forma estratégica.
            </span>
          </p>

          <p>
            Se você chegou até aqui, é porque reconhece que sua expertise merece ser vista. Que seu conhecimento pode
            transformar vidas. E que chegou a hora de{" "}
            <span className="text-yellow-400 font-semibold">
              parar de ser o segredo mais bem guardado do Instagram.
            </span>
          </p>
        </div>

        {/* Commitment Section */}
        <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 mb-12 border border-white/20">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-8 text-yellow-400">Meu Compromisso Com Você:</h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Análise 100% personalizada do seu perfil</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Estratégias baseadas em dados reais</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Plano de ação prático e mensurável</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Transparência total no processo</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Suporte direto via WhatsApp</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-white">Garantia de satisfação total</span>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <p className="text-xl md:text-2xl font-bold">
              A pergunta não é <span className="text-red-400">"se"</span> você vai transformar seu Instagram numa
              máquina de autoridade.
            </p>
            <p className="text-xl md:text-2xl">
              A pergunta é:{" "}
              <span className="text-yellow-400 font-bold">"Quando você vai começar a ser reconhecido?"</span>
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-2xl mx-auto">
            <Button
              onClick={handleStartNow}
              className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold px-8 py-4 text-lg shadow-2xl transform hover:scale-105 transition-all duration-200 w-full sm:w-auto"
            >
              <Zap className="w-5 h-5 mr-2" />
              Quero Começar Agora, Tetel!
            </Button>
            <Button
              onClick={handleTalkFirst}
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg bg-transparent w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Conversar Primeiro
            </Button>
          </div>

          {/* Trust Signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-blue-200">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Resposta garantida em até 2 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4" />
              <span>Seus dados estão seguros</span>
            </div>
          </div>

          {/* Final Quote */}
          <div className="pt-8 border-t border-white/20">
            <blockquote className="text-lg md:text-xl italic text-blue-200 mb-4">
              "Sua expertise no Instagram já existe. Agora vamos fazer o algoritmo reconhecê-la."
            </blockquote>
            <p className="text-yellow-400 font-semibold">— Tetel</p>
          </div>
        </div>
      </div>
    </section>
  )
}
