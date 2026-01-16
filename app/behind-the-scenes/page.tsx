"use client"

import type React from "react"
import Link from "next/link"

import SunriseBackground from "@/components/sunrise-background"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"

export default function BehindTheScenesPage() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const name = formData.get("name")
    const email = formData.get("email")
    const city = formData.get("city")

    if (!name || !email || !city) {
      setError(true)
      return
    }

    setError(false)
    setTimeout(() => {
      setSubmitted(true)
    }, 500)
  }

  return (
    <main className="min-h-screen pt-32 pb-20">
      <SunriseBackground />

      <div className="max-w-4xl mx-auto px-6 space-y-16">
        <ScrollReveal>
          <section className="text-center space-y-6 py-12">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight text-balance">
              Behind the Scenes at Pillars
            </h1>
            <p className="text-lg md:text-xl font-light text-muted-foreground text-balance max-w-3xl mx-auto leading-relaxed">
              We're building a calm, intentional environment for people to grow together. If you'd like to be part of
              building that environment, we would love to hear from you.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <section className="glass-card rounded-3xl p-10 max-w-3xl mx-auto">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="text-5xl mb-4">✓</div>
                <p className="text-2xl font-light text-foreground">Thanks — we'll be in touch soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-light">
                    Name <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-light">
                    Email <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-light">
                    City <span className="text-red-500">*</span>
                  </Label>
                  <Input
                    id="city"
                    name="city"
                    required
                    className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                    placeholder="Your city"
                  />
                </div>

                {error && <p className="text-sm text-red-500 font-light">Please complete the required fields.</p>}

                <Button
                  type="submit"
                  className="w-full rounded-xl py-6 text-base font-light tracking-wide min-h-[44px] button-glow"
                >
                  Send Interest
                </Button>
              </form>
            )}
          </section>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="text-center pt-4">
            <Link
              href="/sustain"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-light tracking-wide transition-all duration-200 min-h-[44px] bg-[#4A5F7F] text-white hover:bg-[#3A4F6F] shadow-md hover:shadow-lg button-glow border border-foreground/20"
              style={{ fontWeight: 300 }}
            >
              Become a Sustainer →
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </main>
  )
}
