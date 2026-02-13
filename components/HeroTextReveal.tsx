"use client"
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

type Props = {
  text: string
  className?: string
  delay?: number
}

// Animate words instead of characters for better performance
const container = (delay = 0) => ({
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: delay,
    },
  },
})

const child = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] } },
}

export default function HeroTextReveal({ text, className = '', delay = 0 }: Props) {
  const shouldReduce = useReducedMotion()

  // Split into words but keep punctuation/spacing
  const words = text.split(/(\s+)/)

  if (shouldReduce) {
    return <span className={className}>{text}</span>
  }

  return (
    <motion.span
      aria-hidden={false}
      variants={container(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
      style={{ willChange: 'transform, opacity' }}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={child}
          className="inline-block mr-1"
          aria-hidden={false}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  )
}
