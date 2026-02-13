"use client"
import React from 'react'
import Image from 'next/image'

type Props = React.ComponentProps<typeof Image> & {
  placeholderSrc?: string
}

export default function ProgressiveImage({ placeholderSrc, src, alt = '', className = '', ...rest }: Props) {
  // Use next/image for built-in optimization and optional blur placeholder
  const hasWidth = typeof (rest as any).width !== 'undefined' || typeof (rest as any).height !== 'undefined' || (rest as any).fill

  // If caller didn't provide explicit width/height/fill, use `fill` layout so Next can render without numeric sizes.
  const imgProps: any = {
    src: src as string,
    alt: alt as string,
    ...rest,
  }

  if (!hasWidth) {
    imgProps.fill = true
    // When using fill, image must be absolutely positioned to cover the parent
    imgProps.className = `absolute inset-0 w-full h-full object-cover`
  } else {
    imgProps.className = `${className} object-cover`
  }

  if (placeholderSrc) {
    imgProps.placeholder = 'blur'
    imgProps.blurDataURL = placeholderSrc
  }

  // Keep wrapper relative so `fill` images can absolutely position inside it. Caller should provide a height (via className) when using fill.
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image {...imgProps} />
    </div>
  )
}
