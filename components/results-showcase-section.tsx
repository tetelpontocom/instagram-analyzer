"use client"

import { useState } from "react"
import { Users, Heart, Eye, Play, ArrowRight, BarChart3 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function ResultsShowcaseSection() {
  const [activeCase, setActiveCase] = useState(0)

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Vi os resultados possíveis no Instagram Analyzer e gostaria de descobrir o potencial do meu perfil também!",
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  const cases = [
    {
      niche: "Nutricionista",
      before: {
        followers: "1.2K",
        engagement: "1.8%",
        reach: "200",
        problem: "Posts não apareciam no feed dos seguidores",
      },
      after: {
        followers: "4.1K",
        engagement: "5.2%",
        reach: "1.8K",
        solution: "Otimizamos horários e hashtags estratégicas",
      },
      insight: "Descobrimos que 70% dos seguidores eram ativos às 19h, mas ela postava às 14h",
      timeframe: "45 dias",
      color: "from-green-500 to-emerald-500",
    },
    {
      niche: "Personal Trainer",
      before: {
        followers: "800",
        engagement: "2.1%",
        reach: "150",
        problem: "Conteúdo não gerava interesse nem salvamentos",
      },
      after: {
        followers: "2.8K",
        engagement: "7.3%",
        reach: "2.1K",
        solution: "Mudamos o tipo de conteúdo para mais educativo",
      },
      insight: "Descobrimos que o perfil perdeu 60% do alcance por falta de consistência nos Stories",
      timeframe: "30 dias",
      color: "from-blue-500 to-purple-500",
    },
    {
      niche: "Designer",
      before: {
        followers: "2.1K",
        engagement: "1.5%",
        reach: "300",
        problem: "Perfil não convertia seguidores em clientes",
      },
      after: {
        followers: "5.7K",
        engagement: "4.8%",
        reach: "2.7K",
        solution: "Criamos funil de conversão através dos Stories",
      },
      insight: "Identificamos que 85% dos seguidores não sabiam que ela vendia serviços",
      timeframe: "60 dias",
      color: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Alcance Resultados Como Esses</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja o potencial real do seu perfil através de casos similares ao seu
          </p>
        </div>

        {/* Case Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-white rounded-lg p-1 shadow-md">
            {cases.map((case_, index) => (
              <button
                key={index}
                onClick={() => setActiveCase(index)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  activeCase === index
                    ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {case_.niche}
              </button>
            ))}
          </div>
        </div>

        {/* Active Case Display */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className={`bg-gradient-to-r ${cases[activeCase].color} p-6 text-white`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Caso: {cases[activeCase].niche}</h3>
                  <p className="text-white/90">Transformação em {cases[activeCase].timeframe}</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-white/20 text-white border-white/30">
                    <Play className="w-3 h-3 mr-1" />
                    Simulação Real
                  </Badge>
                </div>
              </div>
            </div>

            {/* Before/After Comparison */}
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Before */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-900">ANTES</h4>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <Card className="text-center p-4">
                      <Users className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                      <div className="text-xl font-bold text-gray-600">{cases[activeCase].before.followers}</div>
                      <div className="text-xs text-gray-500">Seguidores</div>
                    </Card>
                    <Card className="text-center p-4">
                      <Heart className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                      <div className="text-xl font-bold text-gray-600">{cases[activeCase].before.engagement}</div>
                      <div className="text-xs text-gray-500">Engajamento</div>
                    </Card>
                    <Card className="text-center p-4">
                      <Eye className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                      <div className="text-xl font-bold text-gray-600">{cases[activeCase].before.reach}</div>
                      <div className="text-xs text-gray-500">Alcance</div>
                    </Card>
                  </div>

                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="text-red-800 font-semibold mb-2">🚨 Problema Identificado</div>
                    <p className="text-red-700 text-sm">{cases[activeCase].before.problem}</p>
                  </div>
                </div>

                {/* After */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <h4 className="text-lg font-bold text-gray-900">DEPOIS</h4>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <Card className="text-center p-4 border-green-200">
                      <Users className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-xl font-bold text-green-600">{cases[activeCase].after.followers}</div>
                      <div className="text-xs text-gray-500">Seguidores</div>
                    </Card>
                    <Card className="text-center p-4 border-green-200">
                      <Heart className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-xl font-bold text-green-600">{cases[activeCase].after.engagement}</div>
                      <div className="text-xs text-gray-500">Engajamento</div>
                    </Card>
                    <Card className="text-center p-4 border-green-200">
                      <Eye className="w-6 h-6 mx-auto mb-2 text-green-600" />
                      <div className="text-xl font-bold text-green-600">{cases[activeCase].after.reach}</div>
                      <div className="text-xs text-gray-500">Alcance</div>
                    </Card>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="text-green-800 font-semibold mb-2">✅ Solução Aplicada</div>
                    <p className="text-green-700 text-sm">{cases[activeCase].after.solution}</p>
                  </div>
                </div>
              </div>

              {/* Key Insight */}
              <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-bold text-gray-900 mb-2">💡 Principal Descoberta</h4>
                    <p className="text-gray-700 mb-4">{cases[activeCase].insight}</p>
                    <div className="text-sm text-gray-600">
                      <strong>Resultado:</strong> Transformação completa em apenas {cases[activeCase].timeframe}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Qual é o Potencial do Seu Perfil?</h3>
            <p className="text-gray-600 mb-6">
              Cada perfil tem problemas únicos e soluções específicas. Descubra o que está travando o seu crescimento.
            </p>
            <Button
              onClick={handleWhatsAppContact}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-lg px-8 py-3"
            >
              Descobrir Meu Potencial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <p className="text-sm text-gray-500 mt-3">Análise personalizada • Resultados em 24h</p>
          </div>
        </div>
      </div>
    </section>
  )
}
