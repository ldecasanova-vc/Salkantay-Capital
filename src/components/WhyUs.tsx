"use client"

import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef } from "react"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.09 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

function AnimatedNumber({
  value,
  prefix = "",
  suffix = "",
  decimals = 0,
}: {
  value: number
  prefix?: string
  suffix?: string
  decimals?: number
}) {
  const count = useMotionValue(0)
  const display = useTransform(count, (latest) =>
    `${prefix}${latest.toFixed(decimals)}${suffix}`
  )
  const hasAnimated = useRef(false)

  return (
    <motion.div
      onViewportEnter={() => {
        if (!hasAnimated.current) {
          hasAnimated.current = true
          animate(count, value, { duration: 2, ease: "easeOut" })
        }
      }}
      className="text-4xl md:text-[56px] font-semibold text-[#0B1F3B] leading-none mb-2"
    >
      {display}
    </motion.div>
  )
}

export default function WhyUs() {
  const stats = [
    { value: 100, prefix: "+$", suffix: "M", label: "Assets Under\nManagement", decimals: 0 },
    { value: 20, prefix: "", suffix: "+", label: "Years Combined\nExperience", decimals: 0 },
    { value: 4, prefix: "", suffix: "", label: "Institutional\nStrategies", decimals: 0 },
    { value: 10.6, prefix: "+", suffix: "%", label: "Annual Return\n(2024)", decimals: 1 },
  ]

  const differentiators = [
    {
      number: "01",
      title: "Data-Driven Analysis",
      description:
        "Quantitative screening and fundamental research combined to identify superior risk-adjusted returns across global fixed income markets.",
    },
    {
      number: "02",
      title: "Disciplined Portfolio Management",
      description:
        "Systematic allocation frameworks with strict drawdown limits and continuous monitoring across the full market cycle.",
    },
    {
      number: "03",
      title: "Tailored Client Solutions",
      description:
        "Custom portfolio construction for institutional investors, HNWIs and corporate treasuries with specific return, risk and liquidity objectives.",
    },
    {
      number: "04",
      title: "Deep Market Expertise",
      description:
        "Over two decades of combined experience navigating complex credit environments across Latin America, the US and global emerging markets.",
    },
  ]

  const credentials = [
    "Institutional-grade governance and compliance",
    "Transparent reporting and investor communication",
    "Local and offshore custody platforms",
    "Trusted by AFPs, insurance companies and multilaterals",
  ]

  return (
    <section id="solutions" className="bg-[#EEF2F7] py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Animated metrics */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-24"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-[#0B1F3B]" />
            <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
              Credentials & Impact
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-white px-5 md:px-8 py-10">
                <AnimatedNumber
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                  decimals={stat.decimals}
                />
                <div className="text-gray-400 text-[11px] tracking-wide uppercase whitespace-pre-line leading-relaxed">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Differentiators */}
        <div className="grid md:grid-cols-2 gap-16 mb-24">
          <motion.div
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                Why Invest With Us
              </span>
            </div>
            <h2 className="text-4xl md:text-[44px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
              Built for<br />
              <span className="font-semibold">Institutional</span><br />
              <span className="font-semibold">Investors</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed font-light max-w-sm">
              Salkantay Ventures & BLUM SAF offer a comprehensive fixed income platform designed to meet the demands of the most sophisticated investors — combining rigorous process, global reach and operational excellence.
            </p>
          </motion.div>

          <motion.div
            variants={staggerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="divide-y divide-gray-100"
          >
            {differentiators.map((d) => (
              <motion.div key={d.number} variants={itemVariants} className="py-6">
                <div className="flex gap-6">
                  <span className="text-[11px] text-gray-200 font-medium w-6 shrink-0 mt-0.5 tracking-wide">
                    {d.number}
                  </span>
                  <div>
                    <h3 className="text-sm font-semibold text-[#0B1F3B] mb-1.5">{d.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed font-light">{d.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Trust banner — dark with subtle texture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="relative bg-[#070D1A] px-10 py-14 md:px-16 md:py-16 overflow-hidden"
        >
          {/* Subtle radial accent */}
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at center, #92722A 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
          <div className="relative grid md:grid-cols-2 gap-10 items-start">
            <div>
              <h3 className="text-2xl md:text-3xl font-light text-white mb-3">
                Built on<br />
                <span className="font-semibold">Trust & Transparency</span>
              </h3>
              <p className="text-white/40 text-sm leading-relaxed font-light max-w-xs">
                We adhere to the highest standards of fiduciary responsibility and regulatory compliance, serving institutional and individual investors alike.
              </p>
            </div>
            <div className="space-y-3.5">
              {credentials.map((c, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full bg-[#C9A84C]/60 shrink-0" />
                  <span className="text-white/50 text-sm font-light">{c}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
