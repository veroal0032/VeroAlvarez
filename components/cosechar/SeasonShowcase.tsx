'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ProduceCard, { type ProduceData } from './ProduceCard'

type SeasonKey = 'verano' | 'otono' | 'invierno' | 'primavera'

const SEASONS: Record<SeasonKey, { primary: string; bg: string; label: string; months: string }> = {
  verano:    { primary: '#CC4444', bg: '#FDE8E8', label: 'Verano',    months: 'Dic · Ene · Feb' },
  otono:     { primary: '#C1440E', bg: '#FDF0EE', label: 'Otoño',     months: 'Mar · Abr · May' },
  invierno:  { primary: '#3F6E8C', bg: '#EEF5FA', label: 'Invierno',  months: 'Jun · Jul · Ago' },
  primavera: { primary: '#3D7A4E', bg: '#E8F5ED', label: 'Primavera', months: 'Sep · Oct · Nov' },
}

const PRODUCE: Record<SeasonKey, ProduceData> = {
  verano: {
    name: 'Mango',
    imageSrc: '/images/cosechar/frutas/mango.png',
    imageBg: '#FDE8E8',
    seasons: ['Verano'],
    cal: '60',
    vitaminas: 'C · A · B6',
    minerales: 'Potasio · Cobre',
    desc: 'Tropical, dulce y aromático. Se cultiva en el noroeste argentino (Salta, Jujuy, Misiones).',
  },
  otono: {
    name: 'Zapallo Anco',
    imageSrc: '/images/cosechar/frutas/zapallo.png',
    imageBg: '#FDF0EE',
    seasons: ['Otoño', 'Invierno'],
    cal: '45',
    vitaminas: 'A · C · B6',
    minerales: 'Potasio · Magnesio',
    desc: 'De forma acampanada y pulpa naranja dulce. Ideal para sopas, purés y el tradicional locro argentino.',
  },
  invierno: {
    name: 'Naranja',
    imageSrc: '/images/cosechar/frutas/naranja.png',
    imageBg: '#EEF5FA',
    seasons: ['Invierno', 'Otoño'],
    cal: '47',
    vitaminas: 'C · B1',
    minerales: 'Potasio · Calcio',
    desc: 'Cítrico de temporada invernal, jugosa y dulce. Ideal para jugo o consumo directo.',
  },
  primavera: {
    name: 'Frutilla',
    imageSrc: '/images/cosechar/frutas/frutilla.png',
    imageBg: '#E8F5ED',
    seasons: ['Primavera'],
    cal: '32',
    vitaminas: 'C · B9',
    minerales: 'Potasio · Manganeso',
    desc: 'La reina de la primavera. Perfecta para postres, licuados y mermeladas caseras.',
  },
}

const SEASON_ORDER: SeasonKey[] = ['verano', 'otono', 'invierno', 'primavera']

function getCurrentSeason(): SeasonKey {
  const month = new Date().getMonth() + 1
  if ([12, 1, 2].includes(month))  return 'verano'
  if ([3, 4, 5].includes(month))   return 'otono'
  if ([6, 7, 8].includes(month))   return 'invierno'
  return 'primavera'
}

export default function SeasonShowcase() {
  const currentSeason = getCurrentSeason()
  const [active, setActive]   = useState<SeasonKey>(currentSeason)
  const [visible, setVisible] = useState(true)

  const switchSeason = (key: SeasonKey) => {
    if (key === active) return
    setVisible(false)
    setTimeout(() => { setActive(key); setVisible(true) }, 150)
  }

  const season  = SEASONS[active]
  const produce = PRODUCE[active]

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', width: '100%' }}>
      <style>{`
        @media (max-width: 640px) {
          .season-grid { grid-template-columns: 1fr !important; padding: 24px !important; }
          .season-pills-row { flex-wrap: wrap !important; justify-content: center !important; }
        }
      `}</style>

      {/* Handwriting note */}
      <div style={{ display: 'flex', alignItems: 'center', transform: 'rotate(-2deg)' }}>
        <span style={{ fontFamily: 'var(--font-caveat), cursive', fontSize: '18px', color: '#999' }}>
          ¡cambia de estacion!
        </span>
        <svg width="36" height="32" viewBox="0 0 36 32" style={{ display: 'inline-block', marginTop: '8px' }}>
          <path d="M 2 4 Q 8 2 14 16 Q 18 26 28 28 L 22 24 M 28 28 L 24 22"
            stroke="#999" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Season selector */}
      <div className="season-pills-row" style={{ display: 'flex', gap: '6px', padding: '5px', borderRadius: '999px', background: '#f0ede6' }}>
        {SEASON_ORDER.map((key) => {
          const s = SEASONS[key]
          return (
            <motion.button
              key={key}
              onClick={() => switchSeason(key)}
              animate={{
                background: active === key ? s.primary : 'transparent',
                color: active === key ? '#ffffff' : '#666666',
              }}
              transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              style={{
                padding: '7px 16px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '13px',
              }}
            >
              {s.label}
            </motion.button>
          )
        })}
      </div>

      {/* Content area */}
      <motion.div
        animate={{ backgroundColor: season.bg }}
        transition={{ duration: 0.4, ease: 'easeInOut' }}
        style={{
          borderRadius: '24px',
          padding: '32px 48px 32px 40px',
          display: 'grid',
          gridTemplateColumns: '45% 55%',
          gap: '32px',
          alignItems: 'center',
          width: '100%',
        }}
        className="season-grid"
      >
        {/* Left — ProduceCard */}
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ProduceCard data={produce} primary={season.primary} visible={visible} />
        </div>

        {/* Right — Season info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}
          >
            <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 900, fontSize: '32px', color: season.primary, lineHeight: 1, margin: 0 }}>
              {season.label}
            </p>
            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '14px', color: '#888', margin: 0 }}>
              {season.months}
            </p>

            {active === currentSeason && (
              <span style={{
                display: 'inline-flex',
                width: 'fit-content',
                alignItems: 'center',
                gap: '5px',
                background: season.primary,
                color: '#ffffff',
                borderRadius: '100px',
                padding: '4px 12px',
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '11px',
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'rgba(255,255,255,0.7)', display: 'inline-block' }} />
                en temporada ahora
              </span>
            )}

            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '14px', color: '#666', lineHeight: 1.65, margin: 0, marginTop: '4px' }}>
              {produce.desc}
            </p>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
