"use client"

import { useState } from "react"
import Image from "next/image"

interface SafeImageProps {
  src: string
  alt: string
  fill?: boolean
  width?: number
  height?: number
  className?: string
  priority?: boolean
}

export function SafeImage({ src, alt, fill, width, height, className, priority }: SafeImageProps) {
  const [error, setError] = useState(false)
  
  const placeholderUrl = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(alt)}`
  
  if (error) {
    return (
      <Image
        src={placeholderUrl}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        className={className}
        unoptimized
      />
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      onError={() => setError(true)}
      priority={priority}
      unoptimized
    />
  )
}
