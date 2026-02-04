import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Portfolio from '../components/Portfolio'
import Pricing from '../components/Pricing'
import FAQ from '../components/FAQ'
import Callout from '../components/Callout'
import Footer from '../components/Footer'
import ThreeDCarousel from '../components/ThreeDCarousel'
import LogoMarquee from '../components/LogoMarquee'
import Team from '../components/Team'
import Testimonials from '../components/Testimonials'
import Awards from '../components/Awards'
import ServicesMarquee from '../components/ServicesMarquee'
import WorkCTA from '../components/WorkCTA'

export default function Page() {
  return (
    <main className="pt-0 md:pt-20 mb-0">
      <Header />

      <Hero />
      <div className="bg-white relative z-30">
        <LogoMarquee />
        <div className="relative z-30 w-full bg-transparent">
          <div className="container mx-auto px-6 lg:px-48 py-8">
            <div className="flex items-center gap-4 justify-center">
              <div className="flex-1 h-px bg-slate-200" />
              <div className="px-4 text-sm text-slate-500 text-center">Loved by 500+ big and small brands around the world</div>
              <div className="flex-1 h-px bg-slate-200" />
            </div>
          </div>
        </div>
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 z-[15] pointer-events-none opacity-20 transform translate-y-48 sm:translate-y-64">
            <ThreeDCarousel />
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
