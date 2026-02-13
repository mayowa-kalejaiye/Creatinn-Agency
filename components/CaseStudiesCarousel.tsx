"use client"
import React from 'react'
import { motion } from 'framer-motion'

type CaseStudy = {
  id: string
  title: string
  subtitle?: string
  image: string
  thumb?: string
  excerpt?: string
  link?: string
}

const example: CaseStudy[] = [
  { id: 'c1', title: 'Bespoke Bakery', subtitle: 'E‑commerce growth', image: '/optimized/images/3U4A1815-1200.avif', thumb: '/optimized/images/3U4A1815-800.avif', excerpt: 'Doubled online sales in 6 months via redesigned funnel.', link: '/portfolio#bespoke-bakery' },
  { id: 'c2', title: 'Studio X', subtitle: 'Brand + Website', image: '/optimized/images/3U4A1894-1200.avif', thumb: '/optimized/images/3U4A1894-800.avif', excerpt: 'Repositioned brand and launched high-converting site.', link: '/portfolio#studio-x' },
]

export default function CaseStudiesCarousel({ items = example }: { items?: CaseStudy[] }) {
  const [index, setIndex] = React.useState(0)
  const timeoutRef = React.useRef<number | null>(null)
  const rootRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    // autoplay
    const play = () => {
      timeoutRef.current = window.setTimeout(() => {
        setIndex(i => (i + 1) % items.length)
      }, 5000)
    }
    play()
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
    }
  }, [items.length])

  const onSelect = (i: number) => {
    setIndex(i)
    if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
  }

  return (
    <div ref={rootRef} className="w-full max-w-6xl mx-auto">
      <div className="relative overflow-hidden rounded-xl">
        <motion.div
          key={items[index].id}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full h-80 md:h-96 bg-slate-100 flex items-stretch"
        >
          <div className="hidden md:block md:w-1/2 h-full overflow-hidden">
            <img src={items[index].image} alt={items[index].title} className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="p-6 md:p-12 md:w-1/2 flex flex-col justify-center bg-white">
            <h3 className="text-2xl md:text-3xl font-semibold">{items[index].title}</h3>
            {items[index].subtitle && <div className="text-sm text-slate-500 mt-2">{items[index].subtitle}</div>}
            {items[index].excerpt && <p className="mt-4 text-base text-slate-700 max-w-xl">{items[index].excerpt}</p>}
            <div className="mt-6">
              <a href={items[index].link || '/portfolio'} className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[rgb(27,29,30)] text-white">View Case Study</a>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="mt-4 flex items-center gap-3 overflow-x-auto py-2">
        {items.map((it, i) => (
          <button
            key={it.id}
            onClick={() => onSelect(i)}
            className={`flex-shrink-0 w-28 h-16 rounded-md overflow-hidden border ${i === index ? 'ring-2 ring-offset-2 ring-[rgb(27,29,30)]' : 'border-slate-200'}`}
            aria-current={i === index}
          >
            <img src={it.thumb || it.image} alt={it.title} className="w-full h-full object-cover" loading="lazy" />
          </button>
        ))}
      </div>
    </div>
  )
}
