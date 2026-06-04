'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-5 flex items-center justify-between">
      {/* Mobile hamburger — izquierda en mobile, oculto en desktop */}
      <button
        className="md:hidden flex flex-col gap-[5px] p-2"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span
          className={`block w-5 h-[1.5px] bg-[#333] transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-[#333] transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
        />
        <span
          className={`block w-5 h-[1.5px] bg-[#333] transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`}
        />
      </button>

      {/* Logo / name mark — oculto en mobile */}
      <span
        className="hidden md:inline font-grotesque font-900 text-[#333333] text-[18px] tracking-tight select-none"
        style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 900 }}
      >
        VA
      </span>

      {/* Desktop links */}
      <div className="hidden md:flex items-center gap-6">
        {['PROJECTS', 'ABOUT', 'RESUME'].map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-[#333333] hover:text-[#111] transition-colors"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
            }}
          >
            {link}
          </a>
        ))}
      </div>

      {/* CONTACT — visible siempre */}
      <a
        href="#contact"
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 400,
          fontSize: '12px',
          letterSpacing: '0.04em',
          textTransform: 'uppercase',
          background: '#111111',
          color: '#FAFAF7',
          padding: '7px 18px',
          borderRadius: '999px',
        }}
        className="hover:bg-[#333] transition-colors"
      >
        CONTACT
      </a>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-[#FAFAF7] border-t border-[#e5e5e0] px-6 py-6 flex flex-col gap-5 md:hidden"
          >
            {['PROJECTS', 'ABOUT', 'RESUME'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '13px',
                  letterSpacing: '0.04em',
                  textTransform: 'uppercase',
                  color: '#333333',
                }}
              >
                {link}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 400,
                fontSize: '13px',
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
                background: '#111111',
                color: '#FAFAF7',
                padding: '10px 20px',
                borderRadius: '999px',
                display: 'inline-block',
                width: 'fit-content',
              }}
            >
              CONTACT
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
