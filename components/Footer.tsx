'use client'
import React from 'react'
import { motion } from 'framer-motion'
import ContactButton from './ContactButton'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 overflow-hidden [clip-path:inset(0)] rounded-t-[3rem] relative mt-[-2rem] z-40 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Top Section: CTA */}
        <div className="mb-24 md:mb-32 w-full flex flex-col gap-2">
          {/* First Line */}
          <div className="w-full">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[1.1]">
              Turn your <span className="font-serif italic font-normal text-white">Ideas</span> Into
            </h2>
          </div>
          
          {/* Second Line */}
          <div className="w-full flex justify-start items-center gap-8 md:gap-20">
            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-[8rem] font-bold tracking-tight leading-[1.1]">
              Reality
            </h2>
              <ContactButton />
          </div>
        </div>
        
        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          
          {/* Services */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#services" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Cinematography</a></li>
              <li><a href="#services" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Photography</a></li>
              <li><a href="#services" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Social Content</a></li>
              <li><a href="#services" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Post-Production</a></li>
              <li><a href="#services" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Creative Direction</a></li>
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Work</h4>
            <ul className="space-y-4">
              <li><a href="https://vandah.com" target="_blank" rel="noopener noreferrer" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Vandah.com</a></li>
              <li><a href="https://creatinnacademy.com" target="_blank" rel="noopener noreferrer" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Creatinn Academy</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#pricing" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="/contact" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Our Socials */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Our social</h4>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {[
                { name: "Instagram", href: "https://www.instagram.com/creatinn_agency/", icon: <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.67 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.25-.15-4.77-1.69-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85c.15-3.23 1.67-4.77 4.92-4.92 1.27-.06 1.65-.07 4.85-.07M12 0C8.74 0 8.33.01 7.05.07 2.69.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.36-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.36-2.62-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.41-11.85a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" /> },
                { name: "TikTok", href: "#", icon: <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 2.22-1.15 4.39-2.92 5.74-1.76 1.34-4.04 1.83-6.2 1.5-2.14-.32-4.1-1.46-5.41-3.15-1.3-1.68-1.84-3.86-1.5-5.96.34-2.14 1.51-4.08 3.23-5.36 1.72-1.29 3.91-1.78 6.01-1.45.1.02.19.03.29.05v4.11c-1.18-.3-2.45-.19-3.53.37-1.09.55-1.88 1.56-2.17 2.73-.28 1.19-.07 2.47.59 3.49.66 1.04 1.79 1.72 3 1.9 1.21.18 2.48-.11 3.47-.79 1-.68 1.65-1.81 1.78-3.03.04-.38.04-.77.04-1.15V.02h-3.7z"/> },
                { name: "YouTube", href: "#", icon: <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/> }
              ].map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  className="bg-[#1f1f1f] text-white p-3 md:p-4 rounded-xl flex items-center justify-center hover:bg-primary hover:text-black transition-colors"
                  aria-label={social.name}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    {social.icon}
                  </svg>
                </a>
              ))}
            </div>
          </div>

        </div>

        {/* Locations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] flex justify-between items-center group cursor-default">
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Nigeria</h4>
              <p className="text-white/50 text-sm md:text-base font-medium max-w-[200px]">Mangoro Ikeja, Lagos</p>
            </div>
            <div className="text-white/20 group-hover:text-primary/40 transition-colors">
              {/* Abstract Eye Icon representing UK/London Eye */}
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2v20M2 12h20M4.93 4.93l14.14 14.14M19.07 4.93L4.93 19.07" />
                <circle cx="12" cy="12" r="2" fill="currentColor"/>
              </svg>
            </div>
          </div>

          <div className="bg-[#1a1a1a] p-8 md:p-10 rounded-[2rem] flex justify-between items-center group cursor-default">
            <div>
              <h4 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Worldwide</h4>
              <p className="text-white/50 text-sm md:text-base font-medium max-w-[200px]">Remote-first studio. Available everywhere.</p>
            </div>
            <div className="text-white/20 group-hover:text-primary/40 transition-colors">
              {/* Abstract Globe Icon representing Global presence */}
              <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M2 12h20" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Footer Bottom Meta */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-6 pb-12 border-t border-white/10 text-white/50 text-sm font-medium">
          <p>© {new Date().getFullYear()} Creatinn Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Typography - Document Flow */}
      <div className="w-full flex justify-center pointer-events-none select-none overflow-hidden h-[15vw] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: "0%" }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[20vw] leading-[0.75] font-bold tracking-tighter text-white opacity-[0.95]"
        >
          CREATINN
        </motion.div>
      </div>
      
      {/* Background Gradient Effect */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100vw] h-[50vh] pointer-events-none z-0"
        style={{
          background: 'radial-gradient(ellipse at bottom, rgba(200, 236, 136, 0.15) 0%, transparent 70%)'
        }}
      ></div>
    </footer>
  )
}
