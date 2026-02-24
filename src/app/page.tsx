import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import InvestmentStrategy from "@/components/InvestmentStrategy"
import Performance from "@/components/Performance"
import WhyUs from "@/components/WhyUs"
import Team from "@/components/Team"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <InvestmentStrategy />
      <Performance />
      <WhyUs />
      <Team />
      <Footer />
    </div>
  )
}