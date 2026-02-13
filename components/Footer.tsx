import React from 'react'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-24 grid grid-cols-1 md:grid-cols-4 gap-16">
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
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/creatinn_agency/" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" className="text-slate-600 hover:text-slate-900 transition-colors" aria-label="Dribbble">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.628 0-12 5.373-12 12s5.372 12 12 12 12-5.373 12-12-5.372-12-12-12zm9.885 11.441c-2.575-.422-4.943-.445-7.103-.073-.244-.563-.497-1.125-.767-1.68 2.31-1 4.165-2.358 5.548-4.082 1.35 1.594 2.197 3.619 2.322 5.835zm-3.842-7.282c-1.205 1.554-2.868 2.783-4.986 3.68-1.016-1.861-2.178-3.676-3.488-5.438.779-.197 1.591-.314 2.431-.314 2.275 0 4.368.779 6.043 2.072zm-10.516-.993c1.331 1.742 2.511 3.538 3.537 5.381-2.43.715-5.331 1.082-8.684 1.105.692-2.835 2.601-5.193 5.147-6.486zm-5.44 8.834l.013-.256c3.849-.005 7.169-.448 9.95-1.322.233.475.456.952.67 1.432-3.38 1.057-6.165 3.222-8.337 6.48-1.432-1.719-2.296-3.927-2.296-6.334zm3.829 7.81c1.969-3.088 4.482-5.098 7.598-6.027.928 2.42 1.609 4.91 2.043 7.46-3.349 1.291-7.116.518-9.641-1.433zm11.586.43c-.438-2.353-1.08-4.653-1.92-6.897 1.876-.265 3.94-.196 6.199.196-.437 2.786-2.028 5.192-4.279 6.701z" />
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

          {/* Other Pages */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Other Pages</h3>
            <ul className="space-y-3">
              <li><a href="/contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact Us</a></li>
              <li><a href="#404" className="text-slate-600 hover:text-slate-900 transition-colors">Error 404</a></li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900 mb-6 uppercase tracking-wider">Contact Details</h3>
            <div className="space-y-3 text-slate-600">
              <p>81 Rivington Street London<br />EC2A 3AY</p>
              <p><a href="mailto:hello@creatinnagency.com" className="hover:text-slate-900 transition-colors">hello@creatinnagency.com</a></p>
              <p><a href="tel:01051923556" className="hover:text-slate-900 transition-colors">0105 192 3556</a></p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-slate-200 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>©2025 Creatinn Agency. All Rights Reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-900 transition-colors">Style Guide</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Licenses</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Changelog</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
