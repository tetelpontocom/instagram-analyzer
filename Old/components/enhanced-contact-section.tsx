"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MessageCircle, CheckCircle, FileText, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import SimplePersonalMessageSection from "./simple-personal-message-section"

// Modal de Agradecimento
const ThankYouModal = ({
  isOpen,
  onClose,
  formData,
  onWhatsAppClick,
}: {
  isOpen: boolean
  onClose: () => void
  formData: any
  onWhatsAppClick: () => void
}) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-md w-full relative animate-in zoom-in-95 duration-300 shadow-2xl">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10">
          <X className="w-6 h-6" />
        </button>

        {/* Header with Photo */}
        <div className="text-center pt-8 pb-4">
          <div className="relative inline-block mb-4">
            <img
              src="/images/founder-photo.jpg"
              alt="Especialista Tetel Digital"
              className="w-20 h-20 rounded-full mx-auto object-cover border-4 border-blue-500"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-white" />
            </div>
          </div>

          <div className="text-4xl mb-2">🐝</div>

          <h3 className="text-2xl font-bold text-gray-900 mb-1">Dados Recebidos!</h3>
          <p className="text-gray-600">Obrigado pelo seu interesse</p>
        </div>

        {/* Content */}
        <div className="px-8 pb-8">
          {/* Next Steps */}
          <div className="bg-blue-50 rounded-lg p-4 mb-6">
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-5 h-5 text-blue-600" />
              <h4 className="font-semibold text-blue-900">📋 Próximos Passos:</h4>
            </div>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  1
                </div>
                <span className="text-blue-800">Análise do seu perfil</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  2
                </div>
                <span className="text-blue-800">Contato via WhatsApp em até 2h</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">
                  3
                </div>
                <span className="text-blue-800">Consultoria estratégica</span>
              </div>
            </div>
          </div>

          {/* Response Time */}
          <div className="bg-green-50 rounded-lg p-3 mb-6 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-green-800 font-semibold">⚡ Resposta em até 2 horas</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="text-center">
              <MessageCircle className="w-6 h-6 text-green-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-gray-900">WhatsApp</div>
              <div className="text-xs text-gray-600">(82) 99917-6900</div>
            </div>
            <div className="text-center">
              <Mail className="w-6 h-6 text-blue-600 mx-auto mb-1" />
              <div className="text-sm font-medium text-gray-900">Email</div>
              <div className="text-xs text-gray-600">contato@tetel.online</div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button onClick={onWhatsAppClick} className="flex-1 bg-green-600 hover:bg-green-700 text-white">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp
            </Button>
            <Button onClick={onClose} variant="outline" className="flex-1 bg-transparent">
              Fechar
            </Button>
          </div>

          {/* Footer Quote */}
          <div className="text-center mt-4">
            <p className="text-xs text-gray-500 italic">"Sua jornada digital começa agora!" — Tetel</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    instagram: "",
    interesse: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showThankYouModal, setShowThankYouModal] = useState(false)

  // Função para gerar PDF com melhor codificação
  const generateAdvancedPDF = () => {
    const pdfContent = `
INSTAGRAM ANALYZER - TETEL DIGITAL
RELATÓRIO DE ANÁLISE INSTAGRAM

Exemplo Demonstrativo - ${formData.nome || "Seu Nome"}
@${formData.instagram || "seu_usuario"} • ${new Date().toLocaleDateString("pt-BR")}

═══════════════════════════════════════════════════════════

📊 RESUMO EXECUTIVO

Seguidores: 12.5K          Engajamento: 4.2%
Alcance Médio: 3.8K        Score Autoridade: 75/100

═══════════════════════════════════════════════════════════

🔍 PRINCIPAIS DESCOBERTAS

🚨 OPORTUNIDADE PERDIDA:
Você posta nos horários errados! Seus seguidores são 67% mais 
ativos entre 18h-20h, mas você posta às 14h.

💡 POTENCIAL INEXPLORADO:
Carrosséis geram 40% mais engajamento no seu nicho, mas você 
usa apenas 15% desse formato.

⚡ DESCOBERTA SURPREENDENTE:
Seu perfil tem potencial para autoridade em "Tecnologia e 
Inovação" - área 67% mais lucrativa!

═══════════════════════════════════════════════════════════

🎯 RECOMENDAÇÕES ESTRATÉGICAS

PRIORIDADE ALTA:
• Ajustar horários para 18h-20h → +40% Alcance
• Criar 3 carrosséis por semana → +25% Engajamento

OPORTUNIDADE DE OURO:
• Migrar para "Tecnologia & Inovação" → +67% Lucratividade
• Implementar Stories interativos → +30% Alcance

═══════════════════════════════════════════════════════════

📈 PROJEÇÃO DE CRESCIMENTO

Seguindo nossas recomendações, você pode esperar:
• 30 dias: +650 seguidores
• 60 dias: +1.3K seguidores  
• 90 dias: +2.1K seguidores

💰 IMPACTO FINANCEIRO:
Com base no seu nicho, isso representa um potencial de 
R$ 3.500 - R$ 8.200 em receita adicional mensal.

═══════════════════════════════════════════════════════════

🚀 ESTE É APENAS O COMEÇO!

Este relatório demonstrativo mostra apenas uma pequena amostra 
do que descobrimos sobre perfis como o seu.

Sua análise REAL será 100% personalizada com dados específicos 
do seu perfil, insights únicos e um plano de ação detalhado 
para os próximos 90 dias.

═══════════════════════════════════════════════════════════

SOLICITAR ANÁLISE REAL AGORA

⚡ Entrega em até 24h • 🎯 100% Personalizada • 🔒 Confidencial

Instagram Analyzer by Tetel Digital
25+ anos de experiência em tecnologia e análise de dados
WhatsApp: (82) 99917-6900 • Email: contato@tetel.online
`

    const blob = new Blob([pdfContent], { type: "text/plain;charset=utf-8" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.href = url
    link.download = `relatorio-instagram-analyzer-${(formData.nome || "usuario").replace(/\s+/g, "-").toLowerCase()}.txt`

    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    URL.revokeObjectURL(url)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Validar campos obrigatórios
    if (!formData.nome || !formData.email || !formData.whatsapp || !formData.instagram || !formData.interesse) {
      alert("Por favor, preencha todos os campos obrigatórios marcados com *")
      return
    }

    setIsSubmitting(true)

    try {
      // Simular processamento
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Gerar e baixar o relatório
      generateAdvancedPDF()

      setIsSubmitting(false)
      setShowThankYouModal(true)
    } catch (error) {
      console.error("Erro ao processar formulário:", error)
      setIsSubmitting(false)
      alert("Erro ao processar sua solicitação. Tente novamente.")
    }
  }

  const handleWhatsAppFromModal = () => {
    const whatsappMessage = `🎯 SOLICITAÇÃO DE ANÁLISE INSTAGRAM - TETEL DIGITAL

📋 DADOS DO CLIENTE:
• Nome: ${formData.nome}
• Email: ${formData.email}
• WhatsApp: ${formData.whatsapp}
• Instagram: ${formData.instagram}
• Interesse: ${formData.interesse}
${formData.mensagem ? `• Objetivos: ${formData.mensagem}` : ""}

✅ STATUS:
• Relatório modelo já foi baixado pelo cliente
• Cliente está aguardando análise real personalizada
• Prazo prometido: até 24 horas

💬 MENSAGEM DO CLIENTE:
"Olá! Acabei de solicitar minha análise personalizada no Instagram Analyzer. Já baixei o relatório modelo e estou ansioso(a) para receber minha análise real. Quando posso esperar o relatório personalizado?"

🚀 Pronto para iniciar a análise!`

    const encodedMessage = encodeURIComponent(whatsappMessage)

    // Detectar se é mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    let whatsappUrl
    if (isMobile) {
      // Para mobile, usar o esquema whatsapp://
      whatsappUrl = `whatsapp://send?phone=5582999176900&text=${encodedMessage}`
    } else {
      // Para desktop, usar web.whatsapp.com
      whatsappUrl = `https://web.whatsapp.com/send?phone=5582999176900&text=${encodedMessage}`
    }

    // Tentar abrir WhatsApp
    const newWindow = window.open(whatsappUrl, "_blank")

    // Fallback para mobile se não abrir
    if (!newWindow && isMobile) {
      window.location.href = `https://wa.me/5582999176900?text=${encodedMessage}`
    }
  }

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      "Olá! Vim do Instagram Analyzer e gostaria de falar sobre uma análise personalizada do meu perfil Instagram.",
    )

    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `https://wa.me/5582999176900?text=${message}`
    } else {
      window.open(`https://web.whatsapp.com/send?phone=5582999176900&text=${message}`, "_blank")
    }
  }

  return (
    <>
      {/* Simple Personal Message Section */}
      <div className="bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 py-8">
        <SimplePersonalMessageSection />
      </div>

      <section
        id="contact-section"
        className="py-12 md:py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              Solicite sua Análise Real e Personalizada
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
              Preencha o formulário abaixo e receba um <strong>relatório modelo instantâneo</strong> + sua análise real
              em até 24 horas
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white/10 backdrop-blur-lg border-white/20">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 text-lg md:text-xl">
                  <FileText className="w-5 h-5" />
                  Formulário de Análise Personalizada
                </CardTitle>
                <CardDescription className="text-gray-300 text-sm md:text-base">
                  Preencha seus dados e receba um <strong>relatório modelo automaticamente</strong> + análise real em
                  24h
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="nome" className="text-white text-sm md:text-base">
                        Nome Completo *
                      </Label>
                      <Input
                        id="nome"
                        value={formData.nome}
                        onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-10 md:h-11"
                        placeholder="Seu nome completo"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-white text-sm md:text-base">
                        E-mail *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-10 md:h-11"
                        placeholder="seu@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="whatsapp" className="text-white text-sm md:text-base">
                        WhatsApp *
                      </Label>
                      <Input
                        id="whatsapp"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-10 md:h-11"
                        placeholder="(11) 99999-9999"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="instagram" className="text-white text-sm md:text-base">
                        Instagram *
                      </Label>
                      <Input
                        id="instagram"
                        value={formData.instagram}
                        onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                        className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 h-10 md:h-11"
                        placeholder="@seu_usuario"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="interesse" className="text-white text-sm md:text-base">
                      Interesse *
                    </Label>
                    <Select onValueChange={(value) => setFormData({ ...formData, interesse: value })} required>
                      <SelectTrigger className="bg-white/10 border-white/20 text-white h-10 md:h-11">
                        <SelectValue placeholder="Selecione seu interesse" />
                      </SelectTrigger>
                      <SelectContent className="bg-white">
                        <SelectItem value="analise-gratuita">Análise Gratuita (Demonstrativa)</SelectItem>
                        <SelectItem value="analise-completa">Análise Completa (R$ 97)</SelectItem>
                        <SelectItem value="consultoria-vip">Consultoria VIP (R$ 297/mês)</SelectItem>
                        <SelectItem value="duvidas">Tenho dúvidas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="mensagem" className="text-white text-sm md:text-base">
                      Objetivos no Instagram
                    </Label>
                    <Textarea
                      id="mensagem"
                      value={formData.mensagem}
                      onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 min-h-[80px] md:min-h-[100px]"
                      placeholder="Conte-nos seus principais objetivos no Instagram..."
                      rows={3}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold h-11 md:h-12 text-sm md:text-base"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                        Processando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Receber Relatório + Análise Real
                      </>
                    )}
                  </Button>

                  <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-3 md:p-4">
                    <p className="text-yellow-400 font-medium text-xs md:text-sm mb-2">
                      🎁 Você receberá AUTOMATICAMENTE:
                    </p>
                    <ul className="text-yellow-300 text-xs md:text-sm space-y-1">
                      <li>• Relatório modelo profissional baixado na hora</li>
                      <li>• Modal de confirmação com próximos passos</li>
                      <li>• Acesso direto ao WhatsApp com seus dados</li>
                      <li>• Análise real personalizada em 24h</li>
                    </ul>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 md:space-y-8">
              <div>
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">Entre em Contato</h3>
                <p className="text-gray-300 mb-6 md:mb-8 text-sm md:text-base">
                  Prefere falar diretamente? Entre em contato através dos nossos canais oficiais
                </p>
              </div>

              <div className="space-y-4 md:space-y-6">
                <div className="flex items-center gap-4 p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-lg">
                  <MessageCircle className="w-6 h-6 md:w-8 md:h-8 text-green-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm md:text-base">WhatsApp</div>
                    <div className="text-gray-300 text-xs md:text-sm">Resposta em até 2 horas</div>
                    <Button
                      onClick={handleWhatsAppDirect}
                      variant="link"
                      className="text-green-400 p-0 h-auto text-sm md:text-base"
                    >
                      (82) 99917-6900
                    </Button>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3 md:p-4 bg-white/10 rounded-lg backdrop-blur-lg">
                  <Mail className="w-6 h-6 md:w-8 md:h-8 text-blue-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-sm md:text-base">E-mail</div>
                    <div className="text-gray-300 text-xs md:text-sm">Resposta em até 4 horas</div>
                    <div className="text-blue-400 text-sm md:text-base">contato@tetel.online</div>
                  </div>
                </div>
              </div>

              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 md:p-6">
                <h4 className="font-semibold text-green-400 mb-2 text-sm md:text-base">🚀 Garantias</h4>
                <ul className="text-xs md:text-sm text-gray-300 space-y-1">
                  <li>• Relatório modelo baixado automaticamente</li>
                  <li>• Modal de confirmação com próximos passos</li>
                  <li>• Redirecionamento inteligente para WhatsApp</li>
                  <li>• Análise real entregue em até 24 horas</li>
                  <li>• Relatório 100% personalizado</li>
                  <li>• Suporte pós-entrega incluído</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Thank You Modal */}
      <ThankYouModal
        isOpen={showThankYouModal}
        onClose={() => setShowThankYouModal(false)}
        formData={formData}
        onWhatsAppClick={handleWhatsAppFromModal}
      />
    </>
  )
}
