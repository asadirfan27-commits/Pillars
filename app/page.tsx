import SunriseBackground from "@/components/sunrise-background"
import ScrollReveal from "@/components/scroll-reveal"
import TextRotator from "@/components/text-rotator"
import ProgramsCrossfade from "@/components/programs-crossfade"
import Link from "next/link"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <SunriseBackground />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center justify-center px-6 py-20"
        style={{ paddingTop: "max(80px, env(safe-area-inset-top))" }}
      >
        <div className="max-w-5xl mx-auto text-center space-y-6 md:space-y-8 relative z-10">
          <h2
            className="font-light tracking-tight text-balance leading-[1.4] text-muted-foreground"
            style={{
              fontSize: "clamp(18px, 4vw, 26px)",
              fontWeight: 300,
              letterSpacing: "-0.01em",
              opacity: 0.9,
            }}
          >
            a weekly pause for the soul.
          </h2>

          <div className="pt-5 md:pt-4">
            <Link
              href="/seerah"
              className="inline-flex items-center px-8 py-4 rounded-full text-base font-light tracking-wide transition-all duration-200 min-h-[44px] bg-[#4A5F7F] text-white hover:bg-[#3A4F6F] shadow-md hover:shadow-lg button-glow"
              style={{ fontWeight: 300 }}
            >
              Programs
            </Link>
          </div>

          <div className="pt-4">
            <TextRotator />
          </div>
        </div>
      </section>

      <ScrollReveal delay={80}>
        <section className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2
              className="text-center mb-6"
              style={{
                fontSize: "clamp(22px, 5vw, 28px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
              }}
            >
              Our Mission
            </h2>
            <p
              className="leading-relaxed text-muted-foreground text-balance text-center max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(15px, 3.2vw, 18px)",
                fontWeight: 300,
              }}
            >
              Pillars is a community in Northern Virginia built around weekly learning, meaningful friendships, and
              steady growth—rooted in mercy, humility, and good character.
            </p>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <section id="home-about" className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2
              className="text-center mb-6"
              style={{
                fontSize: "clamp(20px, 4.8vw, 26px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
              }}
            >
              About
            </h2>
            <p
              className="leading-relaxed text-muted-foreground text-balance text-center max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(15px, 3.2vw, 18px)",
                fontWeight: 300,
              }}
            >
              A community for people in Northern Virginia who want to grow spiritually, build meaningful friendships,
              and find steadiness in a fast-moving world through warmth, clarity, and intention.
            </p>
            <div className="text-center pt-4">
              <Link
                href="/about"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-200 min-h-[44px] border border-foreground/20 hover:bg-foreground/5 button-glow"
                style={{ fontWeight: 300 }}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <section id="home-programs" className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2
              className="text-center mb-6"
              style={{
                fontSize: "clamp(20px, 4.8vw, 26px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
              }}
            >
              Programs
            </h2>
            <p
              className="leading-relaxed text-muted-foreground text-balance text-center max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(15px, 3.2vw, 18px)",
                fontWeight: 300,
              }}
            >
              Weekly Seerah gatherings every Monday evening in Northern Virginia. A space to learn, connect, and grow
              together through the life and character of the Prophet ﷺ.
            </p>

            <div className="py-6">
              <ProgramsCrossfade />
            </div>

            <div className="text-center pt-4">
              <Link
                href="/seerah"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-200 min-h-[44px] border border-foreground/20 hover:bg-foreground/5 button-glow"
                style={{ fontWeight: 300 }}
              >
                View Programs
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <section id="home-sustainers" className="px-6 py-16 md:py-20">
          <div className="max-w-4xl mx-auto space-y-6">
            <h2
              className="text-center mb-6"
              style={{
                fontSize: "clamp(20px, 4.8vw, 26px)",
                fontWeight: 600,
                letterSpacing: "-0.03em",
                lineHeight: 1.25,
              }}
            >
              Sustainers
            </h2>
            <p
              className="leading-relaxed text-muted-foreground text-balance text-center max-w-3xl mx-auto"
              style={{
                fontSize: "clamp(15px, 3.2vw, 18px)",
                fontWeight: 300,
              }}
            >
              Steady support for a steady community.
            </p>
            <div className="text-center pt-4">
              <Link
                href="/sustain"
                className="inline-flex items-center px-6 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-200 min-h-[44px] border border-foreground/20 hover:bg-foreground/5 button-glow"
                style={{ fontWeight: 300 }}
              >
                Become a Sustainer
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      <div className="h-32" />
    </main>
  )
}
