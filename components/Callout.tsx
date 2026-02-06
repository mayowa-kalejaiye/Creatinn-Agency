import React from 'react'
import Image from 'next/image'

export default function Callout() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto rounded-3xl p-8 border border-slate-200/60 shadow-sm">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient background layer */}
          <div className="absolute inset-0 hero-gradient" />

          {/* White gradient overlay - stronger white at top */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/60 via-40% to-white/10 pointer-events-none" />

          {/* content */}
          <div className="relative p-16 md:p-24">
            <div className="text-center">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[rgb(27,29,30)] leading-tight mb-6">
                Innovative Solutions for 
                <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium"> bold brands</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-600 mb-10">
                Looking to elevate your brand? We craft immersive experiences that captivate, engage, and
                make your business unforgettable in every interaction.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[rgb(27,29,30)] text-white text-base md:text-lg shadow-lg hover:shadow-xl transition-shadow"
                aria-label="Let's craft together"
              >
                <span className="font-medium">Let's craft together</span>
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white text-[rgb(27,29,30)] rounded-full">
                  <Image src="/icon.svg" alt="arrow" width={16} height={16} className="w-4 h-4 -rotate-45" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
