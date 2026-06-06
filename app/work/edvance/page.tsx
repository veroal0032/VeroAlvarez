import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EdvanceSections from '@/components/edvance/EdvanceSections'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Edvance Design System — Verónica Alvarez',
  description:
    'Sistema de diseño multibrand para el ecosistema EdTech. 4 marcas, 14 component sets, 94 variantes.',
}

export default function EdvancePage() {
  return (
    <main style={{ background: '#FAFAF7', minHeight: '100vh' }}>
      <BackButton />
      {/* ── HERO ── */}
      <section style={{ background: '#EDE8FF', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px) 0' }}>
        <div
          style={{
            maxWidth: '1152px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'clamp(32px, 6vw, 80px)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', paddingBottom: 'clamp(48px, 8vw, 80px)' }}>
            <div>
              <h1
                style={{
                  fontFamily: 'var(--font-darker-grotesque)',
                  fontWeight: 900,
                  fontSize: 'clamp(56px, 8vw, 96px)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: '#333333',
                  marginBottom: '4px',
                }}
              >
                {'Edvance'.split('').map((char, i) => (
                  <span key={i} style={{ color: i === 2 ? '#7B5CF6' : '#333333' }}>
                    {char}
                  </span>
                ))}
              </h1>
              <p style={{
                fontFamily: 'var(--font-darker-grotesque)',
                fontWeight: 900,
                fontSize: 'clamp(28px, 3.5vw, 44px)',
                lineHeight: 1,
                color: '#7B5CF6',
                letterSpacing: '-0.01em',
              }}>
                Design System
              </p>
            </div>

            {/* Category pill */}
            <span style={{
              display: 'inline-flex',
              width: 'fit-content',
              alignItems: 'center',
              border: '1.5px solid #7B5CF6',
              borderRadius: '999px',
              padding: '5px 14px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#7B5CF6',
            }}>
              Design Systems · Figma · 2026
            </span>

            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.2vw, 16px)',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '400px',
            }}>
              Sistema de diseño multibrand para el ecosistema EdTech.
              4 marcas, 14 component sets, 94 variantes.
            </p>

            {/* Brand pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {[
                { name: 'Kira', bg: '#1D4ED8' },
                { name: 'Blink', bg: '#16A34A' },
                { name: 'Nubi', bg: '#EA580C' },
                { name: 'Edvance', bg: '#7B5CF6' },
              ].map((brand) => (
                <span key={brand.name} style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '5px 14px',
                  borderRadius: '999px',
                  background: brand.bg,
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: '#ffffff',
                }}>
                  {brand.name}
                </span>
              ))}
            </div>

            {/* Metadata grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 24px', marginTop: '4px' }}>
              {[
                { label: 'Rol',          value: 'UX UI Designer / Líder de equipo' },
                { label: 'Herramientas', value: 'Figma · Figma Make · Claude' },
                { label: 'Año',          value: '2026' },
                { label: 'Contexto',     value: 'Simulación laboral — No Country' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: '#aaaaaa',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    marginBottom: '3px',
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-darker-grotesque)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#333333',
                    lineHeight: 1.2,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>

            <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '13px', color: '#888888', lineHeight: 1.6 }}>
              Javiana Altuve · Vanessa Gamarra · Verónica Alvarez<br />
              v1.0 · Abril 2026
            </p>
          </div>

          {/* Right — hero image with bottom fade */}
          <div style={{ borderRadius: '20px', overflow: 'hidden', background: '#d8d0f7', position: 'relative' }}>
            <Image
              src="/images/edvance/landing-edvance.png"
              alt="Edvance Design System"
              width={800}
              height={600}
              priority
              quality={100}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '40%',
              background: 'linear-gradient(to bottom, transparent 0%, #EDE8FF 100%)',
              pointerEvents: 'none',
            }} />
          </div>
        </div>
      </section>

      {/* ── ACCORDION — client component owns all section content ── */}
      <section
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 80px) clamp(24px, 8vw, 80px)',
        }}
      >
        <EdvanceSections />
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <nav
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 8vw, 80px)',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Link
          href="/work/matcha-cha"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}
          className="nav-link"
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '11px', color: '#aaaaaa', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Next →
          </span>
          <span className="nav-title" style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1.1 }}>
            Matcha Chá
          </span>
        </Link>
      </nav>

      {/* ── FOOTER MINI ── */}
      <div
        style={{
          textAlign: 'center',
          padding: '28px 24px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <Link
          href="/"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '12px',
            color: '#aaaaaa',
            textDecoration: 'none',
          }}
        >
          ← Volver al portfolio
        </Link>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .nav-link:hover .nav-title { color: #7B5CF6; transition: color 0.2s ease; }
        @media (max-width: 768px) {
          .hero-grid    { grid-template-columns: 1fr !important; }
          .overview-grid { grid-template-columns: 1fr 1fr !important; }
          .overview-grid > div:nth-child(2) { border-right: none !important; }
          .overview-grid > div:nth-child(1),
          .overview-grid > div:nth-child(2) { border-bottom: 1px solid rgba(0,0,0,0.07); }
          .learnings-grid  { grid-template-columns: 1fr !important; }
          .proceso-stats   { grid-template-columns: 1fr !important; }
          .proceso-steps   { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .overview-grid { grid-template-columns: 1fr !important; }
          .overview-grid > div {
            border-right: none !important;
            border-bottom: 1px solid rgba(0,0,0,0.07);
            padding-left: 0 !important;
            padding-right: 0 !important;
          }
          .overview-grid > div:last-child { border-bottom: none !important; }
        }
      `}</style>
    </main>
  )
}
