import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "Strategy | Salkantay Capital",
  description: "Investment strategy built and managed by Blum, our fund manager.",
}

export default function StrategyPage() {
  return (
    <DivisionPage
      eyebrow="Strategy"
      title="Blum"
      subtitle="Investment strategy built and managed by Blum, our fund manager."
      stats={[
        { value: 120, prefix: "US$", suffix: "M", label: "Assets Under Management" },
        { value: 7, prefix: "US$", suffix: "B", label: "Managed by the Team" },
        { value: 10, label: "Mutual Funds" },
      ]}
      intro="Blum is our independent fund manager, regulated by the SMV. Ten mutual funds in soles and dollars, managed by a team that has run over US$7B in investments."
      groups={[
        {
          services: [
            {
              icon: "banknote",
              name: "Cash and Money Market",
              description:
                "Short-term funds in soles and dollars for liquidity, with daily availability.",
            },
            {
              icon: "globe",
              name: "Global Bonds",
              description:
                "Fixed income exposure to international markets, from investment grade to global credit.",
            },
            {
              icon: "trendingUp",
              name: "Global Equities",
              description:
                "Diversified equity exposure to global markets, including US large caps.",
            },
            {
              icon: "layers",
              name: "Private Debt",
              description:
                "Access to private credit strategies, previously reserved for institutional investors.",
            },
          ],
        },
      ]}
      externalCta={{ label: "Visit Blum", href: "https://www.miblum.com/" }}
    />
  )
}
