"use client"
import React from 'react';
import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';

const teamMembers = [
  {
    name: 'Peter-Nelson Isaiah',
    role: 'Head of Creative',
    image: '/IMG_3314%20(1).JPG',
    instagram: 'https://www.instagram.com/creatinn_agency/',
    youtube: 'https://youtube.com/@creatinn',
  },
];

export default function Team() {
  return (
    <section className="relative z-30 bg-white py-24" id="team">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          {/* Animated header: animates on scroll up/down */}
          <AnimatedHeading 
            as="h2" 
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-[rgb(27,29,30)] mb-6 leading-tight" 
            maxTranslate={28} 
            maxScale={0.03}
          >
            Meet the creative mind<br/> behind our <span className="italic font-medium font-serif">success</span>
          </AnimatedHeading>
        </motion.div>

        <div className="mx-auto w-full max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name}
              whileHover={{ y: -12, transition: { duration: 0.4 } }}
              className="group relative"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500 flex flex-col lg:flex-row items-stretch border border-slate-200/60 group-hover:border-slate-300">
                
                {/* Left: Premium Profile Image */}
                <div className="w-full lg:w-2/5 relative flex items-center justify-center flex-shrink-0 overflow-hidden bg-slate-100 p-8 lg:p-12">
                  {/* Profile circle with clean styling */}
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="relative"
                  >
                    <div className="relative w-56 h-56 lg:w-64 lg:h-64">
                      {/* Main circle with subtle border */}
                      <div className="relative h-full w-full rounded-full bg-slate-200 border-4 border-white shadow-xl overflow-hidden">
                        <div className="absolute inset-0 bg-slate-300 flex items-center justify-center text-slate-500 font-semibold text-lg">
                          [Photo]
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
                
                {/* Right: Premium Content */}
                <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                  {/* Name */}
                  <motion.h3 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl lg:text-5xl font-bold mb-4 text-[rgb(27,29,30)]"
                  >
                    {member.name}
                  </motion.h3>

                  {/* Role with subtle accent */}
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="flex items-center gap-3 mb-8"
                  >
                    <div className="w-8 h-0.5 bg-slate-900 rounded-full" />
                    <p className="text-base font-semibold text-slate-700 uppercase tracking-wider">{member.role}</p>
                  </motion.div>

                  {/* Bio text */}
                  <motion.p 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="text-slate-600 text-lg leading-relaxed mb-10 max-w-2xl font-light"
                  >
                    A visionary creative professional with years of experience in design, development, and digital strategy. Passionate about crafting exceptional experiences that bring brands to life.
                  </motion.p>

                  {/* Social Icons */}
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="flex gap-4 items-center"
                  >
                    <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Connect</span>
                    
                    <a 
                      href={member.instagram}
                      className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label={`${member.name} on Instagram`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    
                    <a 
                      href={member.youtube}
                      className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg"
                      aria-label={`${member.name} on YouTube`}
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        </div>
      </div>
    </section>
  );
}
