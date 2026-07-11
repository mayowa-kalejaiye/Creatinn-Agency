'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const testimonials = [
  {
    quote: "The team captured every beautiful moment of my wedding day perfectly. The cinematic wedding film they produced was beyond anything I could have imagined. Truly breathtaking work.",
    author: "Hephzibah",
    role: "Wedding Client",
    image: "/IMG_5014.jpg",
    bgImage: "/IMG_5014.jpg"
  },
  {
    quote: "Creatinn brought my personal brand to life. The portrait session and branding video they produced captured my true essence. I feel so much more confident presenting myself online.",
    author: "Vandah",
    role: "Personal Branding Client",
    image: "/vandah.jpg",
    bgImage: "/vandah.jpg"
  },
  {
    quote: "The speed at which they deliver premium quality work is mind-blowing. Their creative workflow isn't just a buzzword; it's a massive competitive advantage for our commercial campaigns.",
    author: "SPROUTLY",
    role: "Corporate Client",
    image: "/IMG_3322.JPG",
    bgImage: "/IMG_3322.JPG"
  }
]

export default function Testimonials() {
  return (
    <section className="bg-white py-24" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-gray-500 font-medium tracking-wide uppercase text-sm mb-4 block">
              Client Stories
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-accent"
          >
            Don't just take our word for it.
          </motion.h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group rounded-[2rem] p-10 flex flex-col justify-between overflow-hidden shadow-lg border border-white/5 min-h-[400px]"
            >
              {/* Background Base */}
              <div className="absolute inset-0 bg-[#0a0a0a]"></div>
              
              {/* Image Always Visible */}
              <div className="absolute inset-0 z-0 overflow-hidden">
                <Image 
                  src={testimonial.bgImage} 
                  alt={`${testimonial.author} background`} 
                  fill 
                  className="object-cover opacity-30 group-hover:opacity-50 transition-all duration-700 ease-in-out scale-105 group-hover:scale-100 mix-blend-luminosity group-hover:mix-blend-normal" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/30 transition-opacity duration-700"></div>
              </div>

              {/* Content */}
              <div className="relative z-10 mb-10">
                {/* Quote Icon */}
                <svg className="w-10 h-10 text-primary mb-6 drop-shadow-md" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
                <p className="text-xl text-white font-medium leading-relaxed drop-shadow-lg">
                  "{testimonial.quote}"
                </p>
              </div>
              
              <div className="relative z-10 flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gray-800 border-2 border-primary/50 shadow-md">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white drop-shadow-sm">{testimonial.author}</h4>
                  <p className="text-sm text-gray-300 font-medium drop-shadow-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  )
}
