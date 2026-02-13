"use client"
import React from 'react'

export default function StickyCTA() {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <a
      href="/contact"
      aria-label="Start a project"
      className={`fixed right-6 bottom-6 z-50 transform transition-all duration-300 ${visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'} md:translate-y-0`}
      style={{
        width: 54,
        height: 54,
        borderRadius: 9999,
        background: 'linear-gradient(135deg,#111827,#374151)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        boxShadow: '0 8px 24px rgba(16,24,40,0.4)'
      }}
    >
      <span className="sr-only">Let's Collaborate</span>
      <div className="pointer-events-none">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 2v20M5 9l7-7 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </a>
  )
}
