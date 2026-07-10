'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative w-full px-2 sm:px-4 pt-2 sm:pt-3 pb-0 bg-white">
      {/* Main Hero Container */}
      <div className="relative w-full h-[80vh] min-h-[550px] max-h-[800px] mx-auto max-w-[1440px] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl">
        
        {/* Background Video / Image Placeholder */}
        <div className="absolute inset-0 bg-black z-0 overflow-hidden">
          <motion.div
            animate={{ scale: [1, 1.1] }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0"
          >
            <Image 
              src="/optimized/images/3U4A1815-1200.avif" 
              alt="Hero Background" 
              fill 
              className="object-cover opacity-70"
              priority
            />
          </motion.div>
          {/* Overlay to darken background for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80" />
        </div>

        {/* Cinematic Letterbox Reveal */}
        <motion.div 
          initial={{ height: "50%" }}
          animate={{ height: "0%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute top-0 left-0 w-full bg-[#0a0a0a] z-20 pointer-events-none"
        />
        <motion.div 
          initial={{ height: "50%" }}
          animate={{ height: "0%" }}
          transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="absolute bottom-0 left-0 w-full bg-[#0a0a0a] z-20 pointer-events-none"
        />

        {/* Content Wrapper */}
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-24 pb-12">
          
          {/* Rating Badge (Matching Screenshot) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col items-center gap-1 mb-8"
          >
            <div className="flex items-center gap-2">
              <span className="text-white font-bold text-lg">5.0</span>
              <div className="flex text-[#bbfb46] text-lg">
                ★★★★★
              </div>
            </div>
            <span className="text-white/80 text-[13px] font-medium tracking-wide mb-3">Based on hundreds of reviews</span>
            <div className="flex items-center gap-3">
              {/* Fake laurel wreath and badges matching the aesthetic */}
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-white opacity-80 scale-x-[-1]">
                <path d="M2 38C2 38 12 28 14 16C16 4 8 2 8 2M6 8C6 8 16 12 18 4M10 20C10 20 20 18 22 10M12 30C12 30 22 24 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <div className="flex items-center bg-black/40 backdrop-blur-md rounded-full px-4 py-1.5 border border-white/10 shadow-lg">
                 <span className="text-white text-xs font-bold uppercase tracking-wider mx-1">Google</span>
                 <div className="w-px h-3 bg-white/20 mx-3"></div>
                 <span className="text-white text-xs font-bold uppercase tracking-wider mx-1">Clutch</span>
                 <div className="w-px h-3 bg-white/20 mx-3"></div>
                 <span className="text-white text-xs font-bold uppercase tracking-wider mx-1">Trustpilot</span>
              </div>
              <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-white opacity-80">
                <path d="M2 38C2 38 12 28 14 16C16 4 8 2 8 2M6 8C6 8 16 12 18 4M10 20C10 20 20 18 22 10M12 30C12 30 22 24 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
          </motion.div>

          {/* Main Headline with Inline Play Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
            className="w-full max-w-6xl mx-auto mb-6 px-2"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] xl:text-[5.5rem] leading-[1.1] font-bold text-white tracking-tight flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
              <span className="block w-full text-center">
                Visual Content <span className="font-serif italic font-normal text-white">Studio</span> for
              </span>
              <span className="flex flex-wrap items-center justify-center gap-x-3 md:gap-x-4 gap-y-2">
                <span>Brands</span>
                <button
                  className="group relative flex items-center justify-center w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all shadow-[0_8px_32px_rgba(0,0,0,0.3)] hover:scale-105 overflow-hidden btn-lens-flare"
                  aria-label="Play Video"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                  <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1 drop-shadow-md relative z-10">
                    <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
                  </svg>
                </button>
                <span>& Creators</span>
              </span>
            </h1>
          </motion.div>

          {/* Subheadline / Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-base sm:text-lg md:text-xl text-white/80 max-w-3xl font-medium leading-relaxed tracking-wide"
          >
            From high-end <strong className="text-white font-bold">commercials</strong> to viral <strong className="text-white font-bold">social content.</strong> Built to <strong className="text-white font-bold">capture attention.</strong> Built to tell your <strong className="text-white font-bold">story.</strong>
          </motion.p>
          
        </div>
      </div>
    </section>
  )
}
