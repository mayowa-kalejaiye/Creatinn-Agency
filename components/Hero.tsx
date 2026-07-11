'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <>
      <section id="home" className="sticky top-0 w-full px-2 sm:px-4 pt-2 sm:pt-3 pb-8 bg-white z-0">
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
              <div className="flex items-center gap-3">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-white opacity-80 scale-x-[-1]">
                  <path d="M2 38C2 38 12 28 14 16C16 4 8 2 8 2M6 8C6 8 16 12 18 4M10 20C10 20 20 18 22 10M12 30C12 30 22 24 24 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                
                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md rounded-full px-6 py-2 border border-white/10 shadow-lg">
                  {/* Instagram Logo */}
                  <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="url(#ig-grad-hero)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-100">
                    <defs>
                      <linearGradient id="ig-grad-hero" x1="0%" y1="100%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  <div className="w-px h-4 bg-white/20"></div>
                  {/* TikTok Logo */}
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="white" className="opacity-100" style={{ filter: 'drop-shadow(1.5px 1.5px 0 #ff0050) drop-shadow(-1.5px -1.5px 0 #00f2fe)' }}>
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.74-1.76 1.34-4.04 1.83-6.2 1.5-2.14-.32-4.1-1.46-5.41-3.15-1.3-1.68-1.84-3.86-1.5-5.96.34-2.14 1.51-4.08 3.23-5.36 1.72-1.29 3.91-1.78 6.01-1.45.1.02.19.03.29.05v4.11c-1.18-.3-2.45-.19-3.53.37-1.09.55-1.88 1.56-2.17 2.73-.28 1.19-.07 2.47.59 3.49.66 1.04 1.79 1.72 3 1.9 1.21.18 2.48-.11 3.47-.79 1-.68 1.65-1.81 1.78-3.03.04-.38.04-.77.04-1.15V.02h-3.7z"/>
                  </svg>
                  <div className="w-px h-4 bg-white/20"></div>
                  {/* YouTube Logo */}
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="#FF0000">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
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
                  <motion.button
                    onClick={() => setIsVideoOpen(true)}
                    animate={{ 
                      boxShadow: ['0px 0px 0px 0px rgba(255,255,255,0.3)', '0px 0px 20px 10px rgba(255,255,255,0)', '0px 0px 0px 0px rgba(255,255,255,0)']
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="group relative flex items-center justify-center w-16 h-10 sm:w-20 sm:h-12 md:w-24 md:h-14 lg:w-28 lg:h-16 rounded-xl md:rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 transition-all hover:scale-105 overflow-hidden btn-lens-flare"
                    aria-label="Play Video"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                    <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6 md:w-8 md:h-8 text-primary ml-1 drop-shadow-md relative z-10 transition-transform group-hover:scale-110 group-hover:text-white">
                      <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
                    </svg>
                  </motion.button>
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

      {/* Video Modal Overlay */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/90 backdrop-blur-md px-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-sm md:max-w-md lg:max-w-lg aspect-[9/16] max-h-[85vh] bg-black rounded-2xl overflow-hidden shadow-2xl border border-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              <video 
                src="/vid4.mp4" 
                controls 
                autoPlay 
                playsInline
                className="w-full h-full object-cover"
              />
              <button 
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/20 transition-all z-10"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
