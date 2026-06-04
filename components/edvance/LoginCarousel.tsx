'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const SLIDES = [
  { src: '/images/edvance/login-kira.png',  alt: 'Login — Kira',  bg: '#DBEAFE', label: 'Kira',  color: '#1D4ED8' },
  { src: '/images/edvance/login-blink.png', alt: 'Login — Blink', bg: '#DCFCE7', label: 'Blink', color: '#16A34A' },
  { src: '/images/edvance/login-nubi.png',  alt: 'Login — Nubi',  bg: '#FED7AA', label: 'Nubi',  color: '#EA580C' },
]

export default function LoginCarousel() {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(1)

  const go = (next: number) => {
    setDirection(next > index ? 1 : -1)
    setIndex(next)
  }

  const prev = () => go(index === 0 ? SLIDES.length - 1 : index - 1)
  const next = () => go(index === SLIDES.length - 1 ? 0 : index + 1)

  const slide = SLIDES[index]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>

      {/* Preload all images silently */}
      <div style={{ display: 'none' }}>
        {SLIDES.map((s) => (
          <Image key={s.src} src={s.src} alt="" width={800} height={1200} priority quality={100} sizes="100vw" />
        ))}
      </div>

      {/* Carousel row */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', alignItems: 'center', gap: '12px' }}>

        {/* Left arrow */}
        <ArrowButton onClick={prev} direction="left" />

        {/* Image frame — fixed aspect ratio container */}
        <div
          style={{
            flex: 1,
            borderRadius: '16px',
            overflow: 'hidden',
            background: slide.bg,
            transition: 'background 0.3s ease',
            position: 'relative',
            /* 9:16 mobile aspect ratio */
            aspectRatio: '9 / 16',
            maxHeight: '520px',
          }}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={index}
              custom={direction}
              variants={{
                enter: (d: number) => ({ x: d > 0 ? '6%' : '-6%', opacity: 0 }),
                center: { x: '0%', opacity: 1 },
                exit:  (d: number) => ({ x: d > 0 ? '-6%' : '6%', opacity: 0 }),
              }}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: 'spring', stiffness: 350, damping: 32 }}
              style={{ position: 'absolute', inset: 0 }}
            >
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                quality={100}
                sizes="(max-width: 768px) 100vw, 480px"
                style={{ objectFit: 'cover', objectPosition: 'top center' }}
                priority={index === 0}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right arrow */}
        <ArrowButton onClick={next} direction="right" />
      </div>

      {/* Dot indicators */}
      <div style={{ display: 'flex', gap: '7px', alignItems: 'center' }}>
        {SLIDES.map((s, i) => (
          <button
            key={s.src}
            onClick={() => go(i)}
            aria-label={`Ver ${s.label}`}
            style={{ border: 'none', padding: 0, cursor: 'pointer', background: 'transparent', display: 'flex', alignItems: 'center' }}
          >
            <motion.div
              animate={{
                width: i === index ? '20px' : '8px',
                backgroundColor: i === index ? slide.color : '#cccccc',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{ height: '8px', borderRadius: '999px' }}
            />
          </button>
        ))}
      </div>

      {/* Label */}
      <AnimatePresence mode="wait">
        <motion.p
          key={slide.label}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', margin: 0 }}
        >
          Login · {slide.label} — {index + 1} / {SLIDES.length}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}

/* ── Arrow button ── */
function ArrowButton({ onClick, direction }: { onClick: () => void; direction: 'left' | 'right' }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08, boxShadow: '0 4px 16px rgba(0,0,0,0.14)' }}
      whileTap={{ scale: 0.94 }}
      transition={{ type: 'spring', stiffness: 400, damping: 22 }}
      aria-label={direction === 'left' ? 'Anterior' : 'Siguiente'}
      style={{
        flexShrink: 0,
        width: '36px',
        height: '36px',
        borderRadius: '50%',
        border: '1px solid rgba(0,0,0,0.1)',
        background: '#ffffff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#444444',
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
      }}
    >
      <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
        {direction === 'left'
          ? <path d="M8.5 1.5L4 6.5L8.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
          : <path d="M4.5 1.5L9 6.5L4.5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
        }
      </svg>
    </motion.button>
  )
}
