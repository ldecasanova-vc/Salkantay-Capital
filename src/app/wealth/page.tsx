import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "Wealth | Salkantay Capital",
  description:
    "Investment counsel and access to private markets for families and private investors.",
}

export default function WealthPage() {
  return (
    <DivisionPage
      eyebrow="Salkantay Capital"
      title="Wealth"
      subtitle="Investment counsel and access to private markets for families and private investors."
      groups={[
        {
          services: [
            {
              icon: "compass",
              tag: "Counsel · Retainer",
              name: "Investment Counsel",
              description:
                "Independent advice on asset allocation and portfolio decisions for families and private investors.",
            },
            {
              icon: "users",
              tag: "Fractional · Embedded role",
              name: "Fractional CIO / Family Office",
              description:
                "A senior investment lead embedded in your family office, overseeing managers, allocation and reporting.",
            },
            {
              icon: "scanSearch",
              tag: "Plan · Project",
              name: "Liquidity & Legacy Plan",
              description:
                "A plan for what comes after a liquidity event: structuring, allocation and the transition to the next generation.",
            },
            {
              icon: "handshake",
              tag: "Execute · Transaction",
              name: "Access to VC & Alternatives",
              description: (
                <>
                  Access to venture capital and alternative strategies through{" "}
                  <a
                    href="https://www.salkantay.vc/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    Salkantay Ventures
                  </a>
                  , our early-stage fund, and{" "}
                  <a
                    href="https://www.miblum.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 hover:text-[#C9A84C] transition-colors duration-300"
                  >
                    Blum
                  </a>
                  , our fund manager.
                </>
              ),
            },
          ],
        },
      ]}
      externalCta={{ label: "Visit Salkantay Ventures", href: "https://www.salkantay.vc/" }}
    />
  )
}
