"use client"

import { motion, Variants } from "framer-motion"
import { Trophy, Shuffle, Globe, TrendingUp } from "lucide-react"

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
      icon: Trophy,
      number: "01",
      title: "Best-in-Class Selection",
      description:
        "Rigorous due diligence across Investment Grade, High Yield, Emerging Markets and specialty fixed income to identify the optimal fund for each allocation.",
    },
    {
      icon: Shuffle,
      number: "02",
      title: "Strategic Diversification",
      description:
        "Low-correlation strategies — private credit, asset-backed debt, convertible arbitrage — to construct resilient, all-weather portfolios.",
    },
    {
      icon: Globe,
      number: "03",
      title: "Offshore Access",
      description:
        "Efficient offshore structures replicating the established Blum Bonos Globales track record for international and LATAM-based investors.",
    },
    {
      icon: TrendingUp,
      number: "04",
      title: "Disciplined Risk Control",
      description:
        "Systematic drawdown management and continuous monitoring designed to outperform the IUAA benchmark while preserving capital through market cycles.",
    },
  ]

  return (
    <section id="strategy" className="bg-[#0B1F3B] py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">


        {/* Glass cards grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.number}
              variants={cardVariants}
              className="group relative bg-white/[0.03] border border-white/[0.08] p-8 hover:bg-white/[0.07] transition-colors duration-300 cursor-default"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="text-[11px] font-medium text-white/20 tracking-[0.15em] uppercase mb-6">
                {pillar.number}
              </div>
              <div className="mb-5">
                <pillar.icon
                  className="w-5 h-5 text-white/40 group-hover:text-[#C9A84C]/80 transition-colors duration-300"
                  strokeWidth={1.5}
                />
              </div>
              <h3 className="text-sm font-semibold text-white/80 group-hover:text-white mb-3 transition-colors duration-300">
                {pillar.title}
              </h3>
              <p className="text-white/35 text-sm leading-relaxed font-light group-hover:text-white/50 transition-colors duration-300">
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
          <div className="w-8 h-px bg-white/10" />
          <span className="text-white/20 text-[11px] tracking-[0.18em] uppercase">
            For qualified institutional and accredited investors
          </span>
        </motion.div>
      </div>
    </section>
  )
}
