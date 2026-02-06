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

  useEffect(() => {
    // lock body scroll when mobile menu is open
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  return (
    <>
      <header className="header-glass">
        <div className="mx-auto w-full">
        {/* Nav glass now wraps the entire header content */}
        <div 
          ref={headerRef} 
          className={`nav-glass-container ${isPastHero ? 'past-hero' : ''}`}
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
          <div className="flex items-center gap-3 z-[140] flex-shrink-0">
            <Image src="/videography.png" alt="Creatinn Agency logo" width={48} height={48} className="w-12 h-12 md:w-14 md:h-14 object-contain" style={{filter: 'brightness(0) saturate(100%)' }} />
            <div className="text-lg md:text-xl lg:text-2xl font-extrabold tracking-tight font-sans text-[rgb(27,29,30)] whitespace-nowrap" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>Creatinn Agency</div>
          </div>

          {/* Center: nav links with second glassmorphism layer - show only on large screens */}
          <div className="hidden lg:block flex-shrink-0">
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
                  
                  // Check if we're on a different page
                  if (window.location.pathname !== '/') {
                    // Navigate to home page with hash
                    window.location.href = item.href
                  } else {
                    // Same page smooth scroll with momentum
                    const sectionId = item.href.replace('/#', '#')
                    if (sectionId && sectionId.startsWith('#')) {
                      const el = document.querySelector(sectionId)
                      if (el) {
                        const offset = 80 // header height offset
                        const elementPosition = el.getBoundingClientRect().top
                        const offsetPosition = elementPosition + window.pageYOffset - offset
                        
                        smoothScrollTo(offsetPosition)
                      }
                    }
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
              className="lg:hidden inline-flex items-center p-2 rounded-lg text-slate-700 hover:bg-slate-100"
              aria-label="Open menu"
              aria-expanded={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h12" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 12h16" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 18h10" />
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
        <div className="absolute inset-0 bg-[rgb(27,29,30)] bg-opacity-50 transition-opacity duration-300 ease-in-out" onClick={() => setIsMenuOpen(false)}></div>
        <div className={`absolute left-0 top-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="flex flex-col h-full">
            <div className="flex-1 p-6">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="text-lg font-medium text-slate-900 hover:text-slate-600"
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMenuOpen(false)
                      
                      // Check if we're on a different page
                      if (window.location.pathname !== '/') {
                        // Navigate to home page with hash
                        window.location.href = item.href
                      } else {
                        // Same page smooth scroll
                        const sectionId = item.href.replace('/#', '#')
                        if (sectionId && sectionId.startsWith('#')) {
                          const el = document.querySelector(sectionId)
                          if (el) {
                            const offset = 80
                            const elementPosition = el.getBoundingClientRect().top
                            const offsetPosition = elementPosition + window.pageYOffset - offset
                            
                            window.scrollTo({
                              top: offsetPosition,
                              behavior: 'smooth'
                            })
                          }
                        }
                      }
                    }}
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>
            <div className="p-6 border-t border-slate-200">
              <a href="/contact" className="inline-flex items-center justify-center gap-3 w-full px-6 py-2 rounded-full bg-[rgb(27,29,30)] text-white shadow-lg hover:bg-slate-800 transition-colors font-sans font-semibold" onClick={() => setIsMenuOpen(false)}>
                <span>Let's Collaborate</span>
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-full">
                  <Image src="/icon.svg" alt="arrow" width={28} height={28} className="w-full h-full object-contain transform rotate-11" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
