"use client"
import React from 'react'
import { motion } from 'framer-motion'

type Props = React.ComponentPropsWithoutRef<'h2'> & {
  as?: 'h2' | 'h3' | 'h1'
}

export default function AnimatedHeader({ as = 'h2', className = '', children, ...rest }: Props) {
  const [direction, setDirection] = React.useState<'down' | 'up'>('down')
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false)

  React.useEffect(() => {
    if (typeof window === 'undefined') return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mq.matches)
    const onChange = () => setPrefersReducedMotion(mq.matches)
    mq.addEventListener?.('change', onChange)
    let lastY = window.scrollY
    let ticking = false
    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const y = window.scrollY
        setDirection(y > lastY ? 'down' : 'up')
        lastY = y
        ticking = false
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      mq.removeEventListener?.('change', onChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const Tag = motion[as] as any

  const initial = prefersReducedMotion ? { opacity: 1, y: 0 } : (direction === 'down' ? { opacity: 0, y: 28 } : { opacity: 0, y: -28 })

  return (
    <Tag
      {...rest}
      className={className}
      initial={initial}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
      style={{ willChange: 'transform, opacity' }}
    >
      {children}
    </Tag>
  )
}
