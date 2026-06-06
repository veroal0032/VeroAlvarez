import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import CosecharSections from '@/components/cosechar/CosecharSections'
import BackButton from '@/components/BackButton'

export const metadata: Metadata = {
  title: 'Cosechar — Verónica Alvarez',
  description: 'Una web app que te dice qué frutas y verduras están en temporada en Argentina ahora mismo.',
}

export default function CosecharPage() {
  return (
    <main style={{ background: '#FAFAF7', minHeight: '100vh' }}>
      <BackButton />

      {/* ── HERO ── */}
      <section style={{ background: '#EBF8FF', padding: 'clamp(80px, 10vw, 120px) clamp(24px, 8vw, 80px) 0' }}>
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
            <h1 style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 900,
              fontSize: 'clamp(56px, 8vw, 96px)',
              lineHeight: 0.92,
              letterSpacing: '-0.02em',
              color: '#333333',
            }}>
              Cosech<span style={{ color: '#92DFFE' }}>ar</span>
            </h1>

            <span style={{
              display: 'inline-flex',
              width: 'fit-content',
              alignItems: 'center',
              border: '1.5px solid #92DFFE',
              borderRadius: '999px',
              padding: '5px 14px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '11px',
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              color: '#1a6a8a',
            }}>
              UX/UI · Vibe Coding · 2025
            </span>

            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: 'clamp(14px, 1.3vw, 16px)',
              color: '#555555',
              lineHeight: 1.65,
              maxWidth: '400px',
            }}>
              Una web app que te dice qué frutas y verduras están en temporada
              en Argentina ahora mismo.
            </p>

            {/* Metadata row */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px 24px', marginTop: '4px' }}>
              {[
                { label: 'Rol',          value: 'UX/UI · Vibe Coder' },
                { label: 'Herramientas', value: 'React · Vercel · Claude' },
                { label: 'Año',          value: '2025' },
                { label: 'Tipo',         value: 'Proyecto personal' },
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
          </div>

          {/* Right */}
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
            <Image
              src="/images/cosechar/hero.png"
              alt="Cosechar — web app de temporada"
              width={600}
              height={700}
              priority
              quality={100}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>
      </section>

      {/* ── ACCORDION ── */}
      <section style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: 'clamp(40px, 6vw, 80px) clamp(24px, 8vw, 80px)',
      }}>
        <CosecharSections />
      </section>

      {/* ── PROJECT NAVIGATION ── */}
      <nav style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: 'clamp(32px, 5vw, 56px) clamp(24px, 8vw, 80px)',
        borderTop: '1px solid rgba(0,0,0,0.07)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      }}>
        <Link
          href="/work/petlink"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '3px' }}
          className="nav-link"
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '11px', color: '#aaaaaa', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            ← Previous
          </span>
          <span className="nav-title" style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1.1 }}>
            Petlink
          </span>
        </Link>

        <Link
          href="/work/bitacora"
          style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'flex-end' }}
          className="nav-link"
        >
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '11px', color: '#aaaaaa', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
            Next →
          </span>
          <span className="nav-title" style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1.1, textAlign: 'right' }}>
            Bitácora
          </span>
        </Link>
      </nav>

      {/* ── FOOTER MINI ── */}
      <div style={{ textAlign: 'center', padding: '28px 24px', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <Link href="/" style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textDecoration: 'none' }}>
          ← Back to portfolio
        </Link>
      </div>

      <style>{`
        .nav-link:hover .nav-title { color: #1a6a8a; transition: color 0.2s ease; }
        @media (max-width: 768px) {
          .hero-grid    { grid-template-columns: 1fr !important; }
          .proceso-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </main>
  )
}
