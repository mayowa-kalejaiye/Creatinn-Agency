"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  text: string
  as?: any
  className?: string
}

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
}

const child = {
  hidden: { y: 18, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { ease: [0.2, 0.8, 0.2, 1], duration: 0.45 } },
}

export default function TextReveal({ text, as: Component = 'span', className }: Props) {
  const words = text.split(' ').filter(Boolean)

  return (
    <motion.span
      className={className}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      aria-hidden={false}
    >
      {words.map((w, i) => (
        <motion.span
          key={`${w}-${i}`}
          variants={child}
          className={"inline-block mr-2 "}
          aria-hidden={false}
        >
          {w}
        </motion.span>
      ))}
    </motion.span>
  )
}
