"use client"

import { usePathname, useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

export default function FloatingHomeButton() {
  const pathname = usePathname()
  const router = useRouter()

  const handleClick = () => {
    if (pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      router.push("/")
    }
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Go to Home"
      className={cn(
        "fixed bottom-6 right-6 z-50",
        "w-14 h-14 rounded-full",
        "bg-[#4A5F7F]/90 backdrop-blur-sm text-white",
        "shadow-lg hover:shadow-xl",
        "hover:scale-110 active:scale-95",
        "transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-[#4A5F7F] focus:ring-offset-2",
        "flex items-center justify-center",
        "button-glow",
      )}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    </button>
  )
}
