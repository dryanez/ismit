import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"
import ConstructionPage from "@/components/construction-page"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "iSMIT 2026 World Congress | Nürnberg, Germany",
  description:
    "Disruptive AGE in Surgical Innovation: Artificial Intelligence · New-Generation Materials · Emerging Robotics",
  generator: "v0.dev",
}

function LayoutContent({ children }: { children: React.ReactNode }) {
  // Check if we're in the browser and if dev mode is enabled
  if (typeof window !== "undefined") {
    const urlParams = new URLSearchParams(window.location.search)
    const isDev = urlParams.get("dev") === "true"

    if (!isDev) {
      return <ConstructionPage />
    }
  }

  // Server-side rendering or dev mode - show normal content
  return (
    <>
      <ScrollToTop />
      {children}
    </>
  )
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  )
}
