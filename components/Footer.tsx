'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 pb-0 overflow-hidden rounded-t-[3rem] relative mt-[-2rem] z-40 font-sans">
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
              <a 
                href="/contact" 
                className="group relative flex items-center justify-center w-36 h-20 md:w-56 md:h-28 bg-primary rounded-[1.5rem] transition-all duration-500 shadow-xl overflow-hidden"
                aria-label="Contact Us"
              >
                {/* Animated Arrow Container */}
                <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden">
                  {/* First Arrow - Flies out top right */}
                  <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                    <svg 
                      className="w-12 h-12 md:w-16 md:h-16 text-[#0a0a0a]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6" />
                      <path d="M8 6C13 7.5 16.5 11 18 6" />
                      <path d="M18 16C16.5 11 13 7.5 18 6" />
                    </svg>
                  </div>
                  {/* Second Arrow - Flies in from bottom left */}
                  <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                    <svg 
                      className="w-12 h-12 md:w-16 md:h-16 text-[#0a0a0a]" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor" 
                      strokeWidth="2.5"
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                    >
                      <path d="M6 18L18 6" />
                      <path d="M8 6C13 7.5 16.5 11 18 6" />
                      <path d="M18 16C16.5 11 13 7.5 18 6" />
                    </svg>
                  </div>
                </div>
              </a>
          </div>
        </div>
        
        {/* Middle Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16 mb-24">
          
          {/* Services */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Web Development</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Video Production</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Brand Strategy</a></li>
            </ul>
          </div>

          {/* Work */}
          <div>
            <h4 className="text-white/40 text-sm font-semibold mb-6">Work</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">FlowBank App</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Academy.co</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Genome SaaS</a></li>
              <li><a href="#" className="text-[#f2f2f2] text-sm md:text-base font-medium hover:text-primary transition-colors">Creatinn Academy</a></li>
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
                { name: "LinkedIn", href: "#", icon: <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-11.5 6H5.3v9h2.2V9zm-1.1-3.4a1.3 1.3 0 100 2.6 1.3 1.3 0 000-2.6zm11.4 12.4v-4.8c0-2.6-1.4-3.8-3.2-3.8-1.5 0-2.2.8-2.6 1.4v-1.2H9.8v9h2.2v-4.5c0-1.2.2-2.3 1.7-2.3 1.4 0 1.4 1.3 1.4 2.4v4.4h2.3z" /> },
                { name: "X", href: "#", icon: <path d="M18.9 2H22l-6.75 7.72L23.18 22h-6.22l-4.88-6.38L6.51 22H3.41l7.21-8.24L3.13 2h6.39l4.41 5.86L18.9 2zm-1.08 18h1.72L7.33 3.86H5.48L17.82 20z" /> }
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
        <div className="flex flex-col md:flex-row items-center justify-between py-6 border-t border-white/10 text-white/50 text-sm font-medium pb-[12vw]">
          <p>© {new Date().getFullYear()} Creatinn Agency. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Massive Typography */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center pointer-events-none select-none overflow-hidden translate-y-[28%]">
        <motion.div
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-[19vw] leading-[0.75] font-bold tracking-tighter text-white opacity-[0.95]"
        >
          CREATINN
        </motion.div>
      </div>
      
      {/* Background Gradient Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-primary/20 blur-[120px] rounded-full pointer-events-none z-0"></div>
    </footer>
  )
}
