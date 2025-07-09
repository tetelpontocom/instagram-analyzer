"use client"

import { useState, useEffect } from "react"
import { Instagram, TrendingUp, Users, ArrowRight, Eye, Award, Flame, Timer } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

// AnimatedProcessDemo Component
const AnimatedProcessDemo = () => {
  const [step, setStep] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prevStep) => (prevStep === 4 ? 1 : prevStep + 1))
    }, 3000) // Change step every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const getStepContent = (step: number) => {
    switch (step) {
      case 1:
        return {
          title: "Coleta de Dados",
          description: "Analisamos seu perfil e coletamos dados relevantes.",
          icon: <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />,
        }
      case 2:
        return {
          title: "Análise Detalhada",
          description: "Nossa IA examina seus dados em busca de insights.",
          icon: <TrendingUp className="w-6 h-6 mx-auto mb-2 text-blue-400" />,
        }
      case 3:
        return {
          title: "Relatório Personalizado",
          description: "Entregamos um relatório completo com recomendações.",
          icon: <Award className="w-6 h-6 mx-auto mb-2 text-yellow-400" />,
        }
      case 4:
        return {
          title: "Implementação",
          description: "Acompanhamos a implementação das melhorias.",
          icon: <Instagram className="w-6 h-6 mx-auto mb-2 text-pink-400" />,
        }
      default:
        return {
          title: "Coleta de Dados",
          description: "Analisamos seu perfil e coletamos dados relevantes.",
          icon: <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />,
        }
    }
  }

  const { title, description, icon } = getStepContent(step)

  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold">Análise em Tempo Real</h3>
          <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-300">{title}</span>
            <span className="text-green-400 font-bold">Em Andamento</span>
          </div>
          <p className="text-xs text-gray-400">{description}</p>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-4">
          <div className="text-center">
            {icon}
            <div className="text-lg font-bold">{title}</div>
            <div className="text-xs text-gray-400">{description}</div>
          </div>
        </div>

        <Button
          onClick={() => {
            document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
          }}
          className="w-full bg-green-600 hover:bg-green-700 mt-4"
        >
          Solicitar Análise Completa
        </Button>

        <Badge className="w-full justify-center bg-yellow-500 text-black font-semibold">
          ⚡ Resposta em até 2 horas
        </Badge>
      </div>
    </div>
  )
}

export default function EnhancedHeroSection() {
  const [username, setUsername] = useState("")
  const [viewersCount, setViewersCount] = useState(12)
  const [countdown, setCountdown] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 45,
  })

  // Simulador de visualizações em tempo real
  useEffect(() => {
    const viewersInterval = setInterval(() => {
      setViewersCount((prev) => {
        const change = Math.random() > 0.5 ? 1 : -1
        const newCount = prev + change
        return Math.max(8, Math.min(25, newCount))
      })
    }, 15000)

    return () => clearInterval(viewersInterval)
  }, [])

  // Countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      setCountdown((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
              if (days > 0) {
                days--
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }

    const intervalId = setInterval(updateCountdown, 1000)
    return () => clearInterval(intervalId)
  }, [])

  const handleAnalyzeClick = () => {
    if (username.trim()) {
      // Redireciona direto para o formulário com o username
      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
      // Preenche automaticamente o campo Instagram no formulário
      setTimeout(() => {
        const instagramInput = document.getElementById("instagram") as HTMLInputElement
        if (instagramInput) {
          instagramInput.value = username
          instagramInput.dispatchEvent(new Event("input", { bubbles: true }))
        }
      }, 500)
    }
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Vim do Instagram Analyzer e gostaria de saber mais sobre a análise personalizada do meu perfil Instagram.",
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  return (
    <>
      {/* Header com contador de visualizações */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <img src="/images/tetel-digital-logo.jpg" alt="Instagram Analyzer" className="w-10 h-10" />
                <span className="text-xl font-bold">Instagram Analyzer</span>
              </div>
              <Badge className="bg-green-100 text-green-800 text-xs animate-pulse">
                <Eye className="w-3 h-3 mr-1" />
                {viewersCount} pessoas visualizando
              </Badge>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a
                href="#sobre"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("results-showcase")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
              >
                Sobre
              </a>
              <a
                href="#metodologia"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("methodology-section")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
              >
                Metodologia
              </a>
              <a
                href="#precos"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById("pricing-section")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="text-gray-600 hover:text-purple-600 transition-colors font-medium cursor-pointer"
              >
                Preços
              </a>
              <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700 shadow-lg">
                <Instagram className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Seção de Urgência com Countdown */}
      <section className="bg-gradient-to-r from-red-600 to-red-700 text-white py-4 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-center">
            <div className="flex items-center space-x-2">
              <Flame className="w-6 h-6 animate-pulse" />
              <p className="font-bold text-lg">OFERTA LIMITADA: Análise Completa Instagram</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-center">
                <span className="text-2xl font-bold line-through opacity-75">R$ 497</span>
              </div>
              <div className="text-center">
                <span className="text-3xl font-bold text-yellow-300">R$ 297</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 bg-black/20 rounded-lg px-4 py-2">
              <Timer className="w-5 h-5" />
              <div className="flex space-x-2 font-mono">
                <div className="text-center">
                  <div className="text-xl font-bold">{countdown.days.toString().padStart(2, "0")}</div>
                  <div className="text-xs">DIAS</div>
                </div>
                <div className="text-xl">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">{countdown.hours.toString().padStart(2, "0")}</div>
                  <div className="text-xs">HORAS</div>
                </div>
                <div className="text-xl">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">{countdown.minutes.toString().padStart(2, "0")}</div>
                  <div className="text-xs">MIN</div>
                </div>
                <div className="text-xl">:</div>
                <div className="text-center">
                  <div className="text-xl font-bold">{countdown.seconds.toString().padStart(2, "0")}</div>
                  <div className="text-xs">SEG</div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center mt-2">
            <p className="text-sm opacity-90">⚡ Apenas 20 análises disponíveis este mês!</p>
          </div>
        </div>
      </section>

      {/* Hero Section Aprimorado */}
      <section className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-400/10 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-400/10 rounded-full animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-yellow-500 text-black font-semibold px-4 py-2 shadow-lg animate-bounce">
                  <Award className="w-4 h-4 mr-2" />
                  Análise Profissional de Instagram
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Descubra por que seu Instagram não cresce — e como transformá-lo numa máquina de influência e vendas
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Análise profissional baseada em dados reais, que vai potencializar seu crescimento no Instagram e
                  transformar seu perfil em uma ferramenta de vendas e autoridade no seu nicho.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    placeholder="@seu_usuario_instagram"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="flex-1 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                  />
                  <Button
                    onClick={() => {
                      document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                    }}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 shadow-xl transform hover:scale-105 transition-all duration-200"
                  >
                    Solicitar Análise
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <Button
                  onClick={() => {
                    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  variant="outline"
                  className="w-full sm:w-auto border-2 border-white text-white hover:bg-white hover:text-purple-900 px-8 py-3 text-lg bg-transparent shadow-xl"
                >
                  <Instagram className="w-5 h-5 mr-2" />
                  Falar no WhatsApp
                </Button>
                <p className="text-sm text-gray-400">
                  ✨ Receba um relatório modelo na hora + análise real em 24h • 🔒 100% seguro e confidencial
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">25+</div>
                  <div className="text-sm text-blue-200">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">3K+</div>
                  <div className="text-sm text-blue-200">Clientes Atendidos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400">100%</div>
                  <div className="text-sm text-blue-200">Foco em Resultados</div>
                </div>
              </div>
            </div>

            {/* Right Column - Animated Process Demo */}
            <div className="relative">
              <AnimatedProcessDemo />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
