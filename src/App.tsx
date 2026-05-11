import { useState, lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Preloader from '@/components/Preloader'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

// Lazy load: seções abaixo do fold
const Problem = lazy(() => import('@/components/Problem'))
const Solutions = lazy(() => import('@/components/Solutions'))
const CaseStudies = lazy(() => import('@/components/CaseStudies'))
const Authority = lazy(() => import('@/components/Authority'))
const SocialProof = lazy(() => import('@/components/SocialProof'))
const Pricing = lazy(() => import('@/components/Pricing'))
const FAQ = lazy(() => import('@/components/FAQ'))
const Contact = lazy(() => import('@/components/Contact'))
const Footer = lazy(() => import('@/components/Footer'))

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
        <ErrorBoundary>
          <Suspense fallback={null}>
            <Problem />
            <Solutions onSelectIntent={handleSelectIntent} />
            <CaseStudies />
            <Authority />
            <SocialProof />
            <Pricing onSelectIntent={handleSelectIntent} />
            <FAQ />
            <Contact selectedIntent={selectedIntent} />
          </Suspense>
        </ErrorBoundary>
      </main>
      <ErrorBoundary>
        <Suspense fallback={null}>
          <Footer onSelectIntent={handleSelectIntent} />
        </Suspense>
      </ErrorBoundary>
      <SpeedInsights />
      <Analytics />
    </div>
  )
}
