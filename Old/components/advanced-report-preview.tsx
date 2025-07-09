"use client"

import { useState } from "react"
import { FileText, TrendingUp, Users, Eye, Target, BarChart3, Clock, Hash, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

export default function AdvancedReportPreview() {
  const [showPreview, setShowPreview] = useState(false)

  const handleDownloadSample = () => {
    // Simula download do PDF modelo
    const link = document.createElement("a")
    link.href =
      "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFJlbGF0w7NyaW8gZGUgQW7DoWxpc2UgZG8gSW5zdGFncmFtKQovQ3JlYXRvciAoVGV0ZWwgRGlnaXRhbCkKL1Byb2R1Y2VyIChJbnN0YWdyYW0gQW5hbHl6ZXIpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNTA3MDcpCj4+CmVuZG9iago="
    link.download = "relatorio-modelo-instagram-analyzer.pdf"
    link.click()
  }

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Veja Exatamente o Que Você Vai Receber</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Relatório completo com mais de 15 análises profissionais do seu perfil
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Report Preview Header */}
          <div className="bg-white rounded-t-2xl shadow-lg p-8 border-b">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">Relatório de Análise do Instagram</h3>
                  <p className="text-gray-600">@seu_usuario • Data: {new Date().toLocaleDateString("pt-BR")}</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                <Award className="w-4 h-4 mr-2" />
                Análise Profissional
              </Badge>
            </div>

            {/* Executive Summary */}
            <div className="grid md:grid-cols-4 gap-6 mb-8">
              <Card className="text-center">
                <CardContent className="p-4">
                  <Users className="w-8 h-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-2xl font-bold text-gray-900">5,030</div>
                  <div className="text-sm text-gray-600">Seguidores</div>
                  <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                    Crescimento Saudável
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
                  <div className="text-2xl font-bold text-gray-900">7.75%</div>
                  <div className="text-sm text-gray-600">Engajamento</div>
                  <Badge variant="outline" className="mt-2 text-green-600 border-green-600">
                    Acima da Média
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <Eye className="w-8 h-8 mx-auto mb-2 text-purple-600" />
                  <div className="text-2xl font-bold text-gray-900">4,552</div>
                  <div className="text-sm text-gray-600">Alcance Médio</div>
                  <Badge variant="outline" className="mt-2 text-yellow-600 border-yellow-600">
                    Pode Melhorar
                  </Badge>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="p-4">
                  <Target className="w-8 h-8 mx-auto mb-2 text-orange-600" />
                  <div className="text-2xl font-bold text-gray-900">75/100</div>
                  <div className="text-sm text-gray-600">Score Autoridade</div>
                  <Badge variant="outline" className="mt-2 text-orange-600 border-orange-600">
                    Bom Potencial
                  </Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Detailed Analysis Sections */}
          <div className="bg-white shadow-lg">
            <div className="grid md:grid-cols-2 gap-8 p-8">
              {/* Insights Section */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-purple-600" />
                  Principais Insights
                </h4>
                <div className="space-y-4">
                  <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                    <div className="text-red-800 font-semibold mb-1">🚨 Oportunidade Perdida</div>
                    <p className="text-red-700 text-sm">
                      Posts com carrossel têm 40% mais engajamento no seu nicho, mas você usa apenas 15% desse formato.
                    </p>
                  </div>
                  <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
                    <div className="text-green-800 font-semibold mb-1">✅ Ponto Forte</div>
                    <p className="text-green-700 text-sm">
                      Seu conteúdo educativo está crescendo 23% no segmento. Continue investindo nessa estratégia.
                    </p>
                  </div>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded">
                    <div className="text-blue-800 font-semibold mb-1">💡 Descoberta Surpreendente</div>
                    <p className="text-blue-700 text-sm">
                      Seu perfil tem potencial para autoridade em "Tecnologia e Inovação", área 67% mais lucrativa que
                      seu nicho atual.
                    </p>
                  </div>
                </div>
              </div>

              {/* Performance Analysis */}
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Análise de Performance
                </h4>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Consistência de Postagem</span>
                      <span className="text-sm font-bold text-yellow-600">68%</span>
                    </div>
                    <Progress value={68} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Poste 3x por semana para otimizar</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Qualidade Visual</span>
                      <span className="text-sm font-bold text-green-600">85%</span>
                    </div>
                    <Progress value={85} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Excelente! Continue assim</p>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">Timing de Posts</span>
                      <span className="text-sm font-bold text-red-600">42%</span>
                    </div>
                    <Progress value={42} className="h-2" />
                    <p className="text-xs text-gray-600 mt-1">Poste entre 18h-20h para +40% alcance</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Strategic Recommendations */}
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-purple-600" />
                Recomendações Estratégicas (Próximos 30 Dias)
              </h4>
              <div className="grid md:grid-cols-3 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-red-600">PRIORIDADE ALTA</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h5 className="font-semibold mb-2">Otimizar Horários</h5>
                    <p className="text-sm text-gray-600 mb-2">Ajustar para 18h-20h</p>
                    <Badge className="bg-red-100 text-red-800">+40% Alcance</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-yellow-600">PRIORIDADE MÉDIA</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h5 className="font-semibold mb-2">Mais Carrosséis</h5>
                    <p className="text-sm text-gray-600 mb-2">3 posts por semana</p>
                    <Badge className="bg-yellow-100 text-yellow-800">+25% Engajamento</Badge>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-sm text-green-600">OPORTUNIDADE</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <h5 className="font-semibold mb-2">Novo Nicho</h5>
                    <p className="text-sm text-gray-600 mb-2">Tecnologia & Inovação</p>
                    <Badge className="bg-green-100 text-green-800">+67% Lucratividade</Badge>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Hashtags and Growth Projection */}
            <div className="p-8 border-t">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <Hash className="w-5 h-5 text-blue-600" />
                    Hashtags Estratégicas
                  </h4>
                  <div className="space-y-2">
                    {[
                      { tag: "#tecnologia", difficulty: "Fácil", volume: "140K" },
                      { tag: "#inovacao", difficulty: "Médio", volume: "89K" },
                      { tag: "#digitalmarketing", difficulty: "Difícil", volume: "380K" },
                    ].map((hashtag, index) => (
                      <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
                        <span className="font-medium">{hashtag.tag}</span>
                        <div className="flex gap-2">
                          <Badge variant="outline">{hashtag.difficulty}</Badge>
                          <Badge variant="outline">{hashtag.volume}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-bold text-gray-900 mb-4">Projeção de Crescimento</h4>
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <div className="text-center mb-4">
                      <div className="text-3xl font-bold text-green-600">+2.1K</div>
                      <div className="text-sm text-gray-600">Novos seguidores em 90 dias</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>30 dias:</span>
                        <span className="font-semibold">+650 seguidores</span>
                      </div>
                      <div className="flex justify-between">
                        <span>60 dias:</span>
                        <span className="font-semibold">+1.3K seguidores</span>
                      </div>
                      <div className="flex justify-between">
                        <span>90 dias:</span>
                        <span className="font-semibold">+2.1K seguidores</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer with CTA */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-b-2xl shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Este é Apenas um Exemplo do Que Você Vai Receber</h3>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Seu relatório real será 100% personalizado com dados específicos do seu perfil, insights únicos e um plano
              de ação detalhado para os próximos 90 dias.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                onClick={() => {
                  document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
                }}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
              >
                Solicitar Minha Análise Real
              </Button>
            </div>
            <p className="text-sm text-purple-200 mt-4">
              ⚡ PDF modelo automático + Análise real em 24h • 🎯 100% personalizada • 🔒 Confidencial
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
