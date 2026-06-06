'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const floatY = (duration: number, delay = 0) => ({
  animate: { y: [0, 10, 0] },
  transition: {
    duration,
    repeat: Infinity,
    repeatType: 'mirror' as const,
    ease: 'easeInOut',
    delay,
  },
})

export default function Hero() {
  const [timeStr, setTimeStr] = useState('')

  useEffect(() => {
    const update = () => {
      const now = new Date()
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      const day = days[now.getDay()]
      const h = now.getHours()
      const m = now.getMinutes().toString().padStart(2, '0')
      const ampm = h >= 12 ? 'PM' : 'AM'
      const h12 = h % 12 || 12
      setTimeStr(`${day} · ${h12}:${m} ${ampm} · AR`)
    }
    update()
    const interval = setInterval(update, 60000)
    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* DESKTOP */}
      <section
        className="hero-desktop"
        style={{ position: 'relative', width: '100%', height: '640px', background: '#FAFAF7', overflow: 'visible' }}
      >
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>

          {/* CONTENEDOR PRINCIPAL — nombre + foto + tags */}
          <div style={{ position: 'absolute', top: '261px', left: 0, right: 0, width: '1440px', height: 'fit-content' }}>

            {/* NOMBRE */}
            <div style={{ position: 'absolute', top: '33px', left: '48px', zIndex: 2 }}>
              <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 900, fontSize: '80px', color: '#333', lineHeight: 0.92, letterSpacing: '-0.03em', margin: 0 }}>
                Verónica
              </p>
              <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 900, fontSize: '80px', color: '#333', lineHeight: 0.92, letterSpacing: '-0.03em', margin: 0 }}>
                Alvarez
              </p>
            </div>

            {/* TAG HOLA! */}
            <motion.div
              {...floatY(2.8, 1)}
              style={{ position: 'absolute', top: '106px', right: '80px', width: '64px', height: '64px', borderRadius: '50%', background: '#B5D5C5', color: '#1a5c14', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2 }}
            >
              hola!
            </motion.div>

          </div>

          {/* TAG BUENOS AIRES — fuera del 1440px, top = 261+204 */}
          <motion.div
            {...floatY(3)}
            style={{ position: 'absolute', top: '465px', left: '48px', background: '#F7D974', color: '#3d3200', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '12px', padding: '6px 14px', borderRadius: '100px', zIndex: 2, whiteSpace: 'nowrap' }}
          >
            📍 Buenos Aires
          </motion.div>

          {/* TAG OPEN TO WORK — fuera del 1440px, top = 261+225, debajo del nombre */}
          <motion.div
            {...floatY(3.5, 0.5)}
            style={{ position: 'absolute', top: '486px', left: '315px', background: '#CFA2FC', color: '#4a0080', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '12px', padding: '6px 14px', borderRadius: '100px', zIndex: 2, whiteSpace: 'nowrap' }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B00FF', display: 'inline-block' }} />
              Open to work
              <span>✦</span>
            </span>
          </motion.div>

          {/* IMAGEN CENTRAL — fuera del contenedor 1440px para centrar sobre el viewport real */}
          <div style={{ position: 'absolute', top: '282px', left: '50%', transform: 'translateX(-50%)', width: '280px', height: '295px', borderRadius: '20px', overflow: 'hidden', zIndex: 1, boxShadow: '0px 6px 20px rgba(0,0,0,0.25)' }}>
            <Image
              src="/images/hero-bw.png"
              alt="Verónica Alvarez"
              fill
              priority
              quality={100}
              sizes="280px"
              style={{ objectFit: 'cover', objectPosition: 'center top', filter: 'grayscale(100%)' }}
            />
            <div style={{ position: 'absolute', bottom: '18px', left: '43px', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', color: '#333', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '10px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '6px 14px', borderRadius: '999px', zIndex: 3, whiteSpace: 'nowrap' }}>
              ✦ AI GENERATED, OBVIOUSLY
            </div>
          </div>

          {/* HORA Y DÍA */}
          <motion.div
            {...floatY(4, 1.5)}
            style={{ position: 'absolute', top: '296px', right: '113px', zIndex: 2, color: '#999', fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', letterSpacing: '0.02em', whiteSpace: 'nowrap' }}
          >
            {timeStr}
          </motion.div>

          {/* TEXTO A MIX OF DESIGN */}
          <div style={{ position: 'absolute', bottom: '40px', right: '48px', textAlign: 'right', fontFamily: 'var(--font-inter)', fontWeight: 300, fontSize: '15px', color: '#888', lineHeight: 1.5, maxWidth: '200px' }}>
            A mix of design, no-code and
            <br />digital experiences.
          </div>

        </div>
      </section>

      {/* MOBILE */}
      <section
        className="hero-mobile"
        style={{ display: 'none', background: '#FAFAF7', position: 'relative', height: '420px' }}
      >
        {/* Stack horizontal — contenedor absoluto top 55 */}
        <div style={{ position: 'absolute', top: '55px', left: 0, right: 0, width: '100%' }}>

          {/* Verónica Alvarez — top 21, centrado */}
          <p style={{ position: 'absolute', top: '21px', left: '50%', transform: 'translateX(-50%)', fontFamily: 'var(--font-darker-grotesque)', fontWeight: 900, fontSize: '36px', color: '#333', lineHeight: 1, letterSpacing: '-0.03em', margin: 0, whiteSpace: 'nowrap' }}>
            Verónica Alvarez
          </p>

          {/* Open to work — top 76, centrado */}
          <span style={{ position: 'absolute', top: '76px', left: '50%', transform: 'translateX(-50%)', background: '#CFA2FC', color: '#4a0080', fontFamily: 'var(--font-inter)', fontWeight: 600, fontSize: '12px', padding: '6px 14px', borderRadius: '100px', display: 'inline-flex', alignItems: 'center', gap: '6px', whiteSpace: 'nowrap' }}>
            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#7B00FF', display: 'inline-block' }} />
            Open to work
            <span>✦</span>
          </span>

          {/* Imagen con AI GENERATED — top 124, centrada */}
          <div style={{ position: 'absolute', top: '124px', left: '50%', transform: 'translateX(-50%)', width: '147px', height: '150px', borderRadius: '16px', overflow: 'hidden', boxShadow: '0px 6px 20px rgba(0,0,0,0.25)' }}>
            <Image
              src="/images/hero-bw.png"
              alt="Verónica Alvarez"
              fill
              priority
              quality={100}
              sizes="200px"
              style={{ objectFit: 'cover', objectPosition: 'center 20%', filter: 'grayscale(100%)' }}
            />
            <div style={{ position: 'absolute', bottom: '11px', left: '50%', transform: 'translateX(-50%)', background: 'rgba(255,255,255,0.85)', backdropFilter: 'blur(4px)', color: '#333', fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '6px', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '4px 8px', borderRadius: '999px', whiteSpace: 'nowrap', width: '118px', height: '17px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxSizing: 'border-box' }}>
              ✦ AI GENERATED, OBVIOUSLY
            </div>
          </div>

          {/* Hora — top 300, right 139 */}
          <p style={{ position: 'absolute', top: '300px', right: '139px', color: '#999', fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', letterSpacing: '0.02em', margin: 0, whiteSpace: 'nowrap' }}>
            {timeStr}
          </p>

        </div>
      </section>

      <style>{`
        @media (max-width: 767px) {
          .hero-desktop { display: none !important; }
          .hero-mobile  { display: block !important; }
        }
      `}</style>
    </>
  )
}
