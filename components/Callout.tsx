'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Callout() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-accent p-12 md:p-20 text-center shadow-xl overflow-hidden relative"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          {/* Mouths background image */}
          <div className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
            <img src="/mouths.png" alt="Smiling mouths" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-accent/60 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
            
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-6 mb-8 mt-4">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: -12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -4 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
                className="bg-white px-6 py-2 md:px-8 md:py-3 border-2 md:border-4 border-[#111] shadow-[6px_6px_0px_#111] md:shadow-[10px_10px_0px_#111]"
              >
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#111] uppercase font-serif italic">
                  Say
                </h2>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, rotate: 12 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 3 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.2 }}
                className="bg-primary px-6 py-2 md:px-8 md:py-3 border-2 md:border-4 border-[#111] shadow-[6px_6px_0px_#111] md:shadow-[10px_10px_0px_#111] translate-y-4 md:translate-y-6"
              >
                <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter text-[#111] uppercase font-sans">
                  Cheese
                </h2>
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg md:text-2xl text-white/80 font-medium mb-12 max-w-2xl"
            >
              Let's craft immersive digital experiences that captivate, engage, and make your business unforgettable.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-accent px-10 py-5 rounded-full font-bold text-lg hover:bg-primary hover:text-black transition-colors shadow-lg group"
              >
                Let's collaborate
                <div className="relative w-5 h-5 overflow-hidden ml-1">
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                  </div>
                </div>
              </a>
            </motion.div>
            
          </div>
        </motion.div>
      </div>
    </section>
  )
}
