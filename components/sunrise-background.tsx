"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function SunriseBackground() {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setMounted(false)
    const timer = setTimeout(() => setMounted(true), 50)
    return () => clearTimeout(timer)
  }, [pathname])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2] via-[#F5EFE7] to-[#E8DCC8]" />

      {/* Sun - using Pillars gold tones */}
      <div
        className={cn("absolute -translate-x-1/2", mounted ? "opacity-100" : "opacity-0")}
        style={{
          top: "calc(18% - 8px)",
          left: "58%",
          width: "128px",
          height: "128px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(201, 168, 105, 0.9) 0%, rgba(201, 168, 105, 0.6) 30%, transparent 70%)",
          boxShadow: "0 0 180px 90px rgba(201, 168, 105, 0.3)",
          animation: mounted ? "sunRise 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) forwards" : "none",
        }}
      />

      {/* Foreground mountains - navy blue tint */}
      <svg
        className={cn(
          "absolute bottom-0 left-0 w-full transition-all duration-1000",
          mounted ? "opacity-100" : "opacity-0",
        )}
        style={{
          height: "20vh",
          animation: mounted ? "mountainRiseFront 1.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards" : "none",
        }}
        viewBox="0 0 1200 300"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,300 L 0,180 L 280,80 L 420,160 L 520,120 L 680,180 L 850,100 L 1000,160 L 1200,140 L 1200,300 Z"
          fill="rgba(74, 95, 127, 0.25)"
        />
      </svg>

      {/* Mid-layer mountains - lighter navy */}
      <svg
        className={cn(
          "absolute bottom-0 left-0 w-full transition-all duration-1000",
          mounted ? "opacity-100" : "opacity-0",
        )}
        style={{
          height: "28vh",
          animation: mounted ? "mountainRiseMid 1.7s cubic-bezier(0.22, 0.61, 0.36, 1) 0.1s forwards" : "none",
        }}
        viewBox="0 0 1200 400"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,400 L 0,220 L 400,120 L 650,200 L 900,140 L 1200,180 L 1200,400 Z"
          fill="rgba(74, 95, 127, 0.15)"
        />
      </svg>
    </div>
  )
}
