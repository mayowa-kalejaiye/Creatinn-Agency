'use client'
import React from 'react'

export default function DeliveryProcess() {
  return (
    <section className="w-full py-24 md:py-32 bg-[#f9f9f9] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 text-center flex flex-col items-center">
        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-bold tracking-tight text-[#222] leading-[1.1] flex flex-wrap justify-center items-center gap-x-4 gap-y-4 md:gap-y-8">
          <span>Our Four</span>
          
          {/* Inline Image Container */}
          <span className="relative inline-flex items-center justify-center w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 -mt-2">
            {/* Background leaves/abstract shapes */}
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl scale-150"></div>
            
            {/* Left Leaf */}
            <svg className="absolute -left-6 top-4 w-12 h-12 md:w-16 md:h-16 text-primary opacity-80 transform -rotate-12 z-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5,2C17.5,2 14.5,2 11.5,5C8.5,8 8,12 8,12C8,12 11,12 14,9C17,6 17.5,2 17.5,2Z" />
            </svg>
            
            {/* Right Leaf */}
            <svg className="absolute -right-4 -top-6 w-16 h-16 md:w-20 md:h-20 text-[#b2df5e] opacity-90 transform rotate-[60deg] z-0" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5,2C17.5,2 14.5,2 11.5,5C8.5,8 8,12 8,12C8,12 11,12 14,9C17,6 17.5,2 17.5,2Z" />
            </svg>
            
            {/* Main Image */}
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-xl relative z-10 bg-[#e5e5e5] flex items-end justify-center pt-4">
              <img 
                src="https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=2942&auto=format&fit=crop"
                alt="Cinematographer on set"
                className="w-[120%] h-[120%] object-cover object-top -mb-2"
              />
            </div>
          </span>
          
          <span>Step Delivery</span>
          
          {/* Next Line - Italic */}
          <span className="w-full text-center mt-2 md:mt-4 font-serif italic font-normal text-6xl md:text-8xl lg:text-[7.5rem]">
            Process
          </span>
        </h2>
      </div>
    </section>
  )
}
