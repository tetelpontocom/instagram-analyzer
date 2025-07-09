import { Search, TrendingUp, Target, CheckCircle } from "lucide-react"

export default function SimpleMethodologySection() {
  const steps = [
    {
      icon: Search,
      title: "Revele o que está travando seu crescimento",
      description: "Identificamos exatamente onde seu perfil está perdendo seguidores e engajamento.",
    },
    {
      icon: TrendingUp,
      title: "Use os dados do seu perfil para crescer mais rápido",
      description: "Transformamos números confusos em estratégias claras que realmente funcionam.",
    },
    {
      icon: Target,
      title: "Receba um plano prático para os próximos 30 dias",
      description: "Ações específicas que você pode implementar hoje mesmo para ver resultados.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Como Funciona Nossa Análise</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Em 3 passos simples, você descobre exatamente o que fazer para seu Instagram decolar
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-lg font-bold text-blue-600 mb-2">Passo {index + 1}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 shadow-md max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Por que nossa análise funciona?</h3>
              <div className="space-y-2">
                {[
                  "Focamos no que realmente importa para crescer",
                  "Linguagem simples, sem termos técnicos",
                  "Estratégias testadas com centenas de perfis",
                  "Resultados que você vê em 30 dias",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">24h</div>
              <div className="text-gray-700 font-medium">Você recebe sua análise</div>
              <div className="text-sm text-gray-600 mt-2">Direto no seu WhatsApp, pronta para implementar</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
