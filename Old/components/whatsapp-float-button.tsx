"use client"

import { useState } from "react"
import { MessageCircle, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function WhatsAppFloatButton() {
  const [expanded, setExpanded] = useState(true)

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Olá! Vim do Instagram Analyzer e gostaria de falar sobre uma análise personalizada do meu perfil Instagram.",
    )
    window.open(`https://wa.me/5582999176900?text=${message}`, "_blank")
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {expanded ? (
        <div
          className="bg-white rounded-2xl shadow-2xl p-4 cursor-pointer hover:shadow-3xl transition-all duration-300 transform hover:scale-105 border border-gray-200 max-w-xs"
          onClick={handleWhatsAppClick}
        >
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src="/images/founder-photo.jpg"
                alt="Especialista Tetel Digital"
                className="w-12 h-12 rounded-full object-cover border-2 border-purple-500"
              />
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900">Especialista Tetel</p>
              <p className="text-xs text-gray-600 truncate">Olá! Como posso ajudar?</p>
            </div>
            <div className="flex flex-col space-y-1">
              <div className="bg-green-500 p-2 rounded-full">
                <MessageCircle className="w-4 h-4 text-white" />
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  setExpanded(false)
                }}
                className="text-gray-400 hover:text-gray-600 text-xs"
              >
                <X className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative">
          <Button
            size="lg"
            className="rounded-full bg-green-500 hover:bg-green-600 shadow-lg w-14 h-14 p-0 overflow-hidden"
            onClick={() => setExpanded(true)}
          >
            <img src="/images/founder-photo.jpg" alt="Especialista" className="w-full h-full object-cover" />
          </Button>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white animate-pulse"></div>
        </div>
      )}
    </div>
  )
}
