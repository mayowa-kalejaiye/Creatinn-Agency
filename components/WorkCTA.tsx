"use client"
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import AnimatedHeading from './AnimatedHeading';

const caseStudies = [];

export default function WorkCTA() {
  return (
    <section className="relative z-30 bg-white py-24 lg:py-32" id="work-cta">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <AnimatedHeading
            as="h2"
            className="mb-8 text-5xl sm:text-6xl md:text-6xl lg:text-7xl font-bold leading-tight text-[rgb(27,29,30)]"
            maxTranslate={28}
            maxScale={0.03}
          >
            <span className="block sm:inline" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>How we transformed </span>
            <span className="block sm:inline" style={{ fontFamily: 'Inter Tight, Inter, system-ui, sans-serif' }}>a small business's </span>
            <span className="block sm:inline lg:block italic" style={{ fontFamily: 'Playfair Display, serif' }}>online presence</span>
          </AnimatedHeading>
        </motion.div>

        {/* Featured Case Study */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left: Visual showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden h-96 lg:h-full min-h-96 group shadow-xl"
            >
              <Image
                src="/Vandah2.png"
                alt="Vandah project showcase"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </motion.div>

            {/* Right: Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex flex-col justify-center space-y-6"
            >
              <div>
                <p className="text-sm font-semibold text-indigo-600 uppercase tracking-widest mb-3">Featured Case Study</p>
                <h3 className="text-5xl lg:text-6xl font-bold text-[rgb(27,29,30)] mb-4">Vandah</h3>
                <p className="text-xl text-slate-700 font-medium mb-3">Creative Portfolio & Showcase</p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  A modern, visually-driven portfolio platform designed to showcase creative work with elegance and impact. We created an immersive digital experience that puts the work first.
                </p>
              </div>

              <div className="flex flex-col gap-3 pt-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Stunning visual design</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Seamless user experience</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-slate-700">Results-driven approach</span>
                </div>
              </div>

              <a 
                href="https://vandah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[rgb(27,29,30)] text-white rounded-full font-semibold hover:bg-slate-800 transition-all duration-300 w-fit group"
              >
                <span>Visit Project</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Other Case Studies Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-20"
        >
          <p className="text-slate-600 mb-6 text-lg">Ready to see what we can do for you?</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 text-slate-900 font-semibold border-b-2 border-slate-900 hover:text-slate-600 hover:border-slate-600 transition-colors duration-300"
          >
            <span>Get in Touch</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
