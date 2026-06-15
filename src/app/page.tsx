import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import Divisions from "@/components/Divisions"
import InvestmentStrategy from "@/components/InvestmentStrategy"
import Results from "@/components/Results"
import WhyUs from "@/components/WhyUs"
import Team from "@/components/Team"
import Partners from "@/components/Partners"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Divisions />
      <InvestmentStrategy />
      <Results />
      <WhyUs />
      <Team />
      <Partners />
      <Footer />
    </div>
  )
}