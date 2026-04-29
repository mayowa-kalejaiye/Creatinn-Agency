import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Logo & Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image src="/videography.png" alt="Creatinn logo" width={48} height={48} className="w-12 h-12 object-contain" style={{filter: 'brightness(0) saturate(100%)' }} />
              <div className="font-bold text-xl text-[rgb(27,29,30)]">Creatinn Agency</div>
            </div>
            <p className="text-slate-600 leading-relaxed">
              Empowering businesses with innovative solutions. Let's create something amazing together.
            </p>
            <div className="flex gap-3 mt-6">
              <a href="https://www.instagram.com/creatinn_agency/" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Sitemap */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Sitemap</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About us</a></li>
              <li><a href="#work" className="text-slate-600 hover:text-slate-900 transition-colors">Work</a></li>
              <li><a href="#services" className="text-slate-600 hover:text-slate-900 transition-colors">Services</a></li>
              <li><a href="#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Contact CTA */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Get In Touch</h3>
            <p className="text-slate-600 leading-relaxed mb-6">Ready to start your next project? Let's talk about how we can help bring your vision to life.</p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[rgb(27,29,30)] text-white rounded-full font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>Contact Us</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 py-8 text-center text-sm text-slate-500">
          <p>©{new Date().getFullYear()} Creatinn Agency. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
