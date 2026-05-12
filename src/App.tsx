import { useState, lazy, Suspense } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import Preloader from '@/components/Preloader'
import { ErrorBoundary } from '@/components/ErrorBoundary'
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"
import { useScrollTo } from '@/hooks/useScrollTo'

// Lazy load: seções abaixo do fold
const Problem = lazy(() => import('@/components/sections/Problem'))
const Solutions = lazy(() => import('@/components/sections/Solutions'))
const CaseStudies = lazy(() => import('@/components/sections/CaseStudies'))
const Authority = lazy(() => import('@/components/sections/Authority'))
const SocialProof = lazy(() => import('@/components/sections/SocialProof'))
const Pricing = lazy(() => import('@/components/sections/Pricing'))
const FAQ = lazy(() => import('@/components/sections/FAQ'))
const Contact = lazy(() => import('@/components/sections/Contact'))
const Footer = lazy(() => import('@/components/Footer'))

export default function App() {
  const [selectedIntent, setSelectedIntent] = useState('');
  const scrollTo = useScrollTo();

  const handleSelectIntent = (intent: string) => {
    setSelectedIntent(intent);
    scrollTo('contato');
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
