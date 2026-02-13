"use client"
import React from 'react'
import Image from 'next/image'

type Props = React.ComponentProps<typeof Image> & {
  placeholder?: string
}

export default function ProgressiveImage({ placeholder, src, alt = '', className = '', ...rest }: Props) {
  // Use next/image for built-in optimization and optional blur placeholder
  const imgProps: any = {
    src: src as string,
    alt: alt as string,
    className: `${className} object-cover`,
    ...rest,
  }

  if (placeholder) {
    imgProps.placeholder = 'blur'
    imgProps.blurDataURL = placeholder
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image {...imgProps} />
    </div>
  )
}
