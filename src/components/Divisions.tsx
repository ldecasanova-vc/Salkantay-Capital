"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { motion, Variants } from "framer-motion"
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Rocket,
  Banknote,
  Layers,
  FileSignature,
  TrendingUp,
  Handshake,
  Globe,
  Compass,
  type LucideIcon,
} from "lucide-react"

type Service = {
  icon: LucideIcon
  name: string
  description: string
  href?: string
}

type Division = {
  number: string
  title: string
  tagline: string
  services: Service[]
}

const divisions: Division[] = [
  {
    number: "01",
    title: "Asset Management",
    tagline:
      "Disciplined origination and portfolio construction across private market strategies, designed to deliver risk-adjusted returns through cycles.",
    services: [
      {
        icon: Rocket,
        name: "Venture Capital",
        description:
          "Early-stage venture capital focused on Latin American founders and startups solving critical regional challenges through technology.",
        // SERVICE LINK — replace with the real Venture Capital page URL
        href: "https://www.salkantay.vc/",
      },
      {
        icon: Banknote,
        name: "Private Debt",
        description:
          "Direct lending and structured credit solutions for established companies seeking flexible financing.",
      },
      {
        icon: Layers,
        name: "SPVs",
        description:
          "Bespoke special purpose vehicles structured for focused investment opportunities and co-investments.",
      },
    ],
  },
  {
    number: "02",
    title: "Corporate Finance & Advisory",
    tagline:
      "Strategic counsel for companies navigating capital structure, transactions and growth — from initial fundraising to complex M&A.",
    services: [
      {
        icon: FileSignature,
        name: "Debt Structuring",
        description:
          "Design and arrangement of debt instruments tailored to capital needs and balance-sheet objectives.",
      },
      {
        icon: TrendingUp,
        name: "Fundraising",
        description:
          "End-to-end execution of equity and debt capital raises across institutional and strategic investors.",
      },
      {
        icon: Handshake,
        name: "M&A",
        description:
          "Sell-side, buy-side and strategic advisory throughout the transaction lifecycle.",
      },
    ],
  },
  {
    number: "03",
    title: "Wealth Management",
    tagline:
      "Personalized portfolio construction and cross-border structuring for private clients, with the same discipline we bring to institutional capital.",
    services: [
      {
        icon: Globe,
        name: "Offshore",
        description:
          "Cross-border portfolio access and international wealth structuring for sophisticated clients.",
      },
      {
        icon: Compass,
        name: "Wealth Advisory",
        description:
          "Comprehensive advisory across asset allocation, strategy and long-term wealth planning.",
        // SERVICE LINK — replace with the real Wealth Advisory page URL
        href: "https://www.miblum.com/",
      },
    ],
  },
]

const headingVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
}

export default function Divisions() {
  const autoplay = useRef(
    Autoplay({ delay: 6000, stopOnInteraction: false, stopOnMouseEnter: true })
  )
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [autoplay.current]
  )
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(true)

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
    setCanPrev(emblaApi.canScrollPrev())
    setCanNext(emblaApi.canScrollNext())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  const resetAutoplay = () => {
    const ap = autoplay.current as unknown as { reset?: () => void }
    ap.reset?.()
  }
  const scrollPrev = () => {
    emblaApi?.scrollPrev()
    resetAutoplay()
  }
  const scrollNext = () => {
    emblaApi?.scrollNext()
    resetAutoplay()
  }
  const scrollTo = (i: number) => {
    emblaApi?.scrollTo(i)
    resetAutoplay()
  }

  return (
    <section id="services" className="bg-white py-32 md:py-44 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Heading — primary, oversized */}
        <motion.div
          variants={headingVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-20 md:mb-24"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-px bg-[#0B1F3B]" />
              <span className="text-[#0B1F3B]/40 text-[11px] tracking-[0.22em] uppercase font-medium">
                What We Do
              </span>
            </div>
            <h2 className="text-[clamp(36px,5.5vw,64px)] font-light text-[#0B1F3B] leading-[1.05] tracking-[-0.02em]">
              Three divisions,<br />
              <span className="font-semibold italic">one platform.</span>
            </h2>
          </div>
          <p className="text-gray-500 text-base max-w-sm leading-relaxed font-light md:text-right">
            Explore the services we offer across Asset Management, Corporate Finance & Advisory, and Wealth Management.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {divisions.map((division) => (
                <div
                  key={division.number}
                  className="min-w-0 shrink-0 grow-0 basis-full"
                >
                  <div className="bg-transparent text-[#0B1F3B] p-2 md:p-4 grid md:grid-cols-12 gap-12 md:gap-20">

                    {/* Left: number + title + tagline */}
                    <div className="md:col-span-5">
                      <div className="text-[12px] font-medium text-[#0B1F3B]/40 tracking-[0.22em] uppercase mb-8">
                        Division {division.number}
                      </div>
                      <h3 className="text-5xl md:text-[68px] font-light leading-[1] tracking-tight mb-8">
                        {division.title}
                      </h3>
                      <div className="w-16 h-px bg-[#C9A84C] mb-8" />
                      <p className="text-gray-500 text-xl leading-relaxed font-light max-w-md">
                        {division.tagline}
                      </p>
                    </div>

                    {/* Right: services */}
                    <div
                      className={`md:col-span-7 grid grid-cols-1 gap-px bg-gray-200 self-start ${
                        division.services.length === 2
                          ? "sm:grid-cols-2"
                          : "sm:grid-cols-3"
                      }`}
                    >
                      {division.services.map((service) => {
                        const cardClasses =
                          "relative bg-white p-7 md:p-9 group/card hover:bg-[#EEF2F7] transition-colors duration-300"
                        const cardContent = (
                          <>
                            {service.href && (
                              <ArrowUpRight
                                className="absolute top-6 right-6 w-4 h-4 text-[#0B1F3B]/25 group-hover/card:text-[#0B1F3B] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all duration-300"
                                strokeWidth={1.5}
                              />
                            )}
                            <service.icon
                              className="w-6 h-6 text-[#C9A84C] mb-6"
                              strokeWidth={1.5}
                            />
                            <h4 className="text-lg font-semibold text-[#0B1F3B] mb-3">
                              {service.name}
                            </h4>
                            <p className="text-gray-500 text-[15px] leading-relaxed font-light">
                              {service.description}
                            </p>
                          </>
                        )

                        return service.href ? (
                          <Link
                            key={service.name}
                            href={service.href}
                            className={cardClasses}
                          >
                            {cardContent}
                          </Link>
                        ) : (
                          <div key={service.name} className={cardClasses}>
                            {cardContent}
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-between">
            {/* Dots */}
            <div className="flex items-center gap-3">
              {divisions.map((d, i) => (
                <button
                  key={d.number}
                  onClick={() => scrollTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group/dot flex items-center gap-3"
                >
                  <span
                    className={`h-px transition-all duration-300 ${
                      selectedIndex === i
                        ? "w-10 bg-[#0B1F3B]"
                        : "w-5 bg-[#0B1F3B]/20 group-hover/dot:bg-[#0B1F3B]/40"
                    }`}
                  />
                  <span
                    className={`text-[11px] tracking-[0.18em] uppercase transition-colors duration-300 ${
                      selectedIndex === i
                        ? "text-[#0B1F3B]"
                        : "text-[#0B1F3B]/30 group-hover/dot:text-[#0B1F3B]/60"
                    }`}
                  >
                    {d.number}
                  </span>
                </button>
              ))}
            </div>

            {/* Arrows */}
            <div className="flex items-center gap-3">
              <button
                onClick={scrollPrev}
                disabled={!canPrev}
                aria-label="Previous division"
                className="w-11 h-11 border border-[#0B1F3B]/20 flex items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#0B1F3B]"
              >
                <ArrowLeft className="w-4 h-4" strokeWidth={1.5} />
              </button>
              <button
                onClick={scrollNext}
                disabled={!canNext}
                aria-label="Next division"
                className="w-11 h-11 border border-[#0B1F3B]/20 flex items-center justify-center text-[#0B1F3B] hover:bg-[#0B1F3B] hover:text-white transition-colors duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-transparent disabled:hover:text-[#0B1F3B]"
              >
                <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
