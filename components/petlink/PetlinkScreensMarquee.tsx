'use client'

import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

const ACCENT = '#1C9674'

const SCREENS = [
  { src: '/images/petlink/screens1.png', alt: 'Petlink — Pantallas onboarding', w: 1400, h: 750,  bg: '#e6f5ef' },
  { src: '/images/petlink/screens2.png', alt: 'Petlink — Pantallas chat y vets', w: 1400, h: 750, bg: '#e6f5ef' },
  { src: '/images/petlink/mockup.png',   alt: 'Petlink — Mockups inclinados',   w: 1400, h: 750,  bg: '#e6f5ef' },
  { src: '/images/petlink/icon.png',     alt: 'Petlink — App icon',             w: 4000, h: 2668, bg: 'transparent' },
]

const IMG_HEIGHT = 360
const IMG_GAP    = 20
const SET_APPROX_WIDTH = SCREENS.length * (480 + IMG_GAP)

export default function PetlinkScreensMarquee() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const posRef    = useRef(0)
  const pausedRef = useRef(false)
  const rafRef    = useRef<number | null>(null)

  const tick = useCallback(() => {
    if (trackRef.current && !pausedRef.current) {
      posRef.current += 0.35
      if (posRef.current >= SET_APPROX_WIDTH) posRef.current = 0
      trackRef.current.style.transform = `translateX(-${posRef.current}px)`
    }
    rafRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    rafRef.current = requestAnimationFrame(tick)
    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current) }
  }, [tick])

  return (
    <div
      style={{
        overflow: 'hidden',
        WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
        maskImage:       'linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)',
      }}
      onMouseEnter={() => { pausedRef.current = true }}
      onMouseLeave={() => { pausedRef.current = false }}
    >
      <div
        ref={trackRef}
        style={{ display: 'flex', gap: `${IMG_GAP}px`, width: 'max-content', willChange: 'transform' }}
      >
        {[...SCREENS, ...SCREENS].map((screen, i) => (
          <div
            key={`${screen.src}-${i}`}
            style={{
              height: `${IMG_HEIGHT}px`,
              flexShrink: 0,
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
              background: screen.bg,
            }}
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              width={screen.w}
              height={screen.h}
              quality={100}
              sizes="100vw"
              style={{
                height: `${IMG_HEIGHT}px`,
                width: 'auto',
                maxWidth: 'none',
                display: 'block',
                objectFit: 'cover',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
