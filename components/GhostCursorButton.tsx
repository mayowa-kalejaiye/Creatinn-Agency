'use client'
import React, { useEffect, useRef } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'

interface Props {
  children: React.ReactNode
}

export default function GhostCursorButton({ children }: Props) {
  const controls = useAnimation()
  const cursorControls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  useEffect(() => {
    if (isInView) {
      const sequence = async () => {
        // Initial state: Button is far bottom-right
        await Promise.all([
          controls.start({ x: '100vw', y: '50vh', opacity: 0, rotate: 15 }, { duration: 0 }),
          cursorControls.start({ x: '100vw', y: '50vh', opacity: 0 }, { duration: 0 })
        ])

        // 1. Ghost cursor appears holding the button
        await Promise.all([
          controls.start({ opacity: 1 }, { duration: 0.3 }),
          cursorControls.start({ opacity: 1 }, { duration: 0.3 })
        ])

        // 2. Drag it to its final position (0, 0)
        await Promise.all([
          controls.start({ x: 0, y: 0, rotate: 0 }, { type: 'spring', damping: 14, stiffness: 40, duration: 1.5 }),
          cursorControls.start({ x: 30, y: 20 }, { type: 'spring', damping: 14, stiffness: 40, duration: 1.5 })
        ])

        // 3. Drop it (button stays, cursor clicks/releases)
        await cursorControls.start({ scale: 0.8 }, { duration: 0.1 })
        await cursorControls.start({ scale: 1 }, { duration: 0.1 })

        // 4. Cursor flies away
        await cursorControls.start({ x: '-50vw', y: '50vh', opacity: 0 }, { type: 'spring', damping: 12, duration: 1.2 })
      }
      sequence()
    }
  }, [isInView, controls, cursorControls])

  return (
    <div ref={ref} className="relative inline-block">
      <motion.div animate={controls} initial={{ opacity: 0 }}>
        {children}
      </motion.div>

      {/* Ghost Cursor */}
      <motion.div 
        animate={cursorControls}
        initial={{ opacity: 0 }}
        className="absolute top-0 left-0 w-8 h-8 pointer-events-none drop-shadow-xl z-50 origin-top-left"
      >
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 h-12">
          <path d="M1.5 1.5L14 6.5L8.5 8.5L12 14L9.5 15L6 9.5L2 13L1.5 1.5Z" fill="white" stroke="black" strokeWidth="1" strokeLinejoin="round"/>
        </svg>
      </motion.div>
    </div>
  )
}
