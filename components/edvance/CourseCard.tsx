'use client'

import { motion } from 'framer-motion'

const BRAND_TOKENS = {
  edvance: {
    primary:  '#7B5CF6',
    imageBg:  '#EDE8FF',
    dot:      '#7B5CF6',
    titleColor: '#1a1a2e',
  },
  kira: {
    primary:  '#1D4ED8',
    imageBg:  '#DBEAFE',
    dot:      '#1D4ED8',
    titleColor: '#1a1a2e',
  },
  blink: {
    primary:  '#16A34A',
    imageBg:  '#DCFCE7',
    dot:      '#16A34A',
    titleColor: '#1a1a2e',
  },
  nubi: {
    primary:  '#EA580C',
    imageBg:  '#FED7AA',
    dot:      '#EA580C',
    titleColor: '#EA580C',
  },
} as const

export type BrandKey = keyof typeof BRAND_TOKENS

export default function CourseCard({ brand }: { brand: BrandKey }) {
  const t = BRAND_TOKENS[brand]

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      style={{
        width: '200px',
        flexShrink: 0,
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 4px 20px rgba(0,0,0,0.10)',
      }}
    >
      {/* Image placeholder */}
      <div
        style={{
          height: '120px',
          background: t.imageBg,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '12px',
            color: t.dot,
            opacity: 0.6,
          }}
        >
          Imagen del curso
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '12px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
        {/* Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: t.dot,
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '11px',
              color: t.dot,
            }}
          >
            Diseño UX
          </span>
        </div>

        {/* Title */}
        <p
          style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '16px',
            lineHeight: 1.2,
            color: t.titleColor,
          }}
        >
          Diseño de interfaces digitales
        </p>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '12px',
            color: '#888888',
          }}
        >
          Por Ana García
        </p>

        {/* Rating */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '11px',
            color: '#aaaaaa',
          }}
        >
          ★ 4.8 · Intermedio
        </p>

        {/* CTA button */}
        <button
          style={{
            marginTop: '4px',
            width: '100%',
            padding: '8px',
            borderRadius: '8px',
            background: t.primary,
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.01em',
          }}
        >
          Empezar curso
        </button>
      </div>
    </motion.div>
  )
}
