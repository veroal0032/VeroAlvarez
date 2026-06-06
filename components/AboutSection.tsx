'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const CV_URL = 'https://drive.google.com/file/d/1F_UxUDcjXuYtPo0RfVUnPdVbSM90GUCh/view?usp=drive_link'

const POLAROIDS = [
  { src: '/images/polaroid-luna.png', alt: 'Luna, my dog' },
  { src: '/images/polaroid-ba.png',   alt: 'Buenos Aires' },
  { src: '/images/polaroid-vero.png', alt: 'Verónica at a restaurant' },
]

const DESKTOP_PHOTOS = [
  { ...POLAROIDS[0], rotate: '-5deg', top: 0,   left: 10,  zIndex: 2 },
  { ...POLAROIDS[1], rotate: '4deg',  top: 40,  left: 185, zIndex: 1 },
  { ...POLAROIDS[2], rotate: '-2deg', top: 200, left: 80,  zIndex: 3 },
]

const MOBILE_PHOTOS = [
  { ...POLAROIDS[0], rotate: -6, x: -70, y: -20, zIndex: 2 },
  { ...POLAROIDS[1], rotate: 5,  x: 50,  y: -30, zIndex: 1 },
  { ...POLAROIDS[2], rotate: -2, x: -10, y: 70,  zIndex: 3 },
]

const textStyle = {
  fontFamily: 'var(--font-inter)',
  fontWeight: 300,
  fontSize: '13px',
  color: '#666666',
  lineHeight: 1.8,
}

export default function AboutSection() {
  return (
    <section id="about" style={{ background: '#FAFAF7' }}>

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
      <motion.div
        className=""
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ maxWidth: '1280px', margin: '0 auto', padding: '80px 72px', display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '80px', boxSizing: 'border-box' }}
      >
        {/* texto */}
        <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h2 style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 42px)', color: '#333', lineHeight: 1, margin: 0 }}>
            Sobre mí
          </h2>
          <p style={{ ...textStyle, maxWidth: '480px', margin: 0 }}>
            Soy una diseñadora nacida en Venezuela que actualmente vive en Argentina,
            con un gran amor por el arte y la expresión creativa. La arquitectura me
            enseñó a observar, pensar a través de las ideas y diseñar con propósito,
            siempre considerando a las personas y los espacios que habitan.
            <br /><br />
            Hoy estoy integrando ese recorrido al mundo del UX/UI, explorando cómo esos
            mismos principios se trasladan a las experiencias digitales. Veo el diseño
            como un proceso de construir, modelar y dar forma: moldear ideas hasta que
            se sientan simples, humanas y significativas.
          </p>
          <a
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '13px 26px', backgroundColor: '#A8E6CF', color: '#111', fontFamily: 'var(--font-darker-grotesque)', fontSize: '13px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '3px', width: 'fit-content' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.7'; e.currentTarget.style.transform = 'translateY(-2px)' }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1';   e.currentTarget.style.transform = 'translateY(0)' }}
          >
            ➡ &nbsp; Ver CV
          </a>
        </div>

        {/* fotos superpuestas */}
        <div style={{ position: 'relative', width: '360px', height: '420px', flexShrink: 0 }}>
          {DESKTOP_PHOTOS.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              style={{ position: 'absolute', top: p.top, left: p.left, width: '155px', background: '#fff', padding: '8px 8px 28px', boxShadow: '0 4px 18px rgba(0,0,0,0.10)', transform: `rotate(${p.rotate})`, zIndex: p.zIndex }}
            >
              <div style={{ width: '100%', aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden' }}>
                <Image src={p.src} alt={p.alt} fill sizes="155px" style={{ objectFit: 'cover' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      </div>

      {/* ── MOBILE ── */}
      <div
        className="flex flex-col md:hidden"
        style={{ padding: '16px 20px 60px', boxSizing: 'border-box' }}
      >
        <h2 style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 800, fontSize: '32px', color: '#333', lineHeight: 1, margin: '0 0 20px', textAlign: 'center' }}>
          Sobre mí
        </h2>
        <p style={{ ...textStyle, margin: '0 0 16px' }}>
          Soy una diseñadora nacida en Venezuela que actualmente vive en Argentina,
          con un gran amor por el arte y la expresión creativa. La arquitectura me
          enseñó a observar, pensar a través de las ideas y diseñar con propósito,
          siempre considerando a las personas y los espacios que habitan.
        </p>
        <p style={{ ...textStyle, margin: '0 0 32px' }}>
          Hoy estoy integrando ese recorrido al mundo del UX/UI, explorando cómo esos
          mismos principios se trasladan a las experiencias digitales. Veo el diseño
          como un proceso de construir, modelar y dar forma: moldear ideas hasta que
          se sientan simples, humanas y significativas.
        </p>
        <a
          href={CV_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignSelf: 'center', alignItems: 'center', gap: '8px', padding: '12px 22px', backgroundColor: '#A8E6CF', color: '#111', fontFamily: 'var(--font-darker-grotesque)', fontSize: '12px', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '3px', marginBottom: '64px' }}
        >
          ➡ &nbsp; Ver CV
        </a>

        {/* fotos superpuestas centradas */}
        <div style={{ position: 'relative', width: '100%', height: '260px' }}>
          {MOBILE_PHOTOS.map((p, i) => (
            <div
              key={i}
              style={{ position: 'absolute', top: '50%', left: '50%', width: '120px', backgroundColor: '#fff', padding: '6px 6px 22px', boxShadow: '0 4px 18px rgba(0,0,0,0.10)', transform: `translate(calc(-50% + ${p.x}px), calc(-50% + ${p.y}px)) rotate(${p.rotate}deg)`, zIndex: p.zIndex }}
            >
              <div style={{ width: '100%', aspectRatio: '1 / 1', position: 'relative', overflow: 'hidden' }}>
                <Image src={p.src} alt={p.alt} fill sizes="120px" style={{ objectFit: 'cover' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  )
}
