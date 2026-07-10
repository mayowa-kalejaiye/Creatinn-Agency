'use client'
import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'

export default function Portfolio() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  })

  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1, 0.95])

  return (
    <section ref={containerRef} className="bg-[#0a0a0a] py-32 relative overflow-hidden" id="work">
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-primary font-bold tracking-[0.2em] uppercase text-xs mb-6 block drop-shadow-md">
              Cinematic Showreel
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl lg:text-[7rem] font-bold tracking-tighter leading-none text-white max-w-4xl"
          >
            Watch our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-white font-serif italic font-normal pr-4">Reel</span>
          </motion.h2>
        </div>

        {/* Massive Video Player Container */}
        <motion.a 
          href="https://www.instagram.com/p/DUq7NNkDUH-/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ scale }}
          className="relative block w-full aspect-video md:aspect-[21/9] rounded-[2rem] sm:rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border border-white/10"
        >
          {/* Parallax Image */}
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
            <Image
              src="/optimized/images/IMG_3188-1200.avif"
              alt="Cinematic Showreel"
              fill
              className="object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            />
          </motion.div>

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80 pointer-events-none"></div>
          
          {/* Play Button - Magnetic Hover Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110 group-hover:bg-primary pointer-events-auto shadow-[0_0_40px_rgba(0,0,0,0.5)]">
              <svg viewBox="0 0 24 24" fill="none" className="w-10 h-10 md:w-12 md:h-12 text-white group-hover:text-[#0a0a0a] transition-colors ml-2 drop-shadow-lg">
                <path d="M6 4L20 12L6 20V4Z" fill="currentColor" />
              </svg>
            </div>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-8 md:bottom-12 left-8 md:left-12 pointer-events-none">
            <div className="overflow-hidden">
              <h3 className="text-3xl md:text-5xl font-bold text-white tracking-tight transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]">
                The Creatinn Collection
              </h3>
            </div>
            <div className="overflow-hidden mt-2">
              <p className="text-lg md:text-xl text-white/80 font-medium transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 delay-75 ease-[cubic-bezier(0.22,1,0.36,1)]">
                Highlighting our best moments of 2026.
              </p>
            </div>
          </div>
        </motion.a>

      </div>
    </section>
  )
}
