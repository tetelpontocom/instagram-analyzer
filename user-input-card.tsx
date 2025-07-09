"use client"

import { useState } from "react"
import { User, BarChart3, Loader2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function UserInputCard() {
  const [username, setUsername] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleAnalyze = async () => {
    if (!username.trim()) return

    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000))
    setIsLoading(false)

    // Here you would typically handle the analysis results
    console.log("Analyzing:", username)
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <User className="w-5 h-5 text-purple-600" />
          <CardTitle className="text-xl">Analisar Perfil</CardTitle>
        </div>
        <CardDescription>Digite o nome de usuário do Instagram para iniciar a análise completa</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="username">Nome de usuário</Label>
          <div className="flex gap-2">
            <Input
              id="username"
              type="text"
              placeholder="@usuario_instagram"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={isLoading}
              className="flex-1"
            />
            <Button
              onClick={handleAnalyze}
              disabled={isLoading || !username.trim()}
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-6"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Analisando...
                </>
              ) : (
                <>
                  <BarChart3 className="w-4 h-4 mr-2" />
                  Analisar
                </>
              )}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
