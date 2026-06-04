'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type BrandKey = 'edvance' | 'kira' | 'blink' | 'nubi'

const BRAND_TOKENS: Record<BrandKey, {
  primary: string
  imageBg: string
  font: string
  name: string
}> = {
  edvance: { primary: '#7B5CF6', imageBg: '#EDE8FF', font: 'var(--font-montserrat), sans-serif',   name: 'Edvance' },
  kira:    { primary: '#1D4ED8', imageBg: '#DBEAFE', font: 'var(--font-plus-jakarta), sans-serif', name: 'Kira' },
  blink:   { primary: '#16A34A', imageBg: '#DCFCE7', font: 'var(--font-nunito), sans-serif',       name: 'Blink' },
  nubi:    { primary: '#EA580C', imageBg: '#FED7AA', font: 'var(--font-fredoka), cursive',         name: 'Nubi' },
}

const BRANDS = Object.keys(BRAND_TOKENS) as BrandKey[]

const isNubi = (name: string) => name === 'Nubi'

/* ── CourseCard ── */
function CourseCard({ tokens, visible }: { tokens: typeof BRAND_TOKENS[BrandKey]; visible: boolean }) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
      whileHover={{ scale: 1.03 }}
      style={{
        width: '200px',
        borderRadius: '20px',
        overflow: 'hidden',
        background: '#ffffff',
        boxShadow: '0 2px 16px rgba(0,0,0,0.09)',
        flexShrink: 0,
      }}
    >
      {/* Image area */}
      <div style={{
        height: '120px',
        background: tokens.imageBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <span style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '11px', color: tokens.primary, opacity: 0.5 }}>
          Imagen del curso
        </span>
      </div>

      {/* Body */}
      <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: tokens.primary, flexShrink: 0 }} />
          <span style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '11px', color: tokens.primary }}>Diseño UX</span>
        </div>

        <p style={{
          fontFamily: tokens.font,
          fontWeight: 700,
          fontSize: '15px',
          color: isNubi(tokens.name) ? tokens.primary : '#1a1a1a',
          lineHeight: 1.2,
          margin: 0,
        }}>
          Diseño de interfaces digitales
        </p>

        <p style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '12px', color: '#888', margin: 0 }}>
          Por Ana García
        </p>
        <p style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '11px', color: '#999', margin: 0 }}>
          ★ 4.8 · Intermedio
        </p>

        <motion.button
          whileHover={{ filter: 'brightness(110%)', scale: 1.01 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 400, damping: 20 }}
          style={{
            marginTop: '6px',
            width: '100%',
            padding: '9px',
            borderRadius: '8px',
            background: tokens.primary,
            color: isNubi(tokens.name) ? '#1A1A1A' : '#ffffff',
            border: 'none',
            cursor: 'pointer',
            fontFamily: 'var(--font-poppins), sans-serif',
            fontWeight: 600,
            fontSize: '13px',
          }}
        >
          Empezar curso
        </motion.button>
      </div>
    </motion.div>
  )
}

/* ── PrimaryButton ── */
function PrimaryButton({ tokens, visible }: { tokens: typeof BRAND_TOKENS[BrandKey]; visible: boolean }) {
  return (
    <motion.div animate={{ opacity: visible ? 1 : 0 }} transition={{ duration: 0.15 }}>
      <motion.button
        whileHover={{ y: -2, boxShadow: `0 8px 20px ${tokens.primary}40` }}
        whileTap={{ y: 0, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        style={{
          width: '200px',
          height: '48px',
          borderRadius: '12px',
          background: tokens.primary,
          color: isNubi(tokens.name) ? '#1A1A1A' : '#ffffff',
          border: 'none',
          cursor: 'pointer',
          fontFamily: 'var(--font-poppins), sans-serif',
          fontWeight: 600,
          fontSize: '14px',
        }}
      >
        Empezar ahora
      </motion.button>
    </motion.div>
  )
}

/* ── LogroBadge ── */
function LogroBadge({ tokens, visible }: { tokens: typeof BRAND_TOKENS[BrandKey]; visible: boolean }) {
  const [starHover, setStarHover] = useState(false)
  const textColor = isNubi(tokens.name) ? '#1A1A1A' : '#ffffff'
  const subColor  = isNubi(tokens.name) ? 'rgba(26,26,26,0.65)' : 'rgba(255,255,255,0.75)'

  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15, delay: 0.04 }}
      onHoverStart={() => setStarHover(true)}
      onHoverEnd={() => setStarHover(false)}
      style={{
        borderRadius: '14px',
        background: tokens.primary,
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        width: '220px',
        height: '56px',
        flexShrink: 0,
        cursor: 'default',
      }}
    >
      <motion.div
        animate={{ rotate: starHover ? 15 : 0, scale: starHover ? 1.15 : 1 }}
        transition={{ type: 'spring', stiffness: 400, damping: 18 }}
        style={{ flexShrink: 0 }}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none"
          stroke={textColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      </motion.div>

      <div style={{ overflow: 'hidden' }}>
        <p style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '13px', color: textColor, margin: 0, lineHeight: 1.2, whiteSpace: 'nowrap' }}>
          ¡Curso completado!
        </p>
        <p style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 600, fontSize: '11px', color: subColor, margin: 0, marginTop: '1px' }}>
          Diseño de interfaces digitales
        </p>
      </div>
    </motion.div>
  )
}

/* ── Main BrandShowcase ── */
export default function BrandShowcase() {
  const [active, setActive] = useState<BrandKey>('kira')
  const [visible, setVisible] = useState(true)

  const switchBrand = (key: BrandKey) => {
    if (key === active) return
    setVisible(false)
    setTimeout(() => { setActive(key); setVisible(true) }, 120)
  }

  const tokens = BRAND_TOKENS[active]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
      {/* Title */}
      <div style={{ textAlign: 'center' }}>
        <p style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 800,
          fontSize: 'clamp(20px, 2.2vw, 26px)',
          color: '#333333',
          marginBottom: '6px',
          lineHeight: 1.1,
        }}>
          El mismo componente, 4 identidades
        </p>
        <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '14px', color: '#888888' }}>
          Selecciona una marca para ver los tokens aplicados
        </p>
      </div>

      {/* Handwriting note */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2px',
        marginBottom: '16px',
        transform: 'rotate(-2deg)',
      }}>
        <span style={{
          fontFamily: 'var(--font-caveat), cursive',
          fontSize: '18px',
          color: '#999',
          display: 'inline-block',
        }}>
          ¡prueba los componentes!
        </span>
        <svg
          width="36"
          height="32"
          viewBox="0 0 36 32"
          style={{ display: 'inline-block', marginTop: '8px' }}
        >
          <path
            d="M 2 4 Q 8 2 14 16 Q 18 26 28 28 L 22 24 M 28 28 L 24 22"
            stroke="#999"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Brand selector pills */}
      <div style={{
        display: 'flex',
        gap: '6px',
        padding: '5px',
        borderRadius: '999px',
        background: '#f0ede6',
      }}>
        {BRANDS.map((key) => {
          const t = BRAND_TOKENS[key]
          return (
            <motion.button
              key={key}
              onClick={() => switchBrand(key)}
              animate={{
                background: active === key ? t.primary : 'transparent',
                color: active === key ? '#ffffff' : '#666666',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                padding: '7px 18px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '13px',
              }}
            >
              {t.name}
            </motion.button>
          )
        })}
      </div>

      {/* Components area */}
      <motion.div
        animate={{ backgroundColor: `${tokens.imageBg}4D` }}
        transition={{ duration: 0.3 }}
        style={{
          borderRadius: '24px',
          padding: '32px 40px',
          display: 'flex',
          gap: '28px',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* CourseCard */}
        <CourseCard tokens={tokens} visible={visible} />

        {/* Right column: PrimaryButton + LogroBadge */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'flex-start' }}>
          <PrimaryButton tokens={tokens} visible={visible} />
          <LogroBadge tokens={tokens} visible={visible} />
        </div>
      </motion.div>

      {/* Brand meta label */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.18 }}
          style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa' }}
        >
          {active === 'edvance' && 'Edvance · Portal central · Montserrat'}
          {active === 'kira'    && 'Kira · Para profesionales · Plus Jakarta Sans'}
          {active === 'blink'   && 'Blink · Para adolescentes · Nunito'}
          {active === 'nubi'    && 'Nubi · Para niños · Fredoka One'}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
