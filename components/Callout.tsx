import React from 'react'
import Image from 'next/image'

export default function Callout() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto rounded-3xl p-6 border border-slate-100 shadow-sm">
        <div className="relative rounded-2xl overflow-hidden">
          {/* Gradient background layer */}
          <div className="absolute inset-0 hero-gradient" />

          {/* subtle white overlay to soften gradient for text readability */}
          <div className="absolute inset-0 bg-white/40 mix-blend-normal pointer-events-none" />

          {/* content */}
          <div className="relative p-12 md:p-20">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-slate-900 leading-tight mb-4">
                Innovative Solutions for <span className="italic text-slate-400 font-medium">bold brands</span>
              </h2>
              <p className="max-w-3xl mx-auto text-lg md:text-xl text-slate-700 mb-8">
                Looking to elevate your brand? We craft immersive experiences that captivate, engage, and
                make your business unforgettable in every interaction.
              </p>

              <a
                href="/contact"
                className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-[rgb(27,29,30)] text-white text-base md:text-lg shadow-lg"
                aria-label="Let's craft together"
              >
                <span className="font-medium">Let's craft together</span>
                <span className="inline-flex items-center justify-center w-9 h-9 bg-white text-[rgb(27,29,30)] rounded-full">
                  <Image src="/icon.svg" alt="arrow" width={16} height={16} className="w-4 h-4" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
