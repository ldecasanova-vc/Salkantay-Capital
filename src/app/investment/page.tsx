import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "Investment | Salkantay Capital",
  description: "Early-stage venture capital for Latin American founders.",
}

export default function InvestmentPage() {
  return (
    <DivisionPage
      eyebrow="Salkantay Ventures"
      title="Investment"
      subtitle="Early-stage venture capital for Latin American founders."
      stats={[
        { value: 26, prefix: "US$", suffix: "M", label: "Assets Under Management" },
        { value: 23, label: "Startups Invested" },
        { value: 1300, suffix: "+", label: "Jobs Created" },
      ]}
      groups={[
        {
          services: [
            {
              icon: "rocket",
              name: "Venture Capital",
              description:
                "We back founders using technology to close gaps in the region, across three pillars: human improvement, with edtech, jobtech and healthtech; economic development, with fintech, proptech and SaaS; and a sustainable planet, with agtech, climate tech and smart cities. Beyond capital, we work as a hands-on partner on strategy, talent and access to a global network.",
              href: "https://www.salkantay.vc/",
            },
          ],
        },
      ]}
    />
  )
}
