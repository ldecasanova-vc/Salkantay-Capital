"use client"

import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion"
import { ArrowRight, FileText } from "lucide-react"
import { useEffect, useRef } from "react"
import Image from "next/image"

// Animated counter hook
function useCounter(target: number, duration: number = 2) {
  const count = useMotionValue(0)
  const ref = useRef(false)
  return { count, ref, target, duration }
}

function AnimatedStat({
  value,
  label,
  prefix = "",
  suffix = "",
}: {
  value: number
  label: string
  prefix?: string
  suffix?: string
}) {
  const rounded = useMotionValue(0)
  const display = useTransform(rounded, (latest) => `${prefix}${Math.round(latest)}${suffix}`)
  const hasAnimated = useRef(false)

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasAnimated.current) {
          hasAnimated.current = true
          animate(rounded, value, { duration: 2, ease: "easeOut" })
        }
      }}
    >
      <motion.div className="text-3xl md:text-4xl font-semibold text-white mb-1">
        {display}
      </motion.div>
      <div className="text-white/35 text-[11px] tracking-[0.18em] uppercase">{label}</div>
    </motion.div>
  )
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-[#070D1A] overflow-hidden">

      {/* Background: Salkantay Mountain Image */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/Mountain.jpg"
          alt="Salkantay Mountain"
          fill
          className="object-cover opacity-60 mix-blend-overlay"
          priority
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#070D1A]/30 via-[#070D1A]/50 to-[#070D1A]" />

        {/* Radial aurora bloom */}
        {/* Primary bloom — large, centered-right */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[900px] max-h-[900px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle at center, #92722A 0%, #7A5E1A 25%, #1a1206 60%, transparent 75%)",
            filter: "blur(80px)",
          }}
        />
        {/* Secondary smaller bloom — bottom left */}
        <div
          className="absolute bottom-[10%] left-[-5%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(circle at center, #C9A84C 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)
            `,
            backgroundSize: "100px 100px",
          }}
        />
        {/* Noise texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
            backgroundRepeat: "repeat",
            backgroundSize: "200px 200px",
          }}
        />
      </div>

      <div className="relative w-full max-w-7xl mx-auto px-6 lg:px-8 py-36">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
            <div className="w-10 h-px bg-white/30" />
            <span className="text-white/40 text-[11px] tracking-[0.25em] uppercase font-medium">
              Institutional Fixed Income · Offshore Strategy
            </span>
          </motion.div>

          {/* Main headline — Apollo-scale */}
          <motion.h1
            variants={itemVariants}
            className="text-[clamp(52px,8vw,96px)] font-light text-white leading-[1.02] tracking-[-0.02em] mb-8"
          >
            Capital Built for<br />
            <span className="font-semibold italic">What Comes</span><br />
            <span className="font-light">Next</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-white/50 text-lg md:text-xl leading-relaxed max-w-xl mb-12 font-light"
          >
            Proven BLUM SAF fixed income strategies, accessible offshore.
            Built for sophisticated investors who demand discipline, precision and results.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 mb-24">
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group inline-flex items-center gap-3 bg-white text-[#070D1A] px-8 py-4 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gray-100 transition-colors duration-200"
            >
              <FileText className="w-3.5 h-3.5" />
              Request Prospectus
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-3 border border-white/25 text-white/70 px-8 py-4 text-xs font-medium tracking-[0.15em] uppercase hover:border-white/50 hover:text-white transition-all duration-200"
            >
              Schedule a Meeting
            </button>
          </motion.div>

          {/* Animated stats */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 pt-10 grid grid-cols-3 gap-8 md:gap-20 max-w-xl"
          >
            <AnimatedStat value={100} prefix="+$" suffix="M" label="Assets Under Management" />
            <AnimatedStat value={10.6} prefix="+" suffix="%" label="Annual Return 2024" />
            <AnimatedStat value={20} prefix="+" suffix=" Yrs" label="Team Experience" />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#070D1A] to-transparent pointer-events-none" />
    </section>
  )
}
