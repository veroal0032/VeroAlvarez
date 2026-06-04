'use client'

import { motion } from 'framer-motion'

const SOCIAL_LINKS = [
  {
    label: 'Email',
    href: 'mailto:veronicacalvarezl2008@gmail.com',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ver%C3%B3nica-alvarez-ux',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/veronicaalvarez',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 1.202.936 1.542 1.866 1.542.888 0 1.44-.434 1.618-1.013h2.272zm-7.737-3.43c.073-.91-.556-1.63-1.523-1.63-.98 0-1.544.62-1.667 1.63h3.19zM10.073 8c1.073 0 1.808.4 2.368 1.041.56.64.785 1.39.785 2.217 0 .974-.283 1.71-.848 2.221C12.898 13.92 13.5 14.7 13.5 16c0 1.838-1.431 3-3.5 3H1V8h8.073zM5 10v2h3.307c.636 0 1.045-.332 1.045-.997 0-.63-.392-.003-1.045-.003H5zm0 4v2.5h3.5c.69 0 1.125-.39 1.125-1.125 0-.68-.41-1.375-1.125-1.375H5z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/veroal0032',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.604-3.369-1.341-3.369-1.341-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
      </svg>
    ),
  },
  {
    label: 'Dribbble',
    href: 'https://dribbble.com/veroal0032',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <circle cx="12" cy="12" r="10" fill="none" stroke="currentColor" strokeWidth="1.8"/>
        <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32" fill="none" stroke="currentColor" strokeWidth="1.8"/>
      </svg>
    ),
  },
]

export default function Footer() {
  return (
    <footer id="contact" style={{ background: '#C2E0FF' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 py-16 flex flex-col md:flex-row items-center md:items-center justify-between gap-8"
      >
        {/* Text */}
        <h2
          style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 900,
            fontSize: 'clamp(24px, 3vw, 32px)',
            color: '#0a3d7a',
            lineHeight: 1.1,
          }}
        >
          Let&apos;s connect! :)
        </h2>

        {/* Social icons */}
        <div className="flex items-center gap-3">
          {SOCIAL_LINKS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={s.label}
              style={{
                width: '42px',
                height: '42px',
                borderRadius: '50%',
                background: 'rgba(10,61,122,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0a3d7a',
                transition: 'background 0.2s ease',
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background =
                  'rgba(10,61,122,0.2)'
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLAnchorElement).style.background =
                  'rgba(10,61,122,0.1)'
              }}
            >
              {s.icon}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div
        className="px-6 md:px-12 lg:px-20 pb-6"
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 300,
          fontSize: '11px',
          color: 'rgba(10,61,122,0.55)',
          textAlign: 'center',
        }}
      >
        © 2024 Verónica Alvarez · Designed &amp; built with care
      </div>
    </footer>
  )
}
