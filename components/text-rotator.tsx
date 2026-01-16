"use client"

import { useEffect, useState } from "react"

const phrases = [
  "Real People. Real Growth.",
  "Steady Hearts. Steady Community.",
  "Where Faith Meets Everyday Life.",
  "A Place to Come Back To.",
  "Growth You Can Feel.",
]

export default function TextRotator() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % phrases.length)
        setIsVisible(true)
      }, 800)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="h-8 flex items-center justify-center">
      <p
        className={`text-lg md:text-xl font-light text-muted-foreground transition-opacity duration-800 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        {phrases[currentIndex]}
      </p>
    </div>
  )
}
