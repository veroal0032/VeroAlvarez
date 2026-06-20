'use client'

import { useEffect, useRef, useState } from 'react'

const STATS = [
  { num: 14,  label: 'Component\nsets' },
  { num: 94,  label: 'Total\nvariants' },
  { num: 4,   label: 'Brands\n/ modes' },
  { num: 103, label: 'Semantic\ntokens' },
]

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [value, setValue] = useState(0)
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    if (!active) return
    const start = performance.now()

    const tick = (now: number) => {
      const elapsed = now - start
      const progress = Math.min(elapsed / duration, 1)
      /* ease-out quad */
      const eased = 1 - (1 - progress) ** 2
      setValue(Math.round(eased * target))
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [active, target, duration])

  return value
}

function StatCell({ num, label, active }: { num: number; label: string; active: boolean }) {
  const displayed = useCountUp(num, 1200, active)

  return (
    <div
      className="stat-cell"
      style={{
        background: '#ffffff',
        padding: '28px 32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
      }}
    >
      <span
        className="stat-num"
        style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 900,
          fontSize: '72px',
          lineHeight: 1,
          color: '#7B5CF6',
          letterSpacing: '-0.03em',
          fontVariantNumeric: 'tabular-nums',
        }}
      >
        {displayed}
      </span>
      <span
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 400,
          fontSize: '13px',
          color: '#888888',
          lineHeight: 1.45,
          whiteSpace: 'pre-line',
        }}
      >
        {label}
      </span>
    </div>
  )
}

export default function StatGrid({ active }: { active: boolean }) {
  return (
    <>
      <div className="stat-grid-outer" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'center' }}>
        {/* Text left */}
        <p
          style={{
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
            fontSize: '15px',
            color: '#666666',
            lineHeight: 1.8,
            textAlign: 'left',
          }}
        >
          4 separate EdTech products, each team designing on their own. The same
          UI with 4 different versions, constant rework, impossible to scale.
        </p>

        {/* Stats grid right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '1px',
            background: 'rgba(0,0,0,0.07)',
            borderRadius: '16px',
            overflow: 'hidden',
          }}
        >
          {STATS.map((s) => (
            <StatCell key={s.num} num={s.num} label={s.label} active={active} />
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .stat-grid-outer {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .stat-grid-outer .stat-num {
            font-size: 48px !important;
          }
          .stat-grid-outer .stat-cell {
            padding: 18px 20px !important;
          }
        }
      `}</style>
    </>
  )
}
