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
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0">
        <ImageCarousel />
      </div>

      {/* Floating Social Media Icons - Left Side */}
      <motion.a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-16 top-1/4 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: -40, rotateY: 12, rotate: -6 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -22, 0],
          rotateY: [12, -8, 12],
          rotate: [-6, 6, -6]
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.4 },
          x: { duration: 0.7, delay: 0.4 },
          y: { duration: 3.8, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.6 },
          rotateY: { duration: 6.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          rotate: { duration: 6.5, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
        whileHover={{ scale: 1.12, rotate: 4 }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm hover:shadow-purple-500/50 transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      <motion.a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute left-16 bottom-1/3 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: -40, rotateY: 10, rotate: -4 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -24, 0],
          rotateY: [10, -10, 10],
          rotate: [-4, 6, -4]
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.6 },
          x: { duration: 0.7, delay: 0.6 },
          y: { duration: 4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.9 },
          rotateY: { duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          rotate: { duration: 7, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
        whileHover={{ scale: 1.12, rotate: -4 }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm hover:shadow-blue-600/50 transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      {/* Floating Social Media Icons - Right Side */}
      <motion.a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-12 top-1/3 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: 40, rotateY: -12, rotate: 6 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -24, 0],
          rotateY: [-12, 8, -12],
          rotate: [6, -6, 6]
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.5 },
          x: { duration: 0.7, delay: 0.5 },
          y: { duration: 3.6, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 0.9 },
          rotateY: { duration: 6.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          rotate: { duration: 6.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
        whileHover={{ scale: 1.12, rotate: 4 }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-black rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm hover:shadow-slate-800/50 transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </div>
        </div>
      </motion.a>

      <motion.a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute right-20 bottom-1/3 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: 40, rotateY: -10, rotate: 4 }}
        animate={{ 
          opacity: 1, 
          x: 0,
          y: [0, -26, 0],
          rotateY: [-10, 10, -10],
          rotate: [4, -6, 4]
        }}
        transition={{
          opacity: { duration: 0.6, delay: 0.8 },
          x: { duration: 0.7, delay: 0.8 },
          y: { duration: 4.4, repeat: Infinity, ease: "easeInOut", repeatType: "mirror", delay: 1.2 },
          rotateY: { duration: 7.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" },
          rotate: { duration: 7.2, repeat: Infinity, ease: "easeInOut", repeatType: "mirror" }
        }}
        whileHover={{ scale: 1.12, rotate: -4 }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm hover:shadow-blue-500/50 transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </div>
        </div>
      </motion.a>
      
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
