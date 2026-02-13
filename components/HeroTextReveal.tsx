"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
  className?: string
  delay?: number
}

const container = (delay = 0) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
      delayChildren: delay,
    },
  },
})

const char = {
  hidden: { y: 28, opacity: 0, rotateX: 12, skewY: 4 },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    skewY: 0,
    transition: { duration: 0.55, ease: [0.2, 0.8, 0.2, 1] },
  },
}

export default function HeroTextReveal({ text, className = '', delay = 0 }: Props) {
  const chars = Array.from(text)

  return (
    <motion.span
      aria-hidden={false}
      variants={container(delay)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className={className}
    >
      {chars.map((c, i) => (
        <motion.span
          key={`${c}-${i}`}
          variants={char}
          className="inline-block"
          aria-hidden={false}
        >
          {c === ' ' ? '\u00A0' : c}
        </motion.span>
      ))}
    </motion.span>
  )
}
