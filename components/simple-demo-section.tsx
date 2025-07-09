"use client"

import { useState } from "react"
import { Users, Heart, TrendingUp, AlertTriangle, ArrowRight, Play } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SimpleDemoSection() {
  const [username, setUsername] = useState("")
  const [showResults, setShowResults] = useState(false)

  const handleAnalyze = () => {
    if (username.trim()) {
      setShowResults(true)
    }
  }

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      `Olá! Testei a análise gratuita do Instagram Analyzer e gostaria de solicitar minha análise completa do perfil @${username}.`,
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  return (
    <section id="demo-section" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Teste Agora (É Grátis!)</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja um exemplo do que você vai descobrir sobre seu perfil
          </p>
        </div>

        {/* Demo Input */}
        <div className="max-w-md mx-auto mb-12">
          <div className="flex gap-3">
            <Input
              placeholder="@seu_usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 text-lg py-3"
            />
            <Button
              onClick={handleAnalyze}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 px-6"
            >
              <Play className="w-4 h-4 mr-2" />
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
                  <p className="text-amber-800 font-medium">⚠️ Esta é apenas uma demonstração</p>
                  <p className="text-amber-700 text-sm">Sua análise real será muito mais detalhada e personalizada</p>
                </div>
                <Button onClick={handleWhatsAppContact} className="bg-green-600 hover:bg-green-700">
                  Quero a Real
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>

            {/* Simple Results */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center p-6">
                <Users className="w-12 h-12 mx-auto mb-4 text-blue-500" />
                <div className="text-2xl font-bold mb-2">12.5K</div>
                <div className="text-gray-600 mb-3">Seguidores</div>
                <Badge variant="outline" className="text-yellow-600 border-yellow-600">
                  Crescimento Lento
                </Badge>
              </Card>

              <Card className="text-center p-6">
                <Heart className="w-12 h-12 mx-auto mb-4 text-red-500" />
                <div className="text-2xl font-bold mb-2">2.1%</div>
                <div className="text-gray-600 mb-3">Engajamento</div>
                <Badge variant="outline" className="text-red-600 border-red-600">
                  Abaixo da Média
                </Badge>
              </Card>

              <Card className="text-center p-6">
                <TrendingUp className="w-12 h-12 mx-auto mb-4 text-green-500" />
                <div className="text-2xl font-bold mb-2">65%</div>
                <div className="text-gray-600 mb-3">Potencial</div>
                <Badge variant="outline" className="text-green-600 border-green-600">
                  Alto Potencial
                </Badge>
              </Card>
            </div>

            {/* Insights Preview */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💡 Principais Descobertas (Exemplo)</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4">
                  <div className="text-red-600 font-semibold mb-2">🚨 Problema Identificado</div>
                  <p className="text-gray-700 text-sm">
                    Seus posts têm baixo alcance porque você posta nos horários errados para sua audiência
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-green-600 font-semibold mb-2">✅ Solução Prática</div>
                  <p className="text-gray-700 text-sm">
                    Poste entre 18h-20h nos dias úteis para aumentar o engajamento em 40%
                  </p>
                </div>
              </div>
              <div className="text-center mt-6">
                <Button
                  onClick={handleWhatsAppContact}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Quero Minha Análise Completa
                </Button>
                <p className="text-sm text-gray-600 mt-2">Na análise real você recebe 15+ insights como esses</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
