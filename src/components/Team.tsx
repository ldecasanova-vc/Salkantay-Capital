"use client"

import { motion, Variants } from "framer-motion"
import { Linkedin } from "lucide-react"
import Image from "next/image"

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

export default function Team() {
  const team = [
    {
      name: "Martín Aspillaga",
      role: "Partner",
      bio: "20+ years in private equity and venture capital. Former Managing Partner at Enfoca (US$350M AUM). Co-Founder of Salkantay Ventures.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761670210643.png?width=8000&height=8000&resize=contain",
      linkedin: "https://pe.linkedin.com/in/martinaspillaga",
      position: "object-[center_30%]",
    },
    {
      name: "Guillermo Miró Quesada",
      role: "Partner",
      bio: "Co-founder of Salkantay and BLUM. 20+ years in PE, VC and banking. Deep expertise in portfolio operations and capital markets.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761668998133.png?width=8000&height=8000&resize=contain",
      linkedin: "https://pe.linkedin.com/in/guillermomiroquesada",
      position: "object-[center_30%]",
    },
    {
      name: "Alfonso Montero",
      role: "Partner",
      bio: "20+ years in asset management. Former CIO at Credicorp Capital (US$12B AUM) and Deputy CIO at Prima AFP (US$10B AUM). Co-founder of BLUM.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771251347205.png?width=8000&height=8000&resize=contain",
      linkedin: "#",
      position: "object-[center_25%]",
    },
    {
      name: "Diego Marrero",
      role: "Partner",
      bio: "20+ years in investment management. Former CIO at AFP Habitat. Portfolio Manager at BLUM. MBA, Said Business School, Oxford.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/project-uploads/4ca888d5-6d2b-4bca-b425-08193c9bec72/image-1771254471719.png?width=8000&height=8000&resize=contain",
      linkedin: "#",
      position: "object-center",
    },
  ]

  return (
    <section id="team" className="bg-[#111827] py-28 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-white/25" />
            <span className="text-white/35 text-[11px] tracking-[0.22em] uppercase font-medium">Leadership</span>
          </div>
          <h2 className="text-4xl md:text-[52px] font-light text-white leading-[1.1] tracking-tight">
            Experienced<br />
            <span className="font-semibold">Investment Team</span>
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member) => (
            <motion.div key={member.name} variants={cardVariants} className="bg-white/[0.04] border border-white/[0.08] group hover:bg-white/[0.07] transition-colors duration-300">

              {/* Photo */}
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={90}
                  className={`object-cover ${member.position} group-hover:scale-105 transition-transform duration-500 brightness-90 group-hover:brightness-100`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>

              {/* Info */}
              <div className="p-6 border-t border-white/[0.07]">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-0.5">{member.name}</h3>
                    <div className="text-[11px] text-white/35 uppercase tracking-wide mb-4">{member.role}</div>
                  </div>
                  {member.linkedin !== "#" && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/20 hover:text-white/60 transition-colors mt-0.5"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
                </div>
                <p className="text-white/40 text-xs leading-relaxed font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}