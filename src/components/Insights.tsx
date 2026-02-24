"use client"

import { motion, Variants } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const sectionVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
}

const staggerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const insights = [
    {
        category: "Market Outlook",
        title: "Global Fixed Income in 2025: Navigating Rate Transitions",
        description:
            "As central banks pivot, disciplined fund selection and active duration management will define alpha generation in global bond markets.",
        readTime: "5 min read",
    },
    {
        category: "Strategy",
        title: "Private Credit & Asset-Backed Debt: The Diversification Case",
        description:
            "Low correlation to traditional markets makes private credit a cornerstone of resilient portfolio construction for institutional investors.",
        readTime: "4 min read",
    },
    {
        category: "Offshore Access",
        title: "Accessing Global Fixed Income from LATAM: The Offshore Opportunity",
        description:
            "Offshore structures provide LATAM investors efficient, cost-effective access to best-in-class global fixed income managers.",
        readTime: "6 min read",
    },
]

export default function Insights() {
    return (
        <section id="insights" className="bg-white py-28 px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">

                {/* Header row */}
                <motion.div
                    variants={sectionVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16"
                >
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-8 h-px bg-[#0B1F3B]" />
                            <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                                Insights
                            </span>
                        </div>
                        <h2 className="text-4xl md:text-[52px] font-light text-[#0B1F3B] leading-[1.1] tracking-tight">
                            Thinking Forward<br />
                            <span className="font-semibold">in Fixed Income</span>
                        </h2>
                    </div>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#0B1F3B] text-xs tracking-[0.18em] uppercase font-medium border-b border-[#0B1F3B]/30 pb-0.5 hover:border-[#0B1F3B] transition-colors self-start md:self-auto"
                    >
                        View All Research <ArrowUpRight className="w-3 h-3" />
                    </a>
                </motion.div>

                {/* Cards */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-3 gap-px bg-gray-100"
                    variants={staggerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {insights.map((item) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            className="bg-white p-8 group cursor-pointer hover:bg-[#F5F6F7] transition-colors duration-300"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-blue-600/70">
                                    {item.category}
                                </span>
                                <ArrowUpRight className="w-4 h-4 text-gray-200 group-hover:text-[#0B1F3B] transition-colors duration-300" />
                            </div>
                            <h3 className="text-base font-semibold text-[#0B1F3B] leading-snug mb-4 group-hover:text-[#0B1F3B]/80 transition-colors">
                                {item.title}
                            </h3>
                            <p className="text-gray-400 text-sm leading-relaxed font-light mb-8">
                                {item.description}
                            </p>
                            <div className="text-gray-300 text-[11px] tracking-wide uppercase">{item.readTime}</div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
