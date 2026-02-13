'use client'

import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

// Advanced momentum scroll with velocity decay
const smoothScrollTo = (targetY: number) => {
  const startY = window.pageYOffset
  const distance = targetY - startY
  let currentY = startY
  let velocity = 0
  const acceleration = distance / 800 // Controls initial speed
  const friction = 0.92 // Higher = smoother/longer momentum (0.8-0.95)
  const threshold = 0.5 // Stop when movement is negligible
  
  const animate = () => {
    const remaining = targetY - currentY
    
    // Apply acceleration toward target
    velocity += remaining / 800
    
    // Apply friction for smooth deceleration
    velocity *= friction
    
    // Update position
    currentY += velocity
    
    // Continue if still moving significantly
    if (Math.abs(velocity) > threshold || Math.abs(remaining) > 1) {
      window.scrollTo(0, currentY)
      requestAnimationFrame(animate)
    } else {
      // Snap to exact target
      window.scrollTo(0, targetY)
    }
  }
  
  requestAnimationFrame(animate)
}

const navItems = [
  { label: 'Home', href: '/#home' },
  { label: 'About us', href: '/#about' },
  { label: 'Services', href: '/#services' },
  { label: 'Work', href: '/#work' },
  { label: 'Team', href: '/#team' },
  { label: 'Awards', href: '/#awards' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0 })
  const [isPastHero, setIsPastHero] = useState(false)
  const [scrollOpacity, setScrollOpacity] = useState(0)
  const navRefs = useRef<Array<HTMLAnchorElement | null>>([])
  const headerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Set initial indicator to first link if available
    const el = navRefs.current[activeIndex]
    if (el) setIndicatorStyle({ width: el.offsetWidth, left: el.offsetLeft, opacity: 1 })

    const onScroll = () => {
      if (!headerRef.current) return
      if (window.scrollY > 8) headerRef.current.classList.add('scrolled')
      else headerRef.current.classList.remove('scrolled')

      // Calculate scroll opacity for gradual appearance (0-100px scroll range)
      const scrollProgress = Math.min(window.scrollY / 100, 1)
      setScrollOpacity(scrollProgress)

      // Check if past hero section
      const heroSection = document.querySelector('#home')
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom
        const headerHeight = headerRef.current?.offsetHeight || 0
        setIsPastHero(heroBottom < headerHeight)
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => {
        const id = item.href.replace('/#', '#')
        return document.querySelector(id)
      }).filter(Boolean) as HTMLElement[]

      // If at top of page, set to first nav item
      if (window.scrollY < 100) {
        if (activeIndex !== 0) {
          setActiveIndex(0)
        }
        return
      }

      // Find which section is most visible in viewport
      let maxVisibleArea = 0
      let mostVisibleIndex = 0

      sections.forEach((section, i) => {
        const rect = section.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        
        // Calculate visible area of this section
        const visibleTop = Math.max(0, rect.top)
        const visibleBottom = Math.min(viewportHeight, rect.bottom)
        const visibleArea = Math.max(0, visibleBottom - visibleTop)
        
        if (visibleArea > maxVisibleArea) {
          maxVisibleArea = visibleArea
          mostVisibleIndex = i
        }
      })

      if (activeIndex !== mostVisibleIndex) {
        setActiveIndex(mostVisibleIndex)
      }
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false)
    }

    const onResize = () => {
      const el = navRefs.current[activeIndex]
      if (el) setIndicatorStyle({ width: el.offsetWidth, left: el.offsetLeft, opacity: 1 })
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    
    // Initial check
    onScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [activeIndex])

  // Try to scroll to a section ID from an href like '/#services' or '#services'.
  const scrollToHash = (href: string) => {
    if (typeof document === 'undefined') return false
    const hashIndex = href.indexOf('#')
    if (hashIndex === -1) return false
    const id = href.slice(hashIndex + 1)
    if (!id) return false
    const el = document.getElementById(id)
    if (!el) return false
    const offset = 80
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    // Use native smooth scrolling for reliability.
    // Fall back to instant scroll if not supported.
    try {
      window.scrollTo({ top: Math.round(offsetPosition), behavior: 'smooth' })
    } catch (err) {
      window.scrollTo(0, Math.round(offsetPosition))
    }

    return true
  }

  useEffect(() => {
    // lock body scroll when mobile menu is open
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  return (
    <>
      <header className="header-glass">
        <div className="container mx-auto px-6 lg:px-12">
        {/* Nav glass now wraps the entire header content */}
        <div 
          ref={headerRef} 
          className={`nav-glass-container mt-4 sm:mt-6 px-4 sm:px-6 lg:px-0 flex items-center justify-between ${isPastHero ? 'past-hero' : ''}`}
          style={{
            background: isPastHero 
              ? 'rgba(247, 247, 247, 0.95)' 
              : `rgba(255, 255, 255, ${scrollOpacity * 0.1})`,
            borderColor: `rgba(255, 255, 255, ${scrollOpacity * 0.2})`,
            boxShadow: scrollOpacity > 0 ? `0 8px 32px 0 rgba(31, 38, 135, ${scrollOpacity * 0.15})` : 'none',
            backdropFilter: scrollOpacity > 0 ? `blur(${scrollOpacity * 12}px) saturate(${100 + scrollOpacity * 80}%)` : 'none',
            WebkitBackdropFilter: scrollOpacity > 0 ? `blur(${scrollOpacity * 12}px) saturate(${100 + scrollOpacity * 80}%)` : 'none',
          }}
        >
          
          {/* Left: logo */}
          <div className="flex items-center gap-3 flex-shrink-0">
            <Image src="/videography.png" alt="Creatinn Agency logo" width={48} height={48} className="hidden sm:block w-12 h-12 md:w-14 md:h-14 object-contain" style={{filter: 'brightness(0) saturate(100%)' }} />
            <div className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight font-sans text-[rgb(27,29,30)] whitespace-nowrap" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>Creatinn Agency</div>
          </div>

          {/* Center: nav links with second glassmorphism layer - show only on large screens */}
          <div className="hidden lg:block flex-shrink-0 relative z-10">
            <nav
              className={`nav-links-glass flex items-center gap-2 xl:gap-3 relative ${isPastHero ? 'past-hero' : ''}`}
              onMouseLeave={() => {
                // reset to active
                const el = navRefs.current[activeIndex]
                if (el) {
                  setIndicatorStyle({ width: el.offsetWidth, left: el.offsetLeft, opacity: 1 })
                }
              }}
            >
              <div className="nav-indicator" style={{ width: indicatorStyle.width, transform: `translateX(${indicatorStyle.left}px)`, opacity: indicatorStyle.opacity }} />
              {navItems.map((item, i) => (
              <a
                key={item.label}
                ref={(el) => { navRefs.current[i] = el }}
                href={item.href}
                className={`text-xl xl:text-2xl px-4 xl:px-5 py-0 rounded-full relative z-10 whitespace-nowrap ${i === activeIndex ? 'text-[rgb(27,29,30)] font-semibold' : 'text-slate-700'}`}
                style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}
                onMouseEnter={(e) => {
                  const target = e.currentTarget as HTMLElement
                  setIndicatorStyle({ width: target.offsetWidth, left: target.offsetLeft, opacity: 1 })
                }}
                onClick={(e) => {
                  e.preventDefault()
                  setActiveIndex(i)
                  const target = e.currentTarget as HTMLElement
                  setIndicatorStyle({ width: target.offsetWidth, left: target.offsetLeft, opacity: 1 })

                  // Prefer scrolling to an in-page section. If not present, navigate to the href.
                  const handled = scrollToHash(item.href)
                  if (!handled) {
                    window.location.href = item.href
                  }
                }}
              >
                {item.label}
              </a>
            ))}
            </nav>
          </div>

          {/* Right: CTA + Mobile Menu Button */}
          <div className="flex items-center gap-4 flex-shrink-0">
            <button
              className="lg:hidden inline-flex items-center p-2 rounded-full text-slate-700 hover:bg-slate-100 ring-0 hover:ring-1 hover:ring-slate-200"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none" aria-hidden>
                <rect x="3" y="5" width="14" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="11" width="14" height="2" rx="1" fill="currentColor" />
                <rect x="3" y="17" width="10" height="2" rx="1" fill="currentColor" />
                <circle cx="19" cy="12" r="2" fill="currentColor" />
              </svg>
            </button>
            <a
              className="hidden lg:inline-flex group items-center gap-2 xl:gap-3 px-4 xl:px-6 py-2.5 xl:py-3 rounded-full bg-[rgb(27,29,30)] text-white shadow-md justify-between overflow-hidden font-sans font-semibold text-sm xl:text-base whitespace-nowrap"
              href="/contact"
              aria-label="Let's Collaborate"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-20">Let's Collaborate</span>
              <span className="inline-flex items-center justify-center w-8 h-8 xl:w-10 xl:h-10 bg-white rounded-full transition-transform duration-300 group-hover:-translate-x-44 flex-shrink-0">
                <svg viewBox="0 0 24 24" className="w-4 h-4 xl:w-5 xl:h-5 text-[rgb(27,29,30)] transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
        </div>
      </header>


      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        <div className="absolute inset-0 bg-[rgb(27,29,30)] bg-opacity-40 transition-opacity duration-300 ease-in-out" onClick={() => setIsMenuOpen(false)} />

        <div
          className={`absolute left-6 top-4 right-6 bottom-4 w-auto max-w-xs bg-white rounded-2xl shadow-2xl transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
          style={{ left: '1.5rem', right: '1.5rem', maxWidth: '360px', width: 'min(360px, calc(100% - 3rem))', boxSizing: 'border-box' }}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Panel Header */}
            <div className="flex items-center justify-between p-4 border-b border-slate-100">
              <div className="flex items-center gap-3">
                <Image src="/videography.png" alt="Creatinn" width={40} height={40} className="w-10 h-10 object-contain" />
                <div className="text-lg font-bold">Creatinn Agency</div>
              </div>
              <button aria-label="Close menu" onClick={() => setIsMenuOpen(false)} className="p-2 rounded-lg hover:bg-slate-100">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-2xl font-semibold text-slate-900 hover:text-slate-600 py-2"
                    onClick={(e) => {
                          e.preventDefault()
                          setIsMenuOpen(false)
                          // Try in-page scroll first; if not present, navigate.
                          const handled = scrollToHash(item.href)
                          if (!handled) {
                            // Use full navigation when the section isn't on the current page
                            window.location.href = item.href
                          }
                        }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>

              <div className="mt-8 border-t border-slate-100 pt-6">
                <p className="text-sm text-slate-500 mb-4">Let's collaborate — we build brands, content, and media that convert.</p>
                <a href="/contact" onClick={() => setIsMenuOpen(false)} className="w-full inline-flex items-center justify-center gap-3 px-6 py-3 rounded-full bg-[rgb(27,29,30)] text-white shadow-sm hover:bg-slate-800 transition-colors font-semibold">
                  Let's Collaborate
                </a>
              </div>
            </div>

            <div className="p-4 border-t border-slate-100 flex items-center justify-between text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <a href="https://instagram.com/creatinn" className="hover:text-slate-900">Instagram</a>
                <a href="https://youtube.com/@creatinn" className="hover:text-slate-900">YouTube</a>
              </div>
              <div>©2025</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
