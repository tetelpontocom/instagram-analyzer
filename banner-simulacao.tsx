"use client"

import { AlertTriangle, ArrowRight } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"

interface BannerSimulacaoProps {
  onSolicitarAnaliseReal: () => void
}

export default function BannerSimulacao({ onSolicitarAnaliseReal }: BannerSimulacaoProps) {
  return (
    <Alert className="border-amber-200 bg-amber-50 mb-6">
      <AlertTriangle className="h-4 w-4 text-amber-600" />
      <AlertDescription className="flex items-center justify-between">
        <div className="flex-1">
          <p className="text-amber-800 font-medium mb-1">⚠️ Estes são dados simulados para demonstração</p>
          <p className="text-amber-700 text-sm">
            Para receber a análise real e personalizada do seu perfil, preencha nosso formulário e receba os resultados
            em até 24 horas
          </p>
        </div>
        <Button
          onClick={onSolicitarAnaliseReal}
          className="ml-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
        >
          Análise Real
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </AlertDescription>
    </Alert>
  )
}
