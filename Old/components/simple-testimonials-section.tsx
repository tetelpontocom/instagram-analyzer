import { Star, Quote } from "lucide-react"

export default function SimpleTestimonialsSection() {
  const testimonials = [
    {
      name: "Maria Silva",
      role: "Nutricionista",
      instagram: "@nutri_maria",
      content:
        "Em 1 mês seguindo as dicas, meu perfil saiu de 800 para 2.1K seguidores! E o melhor: ganhei 5 clientes novos.",
      results: "+163% seguidores",
      avatar: "MS",
    },
    {
      name: "João Santos",
      role: "Personal Trainer",
      instagram: "@joao_fit",
      content:
        "A análise mostrou que eu estava errando no tipo de conteúdo. Mudei e em 3 semanas dobrei o engajamento!",
      results: "+200% engajamento",
      avatar: "JS",
    },
    {
      name: "Ana Costa",
      role: "Designer",
      instagram: "@ana_design",
      content:
        "Descobri que meus posts não apareciam porque eu usava hashtags erradas. Corrigi e meu alcance explodiu!",
      results: "+300% alcance",
      avatar: "AC",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Resultados Reais de Quem Testou</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como uma análise simples mudou o jogo para esses perfis
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <Quote className="w-8 h-8 text-blue-300 mb-4" />

              <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.role}</div>
                    <div className="text-sm text-blue-600">{testimonial.instagram}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-green-600">{testimonial.results}</div>
                  <div className="text-xs text-gray-500">em 30 dias</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Founder Section - Simplified */}
        <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Quem faz suas análises?</h3>
              <p className="text-gray-700 mb-4">
                <strong>Especialista com 25+ anos</strong> em tecnologia e análise de dados. Já ajudou mais de 300
                perfis a crescerem de forma estratégica.
              </p>
              <div className="space-y-2 text-sm text-gray-600">
                <div>✅ Ex-desenvolvedor de sistemas para grandes empresas</div>
                <div>✅ Pioneiro em internet no Brasil</div>
                <div>✅ Especialista em análise de dados e IA</div>
                <div>✅ Foco em resultados práticos e rápidos</div>
              </div>
            </div>
            <div className="text-center">
              <img
                src="/images/founder-photo.jpg"
                alt="Especialista Tetel Digital"
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
              />
              <div className="text-lg font-semibold text-gray-900">Especialista Tetel Digital</div>
              <div className="text-blue-600">Analista de Instagram</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
