'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence, useDragControls } from 'framer-motion'

interface ContactSheetProps {
  isOpen: boolean
  onClose: () => void
}

const CONTACTS = [
  {
    id: 'email',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
    label: 'Email',
    description: 'veroexplores94@gmail.com',
    href: 'mailto:veroexplores94@gmail.com',
  },
  {
    id: 'whatsapp',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.553 4.103 1.523 5.824L.057 23.882a.5.5 0 0 0 .612.612l6.058-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.667-.523-5.178-1.432l-.36-.214-3.742.906.923-3.607-.235-.373A9.945 9.945 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
      </svg>
    ),
    label: 'WhatsApp',
    description: '+54 9 11 2791 4007',
    href: 'https://wa.me/5491127914007',
  },
]

export default function ContactSheet({ isOpen, onClose }: ContactSheetProps) {
  const dragControls = useDragControls()

  // Bloquear scroll del body cuando está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  // Cerrar con Escape
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            key="overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.45)',
              zIndex: 100,
            }}
          />

          {/* Sheet */}
          <motion.div
            key="sheet"
            drag="y"
            dragControls={dragControls}
            dragListener={false}
            dragConstraints={{ top: 0, bottom: 400 }}
            dragElastic={{ top: 0, bottom: 0.3 }}
            onDragEnd={(_, info) => {
              if (info.offset.y > 100) onClose()
            }}
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 32 }}
            style={{
              position: 'fixed',
              bottom: 0,
              left: 0,
              right: 0,
              background: '#FAFAF7',
              borderRadius: '20px 20px 0 0',
              padding: '0 24px 40px',
              zIndex: 101,
              boxShadow: '0 -8px 40px rgba(0,0,0,0.12)',
            }}
          >
            {/* Handle — drag aquí */}
            <div
              onPointerDown={(e) => dragControls.start(e)}
              style={{ display: 'flex', justifyContent: 'center', padding: '14px 0 20px', cursor: 'grab', touchAction: 'none' }}
            >
              <div style={{ width: '40px', height: '4px', borderRadius: '999px', background: '#D1D1CB' }} />
            </div>

            {/* Título */}
            <h2 style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 900,
              fontSize: '36px',
              color: '#333333',
              lineHeight: 1,
              letterSpacing: '-0.02em',
              margin: '0 0 6px',
            }}>
              Let&apos;s talk
            </h2>

            {/* Subtítulo */}
            <p style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '13px',
              color: '#888888',
              margin: '0 0 24px',
              lineHeight: 1.5,
            }}>
              Elige cómo quieres contactarme.
            </p>

            {/* Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {CONTACTS.map((c) => (
                <a
                  key={c.id}
                  href={c.href}
                  target={c.id === 'email' ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '18px 20px',
                    background: '#BFDBF7',
                    borderRadius: '16px',
                    textDecoration: 'none',
                    color: '#333333',
                    transition: 'background 0.18s ease, transform 0.18s ease',
                  }}
                  onTouchStart={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#a8cef0' }}
                  onTouchEnd={(e) => { (e.currentTarget as HTMLAnchorElement).style.background = '#BFDBF7' }}
                >
                  {/* Ícono */}
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '12px',
                    background: 'rgba(255,255,255,0.6)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#0a3d7a',
                    flexShrink: 0,
                  }}>
                    {c.icon}
                  </div>

                  {/* Texto */}
                  <div>
                    <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '17px', color: '#222', margin: 0, lineHeight: 1.2 }}>
                      {c.label}
                    </p>
                    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#555', margin: 0, marginTop: '2px' }}>
                      {c.description}
                    </p>
                  </div>

                  {/* Flecha */}
                  <div style={{ marginLeft: 'auto', color: '#0a3d7a', opacity: 0.6 }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
