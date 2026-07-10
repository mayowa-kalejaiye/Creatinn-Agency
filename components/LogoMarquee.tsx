"use client";
import React from 'react';

const brands = [
  { 
    name: 'RED Digital Cinema', 
    icon: (
      <svg viewBox="0 0 100 30" className="h-8 md:h-10">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="#E60000" fontSize="32" fontWeight="900" fontFamily="sans-serif" letterSpacing="2">RED</text>
      </svg>
    ) 
  },
  { 
    name: 'Sony', 
    icon: (
      <svg viewBox="0 0 120 30" className="h-7 md:h-9">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="30" fontWeight="400" fontFamily="serif" letterSpacing="4">SONY</text>
      </svg>
    ) 
  },
  { 
    name: 'ARRI', 
    icon: (
      <svg viewBox="0 0 100 30" className="h-7 md:h-9">
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" fill="currentColor" fontSize="32" fontWeight="800" fontFamily="sans-serif" letterSpacing="1">ARRI</text>
      </svg>
    ) 
  },
  { 
    name: 'Premiere Pro', 
    icon: (
      <svg viewBox="0 0 100 30" className="h-8 md:h-10 flex items-center gap-2" overflow="visible">
        <rect width="30" height="30" rx="4" fill="#31006F" />
        <text x="15" y="15" dominantBaseline="middle" textAnchor="middle" fill="#E896FF" fontSize="16" fontWeight="bold" fontFamily="sans-serif">Pr</text>
        <text x="38" y="15" dominantBaseline="middle" textAnchor="start" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">Premiere Pro</text>
      </svg>
    ) 
  },
  { 
    name: 'DaVinci Resolve', 
    icon: (
      <svg viewBox="0 0 150 30" className="h-8 md:h-10 flex items-center gap-2" overflow="visible">
        <circle cx="15" cy="15" r="15" fill="none" stroke="currentColor" strokeWidth="3" />
        <circle cx="15" cy="15" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M15 0 L15 10 M15 20 L15 30 M0 15 L10 15 M20 15 L30 15" stroke="currentColor" strokeWidth="2" />
        <text x="38" y="15" dominantBaseline="middle" textAnchor="start" fill="currentColor" fontSize="18" fontWeight="bold" fontFamily="sans-serif">DaVinci Resolve</text>
      </svg>
    ) 
  }
];

export default function LogoMarquee() {
  return (
    <div className="relative z-30 w-full bg-white py-6 md:py-8 overflow-hidden border-b border-gray-100 flex items-center h-[80px] md:h-[100px]">
      {/* Left Static Gradient Block */}
      <div className="absolute top-0 left-0 bottom-0 w-[180px] md:w-[260px] z-10 bg-gradient-to-r from-white from-80% to-transparent flex items-center pl-4 sm:pl-6 md:pl-10">
        <p className="text-[12px] md:text-[13px] font-medium text-gray-400 whitespace-nowrap">
          The agency behind ..
        </p>
      </div>

      <div
        className="flex gap-16 md:gap-24 animate-marquee will-change-transform items-center text-gray-400/80 pl-[180px] md:pl-[260px]"
        onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.animationPlayState = 'paused'}
        onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.animationPlayState = 'running'}
        role="list"
        aria-label="Client logos"
      >
        {[...brands, ...brands, ...brands, ...brands].map((brand, i) => (
          <div 
            key={i} 
            className="flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale"
            role="listitem"
          >
            <span aria-hidden="true" className="flex items-center justify-center h-10 md:h-12 scale-75 md:scale-90">{brand.icon}</span>
            <span className="sr-only">{brand.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
