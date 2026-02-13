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
      className={`fixed right-6 bottom-24 md:hidden z-50 transform transition-all duration-300 w-12 hover:w-44 overflow-hidden flex items-center justify-center ${visible && !footerInView ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} group relative`}
      style={{
        height: 54,
        borderRadius: 9999,
        background: 'rgb(27,29,30)',
        color: 'white',
        boxShadow: '0 8px 24px rgba(16,24,40,0.4)'
      }}
    >
      <span className="sr-only">Contact us</span>

      <span className="absolute left-4 text-white text-sm font-semibold opacity-0 transform translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
        Contact us
      </span>

      <div className="flex-0 px-3">
        <svg viewBox="0 0 24 24" className="w-5 h-5 text-white transform -rotate-45" fill="none" aria-hidden>
          <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  )
}
