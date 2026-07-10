"use client"
import React, { AnchorHTMLAttributes, ReactNode } from 'react'

interface CTAButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
  variant?: 'light' | 'dark'
}

export default function CTAButton({ children, variant = 'light', className = '', ...props }: CTAButtonProps) {
  const base = 'cta-button inline-flex items-center gap-4 px-6 py-3 rounded-full shadow group text-base'
  const variantClass = variant === 'dark' ? 'bg-[#111] text-white' : 'bg-white text-black'

  return (
    <a {...props} className={`${base} ${variantClass} ${className}`.trim()}>
      {children}
    </a>
  )
}
