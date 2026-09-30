import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"
import Partners from "@/components/Partners"
import { InvestmentThesis, Portfolio } from "@/components/VenturesSections"

export const metadata: Metadata = {
  title: "Investment | Salkantay Capital",
  description: "Early-stage venture capital for Latin American founders.",
}

export default function InvestmentPage() {
  return (
    <DivisionPage
      eyebrow="Investment"
      title="Salkantay Ventures"
      subtitle="Early-stage venture capital for Latin American founders."
      stats={[
        { value: 26, prefix: "US$", suffix: "M", label: "Assets Under Management" },
        { value: 23, label: "Startups Invested" },
        { value: 1300, suffix: "+", label: "Jobs Created" },
      ]}
      groups={[
        {
          title: "Beyond capital",
          services: [
            {
              icon: "compass",
              name: "Strategy",
              description:
                "We sit with founders on the decisions that define the next stage: pricing, expansion, capital structure and exit.",
            },
            {
              icon: "users",
              name: "Talent",
              description:
                "Access to our network for the hires that change a company's trajectory, from senior leadership to board members.",
            },
            {
              icon: "network",
              name: "Network",
              description:
                "Introductions to investors, corporates and operators across the region and beyond, when the company is ready for them.",
            },
          ],
        },
      ]}
      externalCta={{ label: "Visit Salkantay Ventures", href: "https://www.salkantay.vc/" }}
    >
      <InvestmentThesis />
      <Portfolio />
      <Partners
        id="backed-by"
        eyebrow="Backed By"
        title={
          <>
            Backed by leading<br />
            <span className="font-semibold">development finance institutions</span>
          </>
        }
        description={null}
        footnote={null}
      />
    </DivisionPage>
  )
}
