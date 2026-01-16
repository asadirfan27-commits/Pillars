import SunriseBackground from "@/components/sunrise-background"
import ScrollReveal from "@/components/scroll-reveal"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from "next/link"
import Countdown from "@/components/countdown"

export default function ProgramsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <SunriseBackground />

      <div className="max-w-3xl mx-auto px-6 space-y-12">
        <ScrollReveal>
          <section className="text-center space-y-4 py-12">
            <h1 className="text-4xl md:text-6xl font-light tracking-tight">Weekly Programs: Building a Community</h1>
            <p className="text-xl md:text-2xl font-light text-muted-foreground text-balance">
              A weekly pause for the soul — to get softer, wiser, and more connected to the Prophet ﷺ.
            </p>
          </section>
        </ScrollReveal>

        <ScrollReveal delay={80}>
          <div className="space-y-6">
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg font-light text-foreground">
              <li>Mondays · 7:00 PM</li>
              <li>Northern Virginia (venue announced weekly)</li>
              <li>Coffee & warm hospitality every week</li>
            </ul>

            <Countdown />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={120}>
          <section className="glass-card rounded-3xl p-10 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl md:text-3xl font-light tracking-tight">Program Updates</h2>
            </div>

            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-sm font-light">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                    placeholder="First name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-light">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                    placeholder="Last name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-light">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm font-light">
                  Where do you live?
                </Label>
                <Input
                  id="location"
                  className="rounded-xl border-border/50 bg-background/40 backdrop-blur-sm min-h-[44px]"
                  placeholder="City, State"
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-xl py-6 text-base font-light tracking-wide min-h-[44px] button-glow"
              >
                Get Weekly Details
              </Button>

              <div className="hidden text-center text-sm text-muted-foreground" data-success-message>
                You're on the list. We'll email time and location each week.
              </div>
            </form>
          </section>
        </ScrollReveal>

        <div className="text-center pt-8">
          <Link
            href="/behind-the-scenes"
            className="inline-flex items-center px-8 py-4 rounded-full text-base font-light tracking-wide transition-all duration-200 min-h-[44px] bg-[#4A5F7F] text-white hover:bg-[#3A4F6F] shadow-md hover:shadow-lg button-glow"
            style={{ fontWeight: 300 }}
          >
            Get Involved →
          </Link>
        </div>
      </div>
    </main>
  )
}
