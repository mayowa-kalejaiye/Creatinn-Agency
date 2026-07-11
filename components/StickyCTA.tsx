"use client"
import React from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = React.useState(true)
  const [footerInView, setFooterInView] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Hide the CTA when the footer enters the viewport to avoid overlap
  React.useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return
    const footer = document.querySelector('footer')
    if (!footer) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        setFooterInView(e.isIntersecting)
      })
    }, { root: null, threshold: 0 })

    obs.observe(footer)
    return () => obs.disconnect()
  }, [])

  return (
    <a
      href="/contact"
      aria-label="Contact us"
      className={`fixed right-4 bottom-8 md:hidden z-50 transform transition-all duration-300 flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-primary text-black font-bold shadow-[0_8px_30px_rgba(189,255,0,0.4)] ${visible && !footerInView ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-8 opacity-0 pointer-events-none'}`}
    >
      <span>Contact Us</span>
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
    </a>
  )
}
