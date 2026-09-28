import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "Strategy | Salkantay Capital",
  description: "Investment strategy built and managed by Blum, our digital fund manager.",
}

export default function StrategyPage() {
  return (
    <DivisionPage
      eyebrow="Salkantay Capital"
      title="Strategy"
      subtitle="Investment strategy built and managed by Blum, our digital fund manager."
      stats={[
        { value: 120, prefix: "US$", suffix: "M", label: "Assets Under Management" },
        { value: 7, prefix: "US$", suffix: "B", label: "Managed by the Team" },
        { value: 10, label: "Mutual Funds" },
      ]}
      intro="Blum is our independent digital fund manager, regulated by the SMV. Ten mutual funds in soles and dollars, managed by a team that has run over US$7B in investments."
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
      highlights={[
        {
          title: "No entry or exit fees",
          description: "Invest and withdraw without paying commissions on the way in or out.",
        },
        {
          title: "No lock-up periods",
          description: "Redeem when you need to, with no minimum holding period.",
        },
        {
          title: "Soles and dollars",
          description: "Choose the currency that fits your goals, with funds available in both.",
        },
      ]}
      externalCta={{ label: "Visit Blum", href: "https://www.miblum.com/" }}
    />
  )
}
