import { Instagram } from "lucide-react"

export default function Component() {
  return (
    <header className="w-full py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-4 mb-4">
          <Instagram className="w-12 h-12 text-purple-600" />
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Instagram Analyzer
          </h1>
        </div>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
          Análise avançada de perfis para crescimento qualificado e engajamento real
        </p>
      </div>
    </header>
  )
}
