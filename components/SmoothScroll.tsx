'use client'

import { useEffect } from 'react'

export default function SmoothScroll() {
  useEffect(() => {
    let rafId: number
    let currentScroll = window.scrollY
    let targetScroll = window.scrollY
    let isScrolling = false
    
    // Smooth scroll parameters
    const ease = 0.08 // Lower = smoother but slower (0.05-0.15)
    const friction = 0.7 // Momentum after manual scroll stops (0.5-0.9)
    let velocity = 0
    
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }
    
    const smoothScroll = () => {
      // Update target to actual scroll position
      targetScroll = window.scrollY
      
      // Calculate difference
      const delta = targetScroll - currentScroll
      
      // Add to velocity with friction
      velocity += delta * ease
      velocity *= friction
      
      // Update current position
      currentScroll += velocity
      
      // Apply transform to body
      document.body.style.transform = `translate3d(0, -${currentScroll - window.scrollY}px, 0)`
      
      // Continue animation if still moving
      if (Math.abs(velocity) > 0.05 || Math.abs(delta) > 0.05) {
        rafId = requestAnimationFrame(smoothScroll)
      } else {
        isScrolling = false
        currentScroll = targetScroll
        document.body.style.transform = 'translate3d(0, 0, 0)'
      }
    }
    
    const startSmoothing = () => {
      if (!isScrolling) {
        isScrolling = true
        smoothScroll()
      }
    }
    
    // Trigger smooth scroll on scroll event
    window.addEventListener('scroll', startSmoothing, { passive: true })
    
    return () => {
      window.removeEventListener('scroll', startSmoothing)
      if (rafId) cancelAnimationFrame(rafId)
      document.body.style.transform = 'translate3d(0, 0, 0)'
    }
  }, [])
  
  return null
}
