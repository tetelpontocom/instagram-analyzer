"use client"

import { Check, Star, Crown, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function PricingSection() {
  const handleWhatsAppContact = (plan: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no plano ${plan} do Instagram Analyzer. Vim através do site e gostaria de mais informações.`,
    )
    window.open(`https://wa.me/5511999999999?text=${message}`, "_blank")
  }

  const plans = [
    {
      name: "Análise Inicial",
      subtitle: "Gratuita",
      price: "R$ 0",
      period: "",
      description: "Perfeito para conhecer nossa metodologia",
      features: [
        "Análise básica do perfil",
        "Score de qualidade geral",
        "3 recomendações principais",
        "Relatório em PDF",
        "Válido por 7 dias",
      ],
      cta: "Começar Grátis",
      popular: false,
      icon: Star,
      color: "from-gray-600 to-gray-700",
    },
    {
      name: "Consultoria Premium",
      subtitle: "Mais Procurado",
      price: "R$ 497",
      period: "",
      description: "Análise completa + estratégia personalizada",
      features: [
        "Análise completa e detalhada",
        "Estratégia personalizada 90 dias",
        "Análise da concorrência",
        "Plano de conteúdo mensal",
        "1 sessão de consultoria (1h)",
        "Suporte por 30 dias",
        "Garantia de 7 dias",
      ],
      cta: "Solicitar Agora",
      popular: true,
      icon: Crown,
      color: "from-purple-600 to-blue-600",
    },
    {
      name: "Acompanhamento VIP",
      subtitle: "Resultados Garantidos",
      price: "R$ 1.497",
      period: "/mês",
      description: "Gestão completa + acompanhamento mensal",
      features: [
        "Tudo do plano Premium",
        "Gestão mensal do perfil",
        "Criação de estratégias semanais",
        "Análise mensal de resultados",
        "Suporte prioritário via WhatsApp",
        "3 sessões de consultoria/mês",
        "Garantia de resultados",
      ],
      cta: "Quero Ser VIP",
      popular: false,
      icon: Zap,
      color: "from-green-600 to-emerald-600",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Escolha o Plano Ideal para Seu Crescimento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do básico ao VIP, temos a solução perfeita para transformar seu Instagram em uma máquina de autoridade
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-purple-500 scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-blue-600">
                  Mais Procurado
                </Badge>
              )}

              <CardHeader className="text-center pb-4">
                <div
                  className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${plan.color} flex items-center justify-center`}
                >
                  <plan.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <CardDescription>{plan.subtitle}</CardDescription>
                <div className="pt-4">
                  <div className="text-4xl font-bold text-gray-900">
                    {plan.price}
                    <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <Check className="w-4 h-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  onClick={() => handleWhatsAppContact(plan.name)}
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      : "bg-gray-900 hover:bg-gray-800"
                  }`}
                >
                  {plan.cta}
                </Button>

                {plan.popular && (
                  <div className="text-center">
                    <div className="text-sm text-green-600 font-medium">✅ Garantia de 7 dias</div>
                    <div className="text-xs text-gray-500">Não ficou satisfeito? Devolvemos seu dinheiro</div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Ainda tem dúvidas sobre qual plano escolher?</p>
          <Button
            onClick={() => handleWhatsAppContact("Consultoria")}
            variant="outline"
            className="border-purple-600 text-purple-600 hover:bg-purple-50"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
