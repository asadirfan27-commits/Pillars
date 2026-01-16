import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import FloatingHomeButton from "@/components/floating-home-button"
import ScrollToTop from "@/components/scroll-to-top"

const geist = Geist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-geist",
})

export const metadata: Metadata = {
  title: "Pillars - A weekly pause for the soul",
  description:
    "A prophetic-inspired community in Northern Virginia focused on building spiritual growth through learning, companionship, and good character.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geist.variable} font-sans antialiased`}>
        <ScrollToTop />
        <Navigation />
        {children}
        <Footer />
        <FloatingHomeButton />
        <Analytics />
      </body>
    </html>
  )
}
