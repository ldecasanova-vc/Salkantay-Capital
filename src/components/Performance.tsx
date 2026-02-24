"use client"

import { motion, Variants } from "framer-motion"
import Image from "next/image"

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

export default function Performance() {
  const charts = [
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771276478287.png?width=8000&height=8000&resize=contain",
      alt: "Blum Renta Global performance chart",
      label: "Blum Renta Global",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771276489221.png?width=8000&height=8000&resize=contain",
      alt: "Blum Capital Global vs Credicorp Vision II performance chart",
      label: "Blum Capital Global",
    },
    {
      src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771276506609.png?width=8000&height=8000&resize=contain",
      alt: "HNW Blum Bonos Globales performance chart",
      label: "Blum Bonos Globales (HNW)",
    },
  ]

  return (
    <section id="performance" className="bg-white py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
        >
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                Track Record
              </span>
            </div>
            <h2 className="text-4xl md:text-[52px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight">
              Performance<br />
              <span className="font-semibold">Across Strategies</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-xs leading-relaxed font-light md:text-right">
            Consistent alpha generation across global fixed income segments since inception.
          </p>
        </motion.div>

        {/* Charts — flush grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-200"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {charts.map((chart) => (
            <motion.div
              key={chart.label}
              variants={cardVariants}
              className="bg-white overflow-hidden group"
            >
              <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0B1F3B]/70">
                  {chart.label}
                </span>
              </div>
              <div className="p-5">
                <Image
                  src={chart.src}
                  alt={chart.alt}
                  width={800}
                  height={500}
                  className="w-full h-auto group-hover:scale-[1.01] transition-transform duration-500"
                  quality={100}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[11px] text-gray-300 mt-8 tracking-wide"
        >
          As of August 31, 2025. Past performance is not indicative of future results. For qualified investors only.
        </motion.p>
      </div>
    </section>
  )
}
