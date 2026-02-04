'use client'

import React, { useState, useRef, useEffect } from 'react'

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
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Awards', href: '/#awards' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(0)
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0, opacity: 0 })
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

      // Update active section based on scroll position
      const sections = navItems.map(item => {
        const id = item.href.replace('/#', '#')
        return document.querySelector(id)
      }).filter(Boolean) as HTMLElement[]
      const scrollPosition = window.scrollY + window.innerHeight / 3 // activate when section is 1/3 down the viewport

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          if (activeIndex !== i) {
            setActiveIndex(i)
          }
          break
        }
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
      <header className="header-glass py-2">
        {/* Logo will sit inside the container so left/right spacing is balanced */}

        <div ref={headerRef} className="container mx-auto px-6 lg:px-12 flex items-center justify-between relative">

          {/* Left: logo (in-flow so CTA stays on the opposite side) */}
          <div className="flex items-center gap-3 z-[140]">
            <img src="/videography.png" alt="Creatinn Agency logo" className="w-14 h-14 md:w-20 md:h-20 object-contain" />
            <div className="text-xl md:text-2xl lg:text-3xl font-extrabold tracking-tight font-sans text-[rgb(27,29,30)]">Creatinn Agency</div>
          </div>

          {/* Center: nav (glassmorphism curved pill containing links) - show only on large screens to avoid overlap */}
          <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center w-auto pointer-events-none">
            <nav
              className="nav-glass relative flex items-center gap-5 py-4 px-10 max-w-4xl w-auto pointer-events-auto"
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
                  ref={(el) => (navRefs.current[i] = el)}
                  href={item.href}
                  className={`text-base lg:text-lg px-10 py-2 rounded-full relative z-10 font-sans ${i === activeIndex ? 'text-[rgb(27,29,30)] font-semibold' : 'text-slate-700'}`}
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

          {/* Right: CTA */}
          <div className="flex items-center gap-4 md:relative">
            <button
              className="lg:hidden fixed right-4 top-3 z-[120] inline-flex items-center p-2 rounded-lg text-slate-700 hover:bg-slate-100 lg:static lg:relative lg:right-auto lg:top-auto"
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
              className="hidden lg:inline-flex group items-center gap-3 px-8 py-3.5 rounded-full bg-[rgb(27,29,30)] text-white shadow-md md:w-auto justify-between z-20 overflow-hidden font-sans font-semibold text-lg"
              href="/contact"
              aria-label="Let's Collaborate"
            >
              <span className="transition-transform duration-300 group-hover:translate-x-20">Let's Collaborate</span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-300 group-hover:-translate-x-44">
                <img src="/icon.svg" alt="arrow" className="w-5 h-5 object-contain" />
              </span>
            </a>
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
              <a href="#contact" className="inline-flex items-center justify-center gap-3 w-full px-6 py-2 rounded-full bg-[rgb(27,29,30)] text-white shadow-lg hover:bg-slate-800 transition-colors font-sans font-semibold" onClick={() => setIsMenuOpen(false)}>
                <span>Let's Collaborate</span>
                <span className="inline-flex items-center justify-center w-7 h-7 bg-white rounded-full">
                  <img src="/icon.svg" alt="arrow" className="w-full h-full object-contain transform rotate-11" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
