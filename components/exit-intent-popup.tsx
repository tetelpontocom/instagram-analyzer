"use client"

import { useState, useEffect } from "react"
import { X, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ExitIntentPopup() {
  const [showExitIntent, setShowExitIntent] = useState(false)

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true)
      }
    }

    document.addEventListener("mouseleave", handleMouseLeave)
    return () => document.removeEventListener("mouseleave", handleMouseLeave)
  }, [])

  const handleWhatsAppContact = () => {
    const message = encodeURIComponent(
      "Olá! Vi a oferta especial de 40% de desconto no Instagram Analyzer. Gostaria de mais informações sobre a análise de Instagram!",
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
    setShowExitIntent(false)
  }

  if (!showExitIntent) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-in zoom-in-95 duration-300">
        <button
          onClick={() => setShowExitIntent(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="text-center space-y-4">
          <div className="text-4xl">🎯</div>
          <h3 className="text-2xl font-bold text-gray-900">Espere!</h3>
          <p className="text-gray-600">
            Antes de sair, que tal garantir um <strong>desconto exclusivo de 40%</strong> na sua Análise Completa de
            Instagram?
          </p>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <p className="text-red-800 font-semibold">🔥 Oferta especial: R$ 497 → R$ 297</p>
            <p className="text-red-600 text-sm">Válida apenas hoje!</p>
          </div>
          <Button className="w-full bg-red-600 hover:bg-red-700 text-white" onClick={handleWhatsAppContact}>
            <Target className="w-4 h-4 mr-2" />
            Quero o Desconto!
          </Button>
          <p className="text-xs text-gray-500">Oferta limitada - não perca esta oportunidade!</p>
        </div>
      </div>
    </div>
  )
}
