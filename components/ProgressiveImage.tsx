"use client"
import React from 'react'

// Lightweight progressive image component: accepts a `placeholder` (low-res) and `src` (hi-res).
// Uses CSS transition to fade from placeholder to full image when loaded.

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  placeholder?: string // low-res data URL or image
}

export default function ProgressiveImage({ placeholder, src, alt = '', className = '', ...rest }: Props) {
  const [loaded, setLoaded] = React.useState(false)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {placeholder && (
        <img src={placeholder} alt={alt} aria-hidden className="absolute inset-0 w-full h-full object-cover filter blur-sm scale-105" />
      )}
      <img
        src={src as string}
        alt={alt}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
        {...rest}
      />
    </div>
  )
}
