import React from 'react'
import dynamic from 'next/dynamic'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'

// Lazy load below-fold components
const Portfolio = dynamic(() => import('../components/Portfolio'), { ssr: true })
const Pricing = dynamic(() => import('../components/Pricing'), { ssr: true })
const FAQ = dynamic(() => import('../components/FAQ'), { ssr: true })
const Callout = dynamic(() => import('../components/Callout'), { ssr: true })
const Footer = dynamic(() => import('../components/Footer'), { ssr: true })
const ThreeDCarouselClient = dynamic(() => import('../components/ThreeDCarouselClient'))
const LogoMarquee = dynamic(() => import('../components/LogoMarquee'), { ssr: true })
const Team = dynamic(() => import('../components/Team'), { ssr: true })
const Testimonials = dynamic(() => import('../components/Testimonials'), { ssr: true })
const Awards = dynamic(() => import('../components/Awards'), { ssr: true })
const ServicesMarquee = dynamic(() => import('../components/ServicesMarquee'), { ssr: true })
const WorkCTA = dynamic(() => import('../components/WorkCTA'), { ssr: true })

export default function Page() {
  return (
    <main className="pt-0 md:pt-20 mb-0">
      <Header />

      <Hero />
      <div className="bg-white relative z-30">
        <LogoMarquee />
        <div className="relative z-30 w-full bg-transparent">
          <div className="container mx-auto px-6 lg:px-12 py-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex-1 h-px bg-slate-200" />
              <div className="px-4 text-sm text-slate-500 text-center">Loved by 500+ big and small brands around the world</div>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-[15] pointer-events-none opacity-20 transform translate-y-48 sm:translate-y-64">
            <ThreeDCarouselClient />
          </div>
          <About />
          <Services />
          <ServicesMarquee />
          <WorkCTA />
          <Portfolio />
          <Team />
          <Testimonials />
          <Awards />
          <Pricing />
          <FAQ />
          <Callout />
          <Footer />
        </div>
      </div>
    </main>
  )
}
