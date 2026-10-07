"use client"

import { motion, Variants } from "framer-motion"
import { Linkedin } from "lucide-react"
import Image from "next/image"
import { useState } from "react"

const sectionVariants: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const staggerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
}

type TeamMember = {
  name: string
  role: string
  bio: string[]
  image: string
  linkedin: string
  position: string
}

function TeamCard({ member }: { member: TeamMember }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      variants={cardVariants}
      className="bg-white group hover:bg-[#F7F9FC] transition-colors duration-300"
    >
      {/* Photo */}
      <div className="relative h-80 overflow-hidden bg-gray-50">
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          quality={90}
          className={`object-cover ${member.position} group-hover:scale-105 transition-transform duration-500`}
        />
      </div>

      {/* Info */}
      <div className="p-8">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-[#0B1F3B] mb-1">{member.name}</h3>
            <div className="text-[11px] text-[#0B1F3B]/40 uppercase tracking-[0.15em]">{member.role}</div>
          </div>
          {member.linkedin !== "#" && (
            <a
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0B1F3B]/30 hover:text-[#0B1F3B] transition-colors mt-1"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="w-8 h-px bg-[#C9A84C] mb-4" />
        <div className="space-y-4">
          {member.bio.map((paragraph, i) => (
            <p
              key={paragraph}
              className={`text-gray-500 text-lg leading-relaxed font-light ${
                expanded ? "" : i === 0 ? "max-md:line-clamp-4" : "max-md:hidden"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
          className="md:hidden mt-3 text-xs tracking-[0.15em] uppercase font-medium text-[#0B1F3B]"
        >
          {expanded ? "See less" : "See more"}
        </button>
      </div>
    </motion.div>
  )
}

export default function Team() {
  const team: TeamMember[] = [
    {
      name: "Martín Aspíllaga",
      role: "Partner",
      bio: [
        "Founding Partner and Managing Director of Salkantay, where he structured and raised Peru's first institutional venture capital fund. Before Salkantay he was Fund Manager at Enfoca, then Peru's largest private equity manager, running a US$350M portfolio across four companies and serving as CFO of Maestro during its turnaround, where he restructured a US$60M loan and closed a consumer finance joint venture.",
        "Earlier he led M&A and strategy teams at Bain & Company in São Paulo, advising on a bank valued at US$500M and on joint ventures worth US$2.5B. MBA from Harvard Business School and economist from Universidad del Pacífico.",
      ],
      image: "/Foto_Martin.png",
      linkedin: "https://pe.linkedin.com/in/martinaspillaga",
      position: "object-[center_30%]",
    },
    {
      name: "Guillermo Miró Quesada",
      role: "Partner",
      bio: [
        "Co-founder and Partner of Salkantay Ventures, where he has originated, negotiated and managed investments across more than twenty companies. He is also co-founder of Blum, a mutual fund manager with more than US$120M in assets under management. Before Salkantay and Blum he was Vice President at Nexus Group, one of Peru's leading private equity firms, investing a US$320M fund, and served as CFO and Corporate Development Manager of Innova Schools.",
        "Earlier he spent four years in New York at JP Morgan and Chase Securities, executing financings, acquisitions, valuations and private placements for private equity funds, on transactions of up to US$2.9B. Economist from Dartmouth College.",
      ],
      image: "/Foto_Guillermo.png",
      linkedin: "https://pe.linkedin.com/in/guillermomiroquesada",
      position: "object-[center_30%]",
    },
    {
      name: "Alfonso Montero",
      role: "Partner",
      bio: [
        "Co-founder of Blum, a mutual fund manager with more than US$120M in assets under management. Before that he was Chief Investment Officer at Credicorp Capital, responsible for asset allocation, security selection and performance across US$7.5B in mutual funds and client mandates, and previously founded Creuza Advisors, the first multifamily office advisory business in Peru.",
        "Earlier he was Deputy Chief Investment Officer at Prima AFP, where he built and ran the firm's US$6.5B portfolios from inception, and began his career at Banco de Crédito del Perú across equity research, proprietary trading and institutional portfolio management. MBA from Stanford Graduate School of Business and philosophy graduate from Dartmouth College.",
      ],
      image: "/Foto_Alfonso.png",
      linkedin: "https://pe.linkedin.com/in/alfonso-montero-667213",
      position: "object-[center_30%]",
    },
    /*{
      name: "Diego Marrero",
      role: "Partner",
      bio: "20+ years in investment management. Former CIO at AFP Habitat. Portfolio Manager at BLUM. MBA, Said Business School, Oxford.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771254471719.png?width=8000&height=8000&resize=contain",
      linkedin: "#",
      position: "object-center",
    },*/
  ]

  return (
    <section id="team" className="bg-white py-32 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

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
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">Our Team</span>
            </div>
            <h2 className="text-4xl md:text-[56px] font-light text-[#0B1F3B] leading-[1.05] tracking-tight">
              Experienced<br />
              <span className="font-semibold">across the platform.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-4">
            <p className="text-gray-500 text-[21px] leading-relaxed font-light max-w-md">
              A senior team with two decades of combined experience across investment management, capital markets and corporate transactions in Latin America and global markets.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-100 max-w-7xl mx-auto"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}