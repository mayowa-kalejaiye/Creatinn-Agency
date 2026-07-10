'use client'
import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const headerRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(headerRef, { once: false, amount: 0.2 })
  
  const [started, setStarted] = useState(false)
  const targets = [150, 98]
  const [values, setValues] = useState<number[]>(targets.map(() => 0))

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const obs = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
          setStarted(true)
          targets.forEach((target, idx) => animateCount(idx, target))
        } else if (!entry.isIntersecting) {
          setStarted(false)
          setValues(targets.map(() => 0))
        }
      })
    }, { threshold: 0.2 })

    obs.observe(el)
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started])

  function animateCount(index: number, target: number) {
    const duration = 2000
    const start = performance.now()
    const step = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
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
    <section id="about" ref={sectionRef} className="py-24 bg-white text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div ref={headerRef} className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4 block">
              About Creatinn
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-4xl"
          >
            We're a studio for ambitious teams. We build bold brands, content, and media that earn real engagement.
          </motion.h2>
        </div>

        {/* Creative Bento Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-20">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden md:col-span-2 group shadow-xl"
          >
            <Image 
              src="/optimized/images/3U4A1894-1200.avif" 
              alt="BTS Shoot"
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[500px] rounded-[2rem] overflow-hidden md:col-span-1 group shadow-xl"
          >
            <Image 
              src="/optimized/images/IMG_0657-1200.avif" 
              alt="Studio Setup"
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden md:col-span-1 group shadow-xl"
          >
            <Image 
              src="/optimized/images/IMG_0515-1200.avif" 
              alt="Drone Shot"
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden md:col-span-2 group shadow-xl"
          >
            <Image 
              src="/optimized/images/IMG_0905-1200.avif" 
              alt="Creative Team"
              fill
              className="object-cover transition-transform duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
            />
          </motion.div>

        </div>

        {/* Two Column Layout for Description and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium">
              Most agencies bolted digital onto an old workflow. We rebuilt the workflow around it. That's why our team ships premium media and content two to three times faster, without cutting corners on creative quality.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <span className="text-gray-400 font-medium mb-6">/01</span>
              <div className="mt-auto">
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">
                  {values[0]}+
                </h3>
                <p className="text-gray-500 font-medium">Projects shipped</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col"
            >
              <span className="text-gray-400 font-medium mb-6">/02</span>
              <div className="mt-auto">
                <h3 className="text-6xl md:text-7xl font-bold tracking-tighter mb-2">
                  {values[1]}%
                </h3>
                <p className="text-gray-500 font-medium">Client satisfaction</p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
