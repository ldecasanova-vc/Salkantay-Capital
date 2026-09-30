import type { Metadata } from "next"
import DivisionPage from "@/components/DivisionPage"

export const metadata: Metadata = {
  title: "M&A Advisory | Salkantay Capital",
  description:
    "M&A advisory for owners and management teams of mid-market companies across Peru and the Andean region.",
}

export default function MAPage() {
  return (
    <DivisionPage
      eyebrow="Salkantay Capital"
      title="M&A Advisory"
      subtitle="We advise owners and management teams of mid-market companies across Peru and Latin America, from the first strategic conversation to the closing of the transaction."
      groups={[
        {
          services: [
            {
              icon: "compass",
              name: "Deal Counsel",
              description:
                "Ongoing access to a senior partner while your team runs the transaction.",
            },
            {
              icon: "users",
              name: "Fractional Head of M&A",
              description:
                "A senior M&A lead embedded part-time to steer the process alongside management.",
            },
            {
              icon: "scanSearch",
              name: "Exit Readiness",
              description:
                "An assessment of how the business will be read by an acquirer, delivered as a plan to close the gaps before the process starts.",
            },
            {
              icon: "handshake",
              name: "Sell-side / Buy-side / Capital Raising",
              description:
                "Full execution of the transaction: valuation, data room, counterparty outreach and negotiation through to closing.",
            },
          ],
        },
      ]}
    />
  )
}
