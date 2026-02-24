"use client"

import { motion, Variants } from "framer-motion"
import { useState } from "react"
import { Linkedin, Mail, Phone, MapPin, ArrowRight } from "lucide-react"
import Image from "next/image"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

export default function Footer() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const footerLinks = [
    {
      heading: "Company",
      links: [
        { label: "Investment Strategy", href: "#strategy" },
        { label: "Fund Performance", href: "#performance" },
        { label: "Why Us", href: "#solutions" },
        { label: "Leadership Team", href: "#team" },
      ],
    },
    {
      heading: "Investors",
      links: [
        { label: "LP Portal", href: "#" },
        { label: "Quarterly Reports", href: "#" },
        { label: "Fund Documents", href: "#" },
        { label: "FAQ", href: "#" },
      ],
    },
    {
      heading: "Legal",
      links: [
        { label: "Privacy Policy", href: "#" },
        { label: "Terms of Service", href: "#" },
        { label: "Regulatory Disclosures", href: "#" },
        { label: "Risk Factors", href: "#" },
      ],
    },
  ]

  return (
    <footer id="contact" className="bg-[#0B1F3B] text-white">

      {/* CTA section */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="border-b border-white/10 px-6 lg:px-8 py-24"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">

            {/* CTA Copy */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-px bg-white/30" />
                <span className="text-white/40 text-xs tracking-[0.2em] uppercase font-medium">Get In Touch</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light leading-tight mb-6">
                Let&apos;s Build the<br />
                <span className="font-semibold">Next Level of Growth</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed font-light mb-8 max-w-sm">
                Request our detailed investment prospectus or schedule a confidential consultation with our team.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-white/60">
                  <Mail className="w-4 h-4 text-white/30" />
                  <span className="text-sm">investors@salkantay.vc</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <Phone className="w-4 h-4 text-white/30" />
                  <span className="text-sm">+51 1 234 5678</span>
                </div>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin className="w-4 h-4 text-white/30" />
                  <span className="text-sm">Lima, Peru</span>
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <div className="border border-white/10 p-8">
              <h3 className="text-lg font-semibold mb-2">Market Intelligence</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                Receive our quarterly fixed income outlook, fund performance updates and strategic insights.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="email"
                  placeholder="Your institutional email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#0B1F3B] py-3 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? "Subscribed ✓" : (
                    <>Subscribe <ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
              <p className="text-white/25 text-xs mt-4">
                For qualified institutional investors. Unsubscribe at any time.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Footer links */}
      <div className="px-6 lg:px-8 py-16 border-b border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

            {/* Brand column */}
            <div>
              <div className="mb-5">
                <Image
                  src="/Logo_Salkantay_blanco.png"
                  alt="Salkantay Ventures"
                  width={500}
                  height={160}
                  className="h-40 w-auto"
                />
              </div>
              <p className="text-white/40 text-xs leading-relaxed font-light mb-6">
                Institutional asset management for global fixed income investors.
              </p>
              <div className="flex gap-4">
                <a href="#" className="text-white/30 hover:text-white/60 transition-colors">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Link columns */}
            {footerLinks.map((col) => (
              <div key={col.heading}>
                <h4 className="text-xs font-medium text-white/40 tracking-[0.15em] uppercase mb-5">{col.heading}</h4>
                <ul className="space-y-3">
                  {col.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-white/50 hover:text-white/80 transition-colors text-sm font-light"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/25 text-xs">
            © 2025 Salkantay Ventures. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-center md:text-right">
            Securities offered exclusively to qualified institutional and accredited investors. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
