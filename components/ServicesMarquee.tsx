"use client";
import React from 'react';

const services = [
  'Brand Strategy',
  'Web Development',
  'Digital Marketing',
  'UI/UX Designing',
  'Analytics & Reporting',
];

export default function ServicesMarquee() {
  return (
    <div className="relative z-30 w-full bg-slate-900 py-6 overflow-hidden">
      <div className="flex gap-8 animate-marquee whitespace-nowrap">
        {[...services, ...services, ...services, ...services].map((service, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-white text-xl md:text-2xl font-medium">{service}</span>
            <span className="text-white/40">•</span>
          </div>
        ))}
      </div>
    </div>
  );
}
