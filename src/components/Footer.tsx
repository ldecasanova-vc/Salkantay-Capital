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
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submission:", { name, email, message })
    setName("")
    setEmail("")
    setMessage("")
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  const footerLinks = [
    {
      heading: "Divisions",
      links: [
        { label: "Asset Management", href: "#services" },
        { label: "Corporate Finance & Advisory", href: "#services" },
        { label: "Wealth Management", href: "#services" },
        { label: "How We Do It", href: "#approach" },
      ],
    },
    {
      heading: "Firm",
      links: [
        { label: "Our Results", href: "#results" },
        { label: "Our Values", href: "#values" },
        { label: "Our Team", href: "#team" },
        { label: "Partners & Allies", href: "#partners" },
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
                Let&apos;s Discuss<br />
                <span className="font-semibold">Your Capital Strategy</span>
              </h2>
              <p className="text-white/50 text-base leading-relaxed font-light mb-8 max-w-sm">
                Request a detailed overview of our divisions or schedule a confidential consultation with our team.
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

            {/* Contact form */}
            <div className="border border-white/10 p-8">
              <h3 className="text-lg font-semibold mb-2">Send Us a Message</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6 font-light">
                Tell us briefly how we can help. A member of our team will get back to you shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text"
                  placeholder="Full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors"
                />
                <textarea
                  placeholder="How can we help?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  className="w-full bg-white/5 border border-white/10 text-white placeholder:text-white/25 px-4 py-3 text-sm focus:outline-none focus:border-white/30 transition-colors resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-[#0B1F3B] py-3 text-sm font-medium tracking-wide uppercase hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                >
                  {submitted ? "Message Sent ✓" : (
                    <>Send Message <ArrowRight className="w-3.5 h-3.5" /></>
                  )}
                </button>
              </form>
              <p className="text-white/25 text-xs mt-4">
                We respect your privacy. Your information is used only to respond to your inquiry.
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
                An integrated capital platform: Asset Management, Corporate Finance & Advisory, and Wealth Management.
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
            © 2025 Salkantay Capital. All rights reserved.
          </p>
          <p className="text-white/25 text-xs text-center md:text-right">
            Services offered to institutional, corporate and qualified private clients. Past performance is not indicative of future results.
          </p>
        </div>
      </div>
    </footer>
  )
}
