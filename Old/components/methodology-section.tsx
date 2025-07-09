import { Search, BarChart3, Target, CheckCircle } from "lucide-react"

export default function MethodologySection() {
  const steps = [
    {
      icon: Search,
      title: "Análise Profunda",
      description:
        "Coletamos e analisamos todos os dados do seu perfil: engajamento, audiência, conteúdo e concorrência.",
    },
    {
      icon: BarChart3,
      title: "Inteligência de Dados",
      description:
        "Processamos as informações com IA avançada para identificar oportunidades e pontos de melhoria únicos.",
    },
    {
      icon: Target,
      title: "Estratégias Personalizadas",
      description: "Criamos um plano de ação específico para o seu nicho, com recomendações práticas e mensuráveis.",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossa Metodologia: 25+ Anos de Experiência em Tecnologia e Inovação
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Desenvolvemos uma metodologia exclusiva baseada em décadas de experiência em TI, programação e análise de
            dados, combinada com inteligência artificial para transformar seu perfil em uma máquina de autoridade
            digital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-purple-600 to-blue-600"></div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Por que nossa análise é diferente?</h3>
              <div className="space-y-3">
                {[
                  "Análise baseada em 25+ anos de experiência em TI",
                  "Metodologia testada com milhares de clientes",
                  "Visão estratégica de quem foi pioneiro em internet",
                  "Plano de ação prático e mensurável",
                  "Suporte de especialista em tecnologia",
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">24h</div>
                <div className="text-gray-700 font-medium">Prazo de Entrega</div>
                <div className="text-sm text-gray-600 mt-2">
                  Análise completa entregue em até 24 horas via WhatsApp ou e-mail
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
