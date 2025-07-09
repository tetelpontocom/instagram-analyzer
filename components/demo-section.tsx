"use client"

import { useState } from "react"
import { Users, Heart, Camera, TrendingUp, AlertTriangle, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

export default function DemoSection() {
  const [username, setUsername] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = () => {
    if (username.trim()) {
      setShowResults(true)
    }
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá! Testei o Instagram Analyzer e gostaria de solicitar uma análise real e personalizada do meu perfil @${username}. Vim através do site do Instagram Analyzer.`,
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  return (
    <section id="demo-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veja o Instagram Analyzer em Ação</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experimente nossa ferramenta gratuitamente e veja como podemos transformar seu Instagram
          </p>
        </div>

        {/* Demo Input */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex gap-3">
            <Input
              placeholder="@seu_usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1"
            />
            <Button
              onClick={handleAnalyze}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            >
              Analisar
            </Button>
          </div>
        </div>

        {showResults && (
          <div className="max-w-4xl mx-auto space-y-8">
            {/* Warning Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
              <div className="flex items-center gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
                <div className="flex-1">
                  <p className="text-amber-800 font-medium">⚠️ Estes são dados simulados para demonstração</p>
                  <p className="text-amber-700 text-sm">
                    Para receber sua análise real e personalizada, solicite via WhatsApp
                  </p>
                </div>
                <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700">
                  Análise Real
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Metrics Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Seguidores</span>
                    <Users className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold">12.5K</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Engajamento</span>
                    <Heart className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold">4.2%</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Posts</span>
                    <Camera className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold">342</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Score</span>
                    <TrendingUp className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-2xl font-bold text-green-600">85</div>
                </CardContent>
              </Card>
            </div>

            {/* Analysis Results */}
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-purple-600" />
                    Análise Comportamental
                  </CardTitle>
                  <CardDescription>Avaliação da postura e consistência do perfil</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    { label: "Autenticidade", value: 85, color: "text-green-600" },
                    { label: "Consistência", value: 72, color: "text-yellow-600" },
                    { label: "Relevância", value: 91, color: "text-green-600" },
                  ].map((item, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm font-medium">{item.label}</span>
                        <span className={`text-sm font-bold ${item.color}`}>{item.value}%</span>
                      </div>
                      <Progress value={item.value} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-purple-600" />
                    Relatório Completo
                  </CardTitle>
                  <CardDescription>Sua análise personalizada incluirá</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {[
                      "Análise completa de engajamento",
                      "Identificação do público-alvo",
                      "Estratégias de crescimento",
                      "Otimização de conteúdo",
                      "Plano de ação 30/60/90 dias",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                        <span className="text-sm text-gray-700">{item}</span>
                      </div>
                    ))}
                  </div>
                  <Button
                    onClick={handleWhatsAppContact}
                    className="w-full mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Solicitar Análise Completa
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
