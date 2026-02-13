"use client"
import { motion } from 'framer-motion'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import HeroParallax from './HeroParallax'
import ProgressiveImage from './ProgressiveImage'
import SparklesText from './SparklesText'
import TextReveal from './TextReveal'
import HeroTextReveal from './HeroTextReveal'
import ScrollSpy from './ScrollSpy'
import dynamic from 'next/dynamic'
import AnimatedHeading from './AnimatedHeading'

const ImageCarousel = dynamic(() => import('./ImageCarousel'), { 
  ssr: false,
  loading: () => <div className="w-full h-full bg-gradient-to-br from-slate-50 to-slate-100" />
})

export default function Hero() {
  const logoTrackRef = useRef<HTMLDivElement | null>(null);
  const [showBackground, setShowBackground] = React.useState(false)

  useEffect(() => {
    const contactEl = document.getElementById('contact');
    if (!contactEl) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          logoTrackRef.current?.classList.add('enlarge');
        } else {
          logoTrackRef.current?.classList.remove('enlarge');
        }
      });
    }, { threshold: 0.15 });

    observer.observe(contactEl);
    return () => observer.disconnect();
  }, []);

  // Defer loading heavy background carousel until after first paint / idle
  useEffect(() => {
    if (typeof window === 'undefined') return
    const id = (window as any).requestIdleCallback?.(() => setShowBackground(true)) || window.setTimeout(() => setShowBackground(true), 60)
    return () => {
      try { (window as any).cancelIdleCallback?.(id) } catch (e) {}
      window.clearTimeout(id)
    }
  }, [])

  return (
    <section id="home" className="hero-gradient min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image Carousel — deferred so hero text renders immediately */}
      {showBackground && (
        <>
          <div className="absolute inset-0 z-0">
            <ImageCarousel />
          </div>

          {/* Parallax layers (subtle decorative layers behind hero content) */}
          <HeroParallax layers={[
            { id: 'l1', src: '/optimized/images/3U4A1815-1200.avif', depth: 0.12, className: 'opacity-40' },
            { id: 'l2', src: '/optimized/images/3U4A1894-1200.avif', depth: 0.06, className: 'opacity-30 mix-blend-multiply' },
          ]} />
        </>
      )}

      {/* Floating Social Media Icons - Left & Right */}
      <motion.div
        className="absolute left-1/4 top-32 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: -40, rotateY: 12, rotate: -6 }}
        animate={{ opacity: 1, x: 0, y: [0, -20, 0], rotateY: [10, -8, 10], rotate: [-6, 6, -6] }}
        transition={{ opacity: { duration: 1.2, delay: 0.4 }, x: { duration: 1.2, delay: 0.4 }, y: { duration: 6, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror', delay: 0.6 }, rotateY: { duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' }, rotate: { duration: 12, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' } }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute left-32 bottom-40 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: -30, rotateY: 10, rotate: -4 }}
        animate={{ opacity: 1, x: 0, y: [0, -24, 0], rotateY: [8, -8, 8], rotate: [-4, 6, -4] }}
        transition={{ opacity: { duration: 1.2, delay: 0.6 }, x: { duration: 1.2, delay: 0.6 }, y: { duration: 7, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror', delay: 0.9 }, rotateY: { duration: 14, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' }, rotate: { duration: 14, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' } }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-black to-gray-800 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm transition-shadow">
            
            <Image src="/tiktok-svgrepo-com.svg" alt="TikTok" width={48} height={48} className="w-12 h-12" />
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-1/4 top-40 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: 30, rotateY: -12, rotate: 6 }}
        animate={{ opacity: 1, x: 0, y: [0, -24, 0], rotateY: [-12, 8, -12], rotate: [6, -6, 6] }}
        transition={{ opacity: { duration: 1.2, delay: 0.5 }, x: { duration: 1.2, delay: 0.5 }, y: { duration: 8, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror', delay: 0.9 }, rotateY: { duration: 16, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' }, rotate: { duration: 16, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' } }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-slate-800 to-black rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute right-32 bottom-32 z-30 hidden lg:block"
        style={{ perspective: 800 }}
        initial={{ opacity: 0, x: 30, rotateY: -10, rotate: 4 }}
        animate={{ opacity: 1, x: 0, y: [0, -26, 0], rotateY: [-10, 10, -10], rotate: [4, -6, 4] }}
        transition={{ opacity: { duration: 1.2, delay: 0.8 }, x: { duration: 1.2, delay: 0.8 }, y: { duration: 9, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror', delay: 1.2 }, rotateY: { duration: 18, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' }, rotate: { duration: 18, repeat: Infinity, ease: [0.42, 0, 0.58, 1], repeatType: 'mirror' } }}
      >
        <div className="rounded-3xl p-2 bg-white shadow-lg">
          <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl flex items-center justify-center backdrop-blur-sm transition-shadow">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </div>
        </div>
      </motion.div>
      
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6 lg:px-48 pt-20 lg:pt-28">
        <div className="text-center w-full max-w-7xl mx-auto flex flex-col items-center">
          {/* left floating 3D camera (hidden on small screens) */}
          {/* <div className="absolute left-6 top-20 hidden lg:block pointer-events-auto">
            <Camera3D />
          </div> */}
          <AnimatedHeading as="h1" className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl leading-tight text-[rgb(27,29,30)] tracking-tight font-semibold text-center" maxTranslate={40} maxScale={0.04}>
            <SparklesText as="span" sparkleCount={28} sparkleSize={12}>
              <span style={{ display: 'inline-block', transformStyle: 'preserve-3d' }}>
                <HeroTextReveal text="Building bold brands" className="whitespace-nowrap inline-block" delay={0.05} />
              </span>
            </SparklesText>
          </AnimatedHeading>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.18, duration: 0.7 }}
            className="mt-0 md:mt-4 whitespace-nowrap"
          >
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-semibold text-[rgb(27,29,30)]" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>
              <HeroTextReveal text="with " delay={0.25} />
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl italic font-normal text-[rgb(27,29,30)]" style={{ fontFamily: 'Playfair Display, serif' }}>
              <HeroTextReveal text="thoughtful design" delay={0.3} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="mt-4 md:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl text-slate-600 mx-auto max-w-lg sm:max-w-2xl lg:max-w-4xl px-4 sm:px-0 leading-relaxed md:leading-snug text-center"
          >
            At Creatinn Agency, we help startups and creators tackle the biggest media challenges with tailored solutions. Our strategy, production, and execution deliver results that convert.
          </motion.p>

          <div className="mt-8 flex flex-col items-center justify-center gap-6 md:flex-row">
            <motion.a
              initial={{ y: 18, opacity: 0, scale: 0.98 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 220, damping: 22 }}
              className="relative inline-flex items-center bg-[#4928fd] hover:bg-[#3720d6] text-white pl-6 pr-24 py-5 rounded-full shadow-2xl w-11/12 max-w-md justify-start md:w-auto"
              href="/contact"
            >
              <span className="font-semibold text-xl ml-1">Get Started</span>
              <motion.span
                animate={{}}
                whileHover={{ x: 8 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
                className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md"
              >
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-[#4928fd] transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </motion.a>

            <div className="flex items-center gap-4">
              <div className="-space-x-3 flex items-center">
                <div className="w-10 h-10 rounded-full border-2 border-white shadow overflow-hidden">
                  <Image src="/optimized/images/IMG_0515-1200.avif" alt="avatar 1" width={40} height={40} className="object-cover" priority={false} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white shadow overflow-hidden">
                  <Image src="/optimized/images/IMG_3710-1200.avif" alt="avatar 2" width={40} height={40} className="object-cover" priority={false} />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white shadow overflow-hidden">
                  <Image src="/optimized/images/IMG_0691-1200.avif" alt="avatar 3" width={40} height={40} className="object-cover" priority={false} />
                </div>
              </div>

              <div className="text-sm text-slate-600">
                <div className="flex items-center gap-2">
                  <div className="flex text-amber-400">★★★★★</div>
                  <span>Trusted by 500+ clients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollSpy />
    </section>
  )
}
