"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Search, BarChart3, Target, CheckCircle, TrendingUp, Zap, ArrowRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface ProcessStep {
  id: number
  title: string
  subtitle: string
  icon: React.ComponentType<any>
  color: string
  bgColor: string
  metrics?: {
    label: string
    value: string
    trend?: "up" | "down" | "neutral"
  }[]
  insights?: string[]
  duration: number
}

export default function AnimatedProcessDemo() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)
  const [progress, setProgress] = useState(0)

  const steps: ProcessStep[] = [
    {
      id: 1,
      title: "Coletando Dados",
      subtitle: "Analisando seu perfil em tempo real",
      icon: Search,
      color: "text-blue-400",
      bgColor: "from-blue-500 to-purple-500",
      metrics: [
        { label: "Posts Analisados", value: "127", trend: "up" },
        { label: "Dados Coletados", value: "15K+", trend: "up" },
      ],
      duration: 3000,
    },
    {
      id: 2,
      title: "Processando IA",
      subtitle: "Inteligência artificial identificando padrões",
      icon: BarChart3,
      color: "text-purple-400",
      bgColor: "from-purple-500 to-pink-500",
      metrics: [
        { label: "Padrões Identificados", value: "23", trend: "up" },
        { label: "Algoritmos Rodando", value: "8", trend: "neutral" },
      ],
      insights: [
        "Detectando horários de maior engajamento",
        "Analisando performance de hashtags",
        "Identificando oportunidades perdidas",
      ],
      duration: 4000,
    },
    {
      id: 3,
      title: "Descobertas",
      subtitle: "Insights únicos sobre seu perfil",
      icon: Target,
      color: "text-orange-400",
      bgColor: "from-orange-500 to-red-500",
      insights: [
        "🚨 Você posta nos horários errados",
        "💡 Seu nicho tem 67% mais potencial",
        "⚡ Carrosséis geram +40% engajamento",
      ],
      duration: 3500,
    },
    {
      id: 4,
      title: "Relatório Pronto",
      subtitle: "Análise completa personalizada",
      icon: CheckCircle,
      color: "text-green-400",
      bgColor: "from-green-500 to-emerald-500",
      metrics: [
        { label: "Seguidores", value: "12.5K", trend: "up" },
        { label: "Engajamento", value: "4.2%", trend: "up" },
        { label: "Score", value: "85/100", trend: "up" },
      ],
      insights: [
        "✅ 15+ recomendações práticas",
        "📈 Projeção: +2.1K seguidores em 90 dias",
        "🎯 Plano de ação personalizado",
      ],
      duration: 4000,
    },
  ]

  // Auto-advance steps
  useEffect(() => {
    if (!isPlaying) return

    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length)
      setProgress(0)
    }, steps[currentStep].duration)

    return () => clearInterval(timer)
  }, [currentStep, isPlaying]) // Removed 'steps' from dependency array

  // Progress bar animation
  useEffect(() => {
    if (!isPlaying) return

    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        const increment = 100 / (steps[currentStep].duration / 50)
        return prev >= 100 ? 0 : prev + increment
      })
    }, 50)

    return () => clearInterval(progressTimer)
  }, [currentStep, isPlaying]) // Removed 'steps' from dependency array

  const handleWhatsAppContact = () => {
    // Redireciona para o formulário em vez do WhatsApp direto
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" })
  }

  const currentStepData = steps[currentStep]
  const StepIcon = currentStepData.icon

  return (
    <div className="relative">
      {/* Main Title */}
      <div className="text-center mb-8">
        <h3 className="text-2xl font-bold text-white mb-2">Veja como o Instagram Analyzer Funciona</h3>
        <p className="text-blue-200 text-sm">Processo automatizado em tempo real</p>
      </div>

      {/* Animated Card */}
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden">
        {/* Progress Bar */}
        <div className="h-1 bg-white/20">
          <div
            className="h-full bg-gradient-to-r from-yellow-400 to-orange-400 transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Header */}
        <div className={`bg-gradient-to-r ${currentStepData.bgColor} p-6 text-white relative overflow-hidden`}>
          {/* Animated Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full animate-pulse" />
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full animate-pulse delay-1000" />
          </div>

          <div className="relative flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <StepIcon className="w-6 h-6 animate-pulse" />
              </div>
              <div>
                <h4 className="text-xl font-bold">{currentStepData.title}</h4>
                <p className="text-white/80 text-sm">{currentStepData.subtitle}</p>
              </div>
            </div>

            {/* Step Indicator */}
            <div className="flex items-center gap-2">
              <Badge className="bg-white/20 text-white border-white/30">Etapa {currentStep + 1}/4</Badge>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsPlaying(!isPlaying)}
                className="text-white hover:bg-white/20 w-8 h-8 p-0"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Metrics */}
          {currentStepData.metrics && (
            <div className="grid grid-cols-2 gap-4">
              {currentStepData.metrics.map((metric, index) => (
                <div
                  key={index}
                  className="bg-white/5 rounded-lg p-3 text-center transform transition-all duration-500 hover:scale-105"
                  style={{
                    animationDelay: `${index * 200}ms`,
                    animation: "fadeInUp 0.6s ease-out forwards",
                  }}
                >
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <span className="text-lg font-bold text-white">{metric.value}</span>
                    {metric.trend === "up" && <TrendingUp className="w-4 h-4 text-green-400" />}
                  </div>
                  <div className="text-xs text-gray-300">{metric.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Insights */}
          {currentStepData.insights && (
            <div className="space-y-2">
              {currentStepData.insights.map((insight, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-lg p-2 transform transition-all duration-500"
                  style={{
                    animationDelay: `${index * 300}ms`,
                    animation: "slideInLeft 0.6s ease-out forwards",
                  }}
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full animate-pulse" />
                  <span>{insight}</span>
                </div>
              ))}
            </div>
          )}

          {/* Final Step CTA */}
          {currentStep === 3 && (
            <div className="space-y-4 pt-4 border-t border-white/20">
              <Button
                onClick={handleWhatsAppContact}
                className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-semibold transform transition-all duration-300 hover:scale-105"
              >
                <Zap className="w-4 h-4 mr-2" />
                Solicitar Análise Completa
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Badge className="w-full justify-center bg-yellow-500/20 text-yellow-300 border-yellow-500/30">
                ⚡ Resposta em até 2 horas
              </Badge>
            </div>
          )}
        </div>

        {/* Step Navigation Dots */}
        <div className="flex justify-center gap-2 p-4 bg-white/5">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentStep(index)
                setProgress(0)
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentStep ? "bg-yellow-400 w-6" : index < currentStep ? "bg-green-400" : "bg-white/30"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400/20 rounded-full animate-bounce" />
      <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/20 rounded-full animate-bounce delay-1000" />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}
