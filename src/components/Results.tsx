"use client"

import { motion, Variants, useMotionValue, useTransform, animate } from "framer-motion"
import { useRef } from "react"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
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
      className="text-5xl md:text-[64px] font-semibold text-[#0B1F3B] leading-none mb-3"
    >
      {display}
    </motion.div>
  )
}

export default function Results() {
  const stats = [
    { value: 140, prefix: "+$", suffix: "M", label: "Assets Under\nManagement", decimals: 0 },
    { value: 20, prefix: "", suffix: "+", label: "Years Combined\nExperience", decimals: 0 },
    { value: 3, prefix: "", suffix: "", label: "Integrated\nDivisions", decimals: 0 },
    { value: 10.6, prefix: "+", suffix: "%", label: "Annual Return\n(2024)", decimals: 1 },
  ]

  return (
    <section id="results" className="bg-white py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Editorial heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                Our Results
              </span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              A track record built<br />
              <span className="font-semibold">over cycles.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              A consistent record across investment strategies, advisory mandates and wealth solutions — reflecting the discipline applied throughout our platform.
            </p>
          </div>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-px bg-gray-100"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 md:px-10 py-12 md:py-14">
              <AnimatedNumber
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                decimals={stat.decimals}
              />
              <div className="w-8 h-px bg-[#C9A84C] mb-4" />
              <div className="text-gray-500 text-[12px] tracking-[0.12em] uppercase whitespace-pre-line leading-relaxed font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] text-gray-400 mt-8 tracking-wide max-w-3xl"
        >
          Past performance is not indicative of future results. Strategy-specific figures available upon request to qualified investors.
        </motion.p>
      </div>
    </section>
  )
}
