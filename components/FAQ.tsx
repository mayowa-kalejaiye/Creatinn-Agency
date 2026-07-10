'use client'
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

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
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 bg-[#f2f2f2]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4 block">
              FAQ
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-accent"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-white rounded-3xl overflow-hidden shadow-sm border border-gray-100"
              >
                <button
                  className="w-full text-left px-8 py-6 flex items-center justify-between gap-6 transition-colors hover:bg-gray-50 focus:outline-none"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-lg md:text-xl font-bold text-accent">{item.q}</span>
                  <span className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-accent border-accent text-white rotate-45' : 'bg-transparent border-gray-300 text-accent'}`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-8 pb-8 text-gray-600">
                        <p className="text-base md:text-lg leading-relaxed font-medium">
                          {item.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
