"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Real people. Real growth.",
  "A place to come back to.",
  "Small steps. Lasting change.",
  "Steady hearts. Steady community.",
  "Find stillness in the rush.",
  "Come as you are. Leave more centered.",
  "Clarity for the week ahead.",
  "Where goodness becomes habit.",
  "Grow steady. Grow strong.",
  "A soft place for hard weeks.",
]

export default function ProgramsCrossfade() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false) // Start fade out

      setTimeout(() => {
        // After fade out completes, wait gap then change phrase
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
        setIsVisible(true) // Start fade in
      }, 1200) // 600ms fade out + 600ms gap
    }, 4800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div
      className="flex items-center justify-center min-h-[2.5rem]"
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <p
        className="text-base md:text-lg font-normal text-muted-foreground text-center transition-opacity duration-[600ms]"
        style={{
          opacity: isVisible ? 1 : 0,
          transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
          fontWeight: 400,
        }}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  )
}
