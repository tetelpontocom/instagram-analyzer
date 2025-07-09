import { Instagram, Mail, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/tetel-digital-logo.jpg" alt="Tetel Digital" className="w-8 h-8" />
              <span className="text-xl font-bold">Tetel Digital</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Transformamos seu Instagram em uma máquina de autoridade digital através de análises profissionais
              baseadas em 25+ anos de experiência em tecnologia e inovação.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-purple-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-500 transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Serviços</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Análise Gratuita
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Consultoria Premium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Acompanhamento VIP
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Estratégias Personalizadas
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>WhatsApp: (82) 99917-6900</li>
              <li>E-mail: contato@tetel.online</li>
              <li>Horário: Seg-Sex 9h às 18h</li>
              <li>Resposta em até 2 horas</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Tetel Digital. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">25+ anos transformando ideias em soluções digitais</p>
        </div>
      </div>
    </footer>
  )
}
