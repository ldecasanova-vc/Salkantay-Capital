"use client"

import { motion, Variants } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

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

const theses = [
  {
    title: "Human Improvement",
    description:
      "Edtech, jobtech and healthtech: companies that expand access to education, work and health.",
  },
  {
    title: "Economic Development",
    description:
      "Fintech, proptech and SaaS: companies that widen access to capital, housing and digital tools.",
  },
  {
    title: "Sustainable Planet",
    description:
      "Agtech, climate tech and smart cities: companies that make the region's growth sustainable.",
  },
]

type Company = { name: string; sector?: string }

const portfolio: { title: string; companies: Company[] }[] = [
  {
    title: "Fintech",
    companies: [
      "Welli", "Finnecto", "Guama", "Mercately", "Moonflow", "Prestamype",
      "Leal", "Shinkansen", "Galgo", "Cometa", "Minu",
    ].map((name) => ({ name })),
  },
  {
    title: "Edtech",
    companies: ["Ubits", "Talently", "uDocz", "Aprende Institute", "Slang"].map((name) => ({ name })),
  },
  {
    title: "Other Sectors",
    companies: [
      { name: "Equip", sector: "Construtech" },
      { name: "Manzana Verde", sector: "Foodtech" },
      { name: "Kilimo", sector: "Agtech" },
      { name: "Torre", sector: "Jobtech" },
      { name: "Cultivo", sector: "Climate tech" },
      { name: "Aerialoop", sector: "Smart cities" },
      { name: "Aptuno", sector: "Proptech" },
    ],
  },
]

function SectionHeading({ eyebrow, children }: { eyebrow: string; children: React.ReactNode }) {
  return (
    <motion.div
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="mb-20"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-8 h-px bg-[#0B1F3B]" />
        <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
          {eyebrow}
        </span>
      </div>
      {children}
    </motion.div>
  )
}

export function InvestmentThesis() {
  return (
    <section className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Investment Thesis">
          <h2 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight max-w-3xl">
            We invest from pre-seed to Series A across Spanish-speaking Latin America.
          </h2>
        </SectionHeading>

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-px bg-gray-200"
        >
          {theses.map((t, i) => (
            <motion.div key={t.title} variants={itemVariants} className="bg-white p-10 md:p-12">
              <div className="text-[11px] font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
                {t.title}
              </h3>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <p className="text-gray-500 text-[21px] leading-relaxed font-light">
                {t.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export function Portfolio() {
  return (
    <section className="bg-white py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeading eyebrow="Our Portfolio">
          <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
            The companies<br />
            <span className="font-semibold">we back.</span>
          </h2>
        </SectionHeading>

        <motion.div
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-px bg-gray-200"
        >
          {portfolio.map((group) => (
            <motion.div key={group.title} variants={itemVariants} className="bg-white p-10">
              <div className="text-[11px] font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                {group.companies.length} companies
              </div>
              <h3 className="text-2xl md:text-3xl font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
                {group.title}
              </h3>
              <div className="w-10 h-px bg-[#C9A84C] mb-6" />
              <ul className="space-y-3.5">
                {group.companies.map((c) => (
                  <li key={c.name} className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <div className="w-1 h-1 rounded-full bg-[#C9A84C] shrink-0" />
                    <span className="text-[#0B1F3B] text-lg font-medium">{c.name}</span>
                    {c.sector && (
                      <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.18em] uppercase">
                        {c.sector}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        <a
          href="https://www.salkantay.vc/portfolio"
          target="_blank"
          rel="noopener noreferrer"
          className="group/link mt-12 inline-flex items-center gap-2 text-xs tracking-[0.18em] uppercase font-medium text-[#0B1F3B]/70 hover:text-[#0B1F3B] transition-colors duration-300"
        >
          See the full portfolio
          <ArrowUpRight
            className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300"
            strokeWidth={1.5}
          />
        </a>
      </div>
    </section>
  )
}
