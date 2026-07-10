'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-white">
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
              Pricing
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-accent"
          >
            Simple pricing for ambitious teams.
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Starter Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2.5rem] bg-[#f2f2f2] p-10 md:p-12 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-accent">Starter</span>
                <span className="bg-white text-gray-500 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-gray-200">
                  Standard
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent tracking-tighter">$2,500</span>
                <span className="text-gray-500 font-medium ml-2">/ month</span>
              </div>
              
              <p className="text-gray-600 font-medium mb-10 leading-relaxed">
                For companies who need design support. One request at a time. Perfect for early-stage startups.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Design Updates Every 2 Days",
                  "Mid-level Designer",
                  "SEO optimization",
                  "Monthly analytics",
                  "2x Calls Per Month",
                  "License free assets"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-white text-accent border border-gray-200 px-6 py-4 rounded-full font-semibold hover:bg-gray-50 transition-colors shadow-sm">
              Get Started
            </a>
          </motion.div>

          {/* Pro Plan */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-[2.5rem] bg-primary p-10 md:p-12 flex flex-col justify-between shadow-xl"
          >
            <div>
              <div className="flex items-center justify-between mb-8">
                <span className="text-xl font-bold text-accent">Pro</span>
                <span className="bg-accent text-white text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">
                  Recommended
                </span>
              </div>
              
              <div className="mb-6">
                <span className="text-5xl font-bold text-accent tracking-tighter">$3,500</span>
                <span className="text-accent/70 font-medium ml-2">/ month</span>
              </div>
              
              <p className="text-accent/80 font-medium mb-10 leading-relaxed">
                2x the speed. Great for an MVP, Web App or complex problems. Priority support and strategy.
              </p>
              
              <ul className="space-y-4 mb-12">
                {[
                  "Design Updates Daily",
                  "Senior-level Designer",
                  "AI Advisory Framework",
                  "Full-service Creative Team",
                  "4x Calls Per Month",
                  "License free assets"
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-accent font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <a href="/contact" className="w-full inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-4 rounded-full font-semibold hover:bg-black transition-colors shadow-md">
              Get Started
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
