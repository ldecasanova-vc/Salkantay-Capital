"use client"

import { motion, Variants } from "framer-motion"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06 } },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
}

export default function Partners() {
  // Logos render in monochrome at rest, full color on hover.
  // To add a partner: drop the file in /public and add an entry below.
  // Use `imgClass` to override the default sizing for a specific logo.
  const partners = [
    { name: "DGGF", logo: "/DGGF_LOGO.png", imgClass: "max-h-30 max-w-[90%]" },
    { name: "Bancóldex", logo: "/BANCOLDEX_LOGO.png" },
    { name: "COFIDE", logo: "/COFIDE_LOGO.png" },
    { name: "IDB", logo: "/IDB_LOGO.png" },
    { name: "Capria", logo: "/CAPRIA_LOGO.png" },
  ] as { name: string; logo: string | null; imgClass?: string }[]

  return (
    <section id="partners" className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
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
                Our Partners & Allies
              </span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              The institutions<br />
              <span className="font-semibold">we work with.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              We collaborate with leading custodians, banks, advisors and operating partners to deliver our mandates with the highest standards of execution and oversight.
            </p>
          </div>
        </motion.div>

        {/* Logo grid */}
        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 sm:grid-cols-5 gap-px bg-gray-200"
        >
          {partners.map((p) => (
            <motion.div
              key={p.name}
              variants={itemVariants}
              className="bg-white h-28 md:h-32 flex items-center justify-center group hover:bg-[#EEF2F7] transition-colors duration-300"
            >
              {p.logo ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={p.logo}
                  alt={p.name}
                  className={`${p.imgClass ?? "max-h-12 max-w-[70%]"} object-contain grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300`}
                />
              ) : (
                <span className="text-[11px] tracking-[0.18em] uppercase text-[#0B1F3B]/25 font-medium">
                  {p.name}
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom label */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 flex items-center gap-3"
        >
          <div className="w-8 h-px bg-[#0B1F3B]/20" />
          <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.18em] uppercase">
            A network spanning institutional, corporate and private wealth services
          </span>
        </motion.div>
      </div>
    </section>
  )
}
