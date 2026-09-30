"use client"

import { ChevronDown, Menu, X } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const servicesRef = useRef<HTMLDivElement>(null)
  // Set when hover opened the menu, so the click that follows keeps it open instead of toggling it shut
  const openedByHover = useRef(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (!servicesOpen) return
    const handlePointerDown = (e: PointerEvent) => {
      if (!servicesRef.current?.contains(e.target as Node)) setServicesOpen(false)
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setServicesOpen(false)
    }
    document.addEventListener("pointerdown", handlePointerDown)
    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown)
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [servicesOpen])

  const serviceLinks = [
    { name: "Strategy", href: "/strategy" },
    { name: "M&A Advisory", href: "/ma" },
    { name: "Wealth", href: "/wealth" },
  ]

  const navLinks = [
    { name: "How", href: "/#approach" },
    { name: "Results", href: "/#results" },
    { name: "Values", href: "/#values" },
    { name: "Team", href: "/#team" },
    { name: "Partners", href: "/#partners" },
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
            <a href="/" className="absolute top-1/2 left-0 -translate-y-1/2">
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
          <div className="hidden md:flex items-center space-x-5 lg:space-x-7">
            <div
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => {
                openedByHover.current = true
                setServicesOpen(true)
              }}
              onMouseLeave={() => {
                openedByHover.current = false
                setServicesOpen(false)
              }}
            >
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => {
                  if (openedByHover.current) {
                    openedByHover.current = false
                    setServicesOpen(true)
                  } else {
                    setServicesOpen((open) => !open)
                  }
                }}
                className={`flex items-center gap-1.5 text-xs tracking-[0.18em] uppercase font-medium transition-colors duration-300 ${transparent
                  ? "text-white/70 hover:text-white"
                  : "text-[#0B1F3B]/70 hover:text-[#0B1F3B]"
                  }`}
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>

              {/* Top padding bridges the gap so the menu stays open while the pointer moves down */}
              {servicesOpen && (
                <div className="absolute left-0 top-full pt-4">
                  <div
                    className={`min-w-[200px] py-3 border ${transparent
                      ? "bg-[#070D1A] border-white/10"
                      : "bg-white border-gray-200 shadow-sm"
                      }`}
                  >
                    {serviceLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setServicesOpen(false)}
                        className={`block px-5 py-2.5 text-xs tracking-[0.18em] uppercase font-medium whitespace-nowrap transition-colors duration-300 ${transparent
                          ? "text-white/70 hover:text-white"
                          : "text-[#0B1F3B]/70 hover:text-[#0B1F3B]"
                          }`}
                      >
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
            <div>
              <button
                type="button"
                aria-expanded={mobileServicesOpen}
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="flex items-center gap-1.5 text-white/60 hover:text-white transition-colors text-xs font-medium tracking-[0.18em] uppercase"
              >
                Services
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                  strokeWidth={1.5}
                />
              </button>
              {mobileServicesOpen && (
                <div className="mt-4 ml-4 pl-4 border-l border-white/10 space-y-4">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block text-white/60 hover:text-white transition-colors text-xs font-medium tracking-[0.18em] uppercase"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
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