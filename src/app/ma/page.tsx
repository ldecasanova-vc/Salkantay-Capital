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
      eyebrow="Corporate Finance & Advisory"
      title="M&A Advisory"
      subtitle="We advise owners and management teams of mid-market companies across Peru and the Andean region, from the first strategic conversation to the closing of the transaction."
      groups={[
        {
          title: "Understand and Formulate",
          duration: "3 to 6 months",
          services: [
            {
              icon: "compass",
              name: "M&A Coach",
              description:
                "Market research, strategic position and an initial roadmap, plus working sessions with you to pressure test every decision along the way.",
            },
            {
              icon: "scanSearch",
              name: "M&A Oversight",
              description:
                "We value the company standalone and at full potential, benchmark it against transaction multiples and set the roadmap. From there we coordinate counterparties and keep the process on track, without taking over its execution.",
            },
          ],
        },
        {
          title: "Path Forward",
          duration: "1 to 2 years",
          services: [
            {
              icon: "trendingUp",
              name: "Plan for Exit",
              description:
                "A seat on the board for one to two years, shaping the value creation plan and the route to a sale or a capital raise before the process begins.",
            },
            {
              icon: "handshake",
              name: "M&A Engagement",
              description:
                "We value the company, set up the data room and lead the execution team of lawyers, consultants and advisors through negotiation to closing.",
            },
          ],
        },
      ]}
      steps={[
        {
          title: "Diagnose",
          description:
            "We read the business, its numbers and its market to frame the real decision behind the transaction.",
        },
        {
          title: "Prepare",
          description:
            "Financial model, valuation and data room built to withstand a counterparty's scrutiny.",
        },
        {
          title: "Execute",
          description:
            "Buyer or investor outreach under confidentiality, negotiation and coordination of the full execution team.",
        },
        {
          title: "Close",
          description:
            "Final terms, closing documentation and the transition into the new ownership or capital structure.",
        },
      ]}
    />
  )
}
