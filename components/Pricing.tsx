import React from 'react'
import ThreeDCard from './ThreeDCard'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-[rgb(27,29,30)] mb-10">Pick the plan that fits<br/> your 
        <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium"> start-up</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[1400px] mx-auto">
          {/* Starter (left) */}
          <ThreeDCard maxRotation={8} shadowBlur={40}>
            <div className="rounded-3xl overflow-hidden bg-[rgb(246,230,131)] p-10 md:p-16 flex flex-col md:flex-row items-start gap-8 md:gap-10 shadow-md h-full">
              <div className="w-full md:w-1/2 text-left">
                <span className="inline-block bg-[rgb(27,29,30)] text-white px-4 py-2 rounded-full text-base mb-4">Starter</span>
                <p className="text-base text-slate-700 mt-4">For companies who need design support. One request at a time</p>

                <div className="mt-8 text-5xl md:text-6xl font-extrabold text-slate-900">$2500<span className="text-lg md:text-xl font-medium text-slate-700">/month</span></div>

                <a href="/contact" className="inline-flex items-center gap-4 mt-8 px-6 py-4 rounded-full bg-white text-[rgb(27,29,30)] shadow group text-base">
                  <span>Let's Collaborate</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-[rgb(27,29,30)] text-white rounded-full">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>

              <div className="w-full md:w-1/2 md:border-l md:pl-8 md:border-slate-200">
                <div className="font-semibold text-slate-900 mb-4 text-base">Features</div>
                <ul className="text-base text-slate-700 space-y-3">
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> Design Updates Every 2 Days</li>
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> Mid-level Designer</li>
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> SEO optimization</li>
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> Monthly analytics</li>
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> 2x Calls Per Month</li>
                  <li className="flex items-start gap-3"><span className="text-green-500">✓</span> License free assets</li>
                </ul>
              </div>
            </div>
          </ThreeDCard>

          {/* Pro (right) */}
          <ThreeDCard maxRotation={8} shadowBlur={40}>
            <div className="rounded-3xl overflow-hidden bg-[#4b22ff] text-white p-10 md:p-16 flex flex-col md:flex-row items-start gap-8 md:gap-10 shadow-md h-full">
              <div className="w-full md:w-1/2 text-left">
                <span className="inline-block bg-[rgb(27,29,30)] text-white px-4 py-2 rounded-full text-base mb-4">Pro</span>
                <p className="text-base text-white/80 mt-4">2x the speed. Great for an MVP, Web App or complex problem</p>

                <div className="mt-8 text-5xl md:text-6xl font-extrabold text-white">$3500<span className="text-lg md:text-xl font-medium text-white/80">/month</span></div>

                <a href="/contact" className="inline-flex items-center gap-4 mt-8 px-6 py-4 rounded-full bg-white text-[rgb(27,29,30)] shadow group text-base">
                  <span>Let's Collaborate</span>
                  <span className="inline-flex items-center justify-center w-9 h-9 bg-[rgb(27,29,30)] text-white rounded-full">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>

              <div className="w-full md:w-1/2 md:border-l md:pl-8 md:border-white/20">
                <div className="font-semibold text-white mb-4 text-base">Features</div>
                <ul className="text-base text-white/90 space-y-3">
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> Design Updates Daily</li>
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> Senior-level Designer</li>
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> AI Advisory Framework</li>
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> Full-service Creative Team</li>
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> 4x Calls Per Month</li>
                  <li className="flex items-start gap-3"><span className="text-white">✓</span> License free assets</li>
                </ul>
              </div>
            </div>
          </ThreeDCard>
        </div>
      </div>
    </section>
  )
}
