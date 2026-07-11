'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

export default function ContactButton() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const controls1 = useAnimation()
  const controls2 = useAnimation()
  
  // We use a state to track if the automatic scroll animation is playing
  // so hover doesn't interrupt it messily.
  const [isPlaying, setIsPlaying] = useState(false)

  const playSequence = async () => {
    if (isPlaying) return
    setIsPlaying(true)
    
    // Arrow 1 flies out top right
    controls1.start({ x: "100%", y: "-100%", transition: { duration: 0.5, ease: [0.87, 0, 0.13, 1] } })
    // Arrow 2 flies in from bottom left to center
    await controls2.start({ x: "0%", y: "0%", transition: { duration: 0.5, ease: [0.87, 0, 0.13, 1] } })
    
    // Wait briefly for the user to register the arrow arrived
    await new Promise(r => setTimeout(r, 400))
    
    // Reverse the animation: Arrow 2 flies back to bottom left
    controls2.start({ x: "-100%", y: "100%", transition: { duration: 0.5, ease: [0.87, 0, 0.13, 1] } })
    // Arrow 1 flies back in to center
    await controls1.start({ x: "0%", y: "0%", transition: { duration: 0.5, ease: [0.87, 0, 0.13, 1] } })
    
    setIsPlaying(false)
  }

  useEffect(() => {
    if (isInView) {
      // Add a slight delay before triggering when scrolled into view
      setTimeout(playSequence, 400)
    }
  }, [isInView])

  return (
    <motion.a 
      href="/contact" 
      ref={ref}
      onHoverStart={() => {
        if (!isPlaying) {
          controls1.start({ x: "100%", y: "-100%", transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] } })
          controls2.start({ x: "0%", y: "0%", transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] } })
        }
      }}
      onHoverEnd={() => {
        if (!isPlaying) {
          controls1.start({ x: "0%", y: "0%", transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] } })
          controls2.start({ x: "-100%", y: "100%", transition: { duration: 0.4, ease: [0.87, 0, 0.13, 1] } })
        }
      }}
      className="relative flex items-center justify-center w-36 h-20 md:w-56 md:h-28 bg-primary rounded-[1.5rem] shadow-xl overflow-hidden cursor-pointer"
      aria-label="Contact Us"
    >
      <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden">
        {/* First Arrow - Starts in center */}
        <motion.div 
          animate={controls1}
          initial={{ x: "0%", y: "0%" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-12 h-12 md:w-16 md:h-16 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6" />
            <path d="M8 6C13 7.5 16.5 11 18 6" />
            <path d="M18 16C16.5 11 13 7.5 18 6" />
          </svg>
        </motion.div>
        
        {/* Second Arrow - Starts off-screen bottom left */}
        <motion.div 
          animate={controls2}
          initial={{ x: "-100%", y: "100%" }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <svg className="w-12 h-12 md:w-16 md:h-16 text-[#0a0a0a]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 18L18 6" />
            <path d="M8 6C13 7.5 16.5 11 18 6" />
            <path d="M18 16C16.5 11 13 7.5 18 6" />
          </svg>
        </motion.div>
      </div>
    </motion.a>
  )
}
