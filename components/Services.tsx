'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Services() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  const services = [
    {
      title: "Cinematography",
      description: "High-end commercials, documentaries, and narrative films shot on cinema-grade cameras.",
      image: "/optimized/images/3U4A1815-1200.avif"
    },
    {
      title: "Photography",
      description: "Product, lifestyle, and editorial photography that captures the essence of your brand.",
      image: "/optimized/images/DSC_0393-1200.avif"
    },
    {
      title: "Social Content",
      description: "Viral-engineered short-form videos tailored for TikTok, Reels, and YouTube Shorts.",
      image: "/optimized/images/IMG_2341-1200.avif"
    },
    {
      title: "Post-Production",
      description: "Expert video editing, color grading, and motion graphics to polish your story.",
      image: "/optimized/images/IMG_3202-1200.avif"
    },
    {
      title: "Creative Direction",
      description: "End-to-end campaign planning, storyboarding, and brand strategy for your visual identity.",
      image: "/optimized/images/IMG_0515-1200.avif"
    }
  ]

  return (
    <section id="services" className="py-24 bg-white text-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4 block">
              Our Services
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight max-w-3xl"
          >
            Capabilities designed to scale your vision.
          </motion.h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={cardVariants}
              className="relative group rounded-3xl overflow-hidden flex flex-col justify-between min-h-[360px] cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/5"
            >
              {/* Background Base */}
              <div className="absolute inset-0 bg-[#0a0a0a]"></div>
              
              {/* Image Always Visible */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover opacity-50 group-hover:opacity-80 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 p-10 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-3xl font-bold tracking-tight text-white mb-4 drop-shadow-md">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 group-hover:text-white transition-colors duration-500 leading-relaxed font-medium drop-shadow-md">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-8 flex justify-end">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md group-hover:bg-primary flex items-center justify-center transition-colors duration-300 shadow-sm border border-white/20 group-hover:border-primary">
                    <div className="relative w-5 h-5 overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-full group-hover:-translate-y-full">
                        <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center -translate-x-full translate-y-full transition-transform duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] group-hover:translate-x-0 group-hover:translate-y-0">
                        <svg className="w-5 h-5 text-white group-hover:text-black transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 18L18 6"/><path d="M8 6C13 7.5 16.5 11 18 6"/><path d="M18 16C16.5 11 13 7.5 18 6"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          
          {/* CTA Card */}
          <motion.div 
            custom={5}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={cardVariants}
            className="group relative p-10 rounded-3xl bg-primary flex flex-col justify-between min-h-[360px] cursor-pointer hover:bg-accent transition-colors duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl font-bold tracking-tight text-accent group-hover:text-white transition-colors duration-500 mb-4">
                Have a unique project?
              </h3>
              <p className="text-accent/80 group-hover:text-white/80 transition-colors duration-500 leading-relaxed font-medium">
                Let's discuss how we can tailor our expertise to your specific needs.
              </p>
            </div>
            
            <div className="relative z-10 mt-8">
              <a href="/contact" className="inline-flex items-center gap-2 bg-accent text-white group-hover:bg-white group-hover:text-accent px-6 py-3 rounded-full font-medium transition-colors shadow-md">
                Get In Touch
              </a>
            </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}
