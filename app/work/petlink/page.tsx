import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import PetlinkSections from '@/components/petlink/PetlinkSections'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Petlink — Verónica Alvarez',
  description: 'Mobile app connecting pet owners with local services and adoption networks.',
}

const ACCENT = '#1C9674'

export default function PetlinkPage() {
  return (
    <main style={{ background: '#FAFAF7', minHeight: '100vh' }}>
      <BackButton />

      {/* ── HERO ── */}
      <section style={{ background: '#F0FBF7', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px) 0' }}>
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

            <h1
              style={{
                fontFamily: 'var(--font-darker-grotesque)',
                fontWeight: 900,
                fontSize: 'clamp(56px, 8vw, 96px)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              <span style={{ color: '#333333' }}>Pet</span>
              <span style={{ color: ACCENT }}>link</span>
            </h1>

            {/* Category pill */}
            <span style={{
              display: 'inline-flex',
              width: 'fit-content',
              alignItems: 'center',
              border: `1.5px solid ${ACCENT}`,
              borderRadius: '999px',
              padding: '5px 14px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.07em',
              textTransform: 'uppercase' as const,
              color: ACCENT,
            }}>
              UX/UI · Mobile App · 2024
            </span>

            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.2vw, 18px)',
              color: '#666666',
              lineHeight: 1.65,
              maxWidth: '400px',
              margin: 0,
            }}>
              The link between you and your pet&apos;s world.
            </p>

            {/* Metadata grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 24px', marginTop: '4px' }}>
              {[
                { label: 'Rol',          value: 'UX/UI Designer' },
                { label: 'Herramientas', value: 'Figma' },
                { label: 'Año',          value: '2024' },
                { label: 'Tipo',         value: 'Proyecto final Coderhouse' },
              ].map((item) => (
                <div key={item.label}>
                  <p style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '11px',
                    color: '#aaaaaa',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase' as const,
                    marginBottom: '3px',
                    marginTop: 0,
                  }}>
                    {item.label}
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-darker-grotesque)',
                    fontWeight: 700,
                    fontSize: '15px',
                    color: '#333333',
                    lineHeight: 1.2,
                    margin: 0,
                  }}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — hero image */}
          <div style={{
            borderRadius: '20px',
            overflow: 'hidden',
            background: '#d0ece3',
            boxShadow: '0 20px 60px rgba(0,0,0,0.10)',
          }}>
            <Image
              src="/images/petlink/hero.png"
              alt="Petlink — mockup con mano"
              width={1400}
              height={750}
              priority
              quality={100}
              sizes="100vw"
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(40px, 6vw, 80px) clamp(24px, 8vw, 80px)',
        }}
      >
        <PetlinkSections />
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <nav
        style={{
          maxWidth: '1152px',
          margin: '0 auto',
          padding: 'clamp(32px, 5vw, 56px) clamp(24px, 8vw, 80px)',
          borderTop: '1px solid rgba(0,0,0,0.07)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link
          href="/work/matcha-cha"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}
          className="nav-link-petlink"
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '11px', color: '#aaaaaa', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
            ← Previous
          </span>
          <span className="nav-title-petlink" style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1.1 }}>
            Matcha Chá
          </span>
        </Link>

        <Link
          href="/work/cosechar"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}
          className="nav-link-petlink"
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '11px', color: '#aaaaaa', letterSpacing: '0.05em', textTransform: 'uppercase' as const }}>
            Next →
          </span>
          <span className="nav-title-petlink" style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1.1 }}>
            Cosechar
          </span>
        </Link>
      </nav>

      {/* ── FOOTER MINI ── */}
      <div style={{ textAlign: 'center', padding: '28px 24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
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
          ← Back to portfolio
        </Link>
      </div>

      <style>{`
        html { scroll-behavior: smooth; }
        .nav-link-petlink:hover .nav-title-petlink { color: ${ACCENT}; transition: color 0.2s ease; }
        @media (max-width: 768px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .section-two-col { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
