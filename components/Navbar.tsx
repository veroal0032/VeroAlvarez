'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import ContactSheet from './ContactSheet'

const NAV_LINKS = [
  { label: 'PROYECTOS', href: '#projects' },
  { label: 'SOBRE MÍ',  href: '#about' },
  { label: 'RESUME',    href: 'https://drive.google.com/file/d/1F_UxUDcjXuYtPo0RfVUnPdVbSM90GUCh/view?usp=drive_link' },
  { label: 'CONTACTO',  href: '#contact' },
] as const

function NavButton({ label, href, onClick }: { label: string; href: string; onClick?: () => void }) {
  const [hovered, setHovered] = useState(false)
  const isContact = label === 'CONTACTO'

  return (
    <a
      href={href}
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: isContact ? 500 : 400,
        fontSize: '12px',
        letterSpacing: '0.04em',
        textTransform: 'uppercase',
        padding: '8px 16px',
        borderRadius: '999px',
        textDecoration: 'none',
        display: 'inline-flex',
        alignItems: 'center',
        transition: 'background 0.2s ease, color 0.2s ease',
        // Estilos hover / estado
        background: isContact
          ? hovered ? '#4D4D4D' : '#111111'
          : hovered ? 'rgba(0,0,0,0.06)' : 'transparent',
        color: isContact ? '#ffffff' : hovered ? '#111111' : '#4D4D4D',
        cursor: 'pointer',
      }}
    >
      {label}
    </a>
  )
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}>

      {/* ── DESKTOP NAV ── */}
      {/* Stack horizontal: 580 fit × 76 fit, absolute top 0 right 0, padding 22 TB / 48 LR */}
      <div
        className="hidden md:flex"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 'fit-content',
          minWidth: '580px',
          height: 'fit-content',
          minHeight: '76px',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-end',
          gap: '8px',
          padding: '22px 48px',
          boxSizing: 'border-box',
        }}
      >
        {NAV_LINKS.map((link) => (
          <NavButton
            key={link.label}
            label={link.label}
            href={link.href}
          />
        ))}
      </div>

      {/* ── MOBILE NAV ── */}
      <div
        className="flex md:hidden items-center justify-between px-6 py-5"
        style={{ background: 'transparent' }}
      >
        {/* Hamburger — izquierda */}
        <button
          className="flex flex-col gap-[5px] p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-[1.5px] bg-[#4D4D4D] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[#4D4D4D] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-[1.5px] bg-[#4D4D4D] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
        </button>

        {/* CONTACT — derecha → abre ContactSheet */}
        <button
          onClick={() => setContactOpen(true)}
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
            background: '#111111',
            color: '#ffffff',
            padding: '8px 16px',
            borderRadius: '999px',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          CONTACTO
        </button>
      </div>

      {/* ── MOBILE MENU DESPLEGABLE ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-full left-0 right-0 bg-[#ffffff] border-t border-[#e5e5e0] px-6 py-6 flex flex-col gap-5"
          >
            {([
              { label: 'PROYECTOS', href: '#projects' },
              { label: 'SOBRE MÍ',  href: '#about' },
              { label: 'RESUME',    href: 'https://drive.google.com/file/d/1F_UxUDcjXuYtPo0RfVUnPdVbSM90GUCh/view?usp=drive_link' },
            ] as const).map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#4D4D4D',
                  textDecoration: 'none',
                }}
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => { setMenuOpen(false); setContactOpen(true) }}
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                background: '#111111',
                color: '#ffffff',
                padding: '10px 20px',
                borderRadius: '999px',
                border: 'none',
                cursor: 'pointer',
                width: 'fit-content',
              }}
            >
              CONTACT
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <ContactSheet isOpen={contactOpen} onClose={() => setContactOpen(false)} />
    </nav>
  )
}
