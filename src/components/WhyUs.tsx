"use client"

import { motion, Variants } from "framer-motion"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function WhyUs() {
  const values = [
    {
      number: "01",
      title: "Independence",
      description:
        "We answer to our clients alone. Every recommendation is anchored in their long-term interest, not in a transaction or product.",
    },
    {
      number: "02",
      title: "Discipline",
      description:
        "Rigorous process, institutional risk management and patient capital. We commit to our mandates over cycles, not headlines.",
    },
    {
      number: "03",
      title: "Trust",
      description:
        "Senior-level relationships, transparent reporting and the highest fiduciary standards — across every division.",
    },
  ]

  const credentials = [
    "Institutional-grade governance and compliance",
    "Transparent reporting and client communication",
    "Local and offshore execution platforms",
    "Trusted by institutions, corporates and private clients",
  ]

  return (
    <section id="values" className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
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
                Our Values
              </span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              The principles<br />
              <span className="font-semibold">that guide our work.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              Three values that shape every mandate, every recommendation and every client relationship — across all of our divisions.
            </p>
          </div>
        </motion.div>

        {/* Values — editorial list */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-px bg-gray-200 mb-24"
        >
          {values.map((v) => (
            <motion.div
              key={v.number}
              variants={itemVariants}
              className="bg-white p-10 md:p-12"
            >
              <div className="text-[11px] font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                {v.number}
              </div>
              <h3 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
                {v.title}
              </h3>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <p className="text-gray-500 text-base leading-relaxed font-light">
                {v.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

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
                Across every division, we adhere to the highest standards of fiduciary responsibility and regulatory compliance — serving institutional, corporate and private clients alike.
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
