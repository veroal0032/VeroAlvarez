'use client'

import { useRef, useEffect, useCallback } from 'react'
import Image from 'next/image'

const SCREENS = [
  { src: '/images/edvance/login-kira.png',      alt: 'Login — Kira',      bg: '#DBEAFE', w: 360, h: 640 },
  { src: '/images/edvance/login-blink.png',     alt: 'Login — Blink',     bg: '#DCFCE7', w: 360, h: 640 },
  { src: '/images/edvance/login-nubi.png',      alt: 'Login — Nubi',      bg: '#FED7AA', w: 360, h: 640 },
  { src: '/images/edvance/landing-kira.png',    alt: 'Landing — Kira',    bg: '#DBEAFE', w: 1400, h: 900 },
  { src: '/images/edvance/landing-edvance.png', alt: 'Landing — Edvance', bg: '#EDE8FF', w: 1400, h: 900 },
]

const IMG_HEIGHT = 360
const IMG_GAP    = 20
const SET_APPROX_WIDTH = SCREENS.length * (280 + IMG_GAP)

export default function ScreensMarquee() {
  const trackRef  = useRef<HTMLDivElement>(null)
  const posRef    = useRef(0)
  const pausedRef = useRef(false)
  const rafRef    = useRef<number | null>(null)

  const tick = useCallback(() => {
    if (trackRef.current && !pausedRef.current) {
      posRef.current += 0.4
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
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
              background: screen.bg,
              position: 'relative',
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
