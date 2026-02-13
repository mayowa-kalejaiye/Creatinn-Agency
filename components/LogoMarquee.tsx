"use client";
import React from 'react';

const brands = [
  { name: 'Brand 1', icon: '◆' },
  { name: 'Brand 2', icon: '◇' },
  { name: 'Brand 3', icon: '●' },
  { name: 'Brand 4', icon: '○' },
  { name: 'Brand 5', icon: '■' },
];

export default function LogoMarquee() {
  return (
    <div className="relative z-30 w-full bg-white py-12 overflow-hidden">
      <div
        className="flex gap-12 animate-marquee will-change-transform"
        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'}
        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.animationPlayState = 'running'}
        role="list"
        aria-label="Client logos"
      >
        {[...brands, ...brands, ...brands].map((brand, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 w-24 h-24 flex items-center justify-center text-4xl text-slate-300 hover:text-slate-600 transition-colors"
            role="listitem"
          >
            <span aria-hidden>{brand.icon}</span>
            <span className="sr-only">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
