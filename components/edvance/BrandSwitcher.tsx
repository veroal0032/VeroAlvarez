'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CourseCard, { type BrandKey } from './CourseCard'

const BRANDS: { key: BrandKey; label: string; color: string; meta: string }[] = [
  { key: 'edvance', label: 'Edvance', color: '#7B5CF6', meta: 'Portal central · Montserrat' },
  { key: 'kira',    label: 'Kira',    color: '#1D4ED8', meta: 'Para profesionales · Plus Jakarta Sans' },
  { key: 'blink',   label: 'Blink',   color: '#16A34A', meta: 'Para adolescentes · Nunito' },
  { key: 'nubi',    label: 'Nubi',    color: '#EA580C', meta: 'Para niños · Fredoka One' },
]

export default function BrandSwitcher() {
  const [active, setActive] = useState<BrandKey>('kira')
  const current = BRANDS.find((b) => b.key === active)!

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '28px',
      }}
    >
      {/* Brand pill buttons */}
      <div
        style={{
          display: 'flex',
          gap: '8px',
          padding: '5px',
          borderRadius: '999px',
          background: '#f0ede6',
        }}
      >
        {BRANDS.map((b) => (
          <button
            key={b.key}
            onClick={() => setActive(b.key)}
            style={{
              padding: '7px 18px',
              borderRadius: '999px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '13px',
              background: active === b.key ? b.color : 'transparent',
              color: active === b.key ? '#ffffff' : '#666666',
              transition: 'background 0.22s ease, color 0.22s ease',
            }}
          >
            {b.label}
          </button>
        ))}
      </div>

      {/* Card with layoutId for smooth brand swap */}
      <motion.div layout style={{ position: 'relative' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            layoutId="brand-card"
            initial={{ opacity: 0, y: 12, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          >
            <CourseCard brand={active} />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      {/* Brand description */}
      <AnimatePresence mode="wait">
        <motion.p
          key={active + '-meta'}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '13px',
            color: '#888888',
            textAlign: 'center',
          }}
        >
          {current.meta}
        </motion.p>
      </AnimatePresence>
    </div>
  )
}
