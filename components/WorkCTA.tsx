"use client"
import React from 'react';
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
          className="max-w-5xl mx-auto mb-16"
        >
          <div className="relative group rounded-2xl overflow-hidden">
            {/* Animated gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-yellow-50 to-orange-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            {/* Hero gradient base with vandah2 image */}
            <div 
              className="relative rounded-2xl p-12 lg:p-16 text-center border border-slate-200 group-hover:border-slate-300 transition-colors duration-500"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 12% 20%, rgba(99,102,241,0.08), transparent 18%),
                  radial-gradient(circle at 88% 80%, rgba(250,204,21,0.08), transparent 14%),
                  linear-gradient(90deg, rgb(222, 243, 252) 0%, rgb(254, 241, 216) 100%),
                  url('/optimized/images/vandah2.png')
                `,
                backgroundSize: 'cover, cover, cover, contain',
                backgroundPosition: 'center, center, center, right center',
                backgroundRepeat: 'no-repeat, no-repeat, no-repeat, no-repeat',
                backgroundBlendMode: 'normal, normal, normal, overlay'
              }}
            >
              <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-6">Featured Case Study</p>
              <h3 className="text-5xl lg:text-6xl font-bold text-[rgb(27,29,30)] mb-6">Vandah</h3>
              <p className="text-lg lg:text-xl text-slate-700 mb-2 font-medium">Creative Portfolio & Showcase</p>
              <p className="text-base text-slate-600 mb-10 max-w-2xl mx-auto font-light">A modern, visually-driven portfolio platform designed to showcase creative work with elegance and impact.</p>
              
              <a 
                href="https://vandah.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900 text-white rounded-full font-semibold hover:bg-slate-800 transition-colors duration-300"
              >
                <span>Visit Vandah</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
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
