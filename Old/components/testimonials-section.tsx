import { Star, Quote } from "lucide-react"

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Coach de Fitness",
      instagram: "@maria_fitness",
      content:
        "Em 30 dias seguindo as recomendações, meu engajamento aumentou 180% e consegui 3 novos clientes por semana!",
      results: "+180% engajamento",
      avatar: "MS",
    },
    {
      name: "João Santos",
      role: "Consultor de Marketing",
      instagram: "@joao_marketing",
      content:
        "A análise foi cirúrgica! Identifiquei exatamente onde estava errando e agora meu perfil virou referência no nicho.",
      results: "+250% alcance",
      avatar: "JS",
    },
    {
      name: "Ana Costa",
      role: "Arquiteta",
      instagram: "@ana_arquitetura",
      content:
        "Nunca pensei que pequenos ajustes fariam tanta diferença. Hoje recebo propostas de projetos pelo Instagram!",
      results: "+5 projetos/mês",
      avatar: "AC",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            A Trajetória que Construiu Autoridade e Experiência por Trás da Tela!
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Veja os resultados reais de quem transformou seu Instagram em uma máquina de autoridade e vendas
          </p>
        </div>

        {/* Seção do Fundador */}
        <div className="bg-white rounded-2xl p-8 shadow-lg mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Conheça o Especialista</h3>
              <p className="text-gray-700 mb-4">
                <strong>25+ anos de experiência</strong> em tecnologia, programação e análise de dados. Pioneiro em
                internet banda larga, desenvolvedor de sistemas, ex-candidato político e especialista em TI.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>• Primeiro provedor de internet banda larga da região</div>
                <div>• 3.000+ clientes atendidos em projetos de tecnologia</div>
                <div>• Desenvolvedor de sistemas para empresas e governo</div>
                <div>• Especialista em análise de dados e IA</div>
                <div>• Projeto social: Internet gratuita em praças públicas</div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/founder-photo.jpg"
                alt="Fundador Tetel Digital"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <div className="text-lg font-semibold text-gray-900">Especialista Tetel Digital</div>
              <div className="text-purple-600">Fundador & Estrategista Digital</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-purple-300 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-purple-600">{testimonial.instagram}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
                  <div className="text-xs text-gray-500">resultado</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600">Anos de Experiência</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">3K+</div>
              <div className="text-gray-600">Clientes Atendidos</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-gray-600">Foco em Resultados</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">24h</div>
              <div className="text-gray-600">Prazo de Entrega</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
