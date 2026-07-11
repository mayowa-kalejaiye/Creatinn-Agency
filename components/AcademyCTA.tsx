'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import GhostCursorButton from './GhostCursorButton'

export default function AcademyCTA() {
  return (
    <section className="py-24 px-4 bg-black text-white overflow-hidden relative">
      {/* Video Editor Timeline Background (Decorative) */}
      <div className="absolute inset-0 z-0 opacity-[0.15] pointer-events-none overflow-hidden flex flex-col pt-8">
        
        {/* Timecode Ruler */}
        <div className="h-6 w-full border-b border-white/20 relative" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255,255,255,0.2) 49px, rgba(255,255,255,0.2) 50px)', backgroundSize: '50px 100%' }}>
          {/* Sub-ticks */}
          <div className="absolute inset-0" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 9px, rgba(255,255,255,0.1) 9px, rgba(255,255,255,0.1) 10px)', backgroundSize: '10px 50%', backgroundPosition: 'bottom' }}></div>
        </div>

        {/* Video Track 3 */}
        <div className="h-16 w-full border-b border-white/10 relative bg-white/[0.02]">
          <div className="absolute left-[10%] top-2 h-12 w-[15%] bg-blue-500/80 rounded-sm border border-blue-400"></div>
          <div className="absolute left-[35%] top-2 h-12 w-[8%] bg-purple-500/80 rounded-sm border border-purple-400"></div>
          <div className="absolute left-[65%] top-2 h-12 w-[25%] bg-blue-500/80 rounded-sm border border-blue-400"></div>
        </div>

        {/* Video Track 2 */}
        <div className="h-16 w-full border-b border-white/10 relative">
          <div className="absolute left-[5%] top-2 h-12 w-[28%] bg-emerald-500/80 rounded-sm border border-emerald-400"></div>
          <div className="absolute left-[40%] top-2 h-12 w-[22%] bg-blue-500/80 rounded-sm border border-blue-400"></div>
          <div className="absolute left-[70%] top-2 h-12 w-[15%] bg-purple-500/80 rounded-sm border border-purple-400"></div>
        </div>

        {/* Video Track 1 */}
        <div className="h-16 w-full border-b border-white/20 relative bg-white/[0.02]">
          <div className="absolute left-0 top-2 h-12 w-[100%] bg-indigo-500/80 rounded-sm border border-indigo-400 opacity-50"></div>
          <div className="absolute left-[20%] top-2 h-12 w-[12%] bg-emerald-500/80 rounded-sm border border-emerald-400"></div>
          <div className="absolute left-[55%] top-2 h-12 w-[18%] bg-emerald-500/80 rounded-sm border border-emerald-400"></div>
        </div>

        {/* Audio Track 1 */}
        <div className="h-20 w-full border-b border-white/10 relative">
          {/* Audio Waveform mock (just simple lines) */}
          <div className="absolute left-0 top-2 h-16 w-[100%] bg-teal-600/40 rounded-sm border border-teal-500 flex items-center overflow-hidden opacity-50">
             <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.3) 2px, rgba(255,255,255,0.3) 4px)', backgroundSize: '4px 60%', backgroundPosition: 'center', backgroundRepeat: 'repeat-x' }}></div>
          </div>
        </div>
        
        {/* Audio Track 2 */}
        <div className="h-20 w-full relative bg-white/[0.02]">
          <div className="absolute left-[15%] top-2 h-16 w-[45%] bg-teal-600/60 rounded-sm border border-teal-500 flex items-center overflow-hidden">
             <div className="w-full h-full" style={{ backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255,255,255,0.4) 2px, rgba(255,255,255,0.4) 4px)', backgroundSize: '4px 40%', backgroundPosition: 'center', backgroundRepeat: 'repeat-x' }}></div>
          </div>
        </div>

        {/* Animated Playhead */}
        <motion.div 
          animate={{ x: ["-5vw", "105vw"] }}
          transition={{ duration: 15, ease: "linear", repeat: Infinity }}
          className="absolute top-0 bottom-0 w-[2px] bg-red-500 z-10 shadow-[0_0_10px_rgba(239,68,68,0.8)]"
        >
          {/* Playhead Top Triangle */}
          <div className="absolute top-0 -left-[6px] w-0 h-0 border-l-[7px] border-r-[7px] border-t-[10px] border-l-transparent border-r-transparent border-t-red-500"></div>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Text Content */}
          <div className="w-full lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block bg-[#bbfb46] text-black font-black uppercase tracking-widest text-xs px-3 py-1 mb-6 rounded-sm">
                CreatINN Academy
              </div>
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] mb-8">
                Creativity <br />
                <span className="text-white/40">Meets</span> <br />
                Economics.
              </h2>
              <p className="text-xl md:text-2xl text-white/70 font-medium max-w-lg mb-4">
                Creative talent without business thinking is wasted potential. 
              </p>
              <p className="text-lg text-white/50 max-w-lg mb-10">
                A physical creative institution in Lagos. 3 students per cohort. Serious learners only. No hype, no shortcuts.
              </p>

              <GhostCursorButton>
                <Link href="https://creatinnacademy.com" target="_blank" rel="noopener noreferrer">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-black font-bold text-lg px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#bbfb46] transition-colors shadow-2xl"
                  >
                    Explore the Academy
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 17L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7 7H17V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </motion.button>
                </Link>
              </GhostCursorButton>
            </motion.div>
          </div>

          {/* Videos Grid */}
          <div className="w-full lg:w-1/2 relative h-[500px] md:h-[600px]">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: -2 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute top-0 left-0 w-2/3 h-[60%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-20"
            >
              <video 
                src="/vid3.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, rotate: 5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 4 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute bottom-10 right-0 w-[55%] h-[55%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-10"
            >
              <video 
                src="/pic.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="absolute -bottom-4 left-1/4 w-[45%] h-[40%] rounded-xl overflow-hidden shadow-2xl border border-white/10 z-30"
            >
              <video 
                src="/vid.mp4" 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
          
        </div>
      </div>
    </section>
  )
}
