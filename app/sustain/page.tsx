"use client"

import type React from "react"
import { cn } from "@/lib/utils" // Fixed import path for cn utility
import { useState } from "react"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function SustainPage() {
  const [submitted, setSubmitted] = useState(false)
  const [customAmount, setCustomAmount] = useState("")
  const [selectedPreset, setSelectedPreset] = useState<number | null>(null)

  const tiers = [
    { amount: 20, label: "$20 / month" },
    { amount: 50, label: "$50 / month" },
    { amount: 100, label: "$100 / month" },
  ]

  const handlePresetClick = (amount: number) => {
    setCustomAmount(amount.toString())
    setSelectedPreset(amount)
  }

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomAmount(e.target.value)
    setSelectedPreset(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="min-h-screen pt-32 pb-20 bg-gradient-to-b from-[#FAF7F2] to-[#F1E8DA]">
      <div className="max-w-4xl mx-auto px-6 space-y-12">
        <ScrollReveal>
          <section className="text-center space-y-6 py-12">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance">Become a Sustainer</h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground text-balance max-w-3xl mx-auto">
              Your monthly support helps keep the space consistent, welcoming, and growing — week after week.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <div className="grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <button
                key={tier.amount}
                onClick={() => handlePresetClick(tier.amount)}
                className={cn(
                  "glass-card rounded-3xl p-10 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group min-h-[200px] flex flex-col items-center justify-center button-glow",
                  selectedPreset === tier.amount && "ring-2 ring-foreground/30 bg-foreground/5",
                )}
              >
                <div className="space-y-4">
                  <p className="text-5xl font-light tracking-tight group-hover:scale-110 transition-transform duration-300">
                    ${tier.amount}
                  </p>
                  <p className="text-base font-light text-muted-foreground">per month</p>
                </div>
              </button>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="glass-card rounded-3xl p-10 space-y-6 max-w-xl mx-auto">
            <h2 className="text-2xl font-light tracking-tight text-center">Custom Amount</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-muted-foreground">$</span>
                <Input
                  type="number"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={handleAmountChange}
                  min="1"
                  step="1"
                  className="rounded-xl pl-10 py-6 text-lg border-border/50 bg-background/40 backdrop-blur-sm min-h-[56px]"
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-6 text-base font-light tracking-wide min-h-[56px] button-glow"
              >
                Submit
              </Button>

              {submitted && (
                <div className="text-center text-sm text-muted-foreground animate-in fade-in duration-300">
                  Thank you for your support! You'll receive confirmation shortly.
                </div>
              )}
            </form>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={240}>
          <div className="text-center pt-8">
            <Link
              href="/"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-light tracking-wide transition-all duration-200 min-h-[44px] border border-foreground/20 hover:bg-foreground/5 button-glow"
              style={{ fontWeight: 300 }}
            >
              Back to Home
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
