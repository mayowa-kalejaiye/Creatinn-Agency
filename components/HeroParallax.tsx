"use client"
import React from 'react'

// World-class parallax: lightweight, GPU-accelerated, respects reduced-motion.
// Usage: place behind hero content; provide layers with speed factors.

type Layer = {
  id: string
  src: string
  depth?: number // 0..1, higher = moves more
  className?: string
}

export default function HeroParallax({ layers = [] as Layer[] }: { layers?: Layer[] }) {
  const containerRef = React.useRef<HTMLDivElement | null>(null)
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  React.useEffect(() => {
    if (prefersReducedMotion) return
    const el = containerRef.current
    if (!el) return

    let width = window.innerWidth
    let height = window.innerHeight

    let mouseX = 0
    let mouseY = 0
    let rx = 0
    let ry = 0

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      mouseX = x
      mouseY = y
    }

    const onScroll = () => {
      // allow subtle translate based on scroll position
    }

    const raf = () => {
      rx += (mouseX - rx) * 0.08
      ry += (mouseY - ry) * 0.08

      const children = el.querySelectorAll('[data-parallax-depth]')
      children.forEach((child) => {
        const depth = parseFloat((child as HTMLElement).getAttribute('data-parallax-depth') || '0')
        const tx = rx * depth * 30;
        const ty = ry * depth * 18;
        (child as HTMLElement).style.transform = 'translate3d(' + tx + 'px, ' + ty + 'px, 0) scale(' + (1 - depth * 0.02) + ')';
      })

      requestAnimationFrame(raf)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('scroll', onScroll, { passive: true })
    raf()

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [prefersReducedMotion])

  return (
    <div ref={containerRef} className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {layers.map((l) => (
        <div key={l.id} data-parallax-depth={l.depth ?? 0.2} className={`absolute inset-0 ${l.className || ''}`} style={{ willChange: 'transform', transform: 'translate3d(0,0,0)' }}>
          <img src={l.src} alt="" aria-hidden className="w-full h-full object-cover opacity-90" />
        </div>
      ))}
    </div>
  )
}
