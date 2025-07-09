"use client"

import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SimplePersonalMessageSection() {
  const handleAnalysisClick = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const handleTeamClick = () => {
    const message = encodeURIComponent(
      "Olá! Li a mensagem pessoal do Tetel no Instagram Analyzer e gostaria de falar com a equipe antes de solicitar minha análise. Tenho algumas dúvidas sobre como funciona.",
    )
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)

    if (isMobile) {
      window.location.href = `https://wa.me/5582999176900?text=${message}`
    } else {
      window.open(`https://web.whatsapp.com/send?phone=5582999176900&text=${message}`, "_blank")
    }
  }

  return (
    <section className="w-full bg-[#1b1e3b] text-white py-12 md:py-16 px-4 md:px-20 text-center rounded-lg shadow-2xl mx-4 md:mx-8 mb-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Uma Mensagem Pessoal para Você</h2>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          Oi, aqui é o <strong>Tetel</strong>.<br />
          Se você chegou até aqui, provavelmente já entendeu que o seu perfil no Instagram tem potencial para crescer —
          mas ainda está travado por falta de direção.
          <br />
          <br />
          Eu sei como é. Já estive aí. Por isso, criei o <strong>Instagram Analyzer</strong>: um processo direto,
          prático e baseado em dados reais que vai te mostrar exatamente o que fazer para transformar o seu perfil em um
          canal de autoridade, conexão e oportunidade.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-6">
          Seja você empreendedor, freelancer, coach, consultor ou profissional liberal — sua presença digital precisa
          refletir o seu valor.
          <br />E se você ainda não vê isso no seu perfil, eu posso te mostrar como mudar esse jogo. Com clareza, com
          inteligência, com estratégia.
        </p>

        <p className="text-base md:text-lg leading-relaxed mb-8 italic">
          Estou aqui para te ajudar a sair da invisibilidade e virar a chave da sua autoridade no Instagram.
          <br />
          Vamos juntos nessa transformação?
        </p>

        <div className="bg-[#272a50] p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Meus Compromissos com Você</h3>
          <ul className="space-y-3 text-left text-base md:text-lg">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#47d9a3] mt-0.5 flex-shrink-0" />
              <span>Entregar uma análise real com base em dados públicos do seu perfil</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#47d9a3] mt-0.5 flex-shrink-0" />
              <span>Revelar com precisão o que está travando o seu crescimento</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#47d9a3] mt-0.5 flex-shrink-0" />
              <span>Fornecer um plano de ação claro, estratégico e personalizado</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-[#47d9a3] mt-0.5 flex-shrink-0" />
              <span>Suporte direto via WhatsApp durante todo o processo</span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <Button
            onClick={handleAnalysisClick}
            className="bg-[#47d9a3] hover:bg-[#3bb98b] text-[#1b1e3b] font-semibold py-3 px-8 rounded-full transition-all duration-200 text-base md:text-lg w-full md:w-auto"
          >
            Quero Minha Análise Agora
          </Button>
          <Button
            onClick={handleTeamClick}
            variant="link"
            className="text-white underline hover:text-[#47d9a3] transition-all duration-200 text-base md:text-lg"
          >
            Falar com a Equipe
          </Button>
        </div>
      </div>
    </section>
  )
}
