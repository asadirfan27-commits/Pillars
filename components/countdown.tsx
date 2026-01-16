"use client"

import { useEffect, useState } from "react"

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<{
    days: number
    hours: number
    minutes: number
    seconds: number
    isComplete: boolean
  } | null>(null)

  useEffect(() => {
    const targetDate = new Date("2026-04-06T19:00:00-04:00")

    const calculateTimeLeft = () => {
      const now = new Date()
      const difference = targetDate.getTime() - now.getTime()

      if (difference <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isComplete: true,
        }
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        isComplete: false,
      }
    }

    // Initial calculation
    setTimeLeft(calculateTimeLeft())

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!timeLeft) {
    return null
  }

  if (timeLeft.isComplete) {
    return (
      <div className="text-center py-8">
        <p className="text-lg md:text-xl font-light text-foreground">We start tonight at 7 PM. See you soon.</p>
      </div>
    )
  }

  return (
    <div className="text-center py-8" aria-live="polite" aria-atomic="true">
      <p className="text-base md:text-lg font-light text-muted-foreground mb-4">First gathering launches April 6.</p>
      <div className="flex items-center justify-center gap-4 md:gap-6">
        {[
          { value: timeLeft.days, label: "Days" },
          { value: timeLeft.hours, label: "Hours" },
          { value: timeLeft.minutes, label: "Minutes" },
          { value: timeLeft.seconds, label: "Seconds" },
        ].map((unit, index) => (
          <div key={unit.label} className="flex flex-col items-center">
            <div className="text-2xl md:text-3xl font-light tabular-nums" aria-label={`${unit.value} ${unit.label}`}>
              {String(unit.value).padStart(2, "0")}
            </div>
            <div className="text-xs md:text-sm font-light text-muted-foreground mt-1">{unit.label}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
