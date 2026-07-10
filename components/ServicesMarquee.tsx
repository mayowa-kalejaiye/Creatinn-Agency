"use client";
import React from 'react';

const services = [
  'Cinematography',
  'Commercial Production',
  'Color Grading',
  'Visual Effects',
  'Creative Direction',
  'Photography',
];

export default function ServicesMarquee() {
  return (
    <div className="relative z-30 w-full bg-[#0a0a0a] py-10 overflow-hidden border-y border-white/5">
      <div className="flex gap-16 animate-marquee whitespace-nowrap items-center" style={{ animationDuration: '12s' }}>
        {[...services, ...services, ...services, ...services].map((service, i) => (
          <div key={i} className="flex items-center gap-16 group cursor-default">
            <span className="text-transparent bg-clip-text text-5xl md:text-7xl font-sans uppercase tracking-tighter font-extrabold leading-none" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.2)' }}>
              {service}
            </span>
            <span className="text-primary opacity-50 text-3xl md:text-5xl leading-none">✦</span>
          </div>
        ))}
      </div>
    </div>
  );
}
