"use client"
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Callout() {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto rounded-3xl p-8 border border-slate-200/60 shadow-sm"
      >
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient background layer */}
          <div className="absolute inset-0 hero-gradient" />

          {/* White gradient overlay - stronger white at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 via-40% to-white/10 pointer-events-none" />

          {/* content */}
          <div className="relative p-16 md:p-24">
            <div className="text-center">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[rgb(27,29,30)] leading-tight mb-6"
              >
                Innovative Solutions for 
                <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium"> bold brands</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10"
              >
                Looking to elevate your brand? We craft immersive experiences that captivate, engage, and
                make your business unforgettable in every interaction.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[rgb(27,29,30)] text-white text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow group"
                aria-label="Let's craft together"
              >
                <span className="font-medium">Let's craft together</span>
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white text-[rgb(27,29,30)] rounded-full group-hover:rotate-45 transition-transform">
                  <svg viewBox="0 0 24 24" className="w-4 h-4 transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
