"use client"
import React from 'react'

type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'div'
  className?: string
  children: React.ReactNode
  maxTranslate?: number
  maxScale?: number
}

export default function AnimatedHeading({ as = 'h2', className = '', children, maxTranslate = 30, maxScale = 0.05 }: Props) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [style, setStyle] = React.useState<React.CSSProperties>({})

  React.useEffect(() => {
    let mounted = true
    const el = ref.current
    if (!el) return

    let ticking = false

    const update = () => {
      if (!mounted || !ref.current) return
      const rect = ref.current.getBoundingClientRect()
      const vh = window.innerHeight || document.documentElement.clientHeight
      const center = vh / 2
      // distance from element center to viewport center (-..+)
      const distance = rect.top + rect.height / 2 - center
      const max = vh / 1.2
      const progress = Math.max(-1, Math.min(1, distance / max))

      const translateY = -progress * maxTranslate
      const scale = 1 + (-progress) * maxScale
      const opacity = 1 - Math.min(0.6, Math.abs(progress) * 0.6)
      const letterSpacing = `${Math.min(1.5, Math.abs(progress) * 1.5)}px`

      setStyle({
        transform: `translateY(${translateY}px) scale(${scale})`,
        opacity,
        transition: 'transform 0.15s linear, opacity 0.15s linear',
        letterSpacing,
      })
      ticking = false
    }

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    }

    // initial
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      mounted = false
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [maxTranslate, maxScale])

  const Tag = as as any
  return (
    <Tag ref={ref as any} className={className} style={style}>
      {children}
    </Tag>
  )
}
