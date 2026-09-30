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
              name: "Investment Counsel",
              description:
                "Ongoing access to a senior partner on allocation and portfolio decisions.",
            },
            {
              icon: "users",
              name: "Fractional CIO / Family Office",
              description:
                "The investment discipline of an institutional CIO, applied to the oversight of your portfolio.",
            },
            {
              icon: "scanSearch",
              name: "Liquidity & Legacy Plan",
              description:
                "A structured plan for the capital that follows a liquidity event: allocation, structuring and the transition to the next generation.",
            },
            {
              icon: "handshake",
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
                  , our early-stage fund.
                </>
              ),
            },
          ],
        },
      ]}
    />
  )
}
