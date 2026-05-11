import { useState } from 'react'
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
  const [selectedIntent, setSelectedIntent] = useState('');

  const handleSelectIntent = (intent: string) => {
    setSelectedIntent(intent);
    document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Preloader />
      <Navbar onSelectIntent={handleSelectIntent} />
      <main>
        <Hero onSelectIntent={handleSelectIntent} />
        <Problem />
        <Solutions onSelectIntent={handleSelectIntent} />
        <CaseStudies />
        <Authority />
        <SocialProof />
        <Pricing onSelectIntent={handleSelectIntent} />
        <FAQ />
        <Contact selectedIntent={selectedIntent} />
      </main>
      <Footer onSelectIntent={handleSelectIntent} />
      <SpeedInsights />
      <Analytics />
    </div>
  )
}
