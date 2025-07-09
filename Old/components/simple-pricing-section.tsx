"use client"

import { Check, Star, Crown, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function SimplePricingSection() {
  const handleWhatsAppContact = (plan: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no ${plan} do Instagram Analyzer. Gostaria de mais informações.`,
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  const plans = [
    {
      name: "Análise Gratuita",
      subtitle: "Para conhecer",
      price: "R$ 0",
      period: "",
      description: "Teste nossa metodologia",
      features: ["Análise básica do perfil", "3 dicas principais", "Relatório em PDF", "Válido por 7 dias"],
      cta: "Começar Grátis",
      popular: false,
      icon: Star,
      color: "from-gray-500 to-gray-600",
    },
    {
      name: "Análise Completa",
      subtitle: "Mais Escolhido",
      price: "R$ 97",
      period: "",
      description: "Tudo que você precisa para crescer",
      features: [
        "Análise completa e detalhada",
        "15+ insights personalizados",
        "Plano de ação 30 dias",
        "Horários ideais para postar",
        "Hashtags que funcionam",
        "Suporte por WhatsApp",
        "Garantia de 7 dias",
      ],
      cta: "Quero Minha Análise",
      popular: true,
      icon: Crown,
      color: "from-blue-500 to-purple-500",
    },
    {
      name: "Consultoria VIP",
      subtitle: "Acompanhamento",
      price: "R$ 297",
      period: "/mês",
      description: "Para quem quer resultados garantidos",
      features: [
        "Tudo da Análise Completa",
        "Consultoria mensal (1h)",
        "Acompanhamento semanal",
        "Ajustes na estratégia",
        "Suporte prioritário",
        "Garantia de resultados",
      ],
      cta: "Quero Ser VIP",
      popular: false,
      icon: Shield,
      color: "from-green-500 to-emerald-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Escolha Seu Plano</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Do gratuito ao VIP, temos a solução perfeita para seu Instagram crescer
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "ring-2 ring-blue-500 scale-105" : ""}`}>
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500">
                  Mais Escolhido
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
                      ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
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

        {/* Trust Signals */}
        <div className="mt-12 text-center">
          <div className="flex justify-center items-center gap-8 mb-6">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Pagamento Seguro</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span className="text-sm text-gray-600">Satisfação Garantida</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <span className="text-sm text-gray-600">+300 perfis ajudados</span>
            </div>
          </div>
          <p className="text-gray-600 mb-4">Ainda tem dúvidas sobre qual plano escolher?</p>
          <Button
            onClick={() => {
              const message = encodeURIComponent(
                "Olá! Tenho interesse no plano Consultoria do Instagram Analyzer. Gostaria de mais informações.",
              )
              window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
            }}
            variant="outline"
            className="border-blue-500 text-blue-600 hover:bg-blue-50"
          >
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  )
}
