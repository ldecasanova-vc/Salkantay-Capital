import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "Strategy | Salkantay Capital",
  description:
    "Senior strategic counsel for owners and management teams, from the first diagnostic to execution.",
}

export default function StrategyPage() {
  return (
    <DivisionPage
      eyebrow="Salkantay Capital"
      title="Strategy"
      subtitle="Senior strategic counsel for owners and management teams, from the first diagnostic to execution."
      groups={[
        {
          services: [
            {
              icon: "compass",
              name: "Strategy Counsel",
              description:
                "Ongoing access to a senior partner for the decisions that shape the business.",
            },
            {
              icon: "users",
              name: "Fractional CSO",
              description:
                "A senior strategy lead embedded part-time in your management team.",
            },
            {
              icon: "scanSearch",
              name: "Strategic Diagnostic & Plan",
              description:
                "A structured assessment of the business, its performance and its market, delivered as a strategic roadmap for the period ahead.",
            },
            {
              icon: "handshake",
              name: "Value Creation Program",
              description:
                "We work with your team on the initiatives that move enterprise value: pricing, growth, efficiency and capital structure.",
            },
          ],
        },
      ]}
    />
  )
}
