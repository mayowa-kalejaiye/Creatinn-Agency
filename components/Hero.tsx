"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import SparklesText from './SparklesText'
import ScrollSpy from './ScrollSpy'
import dynamic from 'next/dynamic'

const ImageCarousel = dynamic(() => import('./ImageCarousel'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100" />
})

export default function Hero() {
  const logoTrackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoTrackRef.current?.classList.add('enlarge');
        } else {
          logoTrackRef.current?.classList.remove('enlarge');
        }
      });
    }, { threshold: 0.15 });

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel />
      </div>
      
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 lg:px-48 pt-20 lg:pt-28">
        <div className="text-center w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* left floating 3D camera (hidden on small screens) */}
          {/* <div className="absolute left-6 top-20 hidden lg:block pointer-events-auto">
            <Camera3D />
          </div> */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight text-[rgb(27,29,30)] tracking-tight font-semibold text-center"
            style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}
          >
            <SparklesText as="span" sparkleCount={28} sparkleSize={12}>
              <span className="whitespace-nowrap">Building bold brands</span>
            </SparklesText>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-0 md:mt-4 whitespace-nowrap"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[rgb(27,29,30)]" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>with </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic font-normal text-[rgb(27,29,30)]" style={{ fontFamily: 'Playfair Display, serif' }}>
              thoughtful design
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-4 md:mt-6 text-lg md:text-xl lg:text-2xl text-slate-600 mx-auto max-w-xs md:max-w-2xl lg:max-w-4xl"
          >
            At Creatinn Agency, we help startups and creators tackle the biggest media challenges with tailored solutions. Our strategy, production, and execution deliver results that convert.
          </motion.p>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
            <motion.a
              initial={{ scale: 0.98 }}
              whileHover={{ scale: 1.02 }}
              className="relative inline-flex items-center bg-[#4928fd] hover:bg-[#3720d6] text-white pl-6 pr-24 py-5 rounded-full shadow-2xl w-11/12 max-w-md justify-start md:w-auto"
              href="/contact"
            >
              <span className="font-semibold text-xl ml-1">Get Started</span>
              <span className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4928fd] transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </motion.a>

            <div className="flex items-center gap-4">
              <div className="-space-x-3 flex items-center">
                <Image src="/IMG_0515.jpg" alt="avatar 1" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white shadow" priority />
                <Image src="/IMG_3710.jpg" alt="avatar 2" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white shadow" priority />
                <Image src="/IMG_0691.jpg" alt="avatar 3" width={40} height={40} className="w-10 h-10 rounded-full border-2 border-white shadow" priority />
              </div>

              <div className="text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">★★★★★</div>
                  <span>Trusted by 500+ clients</span>
                </div>
              </div>
            </div>
          </div>

          {/* Retro TV video (inserted under CTAs, above the trust row)
          <div className="mt-8 flex justify-center">
            <div className="hidden md:block w-full max-w-5xl">
              <RetroTV />
            </div>
          </div> */}

          {/* Trust row moved to page-level (under hero) to avoid overlapping hero layout */}
        </div>
      </div>
      <ScrollSpy />
    </section>
  )
}
