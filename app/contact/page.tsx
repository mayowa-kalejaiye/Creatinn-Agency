"use client";
import React, { useState } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="flex flex-col lg:flex-row min-h-screen">
          
          {/* Left Side: Cinematic Visuals & Details */}
          <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex flex-col justify-end p-8 pt-32 lg:p-20 overflow-hidden bg-[#0a0a0a]">
            <div className="absolute inset-0 z-0">
              <Image 
                src="/optimized/images/IMG_0691-1200.avif"
                alt="Creatinn Behind The Scenes"
                fill
                className="object-cover opacity-60 mix-blend-luminosity"
              />
              {/* Fade out top/bottom for text, and right edge to blend into form */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a] hidden lg:block"></div>
            </div>
            
            <div className="relative z-10 max-w-lg mt-auto">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              >
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter leading-tight font-sans">
                  Let's create something <span className="text-primary font-serif italic">extraordinary.</span>
                </h1>
                <p className="text-xl text-gray-300 mb-12 font-medium leading-relaxed drop-shadow-md">
                  Whether it's a massive commercial campaign or refining your personal brand, we're ready to roll.
                </p>
                
                <div className="space-y-6 text-white/90">
                  <div className="flex flex-col">
                    <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-1">Instagram</span>
                    <a href="https://www.instagram.com/creatinn_agency/" target="_blank" rel="noopener noreferrer" className="text-2xl font-medium hover:text-white transition-colors">@creatinn_agency</a>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm uppercase tracking-[0.2em] text-primary font-bold mb-1">Global Studio</span>
                    <span className="text-xl font-medium">Worldwide / Remote First</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right Side: The Form */}
          <div className="w-full lg:w-1/2 flex items-center justify-center p-8 pt-24 lg:p-20 lg:pt-32 bg-[#0a0a0a]">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="w-full max-w-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First name"
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last name"
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone number"
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>
                  <div className="relative group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email address"
                      required
                      className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-lg"
                    />
                  </div>
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    rows={4}
                    required
                    className="w-full bg-transparent border-b border-white/20 px-0 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors text-lg resize-none"
                  />
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative inline-flex items-center justify-center px-10 py-5 bg-white text-[#0a0a0a] rounded-full font-bold text-lg overflow-hidden transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {isSubmitting ? 'Transmitting...' : 'Send Message'}
                      {!isSubmitting && (
                        <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-primary translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] z-0"></div>
                  </button>
                </div>

                {submitStatus === 'success' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-primary/20 border border-primary/50 text-white font-medium">
                    Message received. We'll be in touch shortly.
                  </motion.div>
                )}
                {submitStatus === 'error' && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-4 rounded-xl bg-red-500/20 border border-red-500/50 text-white font-medium">
                    Transmission failed. Please try again.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
