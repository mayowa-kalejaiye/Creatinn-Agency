'use client'
import React from 'react';
import { motion } from 'framer-motion';

export default function WorkCTA() {
  return (
    <section className="py-24 px-4 bg-[#f2f2f2] relative overflow-hidden" id="work-cta">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="rounded-[2.5rem] bg-[#111] p-12 md:p-24 text-center shadow-2xl overflow-hidden relative"
        >
          {/* Subtle Background Pattern */}
          <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
          
          {/* Camera and Lights background image */}
          <div className="absolute inset-0 z-0 opacity-30 mix-blend-luminosity">
            <img src="/camera_lights.png" alt="Camera and lighting setup" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#111]/70 mix-blend-multiply"></div>
          </div>
          
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[50vh]">
            
            <div className="flex flex-col items-center gap-6 mb-12">
              {/* CAMERA */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: -50, rotate: -6 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, rotate: -3 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                className="bg-white px-8 py-3 md:px-12 md:py-4 border-2 md:border-4 border-black shadow-[8px_8px_0px_#b2df5e] md:shadow-[12px_12px_0px_#b2df5e] -ml-10 md:-ml-32 z-10"
              >
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-black uppercase font-sans">
                  Camera
                </h2>
              </motion.div>
              
              {/* LIGHTS */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, x: 50, rotate: 6 }}
                whileInView={{ opacity: 1, scale: 1, x: 0, rotate: 4 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.3 }}
                className="bg-primary px-8 py-3 md:px-12 md:py-4 border-2 md:border-4 border-black shadow-[8px_8px_0px_white] md:shadow-[12px_12px_0px_white] ml-10 md:ml-32 z-20"
              >
                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tighter text-black uppercase font-serif italic">
                  Lights
                </h2>
              </motion.div>

              {/* ACTION */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8, y: 50, rotate: -4 }}
                whileInView={{ opacity: 1, scale: 1, y: 0, rotate: -2 }}
                viewport={{ once: false, amount: 0.4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.5 }}
                className="bg-white px-10 py-4 md:px-16 md:py-6 border-2 md:border-4 border-black shadow-[8px_8px_0px_#b2df5e] md:shadow-[16px_16px_0px_#b2df5e] mt-4 z-30"
              >
                <h2 className="text-6xl md:text-8xl lg:text-[9rem] font-black tracking-tighter text-black uppercase font-sans">
                  Action
                </h2>
              </motion.div>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-xl md:text-3xl text-white/90 font-medium mb-12 max-w-3xl leading-relaxed"
            >
              We bring your brand's story to the big screen. Premium cinematography meets viral content.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-primary text-black px-10 py-5 rounded-full font-bold text-lg hover:bg-white transition-colors shadow-lg group"
              >
                Start Rolling
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
