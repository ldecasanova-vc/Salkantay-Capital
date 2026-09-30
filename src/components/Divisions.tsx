"use client"

import Link from "next/link"
import { motion, Variants } from "framer-motion"
import { ArrowRight } from "lucide-react"

type Division = {
  number: string
  title: string
  tagline: string
  services: string[]
  href: string
}

const divisions: Division[] = [
  {
    number: "01",
    title: "Strategy",
    tagline: "Senior strategic counsel for owners and management teams, from diagnostic to execution.",
    services: ["Strategy Counsel", "Fractional CSO", "Strategic Diagnostic & Plan", "Value Creation Program"],
    href: "/strategy",
  },
  {
    number: "02",
    title: "M&A Advisory",
    tagline: "Advisory for mid-market companies across Peru and Latin America.",
    services: ["Deal Counsel", "Fractional Head of M&A", "Exit Readiness", "Sell-side / Buy-side / Capital Raising"],
    href: "/ma",
  },
  {
    number: "03",
    title: "Wealth",
    tagline: "Investment counsel and access to private markets for families and private investors.",
    services: ["Investment Counsel", "Fractional CIO / Family Office", "Liquidity & Legacy Plan", "Access to VC & Alternatives"],
    href: "/wealth",
  },
]

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Divisions() {
  return (
    <section id="services" className="bg-white py-32 md:py-44 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading — primary, oversized */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                What We Do
              </span>
            </div>
            <h2 className="text-[clamp(36px,5.5vw,64px)] font-light text-[#0B1F3B] leading-[1.05] tracking-[-0.02em]">
              Three divisions,<br />
              <span className="font-semibold">one platform.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-[21px] max-w-md leading-relaxed font-light md:text-right">
            Explore the services we offer across Strategy, M&A Advisory and Wealth.
          </p>
        </motion.div>

        {/* Division cards */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-px bg-gray-200"
        >
          {divisions.map((division) => (
            <motion.div
              key={division.number}
              variants={itemVariants}
              className="bg-white p-10 md:p-12 flex flex-col hover:bg-[#EEF2F7] transition-colors duration-300"
            >
              <div className="text-xs font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                {division.number}
              </div>
              <h3 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
                {division.title}
              </h3>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <p className="text-gray-500 text-[21px] leading-relaxed font-light mb-8">
                {division.tagline}
              </p>
              <ul className="space-y-3.5 mb-10">
                {division.services.map((service) => (
                  <li key={service} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="text-[#0B1F3B] text-lg font-medium">{service}</span>
                  </li>
                ))}
              </ul>
              <Link
                href={division.href}
                className="group/link mt-auto inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium text-[#0B1F3B]/70 hover:text-[#0B1F3B] transition-colors duration-300"
              >
                Learn more
                <ArrowRight
                  className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 transition-transform duration-300"
                  strokeWidth={1.5}
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
