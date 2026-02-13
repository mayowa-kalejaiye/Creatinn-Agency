"use client"
import React from 'react'
import Image from 'next/image'

type Props = React.ComponentProps<typeof Image> & {
  placeholderSrc?: string
}

export default function ProgressiveImage({ placeholderSrc, src, alt = '', className = '', ...rest }: Props) {
  // Use next/image for built-in optimization and optional blur placeholder
  const imgProps: any = {
    src: src as string,
    alt: alt as string,
    className: `${className} object-cover`,
    ...rest,
  }

  if (placeholderSrc) {
    imgProps.placeholder = 'blur'
    imgProps.blurDataURL = placeholderSrc
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image {...imgProps} />
    </div>
  )
}
