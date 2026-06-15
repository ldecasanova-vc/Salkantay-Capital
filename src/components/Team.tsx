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
      bio: "20+ years in PE, VC and banking. Deep expertise in portfolio operations and capital markets. Co-founder of Salkantay and BLUM.",
      image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/image-1761668998133.png?width=8000&height=8000&resize=contain",
      linkedin: "https://pe.linkedin.com/in/guillermomiroquesada",
      position: "object-[center_30%]",
    },
    /*{
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
            <p className="text-gray-500 text-base leading-relaxed font-light max-w-md">
              A senior team with two decades of combined experience across investment management, capital markets and corporate transactions in Latin America and global markets.
            </p>
          </div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gray-100 max-w-3xl mx-auto"
          variants={staggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={cardVariants}
              className="bg-white group hover:bg-[#F7F9FC] transition-colors duration-300"
            >
              {/* Photo */}
              <div className="relative h-80 overflow-hidden bg-gray-50">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={90}
                  className={`object-cover ${member.position} group-hover:scale-105 transition-transform duration-500`}
                />
              </div>

              {/* Info */}
              <div className="p-7">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-base font-semibold text-[#0B1F3B] mb-1">{member.name}</h3>
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
                <p className="text-gray-500 text-sm leading-relaxed font-light">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}