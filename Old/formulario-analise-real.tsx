"use client"

import type React from "react"

import { useState } from "react"
import { User, Mail, Instagram, Target, Clock, Shield, Send } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"

interface FormData {
  nome: string
  email: string
  whatsapp: string
  instagram: string
  nicho: string
  objetivos: string
  preferenciaContato: string
  aceitaTermos: boolean
}

export default function FormularioAnaliseReal() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    email: "",
    whatsapp: "",
    instagram: "",
    nicho: "",
    objetivos: "",
    preferenciaContato: "",
    aceitaTermos: false,
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simular envio para API
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardContent className="text-center py-12">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-green-800 mb-2">Solicitação Enviada!</h3>
          <p className="text-gray-600 mb-4">
            Recebemos sua solicitação de análise personalizada. Nossa equipe iniciará o trabalho e você receberá os
            resultados em até 24 horas.
          </p>
          <div className="bg-blue-50 p-4 rounded-lg">
            <Clock className="w-5 h-5 text-blue-600 mx-auto mb-2" />
            <p className="text-blue-800 font-medium">Prazo de entrega: até 24 horas</p>
            <p className="text-blue-600 text-sm">
              Via {formData.preferenciaContato === "email" ? "E-mail" : "WhatsApp"}
            </p>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl flex items-center justify-center gap-2">
          <Target className="w-6 h-6 text-purple-600" />
          Análise Real Personalizada
        </CardTitle>
        <CardDescription>
          Preencha os dados abaixo para receber uma análise completa e personalizada do seu perfil Instagram
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Dados Pessoais */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              Dados Pessoais
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome">Nome Completo *</Label>
                <Input
                  id="nome"
                  value={formData.nome}
                  onChange={(e) => handleInputChange("nome", e.target.value)}
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              <div>
                <Label htmlFor="email">E-mail *</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="whatsapp">WhatsApp *</Label>
                <Input
                  id="whatsapp"
                  value={formData.whatsapp}
                  onChange={(e) => handleInputChange("whatsapp", e.target.value)}
                  placeholder="(11) 99999-9999"
                  required
                />
              </div>
              <div>
                <Label htmlFor="instagram">Instagram *</Label>
                <Input
                  id="instagram"
                  value={formData.instagram}
                  onChange={(e) => handleInputChange("instagram", e.target.value)}
                  placeholder="@seu_usuario"
                  required
                />
              </div>
            </div>
          </div>

          {/* Informações do Negócio */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Instagram className="w-5 h-5 text-purple-600" />
              Sobre seu Instagram
            </h4>

            <div>
              <Label htmlFor="nicho">Nicho/Área de Atuação *</Label>
              <Select onValueChange={(value) => handleInputChange("nicho", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione seu nicho" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="moda">Moda e Beleza</SelectItem>
                  <SelectItem value="fitness">Fitness e Saúde</SelectItem>
                  <SelectItem value="food">Gastronomia</SelectItem>
                  <SelectItem value="tech">Tecnologia</SelectItem>
                  <SelectItem value="business">Negócios</SelectItem>
                  <SelectItem value="lifestyle">Lifestyle</SelectItem>
                  <SelectItem value="education">Educação</SelectItem>
                  <SelectItem value="art">Arte e Design</SelectItem>
                  <SelectItem value="travel">Viagem</SelectItem>
                  <SelectItem value="other">Outro</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="objetivos">Objetivos no Instagram *</Label>
              <Textarea
                id="objetivos"
                value={formData.objetivos}
                onChange={(e) => handleInputChange("objetivos", e.target.value)}
                placeholder="Descreva seus principais objetivos no Instagram (ex: aumentar vendas, ganhar seguidores, melhorar engajamento...)"
                rows={4}
                required
              />
            </div>
          </div>

          {/* Preferência de Contato */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg flex items-center gap-2">
              <Mail className="w-5 h-5 text-purple-600" />
              Preferência de Contato
            </h4>

            <RadioGroup
              value={formData.preferenciaContato}
              onValueChange={(value) => handleInputChange("preferenciaContato", value)}
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="email" id="email-pref" />
                <Label htmlFor="email-pref">E-mail</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="whatsapp" id="whatsapp-pref" />
                <Label htmlFor="whatsapp-pref">WhatsApp</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Termos */}
          <div className="flex items-center space-x-2">
            <Checkbox
              id="termos"
              checked={formData.aceitaTermos}
              onCheckedChange={(checked) => handleInputChange("aceitaTermos", checked as boolean)}
            />
            <Label htmlFor="termos" className="text-sm">
              Aceito os termos de uso e política de privacidade. Garanto que as informações fornecidas são verdadeiras.
              *
            </Label>
          </div>

          {/* Garantias */}
          <div className="bg-green-50 p-4 rounded-lg space-y-2">
            <div className="flex items-center gap-2 text-green-800">
              <Shield className="w-4 h-4" />
              <span className="font-medium">Nossas Garantias:</span>
            </div>
            <ul className="text-green-700 text-sm space-y-1 ml-6">
              <li>• Análise 100% personalizada e confidencial</li>
              <li>• Entrega garantida em até 24 horas</li>
              <li>• Relatório completo com recomendações práticas</li>
              <li>• Suporte pós-entrega para dúvidas</li>
            </ul>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.aceitaTermos}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                Enviando...
              </>
            ) : (
              <>
                <Send className="w-4 h-4 mr-2" />
                Solicitar Análise Real
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
