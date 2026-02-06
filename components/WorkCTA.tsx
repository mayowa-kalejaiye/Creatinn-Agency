import React from 'react';

export default function WorkCTA() {
  return (
    <section className="relative z-30 bg-white py-16" id="work-cta">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center">
          <h2 className="mb-8" style={{ fontSize: '42px', fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>
            <span className="font-medium text-[rgb(27,29,30)]">How we transformed a small<br/> </span>
            <span className="font-medium text-[rgb(27,29,30)]">business's </span>
            <span className="font-medium text-[rgb(27,29,30)] italic" style={{ fontFamily: 'Playfair Display, serif' }}>online presence</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center gap-4 px-12 py-6 rounded-full bg-[rgb(27,29,30)] text-white hover:bg-slate-800 transition-colors font-medium text-2xl"
            >
              Let's Collaborate
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center gap-4 px-12 py-6 rounded-full border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors font-medium text-2xl"
            >
              View Portfolio
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
