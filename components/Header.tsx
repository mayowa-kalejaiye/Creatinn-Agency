'use client'

import React, { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { 
    label: 'Services', 
    href: '/#services',
    dropdown: [
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Cinematography & Production',
        desc: 'Commercials, documentaries, and narrative films.',
        href: '/#services'
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        ),
        title: 'Photography & Retouching',
        desc: 'High-end product, lifestyle, and editorial shots.',
        href: '/#services'
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        ),
        title: 'Social Content Creation',
        desc: 'Viral-engineered videos for TikTok & Reels.',
        href: '/#services'
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
          </svg>
        ),
        title: 'Post-Production & VFX',
        desc: 'Expert editing, color grading, and visual effects.',
        href: '/#services'
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        ),
        title: 'Creative Direction',
        desc: 'Storyboarding, set design, and campaign strategy.',
        href: '/#services'
      },
      {
        icon: (
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: 'Content Subscription',
        desc: 'Ongoing retainer for consistent, high-quality media.',
        href: '/#services'
      }
    ]
  },
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/#about' },
  { label: 'Pricing', href: '/#pricing' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  
  // Mobile accordion state
  const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null)

  // Headroom scroll state
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        const currentScrollY = window.scrollY
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsVisible(false) // Scroll down
        } else {
          setIsVisible(true) // Scroll up
        }
        setLastScrollY(currentScrollY)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Try to scroll to a section ID from an href like '/#services' or '#services'.
  const scrollToHash = (href: string) => {
    if (typeof document === 'undefined') return false
    const hashIndex = href.indexOf('#')
    if (hashIndex === -1) return false
    const id = href.slice(hashIndex + 1)
    if (!id) return false
    const el = document.getElementById(id)
    if (!el) return false
    const offset = 100
    const elementPosition = el.getBoundingClientRect().top
    const offsetPosition = elementPosition + window.pageYOffset - offset

    try {
      window.scrollTo({ top: Math.round(offsetPosition), behavior: 'smooth' })
    } catch (err) {
      window.scrollTo(0, Math.round(offsetPosition))
    }
    return true
  }

  useEffect(() => {
    if (typeof document === 'undefined') return
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
  }, [isMenuOpen])

  return (
    <div className={`fixed top-0 left-0 w-full z-[100] px-4 sm:px-6 lg:px-8 pt-4 pointer-events-none transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <header className="mx-auto max-w-7xl bg-white rounded-2xl shadow-[0_12px_40px_-10px_rgba(0,0,0,0.1)] pointer-events-auto relative">
        <div className="flex items-center justify-between h-14 sm:h-[60px] px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <a href="/" className="group flex items-center gap-2.5 flex-shrink-0 cursor-pointer transition-opacity">
            <div className="relative flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 bg-[#111] text-white rounded-[10px] sm:rounded-xl overflow-hidden shadow-sm">
              <svg 
                className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-90 transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)]" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83M16.62 12l-5.74 9.94" />
              </svg>
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
            </div>
            <span className="text-[20px] sm:text-[22px] font-bold tracking-tight text-[#111]">
              Creatinn<span className="text-gray-400">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-2 xl:gap-4 h-full">
            {navItems.map((item) => (
              <div 
                key={item.label}
                className="h-full flex items-center"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    const handled = scrollToHash(item.href)
                    if (!handled) window.location.href = item.href
                  }}
                  className="text-gray-800 text-[15px] font-medium px-4 py-2 rounded-lg hover:bg-black/5 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  {item.label}
                  {item.dropdown && (
                    <svg 
                      className={`w-3.5 h-3.5 transition-transform duration-200 text-gray-500 ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Mega Menu Dropdown */}
                {item.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
                        animate={{ opacity: 1, y: 0, scale: 1, x: "-50%" }}
                        exit={{ opacity: 0, y: 10, scale: 0.98, x: "-50%" }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="absolute top-full pt-4 left-1/2 w-[850px] cursor-default"
                      >
                        <div className="bg-white rounded-[2rem] shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] p-8 border border-gray-100">
                          <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-6 px-2">
                            {item.label}
                          </h3>
                          
                          <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                            {item.dropdown.map((subItem, idx) => (
                              <a 
                                key={idx} 
                                href={subItem.href}
                                onClick={(e) => {
                                  e.preventDefault()
                                  setActiveDropdown(null)
                                  scrollToHash(subItem.href)
                                }}
                                className="group flex gap-4 items-start p-3 rounded-2xl hover:bg-[#f8f9fa] transition-colors cursor-pointer"
                              >
                                <div className="w-11 h-11 rounded-xl bg-[#f2f2f2] flex items-center justify-center text-gray-600 flex-shrink-0 group-hover:bg-primary group-hover:text-black transition-colors">
                                  {subItem.icon}
                                </div>
                                <div>
                                  <h4 className="text-[15px] font-semibold text-accent mb-1 group-hover:text-black transition-colors">{subItem.title}</h4>
                                  <p className="text-[13px] text-gray-500 leading-relaxed group-hover:text-gray-600 transition-colors">{subItem.desc}</p>
                                </div>
                              </a>
                            ))}
                          </div>
                          
                          {/* Dark CTA Banner */}
                          <div className="mt-8 bg-[#111111] rounded-2xl p-6 flex items-center justify-between shadow-lg">
                            <div className="flex flex-col">
                              <h4 className="text-white text-[17px] font-bold mb-1">Want to boost your conversions?</h4>
                              <p className="text-gray-400 text-sm font-medium">Get a free CRO audit for your website.</p>
                            </div>
                            <a 
                              href="/contact" 
                              className="bg-primary text-[#111111] px-6 py-3 rounded-full text-sm font-bold hover:bg-white transition-colors flex items-center gap-2 group shadow-[0_4px_20px_-5px_rgba(189,255,0,0.3)]"
                            >
                              Get Free CRO Audit
                              <div className="relative w-4 h-4 overflow-hidden ml-1">
                                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                                </div>
                                <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                                </div>
                              </div>
                            </a>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center">
            <a 
              href="/contact"
              className="flex items-center gap-2 bg-[#1a1a1a] text-white px-6 py-2.5 rounded-full text-[15px] font-medium hover:bg-black transition-colors shadow-md group"
            >
              Get In Touch
              <div className="relative w-4 h-4 overflow-hidden ml-1">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                </div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 border-none bg-transparent cursor-pointer relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-accent rounded-full transition-all duration-300 absolute ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
            <span className={`w-5 h-0.5 bg-accent rounded-full transition-all duration-300 absolute ${isMenuOpen ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`} />
            <span className={`w-3 h-0.5 bg-accent rounded-full transition-all duration-300 absolute ${isMenuOpen ? '-rotate-45 w-5' : 'translate-y-1.5 -translate-x-1'}`} />
          </button>
        </div>
      </header>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`lg:hidden absolute top-[80px] left-4 right-4 bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.87,0,0.13,1)] pointer-events-auto ${isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8 pointer-events-none'}`}
      >
        <div className="px-5 pt-3 pb-6 flex flex-col max-h-[70vh] overflow-y-auto">
          {navItems.map((item) => (
            <div key={item.label} className="border-b border-gray-100 last:border-0">
              
              {/* Item Header */}
              <button
                onClick={(e) => {
                  if (item.dropdown) {
                    setOpenMobileAccordion(openMobileAccordion === item.label ? null : item.label)
                  } else {
                    setIsMenuOpen(false)
                    const handled = scrollToHash(item.href)
                    if (!handled) window.location.href = item.href
                  }
                }}
                className="flex items-center justify-between w-full py-4 text-[16px] font-semibold text-accent hover:text-black transition-colors"
              >
                {item.label}
                {item.dropdown && (
                  <svg 
                    className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openMobileAccordion === item.label ? 'rotate-180 text-black' : ''}`} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>
              
              {/* Mobile Accordion Content */}
              {item.dropdown && (
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openMobileAccordion === item.label ? 'max-h-[800px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}
                >
                  <div className="pl-4 flex flex-col gap-5 pt-2">
                    {item.dropdown.map((subItem, idx) => (
                      <a 
                        key={idx}
                        href={subItem.href}
                        onClick={(e) => {
                          e.preventDefault()
                          setIsMenuOpen(false)
                          scrollToHash(subItem.href)
                        }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-8 h-8 rounded-lg bg-[#f2f2f2] flex items-center justify-center text-gray-500 flex-shrink-0">
                          {subItem.icon}
                        </div>
                        <div>
                          <h4 className="text-[14px] font-semibold text-accent mb-0.5">{subItem.title}</h4>
                          <p className="text-[12px] text-gray-500 leading-tight">{subItem.desc}</p>
                        </div>
                      </a>
                    ))}
                    
                    {/* Mobile Banner CTA */}
                    <div className="mt-2 bg-[#111111] rounded-xl p-4">
                      <h4 className="text-white text-[14px] font-bold mb-1">Boost your conversions</h4>
                      <p className="text-gray-400 text-xs font-medium mb-4">Get a free CRO audit.</p>
                      <a 
                        href="/contact" 
                        className="inline-flex bg-primary text-[#111111] px-4 py-2 rounded-full text-xs font-bold hover:bg-white transition-colors items-center gap-1.5"
                      >
                        Free Audit
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <div className="mt-6 pt-4 border-t border-gray-100">
            <a 
              href="/contact"
              className="flex items-center justify-center gap-2 w-full bg-primary text-accent px-7 py-3.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity group"
            >
              Get In Touch
              <div className="relative w-4 h-4 overflow-hidden ml-1">
                <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                </div>
                <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
