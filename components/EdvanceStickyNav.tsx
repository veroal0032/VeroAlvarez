'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const NAV_ITEMS = [
  { id: 'overview',     label: 'Overview' },
  { id: 'problema',     label: 'Problema' },
  { id: 'research',     label: 'Tokens' },
  { id: 'marcas',       label: 'Marcas' },
  { id: 'decisiones',   label: 'Decisiones' },
  { id: 'proceso',      label: 'Proceso' },
  { id: 'resultado',    label: 'Resultado' },
  { id: 'aprendizajes', label: 'Aprendizajes' },
]

export default function EdvanceStickyNav() {
  const [active, setActive] = useState('overview')
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Show nav after scrolling past the hero
    const onScroll = () => setVisible(window.scrollY > 120)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div
      style={{
        position: 'fixed',
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 100,
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? 'auto' : 'none',
        transition: 'opacity 0.3s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2px',
          background: '#111111',
          borderRadius: '100px',
          padding: '5px 6px',
          boxShadow: '0 4px 24px rgba(0,0,0,0.28)',
        }}
      >
        {/* Back button */}
        <Link
          href="/"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '30px',
            height: '30px',
            borderRadius: '100px',
            color: 'rgba(255,255,255,0.55)',
            textDecoration: 'none',
            fontSize: '14px',
            flexShrink: 0,
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'
          }}
          title="Back to portfolio"
        >
          ←
        </Link>

        {/* Divider */}
        <div
          style={{
            width: '1px',
            height: '16px',
            background: 'rgba(255,255,255,0.12)',
            margin: '0 2px',
            flexShrink: 0,
          }}
        />

        {/* Nav items */}
        {NAV_ITEMS.map(({ id, label }) => (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              height: '30px',
              padding: '0 12px',
              borderRadius: '100px',
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
              background: active === id ? 'rgba(255,255,255,0.13)' : 'transparent',
              color: active === id ? '#ffffff' : 'rgba(255,255,255,0.45)',
              transition: 'background 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => {
              if (active !== id) {
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.8)'
              }
            }}
            onMouseLeave={(e) => {
              if (active !== id) {
                (e.currentTarget as HTMLButtonElement).style.color = 'rgba(255,255,255,0.45)'
              }
            }}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  )
}
