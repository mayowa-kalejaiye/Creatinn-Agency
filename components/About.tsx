"use client"
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headlineRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(headlineRef, { once: true, amount: 0.3 })
  const [started, setStarted] = useState(false)
  const targets = [40, 15, 9]
  const [values, setValues] = useState<number[]>(targets.map(() => 0))
  const [displayedText, setDisplayedText] = useState('')
  
  const fullText = "Crafting exceptional, well experienced & technology\ndriven strategiesto drive impactful results with"

  useEffect(() => {
    if (!isInView) return
    
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 30) // Elegant, smooth typing speed

    return () => clearInterval(typingInterval)
  }, [isInView])

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          // start counting
          targets.forEach((target, idx) => animateCount(idx, target))
        }
      })
    }, { threshold: 0.25 })

    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  function animateCount(index: number, target: number) {
    const duration = 1600
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      // easeOutCubic
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = Math.round(eased * target)
      setValues(prev => {
        const next = [...prev]
        next[index] = current
        return next
      })
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }

  return (
    <section id="about" ref={sectionRef} className="about-section bg-white py-24">
      <div className="container mx-auto px-0 relative z-10">
        <div ref={headlineRef}>
          <motion.h3 
            className="about-headline"
            initial={{ opacity: 0 }}
            animate={{ opacity: isInView ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {displayedText.split('\n').map((line, i, arr) => (
              <React.Fragment key={i}>
                {line.split(/( well experienced | & technology driven strategies)/).map((part, j) => {
                  if (part === ' well experienced ') {
                    return <span key={j} className="italic">{part}</span>
                  }
                  return <span key={j} className="regular primary">{part}</span>
                })}
                {i < arr.length - 1 && <br />}
              </React.Fragment>
            ))}
          </motion.h3>
        </div>

        <motion.div 
          className="about-bullets" 
          role="list" 
          aria-label="approach"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="pill pill--purple" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="6" cy="6" r="3" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="6" cy="18" r="3" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M20 4L8.12 15.88" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M14.47 14.48L20 20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
            </svg>
            Creativity
          </div>

          <div className="pill pill--blue" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M9 18h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M10 22h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
              <path d="M15 14c1.5-1 3-3 3-5.5A6 6 0 0 0 6 8.5c0 2.5 1.5 4.5 3 5.5V16a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Innovation
          </div>

          <div className="pill pill--amber" role="listitem">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="19" cy="5" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="5" cy="5" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="19" cy="19" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <circle cx="5" cy="19" r="2" stroke="currentColor" strokeWidth="1.6"/>
              <path d="M12 10V6M6 6l5 5M18 6l-5 5M6 18l5-5M18 18l-5-5" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
            Strategy
          </div>
        </motion.div>

        <motion.div 
          className="stats-grid relative z-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="stat">
            <div className="stat-number"><span className="plus">+</span>{values[0]}</div>
            <div className="stat-label">Total Projects Completed</div>
          </div>

          <div className="stat">
            <div className="stat-number"><span className="plus">+</span>{values[1]}</div>
            <div className="stat-label">Years of Experience</div>
          </div>

          <div className="stat">
            <div className="stat-number"><span className="plus">+</span>{values[2]}</div>
            <div className="stat-label">Design Awards</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
