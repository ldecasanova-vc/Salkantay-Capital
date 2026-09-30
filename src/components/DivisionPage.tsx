"use client"

import type { ReactNode } from "react"
import { motion, Variants } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Banknote,
  Compass,
  Globe,
  Handshake,
  Layers,
  Network,
  ScanSearch,
  TrendingUp,
  Users,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { AnimatedStat } from "@/components/Hero"

// Icons are referenced by key so server-rendered pages can pass service data
const icons = {
  banknote: Banknote,
  compass: Compass,
  globe: Globe,
  handshake: Handshake,
  layers: Layers,
  network: Network,
  scanSearch: ScanSearch,
  trendingUp: TrendingUp,
  users: Users,
}

export type Service = {
  icon: keyof typeof icons
  name: string
  description: string
  href?: string
}

export type ServiceGroup = {
  title?: string
  duration?: string
  services: Service[]
}

export type Stat = {
  value: number
  label: string
  prefix?: string
  suffix?: string
  decimals?: number
}

export type Step = {
  title: string
  description: string
}

export type ExternalCta = {
  label: string
  href: string
}

type DivisionPageProps = {
  eyebrow: string
  title: string
  subtitle: string
  groups: ServiceGroup[]
  steps?: Step[]
  stats?: Stat[]
  intro?: string
  externalCta?: ExternalCta
  // Page-specific sections, rendered between the shared sections and the closing CTA
  children?: ReactNode
}

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

function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon]
  const cardClasses =
    "relative block h-full bg-white p-7 md:p-9 group/card hover:bg-[#EEF2F7] transition-colors duration-300"
  const cardContent = (
    <>
      {service.href && (
        <ArrowUpRight
          className="absolute top-6 right-6 w-4 h-4 text-[#0B1F3B]/25 group-hover/card:text-[#0B1F3B] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-300"
          strokeWidth={1.5}
        />
      )}
      <Icon className="w-6 h-6 text-[#C9A84C] mb-6" strokeWidth={1.5} />
      <h4 className="text-[23px] font-semibold text-[#0B1F3B] mb-3">{service.name}</h4>
      <p className="text-gray-500 text-[19px] leading-relaxed font-light">
        {service.description}
      </p>
    </>
  )

  return (
    <motion.div variants={itemVariants} className="bg-white">
      {service.href ? (
        <a
          href={service.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cardClasses}
        >
          {cardContent}
        </a>
      ) : (
        <div className={cardClasses}>{cardContent}</div>
      )}
    </motion.div>
  )
}

export default function DivisionPage({
  eyebrow,
  title,
  subtitle,
  groups,
  steps,
  stats,
  intro,
  externalCta,
  children,
}: DivisionPageProps) {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Section header */}
      <section className="bg-[#0B1F3B] text-white pt-40 pb-24 md:pb-28 px-6 lg:px-8">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 md:gap-16"
        >
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-white/30" />
              <span className="text-white/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                {eyebrow}
              </span>
            </div>
            <h1 className="text-4xl md:text-[56px] font-light leading-[1.05] tracking-tight">
              {title}
            </h1>
          </div>
          <div className="md:col-span-5 md:pt-4 md:self-end">
            <p className="text-white/50 text-[21px] leading-relaxed font-light max-w-md">
              {subtitle}
            </p>
          </div>
          {stats && (
            <div className="md:col-span-12 border-t border-white/10 pt-10 grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-20 max-w-2xl">
              {stats.map((stat) => (
                <AnimatedStat key={stat.label} {...stat} />
              ))}
            </div>
          )}
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-white py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {intro && (
            <motion.p
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="text-gray-500 text-[21px] leading-relaxed font-light max-w-3xl"
            >
              {intro}
            </motion.p>
          )}
          {groups.map((group, i) => (
            <div key={group.title ?? i}>
              {group.title && (
                <motion.div
                  variants={sectionVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-80px" }}
                  className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10"
                >
                  <h2 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight">
                    {group.title}
                  </h2>
                  {group.duration && (
                    <span className="text-[11px] font-medium text-[#0B1F3B]/40 tracking-[0.18em] uppercase">
                      {group.duration}
                    </span>
                  )}
                </motion.div>
              )}
              <motion.div
                variants={staggerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                className={`grid grid-cols-1 gap-px bg-gray-200 ${
                  group.services.length === 3
                    ? "md:grid-cols-3"
                    : group.services.length > 1
                      ? "sm:grid-cols-2"
                      : "max-w-xl"
                }`}
              >
                {group.services.map((service) => (
                  <ServiceCard key={service.name} service={service} />
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      {/* How we work */}
      {steps && (
        <section className="bg-[#F7F9FC] py-32 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
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
                  Our Process
                </span>
              </div>
              <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
                How we work
              </h2>
            </motion.div>

            <motion.div
              variants={staggerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-gray-200"
            >
              {steps.map((step, i) => (
                <motion.div key={step.title} variants={itemVariants} className="bg-white p-10">
                  <div className="text-[11px] font-medium text-[#0B1F3B]/30 tracking-[0.18em] uppercase mb-8">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-light text-[#0B1F3B] leading-[1.1] tracking-tight mb-6">
                    {step.title}
                  </h3>
                  <div className="w-10 h-px bg-[#C9A84C] mb-6" />
                  <p className="text-gray-500 text-[21px] leading-relaxed font-light">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      )}

      {children}

      {/* Closing CTA */}
      <section className="bg-white py-24 px-6 lg:px-8 border-t border-gray-200">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10"
        >
          <h2 className="text-3xl md:text-[40px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight">
            Ready to start<br />
            <span className="font-semibold">the conversation?</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 self-start md:self-auto">
            {externalCta && (
              <a
                href={externalCta.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#0B1F3B] text-white px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#162d54] transition-colors duration-300"
              >
                {externalCta.label} <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
            <a
              href="#contact"
              className={`inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase transition-colors duration-300 ${
                externalCta
                  ? "border border-[#0B1F3B]/20 text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white"
                  : "bg-[#0B1F3B] text-white hover:bg-[#162d54]"
              }`}
            >
              Contact Us <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
