"use client"

import SunriseBackground from "@/components/sunrise-background"
import ScrollReveal from "@/components/scroll-reveal"
import Link from "next/link"

export default function AboutPage() {
  const pillars = [
    {
      title: "Mercy, Humility, Good Character",
      description: "We're doing our best to show up with mercy, humility, and good character in every gathering.",
    },
    {
      title: "A Community That Feels Like a Breather",
      description:
        "A room that feels calm after a heavy week, familiar faces, warm energy, a place where hearts can unclench.",
    },
    {
      title: "Reminders That Make Us Better",
      description: "Steady reminders and practical Seerah that help us become better people over time.",
    },
  ]

  return (
    <main className="min-h-screen pt-32 pb-20">
      <SunriseBackground />

      <div className="max-w-5xl mx-auto px-6 space-y-24">
        <ScrollReveal>
          <section className="text-center space-y-8 py-12">
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-balance">About Pillars</h1>
            <ScrollReveal delay={100}>
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground text-balance">
                  Pillars is a community in Northern Virginia built around weekly learning, meaningful friendships, and
                  steady growth—rooted in mercy, humility, and good character.
                </p>
              </div>
            </ScrollReveal>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <section className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Our Vision</h2>
            <p className="text-lg md:text-xl font-light leading-relaxed text-muted-foreground text-center text-balance">
              Our long-term vision is to build programs that serve every stage of life — children, teens, college
              students, young professionals, established adults, parents, and elders — so our community can grow
              together with clarity and purpose.
            </p>
          </section>
        </ScrollReveal>

        <section className="space-y-12">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Our Pillars</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {pillars.map((pillar, index) => (
              <ScrollReveal key={pillar.title} delay={index * 100}>
                <div className="space-y-4 py-8">
                  <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-balance">{pillar.title}</h3>
                  <p className="text-lg font-light leading-relaxed text-muted-foreground">{pillar.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>

        <ScrollReveal delay={250}>
          <section className="max-w-3xl mx-auto space-y-6 py-12">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center">Ustadh Omar Khan</h2>
            <p className="text-lg font-light leading-relaxed text-muted-foreground text-center text-balance">
              [Placeholder: Bio and information about Ustadh Omar Khan to be added]
            </p>
          </section>
        </ScrollReveal>

        <div className="text-center py-8">
          <p className="text-xl font-light text-muted-foreground">We would love to hear from you</p>
        </div>

        <div className="text-center pt-8">
          <Link
            href="/seerah"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-light tracking-wide transition-all duration-200 min-h-[44px] bg-[#4A5F7F] text-white hover:bg-[#3A4F6F] shadow-md hover:shadow-lg button-glow"
            style={{ fontWeight: 300 }}
          >
            Programs →
          </Link>
        </div>

        <div className="h-20" />
      </div>
    </main>
  )
}
