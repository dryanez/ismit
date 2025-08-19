import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}
