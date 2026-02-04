"use client"

import React, { useState, useEffect, useRef } from 'react'

const FAQ_ITEMS = [
  {
    q: 'What services does Creatinn Agency offer?',
    a: 'We offer end-to-end creative services: brand strategy, UI/UX and product design, web development, video production, and growth-focused digital marketing. We tailor packages to your goals and budget.'
  },
  {
    q: 'How long does a typical project take?',
    a: 'Timelines vary by scope — small branding or landing page projects usually take 3–6 weeks; full product builds or rebrands typically run 2–4 months. We provide a clear roadmap at proposal stage.'
  },
  {
    q: 'How is pricing structured at Creatinn Agency?',
    a: 'We offer fixed-price packages for common scopes and retainer plans for ongoing design and production. Pricing depends on team level, deliverables, and cadence — we include transparent line-items in every proposal.'
  },
  {
    q: 'Do you offer ongoing support after project completion?',
    a: 'Yes — we provide maintenance and growth retainers, ad-hoc support, and handoff documentation so your team can run with what we build.'
  },
  {
    q: 'How often will I receive updates on my project?',
    a: 'We typically deliver weekly or biweekly updates depending on the plan, plus scheduled calls and access to project status documents so you always know progress and next steps.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(FAQ_ITEMS.length).fill(false))
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0')
            setTimeout(() => {
              setVisibleItems(prev => {
                const newVisible = [...prev]
                newVisible[index] = true
                return newVisible
              })
            }, index * 150) // Stagger each item by 150ms
          }
        })
      },
      { threshold: 0.1 }
    )

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <section id="faq" className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-48 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 mb-8">Got questions? <span className="italic text-slate-400">We&apos;ve got answers</span></h2>

        <div className="max-w-4xl mx-auto space-y-6 text-left">
          {FAQ_ITEMS.map((item, i) => (
            <div 
              key={item.q} 
              ref={(el) => { itemRefs.current[i] = el }}
              data-index={i}
              className={`rounded-2xl border border-slate-100 overflow-hidden transition-all duration-700 ${
                visibleItems[i] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <button
                className="w-full text-left px-10 py-8 flex items-center justify-between gap-6 bg-white transition-colors hover:bg-slate-50"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                aria-expanded={openIndex === i}
              >
                <span className="text-xl md:text-2xl lg:text-3xl font-semibold">{item.q}</span>
                <span className={`text-slate-500 text-2xl md:text-3xl transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''}`}>{openIndex === i ? '−' : '+'}</span>
              </button>

              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-10 pb-10 text-slate-600 bg-white">
                  <p className="text-lg md:text-xl lg:text-2xl leading-relaxed">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
