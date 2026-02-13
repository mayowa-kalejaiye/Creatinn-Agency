"use client"
import React from 'react'

export default function LogoMarqueeEnhanced({ logos = [] as string[] }: { logos?: string[] }) {
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  return (
    <div className="w-full overflow-hidden py-6">
      <div
        className={`flex items-center gap-8 animate-marquee will-change-transform ${prefersReducedMotion ? 'animate-none' : ''}`}
        onMouseEnter={(e) => {
          // pause animation
          (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.animationPlayState = 'running'
        }}
        role="list"
        aria-label="Client logos"
      >
        {logos.length ? logos.concat(logos).map((src, i) => (
          <div key={i} className="flex-shrink-0 w-28 h-12 flex items-center justify-center opacity-90">
            <img src={src} alt="client logo" className="max-h-10 object-contain" loading="lazy"/>
          </div>
        )) : (
          // fallback sample logos
          ["/optimized/images/3U4A1815-800.avif","/optimized/images/3U4A1894-800.avif"].concat(["/optimized/images/3U4A1815-800.avif","/optimized/images/3U4A1894-800.avif"]).map((src, i) => (
            <div key={i} className="flex-shrink-0 w-28 h-12 flex items-center justify-center opacity-90">
              <img src={src} alt="client logo" className="max-h-10 object-contain" loading="lazy"/>
            </div>
        ))) }
      </div>

      <style jsx>{`
        .animate-marquee {
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0) }
          100% { transform: translateX(-50%) }
        }
      `}</style>
    </div>
  )
}
