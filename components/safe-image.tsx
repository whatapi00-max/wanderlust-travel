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
  const placeholderUrl = `https://placehold.co/600x400/3b82f6/ffffff?text=${encodeURIComponent(alt)}`
  
  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      width={!fill ? width : undefined}
      height={!fill ? height : undefined}
      className={className}
      priority={priority}
      unoptimized
      onError={() => {}}
    />
  )
}
