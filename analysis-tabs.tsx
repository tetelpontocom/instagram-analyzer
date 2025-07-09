"use client"

import { User, Eye, BarChart3, Lightbulb, Palette, Heart, CheckCircle, AlertCircle, Info } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

interface ProgressItemProps {
  label: string
  value: number
}

interface RecommendationItemProps {
  type: "success" | "warning" | "info"
  title: string
  description: string
}

function ProgressItem({ label, value }: ProgressItemProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Excelente"
    if (score >= 60) return "Bom"
    return "Precisa melhorar"
  }

  const getProgressColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{label}</span>
        <div className="flex items-center gap-2">
          <span className={`text-sm font-semibold ${getScoreColor(value)}`}>{value}%</span>
          <span className={`text-xs px-2 py-1 rounded-full ${getScoreColor(value)} bg-opacity-10`}>
            {getScoreLabel(value)}
          </span>
        </div>
      </div>
      <div className="relative">
        <Progress value={value} className="h-2" />
        <div
          className={`absolute top-0 left-0 h-2 rounded-full transition-all duration-300 ${getProgressColor(value)}`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  )
}

function RecommendationItem({ type, title, description }: RecommendationItemProps) {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case "warning":
        return <AlertCircle className="w-5 h-5 text-yellow-600" />
      case "info":
        return <Info className="w-5 h-5 text-blue-600" />
      default:
        return <Info className="w-5 h-5 text-blue-600" />
    }
  }

  return (
    <div className="flex gap-3 p-4 rounded-lg border bg-card">
      <div className="flex-shrink-0 mt-0.5">{getIcon()}</div>
      <div className="flex-1">
        <h4 className="font-semibold text-sm mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

export default function AnalysisTabs() {
  // Sample data for behavioral analysis
  const behavioralData = [
    { label: "Autenticidade", value: 85 },
    { label: "Interação com Audiência", value: 72 },
    { label: "Consistência", value: 45 },
    { label: "Relevância", value: 91 },
  ]

  // Sample data for visual analysis
  const visualData = [
    { label: "Qualidade da Imagem", value: 78 },
    { label: "Consistência de Cores", value: 92 },
    { label: "Composição", value: 65 },
    { label: "Alinhamento com Marca", value: 43 },
  ]

  // Sample recommendations data
  const recommendations = [
    {
      type: "success" as const,
      title: "Consistência de Cores Excelente",
      description:
        "Seu perfil mantém uma paleta de cores coesa. Continue usando essas cores para fortalecer sua identidade visual.",
    },
    {
      type: "warning" as const,
      title: "Melhore a Consistência de Postagens",
      description:
        "Detectamos irregularidade na frequência de posts. Recomendamos manter um cronograma regular de 3-4 posts por semana.",
    },
    {
      type: "info" as const,
      title: "Otimize os Horários de Postagem",
      description:
        "Seus seguidores são mais ativos entre 18h-21h. Considere agendar suas publicações neste período para maior alcance.",
    },
    {
      type: "warning" as const,
      title: "Alinhamento com Marca Precisa de Atenção",
      description:
        "Algumas publicações não refletem completamente sua identidade de marca. Revise o conteúdo para maior coerência.",
    },
    {
      type: "info" as const,
      title: "Explore Mais Stories Interativos",
      description:
        "Stories com enquetes e perguntas geram 40% mais engajamento. Experimente usar essas ferramentas regularmente.",
    },
    {
      type: "success" as const,
      title: "Taxa de Engajamento Acima da Média",
      description:
        "Parabéns! Sua taxa de engajamento está 23% acima da média do seu nicho. Continue com o bom trabalho!",
    },
  ]

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <Tabs defaultValue="comportamental" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="comportamental" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            <span className="hidden sm:inline">Comportamental</span>
          </TabsTrigger>
          <TabsTrigger value="visual" className="flex items-center gap-2">
            <Eye className="w-4 h-4" />
            <span className="hidden sm:inline">Visual</span>
          </TabsTrigger>
          <TabsTrigger value="metricas" className="flex items-center gap-2">
            <BarChart3 className="w-4 h-4" />
            <span className="hidden sm:inline">Métricas</span>
          </TabsTrigger>
          <TabsTrigger value="recomendacoes" className="flex items-center gap-2">
            <Lightbulb className="w-4 h-4" />
            <span className="hidden sm:inline">Recomendações</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="comportamental" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <User className="w-5 h-5 text-purple-600" />
                <CardTitle>Análise Comportamental</CardTitle>
              </div>
              <CardDescription>Avaliação da postura, interação e consistência do perfil</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {behavioralData.map((item, index) => (
                <ProgressItem key={index} label={item.label} value={item.value} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="visual" className="mt-6">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Palette className="w-5 h-5 text-purple-600" />
                <CardTitle>Análise Visual</CardTitle>
              </div>
              <CardDescription>Avaliação da qualidade visual, cores e composição</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {visualData.map((item, index) => (
                <ProgressItem key={index} label={item.label} value={item.value} />
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metricas" className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Engagement Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-purple-600" />
                  <CardTitle>Engajamento Médio</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Curtidas</span>
                  <Badge variant="default" className="bg-blue-100 text-blue-800 hover:bg-blue-200">
                    2.4K
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Comentários</span>
                  <Badge variant="default" className="bg-green-100 text-green-800 hover:bg-green-200">
                    186
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Compartilhamentos</span>
                  <Badge variant="default" className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    92
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Salvamentos</span>
                  <Badge variant="default" className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    341
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Reach and Impressions Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Eye className="w-5 h-5 text-purple-600" />
                  <CardTitle>Alcance e Impressões</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Taxa de Alcance</span>
                  <Badge variant="outline" className="border-blue-300 text-blue-700">
                    12.8%
                  </Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium">Taxa de Impressão</span>
                  <Badge variant="outline" className="border-green-300 text-green-700">
                    18.5%
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="recomendacoes" className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Recomendações Personalizadas</CardTitle>
              <CardDescription>Sugestões baseadas na análise do seu perfil</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recommendations.map((recommendation, index) => (
                  <RecommendationItem
                    key={index}
                    type={recommendation.type}
                    title={recommendation.title}
                    description={recommendation.description}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
