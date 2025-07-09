import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instagram Analyzer - Tetel Digital | Análise Profissional de Instagram",
  description:
    "Transforme seu Instagram em uma máquina de autoridade digital. Análise profissional baseada em 25+ anos de experiência em tecnologia.",
  keywords: "instagram, análise, marketing digital, autoridade digital, tetel digital",
  authors: [{ name: "Tetel Digital" }],
  openGraph: {
    title: "Instagram Analyzer - Tetel Digital",
    description: "Análise profissional de perfis Instagram",
    url: "https://instagramanalyzer.tetel.online",
    siteName: "Instagram Analyzer",
    locale: "pt_BR",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
