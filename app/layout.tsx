import './globals.css'
import React from 'react'
import { Analytics } from '@vercel/analytics/next'
import StickyCTA from '../components/StickyCTA'

export const metadata = {
  title: 'The Creatinn Agency',
  description: 'Creative agency — strategy, production, execution',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Creative agency — strategy, production, execution" />
        <link rel="icon" href="/logo.png" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="The Creatinn Agency" />
        <meta property="og:description" content="Creative agency — strategy, production, execution" />
        <meta property="og:image" content="/logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="The Creatinn Agency" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="The Creatinn Agency" />
        <meta name="twitter:description" content="Creative agency — strategy, production, execution" />
        <meta name="twitter:image" content="/logo.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Inter+Tight:wght@100;200;300;400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
        {/* Performance: preconnect to asset host (if using CDN) and preload a critical image */}
        <link rel="preconnect" href="/" />
        <link rel="preload" as="image" href="/optimized/images/3U4A1815-800.avif" />
      </head>
      <body className="font-sans antialiased">
        {children}
        {/* Global utilities (non-blocking) */}
        <script async src="/scripts/optimize-media.js"></script>
        <StickyCTA />
        <Analytics />
      </body>
    </html>
  )
}
