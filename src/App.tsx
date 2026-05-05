import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Problem from './components/Problem'
import Solutions from './components/Solutions'
import CaseStudies from './components/CaseStudies'
import Authority from './components/Authority'
import SocialProof from './components/SocialProof'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import Preloader from './components/Preloader'

export default function App() {
  return (
    <div className="min-h-screen">
      <Preloader />
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <CaseStudies />
        <Authority />
        <SocialProof />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}
