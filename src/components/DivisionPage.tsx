"use client"

import type { ReactNode } from "react"
import { motion, Variants } from "framer-motion"
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Handshake,
  ScanSearch,
  Users,
} from "lucide-react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"

// Icons are referenced by key so server-rendered pages can pass service data
const icons = {
  compass: Compass,
  handshake: Handshake,
  scanSearch: ScanSearch,
  users: Users,
}

export type Service = {
  icon: keyof typeof icons
  name: string
  // May contain inline links; the card itself must then have no href
  description: ReactNode
  // External URLs open in a new tab; "#anchor" links stay on the page
  href?: string
}

export type ServiceGroup = {
  services: Service[]
}

type DivisionPageProps = {
  eyebrow: string
  title: string
  subtitle: string
  groups: ServiceGroup[]
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
  const isExternal = service.href?.startsWith("http")
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
      <p className="text-gray-500 text-[21px] leading-relaxed font-light">
        {service.description}
      </p>
    </>
  )

  return (
    <motion.div variants={itemVariants} className="bg-white">
      {service.href ? (
        <a
          href={service.href}
          {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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

function ServiceGroupBlock({ group }: { group: ServiceGroup }) {
  return (
    <div>
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
  )
}

export default function DivisionPage({
  eyebrow,
  title,
  subtitle,
  groups,
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
        </motion.div>
      </section>

      {/* Services */}
      <section className="bg-white py-32 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-20">
          {groups.map((group, i) => (
            <ServiceGroupBlock key={i} group={group} />
          ))}
        </div>
      </section>

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
          <a
            href="#contact"
            className="self-start md:self-auto inline-flex items-center justify-center gap-2 bg-[#0B1F3B] text-white px-6 py-3 text-xs font-medium tracking-[0.15em] uppercase hover:bg-[#162d54] transition-colors duration-300"
          >
            Contact Us <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>
      </section>

      <Footer />
    </div>
  )
}
