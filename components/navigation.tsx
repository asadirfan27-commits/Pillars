"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

export default function Navigation() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)

      if (pathname === "/") {
        const sections = ["about", "programs", "get-involved", "sustainers"]

        const observerOptions = {
          root: null,
          rootMargin: "-20% 0px -40% 0px",
          threshold: 0.35,
        }

        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id.replace("home-", "")
              setActiveSection(sectionId)
            }
          })
        }, observerOptions)

        sections.forEach((section) => {
          const element = document.getElementById(`home-${section}`)
          if (element) {
            observer.observe(element)
          }
        })

        if (window.scrollY < window.innerHeight * 0.7) {
          setActiveSection("")
        }

        return () => observer.disconnect()
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [pathname])

  const isLinkActive = (href: string, sectionName: string) => {
    if (pathname === "/") {
      return activeSection === sectionName
    }
    return pathname === href
  }

  const links = [
    { href: "/about", label: "About", section: "about" },
    { href: "/seerah", label: "Programs", section: "programs" },
    { href: "/behind-the-scenes", label: "Volunteer", section: "get-involved" },
    { href: "/sustain", label: "Sustainers", section: "sustainers", isPill: true },
  ]

  const handleMobileLinkClick = () => {
    setMobileMenuOpen(false)
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled
          ? "py-3 md:py-4 backdrop-blur-xl bg-background/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
          : "py-4 md:py-8 backdrop-blur-sm bg-background/40",
      )}
    >
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className={cn(
              "font-semibold tracking-tight transition-all duration-500",
              scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl",
            )}
            style={{
              fontWeight: 600,
              letterSpacing: "-0.02em",
            }}
          >
            <span style={{ color: "#4A5F7F" }}>Pi</span>
            <span style={{ color: "#C9A869" }}>ll</span>
            <span style={{ color: "#4A5F7F" }}>ars</span>
          </Link>

          <div className="hidden md:flex items-center gap-6 md:gap-8">
            {links.map((link) => {
              const isActive = isLinkActive(link.href, link.section)
              if (link.isPill) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "tracking-wide transition-all duration-300 min-h-[44px] px-5 py-2 rounded-full flex items-center justify-center",
                      "border-[#C9A869]/40 backdrop-blur-sm",
                      scrolled ? "text-xs md:text-sm" : "text-sm",
                      isActive
                        ? "bg-[#C9A869]/20 border-[#C9A869]/60"
                        : "bg-[#C9A869]/10 hover:bg-[#C9A869]/30 button-glow",
                    )}
                    style={{
                      fontWeight: isActive ? 400 : 300,
                      color: "#C9A869",
                    }}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "tracking-wide transition-all duration-300 relative min-h-[44px] min-w-[44px] flex items-center justify-center px-3",
                    scrolled ? "text-xs md:text-sm" : "text-sm",
                    isActive
                      ? "after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-[1px] after:transition-all"
                      : "hover:text-[#C9A869]",
                  )}
                  style={{
                    fontWeight: isActive ? 400 : 300,
                    color: isActive ? "#C9A869" : "#4A5F7F",
                  }}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>

          <button
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {mobileMenuOpen ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
            </svg>
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-foreground/10 shadow-lg">
          <div className="max-w-[1200px] mx-auto px-4 py-4 space-y-2">
            {links.map((link) => {
              const isActive = isLinkActive(link.href, link.section)
              if (link.isPill) {
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "block min-h-[44px] px-4 py-3 rounded-full transition-all duration-200 text-center",
                      "text-base tracking-wide border-[#C9A869]/40",
                      isActive
                        ? "bg-[#C9A869]/20 border-[#C9A869]/60"
                        : "bg-[#C9A869]/10 hover:bg-[#C9A869]/30 button-glow",
                    )}
                    style={{
                      fontWeight: isActive ? 400 : 300,
                      letterSpacing: "0.2px",
                      fontSize: "16px",
                      color: "#C9A869",
                    }}
                    onClick={handleMobileLinkClick}
                  >
                    {link.label}
                  </Link>
                )
              }
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "block min-h-[44px] px-3 py-2 rounded-lg transition-all duration-200",
                    "text-base tracking-wide",
                    isActive ? "bg-[#C9A869]/10" : "hover:bg-foreground/5",
                  )}
                  style={{
                    fontWeight: isActive ? 400 : 300,
                    letterSpacing: "0.2px",
                    fontSize: "16px",
                    color: isActive ? "#C9A869" : "#4A5F7F",
                  }}
                  onClick={handleMobileLinkClick}
                >
                  {link.label}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
