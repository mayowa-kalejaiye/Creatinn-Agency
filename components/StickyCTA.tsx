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

      <div className="flex-0 px-3 overflow-hidden group">
        <div className="relative w-5 h-5 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
          </div>
          <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
            <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
          </div>
        </div>
      </div>
    </a>
  )
}
