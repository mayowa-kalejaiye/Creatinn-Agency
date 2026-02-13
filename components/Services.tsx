"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import TextReveal from './TextReveal'

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    })
  }

  const seqRef = useRef<HTMLDivElement | null>(null)
  const [activeIdx, setActiveIdx] = useState(-1)
  const cardCount = 5

  useEffect(() => {
    const onScroll = () => {
      if (!seqRef.current) return
      const rect = seqRef.current.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const scrolled = Math.min(Math.max(vh - rect.top, 0), total)
      const progress = scrolled / total
      const idx = Math.floor(progress * cardCount)
      if (idx < 0) setActiveIdx(-1)
      else if (idx >= cardCount) setActiveIdx(cardCount - 1)
      else setActiveIdx(idx)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-30">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[rgb(27,29,30)]"
        >
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontStyle: 'normal' }}>
            Where innovation
            <br />
            meets
          </span>{' '}
          <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium">aesthetics</span>
        </motion.h2>

        <div ref={seqRef} className="relative" style={{ height: `${cardCount * 100}vh` }}>
          <div className="sticky top-24 h-screen flex items-center">
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full">
              <motion.div 
                custom={0}
                initial="hidden"
                animate={activeIdx >= 0 ? (activeIdx >= 0 ? 'visible' : 'hidden') : 'hidden'}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="rounded-xl p-8 bg-purple-50 text-left flex flex-col gap-6 min-h-[200px] cursor-pointer"
              >
            <div className="text-purple-500 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Brand<br /> Strategy</div>
          </motion.div>

          <motion.div 
            custom={1}
            initial="hidden"
            animate={activeIdx >= 1 ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="rounded-xl p-8 bg-red-50 text-left flex flex-col gap-6 min-h-[200px] cursor-pointer"
          >
            <div className="text-red-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 4L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Web<br /> Development</div>
          </motion.div>

          <motion.div 
            custom={2}
            initial="hidden"
            animate={activeIdx >= 2 ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="rounded-xl p-8 bg-blue-50 text-left flex flex-col gap-6 min-h-[200px] cursor-pointer"
          >
            <div className="text-blue-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="8" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Digital<br /> Marketing</div>
          </motion.div>

          <motion.div 
            custom={3}
            initial="hidden"
            animate={activeIdx >= 3 ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="rounded-xl p-8 bg-green-50 text-left flex flex-col gap-6 min-h-[200px] cursor-pointer"
          >
            <div className="text-amber-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">UI/UX<br /> Designing</div>
          </motion.div>

          <motion.div 
            custom={4}
            initial="hidden"
            animate={activeIdx >= 4 ? 'visible' : 'hidden'}
            variants={cardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="rounded-xl p-8 bg-yellow-50 text-left flex flex-col gap-6 min-h-[200px] cursor-pointer"
          >
            <div className="text-green-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="7" y="12" width="3" height="9" fill="currentColor"/>
                <rect x="14" y="8" width="3" height="13" fill="currentColor"/>
                <path d="M18 4l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Analytics &<br /> Reporting</div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-12 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-[rgb(27,29,30)] text-white border border-[rgb(27,29,30)] shadow-md"
        >
          <div className="text-center md:text-left max-w-2xl mx-auto md:mx-0">
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold">
              <TextReveal text="See Our Work in Action." />
              <br />
              <TextReveal text="Start Your Creative Journey with Us!" />
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto items-center">
            <a href="/contact" className="w-full sm:w-auto inline-flex group items-center justify-between gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-full bg-white text-[rgb(27,29,30)] border border-[rgb(27,29,30)] transition-all duration-300 overflow-hidden">
              <span className="transition-transform duration-300 group-hover:translate-x-20 text-lg font-semibold">Let's Collaborate</span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[rgb(27,29,30)] text-white rounded-full transition-transform duration-300 group-hover:-translate-x-32 ml-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href="/contact" className="w-full sm:w-auto inline-flex group items-center justify-between gap-3 px-6 py-4 sm:px-8 sm:py-4 rounded-full border border-white text-white transition-all duration-300 overflow-hidden hover:bg-white hover:text-[rgb(27,29,30)]">
              <span className="transition-transform duration-300 group-hover:translate-x-20 text-lg font-semibold">View Portfolio</span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white text-[rgb(27,29,30)] rounded-full transition-transform duration-300 group-hover:-translate-x-32 ml-4">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[rgb(27,29,30)] transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
