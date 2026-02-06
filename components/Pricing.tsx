import React from 'react'
import ThreeDCard from './ThreeDCard'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-transparent">
      <div className="container mx-auto px-6 lg:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold text-slate-900 mb-10">Pick the plan that fits <span className="italic text-slate-400">your start-up</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Starter (left) */}
          <ThreeDCard maxRotation={8} shadowBlur={40}>
            <div className="rounded-3xl overflow-hidden bg-amber-300 p-8 md:p-12 flex flex-col md:flex-row items-start gap-6 md:gap-8 shadow-md h-full">
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-[rgb(27,29,30)] text-white px-3 py-1 rounded-full text-sm mb-3">Starter</span>
                <p className="text-sm text-slate-700 mt-3">For companies who need design support. One request at a time</p>

                <div className="mt-6 text-4xl md:text-5xl font-extrabold text-slate-900">$2500<span className="text-base md:text-lg font-medium text-slate-700">/month</span></div>

                <a href="/contact" className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full bg-white text-[rgb(27,29,30)] shadow group">
                  <span>Let's Collaborate</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[rgb(27,29,30)] text-white rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>

              <div className="w-full md:w-1/2 md:border-l md:pl-6 md:border-slate-200">
                <div className="font-semibold text-slate-900 mb-3">Features</div>
                <ul className="text-sm text-slate-700 space-y-3">
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
            <div className="rounded-3xl overflow-hidden bg-[#4b22ff] text-white p-8 md:p-12 flex flex-col md:flex-row items-start gap-6 md:gap-8 shadow-md h-full">
              <div className="w-full md:w-1/2">
                <span className="inline-block bg-[rgb(27,29,30)] text-white px-3 py-1 rounded-full text-sm mb-3">Pro</span>
                <p className="text-sm text-white/80 mt-3">2x the speed. Great for an MVP, Web App or complex problem</p>

                <div className="mt-6 text-4xl md:text-5xl font-extrabold text-white">$3500<span className="text-base md:text-lg font-medium text-white/80">/month</span></div>

                <a href="/contact" className="inline-flex items-center gap-3 mt-6 px-5 py-3 rounded-full bg-white text-[rgb(27,29,30)] shadow group">
                  <span>Let's Collaborate</span>
                  <span className="inline-flex items-center justify-center w-8 h-8 bg-[rgb(27,29,30)] text-white rounded-full">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  </span>
                </a>
              </div>

              <div className="w-full md:w-1/2 md:border-l md:pl-6 md:border-white/20">
                <div className="font-semibold text-white mb-3">Features</div>
                <ul className="text-sm text-white/90 space-y-3">
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
