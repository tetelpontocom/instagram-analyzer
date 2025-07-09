"use client"

import type React from "react"

import { useState } from "react"
import { Send, Mail, MessageCircle, CheckCircle, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    whatsapp: "",
    instagram: "",
    interesse: "",
    mensagem: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showSampleDownload, setShowSampleDownload] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Simula envio e mostra opção de download
    setShowSampleDownload(true)

    // Após 2 segundos, envia para WhatsApp
    setTimeout(() => {
      const message = encodeURIComponent(
        `Olá! Vim do Instagram Analyzer e gostaria de solicitar uma análise personalizada.\n\n` +
          `Nome: ${formData.nome}\n` +
          `Email: ${formData.email}\n` +
          `WhatsApp: ${formData.whatsapp}\n` +
          `Instagram: ${formData.instagram}\n` +
          `Interesse: ${formData.interesse}\n` +
          `Mensagem: ${formData.mensagem}\n\n` +
          `Já baixei o relatório modelo e gostaria de receber minha análise real em até 24h.`,
      )
      window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
      setIsSubmitted(true)
    }, 2000)
  }

  const handleDownloadSample = () => {
    // Simula download do PDF modelo
    const link = document.createElement("a")
    link.href =
      "data:application/pdf;base64,JVBERi0xLjQKJdPr6eEKMSAwIG9iago8PAovVGl0bGUgKFJlbGF0w7NyaW8gZGUgQW7DoWxpc2UgZG8gSW5zdGFncmFtKQovQ3JlYXRvciAoVGV0ZWwgRGlnaXRhbCkKL1Byb2R1Y2VyIChJbnN0YWdyYW0gQW5hbHl6ZXIpCi9DcmVhdGlvbkRhdGUgKEQ6MjAyNTA3MDcpCj4+CmVuZG9iago="
    link.download = "relatorio-modelo-instagram-analyzer.pdf"
    link.click()
  }

  const handleWhatsAppDirect = () => {
    const message = encodeURIComponent(
      "Olá! Vim do Instagram Analyzer e gostaria de falar sobre uma análise personalizada do meu perfil Instagram.",
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <section
        id="contact-section"
        className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
              <p className="text-gray-300 mb-4">
                Recebemos sua solicitação de análise personalizada. Nossa equipe iniciará o trabalho e você receberá os
                resultados em até 24 horas via WhatsApp.
              </p>
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4">
                <p className="text-green-400 font-medium">✅ Próximos passos:</p>
                <ul className="text-green-300 text-sm mt-2 space-y-1">
                  <li>• Análise do seu perfil em andamento</li>
                  <li>• Relatório personalizado sendo preparado</li>
                  <li>• Entrega garantida em até 24 horas</li>
                  <li>• Suporte pós-entrega incluído</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  if (showSampleDownload) {
    return (
      <section
        id="contact-section"
        className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white"
      >
        <div className="container mx-auto px-4">
          <Card className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg border-white/20">
            <CardContent className="text-center py-12">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Baixe Seu Relatório Modelo</h3>
              <p className="text-gray-300 mb-6">
                Enquanto preparamos sua análise real, baixe um exemplo do relatório que você vai receber para conhecer
                nossa metodologia.
              </p>
              <Button
                onClick={handleDownloadSample}
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold mb-4"
              >
                <Download className="w-4 h-4 mr-2" />
                Baixar Relatório Modelo (PDF)
              </Button>
              <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-4">
                <p className="text-blue-400 font-medium mb-2">🚀 Sua análise real está sendo preparada!</p>
                <p className="text-blue-300 text-sm">
                  Nossa equipe já iniciou a análise do seu perfil. Você receberá o relatório personalizado em até 24
                  horas via WhatsApp.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section
      id="contact-section"
      className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Solicite sua Análise Real e Personalizada</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Preencha o formulário abaixo e receba um relatório modelo na hora + sua análise real em até 24 horas
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-white/10 backdrop-blur-lg border-white/20">
            <CardHeader>
              <CardTitle className="text-white">Formulário de Análise Personalizada</CardTitle>
              <CardDescription className="text-gray-300">
                Preencha seus dados para receber um relatório modelo agora + análise real em 24h
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="nome" className="text-white">
                      Nome Completo *
                    </Label>
                    <Input
                      id="nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      E-mail *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="whatsapp" className="text-white">
                      WhatsApp *
                    </Label>
                    <Input
                      id="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="(11) 99999-9999"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="instagram" className="text-white">
                      Instagram *
                    </Label>
                    <Input
                      id="instagram"
                      value={formData.instagram}
                      onChange={(e) => setFormData({ ...formData, instagram: e.target.value })}
                      className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                      placeholder="@seu_usuario"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="interesse" className="text-white">
                    Interesse *
                  </Label>
                  <Select onValueChange={(value) => setFormData({ ...formData, interesse: value })}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white">
                      <SelectValue placeholder="Selecione seu interesse" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="analise-completa">Análise Completa (R$ 97)</SelectItem>
                      <SelectItem value="consultoria-vip">Consultoria VIP (R$ 297/mês)</SelectItem>
                      <SelectItem value="duvidas">Tenho dúvidas</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="mensagem" className="text-white">
                    Objetivos no Instagram
                  </Label>
                  <Textarea
                    id="mensagem"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({ ...formData, mensagem: e.target.value })}
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                    placeholder="Conte-nos seus principais objetivos no Instagram..."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Receber Relatório Modelo + Análise Real
                </Button>

                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4">
                  <p className="text-yellow-400 font-medium text-sm">🎁 Você vai receber:</p>
                  <ul className="text-yellow-300 text-sm mt-1 space-y-1">
                    <li>• Relatório modelo para download imediato</li>
                    <li>• Análise real e personalizada em até 24h</li>
                    <li>• Suporte pós-entrega via WhatsApp</li>
                  </ul>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Entre em Contato</h3>
              <p className="text-gray-300 mb-8">
                Prefere falar diretamente? Entre em contato através dos nossos canais oficiais
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-lg">
                <MessageCircle className="w-8 h-8 text-green-400" />
                <div>
                  <div className="font-semibold">WhatsApp</div>
                  <div className="text-gray-300 text-sm">Resposta em até 2 horas</div>
                  <Button onClick={handleWhatsAppDirect} variant="link" className="text-green-400 p-0 h-auto">
                    (82) 99917-6900
                  </Button>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-white/10 rounded-lg backdrop-blur-lg">
                <Mail className="w-8 h-8 text-blue-400" />
                <div>
                  <div className="font-semibold">E-mail</div>
                  <div className="text-gray-300 text-sm">Resposta em até 4 horas</div>
                  <div className="text-blue-400">contato@tetel.online</div>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6">
              <h4 className="font-semibold text-green-400 mb-2">🚀 Garantias</h4>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Relatório modelo imediato</li>
                <li>• Análise real entregue em até 24 horas</li>
                <li>• Relatório 100% personalizado</li>
                <li>• Suporte pós-entrega incluído</li>
                <li>• Garantia de satisfação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
