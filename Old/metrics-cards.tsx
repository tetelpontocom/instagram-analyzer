import type React from "react"
import { Users, Heart, Camera, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface MetricCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  valueColor?: string
}

function MetricCard({ title, value, icon, valueColor = "text-gray-900" }: MetricCardProps) {
  return (
    <Card className="p-4">
      <CardContent className="p-0">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
          <div className="text-muted-foreground">{icon}</div>
        </div>
        <div className={`text-2xl font-bold ${valueColor}`}>{value}</div>
      </CardContent>
    </Card>
  )
}

export default function MetricsCards() {
  // Sample data - in a real app, this would come from props or API
  const metrics = {
    followers: "125.4K",
    engagementRate: "4.2%",
    posts: "342",
    qualityScore: 85,
  }

  // Function to get color based on quality score
  const getQualityScoreColor = (score: number) => {
    if (score >= 80) return "text-green-600"
    if (score >= 60) return "text-yellow-600"
    return "text-red-600"
  }

  return (
    <div className="w-full max-w-4xl mx-auto px-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard title="Seguidores" value={metrics.followers} icon={<Users className="w-5 h-5" />} />
        <MetricCard title="Taxa de Engajamento" value={metrics.engagementRate} icon={<Heart className="w-5 h-5" />} />
        <MetricCard title="Posts" value={metrics.posts} icon={<Camera className="w-5 h-5" />} />
        <MetricCard
          title="Score de Qualidade"
          value={metrics.qualityScore}
          icon={<TrendingUp className="w-5 h-5" />}
          valueColor={getQualityScoreColor(metrics.qualityScore)}
        />
      </div>
    </div>
  )
}
