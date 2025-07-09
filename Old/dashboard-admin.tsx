"use client"

import { useState } from "react"
import { Calendar, Mail, Phone, Instagram, User, Eye, CheckCircle, Clock, AlertCircle } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Solicitacao {
  id: string
  nome: string
  email: string
  whatsapp: string
  instagram: string
  nicho: string
  objetivos: string
  preferenciaContato: string
  status: "pendente" | "em_andamento" | "concluida"
  dataEnvio: string
  prazoEntrega: string
}

export default function DashboardAdmin() {
  const [solicitacoes] = useState<Solicitacao[]>([
    {
      id: "1",
      nome: "Maria Silva",
      email: "maria@email.com",
      whatsapp: "(11) 99999-9999",
      instagram: "@maria_fitness",
      nicho: "Fitness e Saúde",
      objetivos: "Aumentar engajamento e vendas de consultoria fitness",
      preferenciaContato: "whatsapp",
      status: "pendente",
      dataEnvio: "2024-01-15 14:30",
      prazoEntrega: "2024-01-16 14:30",
    },
    {
      id: "2",
      nome: "João Santos",
      email: "joao@email.com",
      whatsapp: "(11) 88888-8888",
      instagram: "@joao_business",
      nicho: "Negócios",
      objetivos: "Melhorar presença digital da empresa",
      preferenciaContato: "email",
      status: "em_andamento",
      dataEnvio: "2024-01-15 10:15",
      prazoEntrega: "2024-01-16 10:15",
    },
    {
      id: "3",
      nome: "Ana Costa",
      email: "ana@email.com",
      whatsapp: "(11) 77777-7777",
      instagram: "@ana_moda",
      nicho: "Moda e Beleza",
      objetivos: "Aumentar seguidores e parcerias com marcas",
      preferenciaContato: "email",
      status: "concluida",
      dataEnvio: "2024-01-14 16:45",
      prazoEntrega: "2024-01-15 16:45",
    },
  ])

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pendente":
        return (
          <Badge variant="outline" className="border-yellow-300 text-yellow-700">
            <Clock className="w-3 h-3 mr-1" />
            Pendente
          </Badge>
        )
      case "em_andamento":
        return (
          <Badge variant="outline" className="border-blue-300 text-blue-700">
            <AlertCircle className="w-3 h-3 mr-1" />
            Em Andamento
          </Badge>
        )
      case "concluida":
        return (
          <Badge variant="outline" className="border-green-300 text-green-700">
            <CheckCircle className="w-3 h-3 mr-1" />
            Concluída
          </Badge>
        )
      default:
        return <Badge variant="outline">Desconhecido</Badge>
    }
  }

  const filtrarPorStatus = (status: string) => {
    if (status === "todas") return solicitacoes
    return solicitacoes.filter((s) => s.status === status)
  }

  const SolicitacaoCard = ({ solicitacao }: { solicitacao: Solicitacao }) => (
    <Card className="mb-4">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-lg flex items-center gap-2">
              <User className="w-5 h-5 text-purple-600" />
              {solicitacao.nome}
            </CardTitle>
            <CardDescription className="flex items-center gap-4 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {solicitacao.dataEnvio}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                Prazo: {solicitacao.prazoEntrega}
              </span>
            </CardDescription>
          </div>
          {getStatusBadge(solicitacao.status)}
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{solicitacao.email}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{solicitacao.whatsapp}</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-4 h-4 text-gray-500" />
              <span className="text-sm">{solicitacao.instagram}</span>
            </div>
          </div>
          <div>
            <Badge variant="secondary" className="mb-2">
              {solicitacao.nicho}
            </Badge>
            <p className="text-sm text-gray-600">{solicitacao.objetivos}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <Button size="sm" variant="outline">
            <Eye className="w-4 h-4 mr-1" />
            Ver Detalhes
          </Button>
          {solicitacao.status === "pendente" && (
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
              Iniciar Análise
            </Button>
          )}
          {solicitacao.status === "em_andamento" && (
            <Button size="sm" className="bg-green-600 hover:bg-green-700">
              Marcar como Concluída
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold mb-2">Dashboard Administrativo</h1>
        <p className="text-gray-600">Gerencie as solicitações de análise do Instagram Analyzer</p>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total</p>
                <p className="text-2xl font-bold">{solicitacoes.length}</p>
              </div>
              <User className="w-8 h-8 text-gray-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Pendentes</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {solicitacoes.filter((s) => s.status === "pendente").length}
                </p>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Em Andamento</p>
                <p className="text-2xl font-bold text-blue-600">
                  {solicitacoes.filter((s) => s.status === "em_andamento").length}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Concluídas</p>
                <p className="text-2xl font-bold text-green-600">
                  {solicitacoes.filter((s) => s.status === "concluida").length}
                </p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de Solicitações */}
      <Tabs defaultValue="todas" className="w-full">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="todas">Todas</TabsTrigger>
          <TabsTrigger value="pendente">Pendentes</TabsTrigger>
          <TabsTrigger value="em_andamento">Em Andamento</TabsTrigger>
          <TabsTrigger value="concluida">Concluídas</TabsTrigger>
        </TabsList>

        <TabsContent value="todas" className="mt-6">
          {solicitacoes.map((solicitacao) => (
            <SolicitacaoCard key={solicitacao.id} solicitacao={solicitacao} />
          ))}
        </TabsContent>

        <TabsContent value="pendente" className="mt-6">
          {filtrarPorStatus("pendente").map((solicitacao) => (
            <SolicitacaoCard key={solicitacao.id} solicitacao={solicitacao} />
          ))}
        </TabsContent>

        <TabsContent value="em_andamento" className="mt-6">
          {filtrarPorStatus("em_andamento").map((solicitacao) => (
            <SolicitacaoCard key={solicitacao.id} solicitacao={solicitacao} />
          ))}
        </TabsContent>

        <TabsContent value="concluida" className="mt-6">
          {filtrarPorStatus("concluida").map((solicitacao) => (
            <SolicitacaoCard key={solicitacao.id} solicitacao={solicitacao} />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
