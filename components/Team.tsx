"use client"
import React from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Peter-Nelson Isaiah',
    role: 'Head of Creative',
    image: '/team/peter-nelson.jpg',
    instagram: 'https://instagram.com/creatinn',
    youtube: 'https://youtube.com/@creatinn',
  },
];

export default function Team() {
  return (
    <section className="relative z-30 bg-white py-20" id="team">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium text-[rgb(27,29,30)] mb-4">
            Meet the creative mind<br/> behind our <span style={{ fontFamily: 'Playfair Display, serif' }} className="italic font-medium">success</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            A passionate designer and developer dedicated to bringing your vision to life
          </p>
        </motion.div>

        <div className="mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="w-full"
        >
          {teamMembers.map((member) => (
            <motion.div 
              key={member.name}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row items-center"
            >
              {/* Left: Profile Image */}
              <div className="w-full md:w-1/3 lg:w-1/4 aspect-square md:aspect-auto md:h-96 bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center flex-shrink-0">
                <div className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full bg-slate-300" />
              </div>
              
              {/* Right: Description */}
              <div className="flex-1 p-8 md:p-12 lg:p-16 text-center md:text-left">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-[rgb(27,29,30)]">{member.name}</h3>
                <p className="text-slate-600 text-xl md:text-2xl mb-8">{member.role}</p>
                <p className="text-slate-700 text-base md:text-lg mb-8 max-w-2xl">
                  A visionary creative professional with years of experience in design, development, and digital strategy. Passionate about crafting exceptional experiences that bring brands to life.
                </p>
                <div className="flex gap-4 justify-center md:justify-start">
                  <a 
                    href={member.instagram}
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-gradient-to-tr hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 hover:text-white hover:scale-110 transition-all"
                    aria-label={`${member.name} on Instagram`}
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a 
                    href={member.youtube}
                    className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center hover:bg-red-600 hover:text-white hover:scale-110 transition-all"
                    aria-label={`${member.name} on YouTube`}
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                    </svg>
                  </a>
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
