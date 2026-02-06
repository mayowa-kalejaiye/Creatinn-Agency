'use client'

import dynamic from 'next/dynamic'

const ThreeDCarousel = dynamic(() => import('./ThreeDCarousel'), {
  ssr: false,
  loading: () => <div className="min-h-screen bg-white flex items-center justify-center" />
})

export default function ThreeDCarouselClient() {
  return <ThreeDCarousel />
}
