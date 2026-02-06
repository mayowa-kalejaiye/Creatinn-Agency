import React from 'react'

export default function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-6 lg:px-12 text-center relative z-30">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-slate-900">
          <span style={{ fontFamily: 'Inter, system-ui, sans-serif', fontStyle: 'normal' }}>
            Where innovation
            <br />
            meets
          </span>{' '}
          <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium">aesthetics</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="rounded-xl p-8 bg-purple-50 text-left flex flex-col gap-6 min-h-[200px]">
            <div className="text-purple-500 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Brand<br /> Strategy</div>
          </div>

          <div className="rounded-xl p-8 bg-red-50 text-left flex flex-col gap-6 min-h-[200px]">
            <div className="text-red-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 6L22 12L16 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 4L11 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Web<br /> Development</div>
          </div>

          <div className="rounded-xl p-8 bg-blue-50 text-left flex flex-col gap-6 min-h-[200px]">
            <div className="text-blue-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 8A6 6 0 1 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="18" cy="8" r="3" fill="currentColor"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Digital<br /> Marketing</div>
          </div>

          <div className="rounded-xl p-8 bg-amber-50 text-left flex flex-col gap-6 min-h-[200px]">
            <div className="text-amber-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">UI/UX<br /> Designing</div>
          </div>

          <div className="rounded-xl p-8 bg-green-50 text-left flex flex-col gap-6 min-h-[200px]">
            <div className="text-green-400 w-20 h-20 md:w-16 md:h-16 lg:w-32 lg:h-32 rounded-lg flex items-center justify-center">
              <svg className="w-14 h-14 md:w-10 md:h-10 lg:w-20 lg:h-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="7" y="12" width="3" height="9" fill="currentColor"/>
                <rect x="14" y="8" width="3" height="13" fill="currentColor"/>
                <path d="M18 4l3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="mt-auto text-2xl md:text-lg lg:text-2xl font-semibold text-[rgb(27,29,30)]">Analytics &<br /> Reporting</div>
          </div>
        </div>

        <div className="mt-12 rounded-3xl p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-6 bg-[rgb(27,29,30)] text-white border border-[rgb(27,29,30)] shadow-md">
          <div className="text-left max-w-2xl">
            <h3 className="text-lg md:text-2xl font-semibold">See Our Work in Action.<br/>Start Your Creative Journey with Us!</h3>
          </div>

          <div className="flex gap-3">
            <a href="/contact" className="inline-flex group items-center gap-3 px-8 py-4 rounded-full bg-white text-[rgb(27,29,30)] border border-[rgb(27,29,30)] transition-all duration-300 overflow-hidden">
              <span className="transition-transform duration-300 group-hover:translate-x-20 text-lg font-semibold">Let's Collaborate</span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-[rgb(27,29,30)] rounded-full transition-transform duration-300 group-hover:-translate-x-32">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-white transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
            <a href="#portfolio" className="inline-flex group items-center gap-3 px-8 py-4 rounded-full border border-white text-white transition-all duration-300 overflow-hidden">
              <span className="transition-transform duration-300 group-hover:translate-x-20 text-lg font-semibold">View Portfolio</span>
              <span className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full transition-transform duration-300 group-hover:-translate-x-32">
                <svg viewBox="0 0 24 24" className="w-5 h-5 text-[rgb(27,29,30)] transform -rotate-45" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
