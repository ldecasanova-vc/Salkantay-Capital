"use client"

import { motion, Variants } from "framer-motion"
import { Scale, Network, Target, Users } from "lucide-react"

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function InvestmentStrategy() {
  const pillars = [
    {
      icon: Scale,
      number: "01",
      title: "Independent Counsel",
      description:
        "We act exclusively in our clients' interest. Every recommendation is anchored in their long-term objectives, free from conflicts that compromise fiduciary judgment.",
    },
    {
      icon: Network,
      number: "02",
      title: "Integrated Platform",
      description:
        "Our three divisions operate as one team — coordinating investment, advisory and execution across the entire client relationship.",
    },
    {
      icon: Target,
      number: "03",
      title: "Disciplined Process",
      description:
        "Every mandate follows rigorous origination, structuring and risk-management standards developed across decades of institutional experience.",
    },
    {
      icon: Users,
      number: "04",
      title: "Senior-Led Execution",
      description:
        "Partners are directly involved in every engagement, ensuring depth of judgment and continuity through the full lifecycle of each mandate.",
    },
  ]

  return (
    <section id="approach" className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Editorial heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-12 gap-10 md:gap-16 mb-20"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                How We Do It
              </span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              Built on independence,<br />
              <span className="font-semibold">discipline and senior judgment.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              Our approach is grounded in a few non-negotiable principles — applied consistently across Asset Management, Corporate Finance & Advisory, and Wealth Management.
            </p>
          </div>
        </motion.div>

        {/* Pillar cards — light editorial */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-100"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={cardVariants}
              className="group relative bg-white p-10 hover:bg-[#EEF2F7] transition-colors duration-300 cursor-default"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-[11px] font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                {pillar.number}
              </div>
              <div className="mb-6">
                <pillar.icon
                  className="w-6 h-6 text-[#0B1F3B] group-hover:text-[#C9A84C] transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-base font-semibold text-[#0B1F3B] mb-3 leading-snug">
                {pillar.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed font-light">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#0B1F3B]/20" />
          <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.18em] uppercase">
            Serving institutional, corporate and qualified private investors
          </span>
        </motion.div>
      </div>
    </section>
  )
}
