"use client"

import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Strategy", href: "#strategy" },
    { name: "Performance", href: "#performance" },
    { name: "Solutions", href: "#solutions" },
    { name: "Team", href: "#team" },
  ]

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false)
    document.getElementById(id.replace("#", ""))?.scrollIntoView({ behavior: "smooth" })
  }

  const transparent = !scrolled && !mobileMenuOpen

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${transparent
        ? "bg-transparent border-b border-white/10"
        : "bg-white border-b border-gray-200 shadow-sm"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <div className="flex-shrink-0 w-64 relative">
            <a href="#" className="absolute top-1/2 left-0 -translate-y-1/2">
              <Image
                src={transparent ? "/Logo_Salkantay_blanco.png" : "/Logo_Salkantay_azul.png"}
                alt="Salkantay Ventures"
                width={500}
                height={160}
                className="h-20 md:h-35 w-auto transition-all duration-500"
                priority
              />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${transparent
                  ? "text-white/70 hover:text-white"
                  : "text-[#0B1F3B]/70 hover:text-[#0B1F3B]"
                  }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollTo("contact")}
              className={`px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase transition-all duration-300 ${transparent
                ? "border border-white/40 text-white hover:bg-white/10"
                : "bg-[#0B1F3B] text-white hover:bg-[#162d54]"
                }`}
            >
              Contact Us
            </button>
          </div>

          {/* Mobile button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`transition-colors ${transparent ? "text-white" : "text-[#0B1F3B]"}`}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#070D1A] border-t border-white/10">
          <div className="px-6 py-6 space-y-5">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-white/60 hover:text-white transition-colors text-xs font-medium tracking-[0.18em] uppercase"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              className="w-full border border-white/30 text-white py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-white/10 transition-colors"
            >
              Contact Us
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}