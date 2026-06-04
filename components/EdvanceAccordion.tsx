'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

export interface AccordionSection {
  id: string
  num: string
  title: string
  /** Pass a ReactNode or a render-prop function to receive isOpen */
  content: React.ReactNode | ((isOpen: boolean) => React.ReactNode)
}

const DEFAULT_ACCENT = '#7B5CF6'

function AccordionItem({
  section,
  isOpen,
  onToggle,
  accentColor = DEFAULT_ACCENT,
}: {
  section: AccordionSection
  isOpen: boolean
  onToggle: () => void
  accentColor?: string
}) {
  return (
    <div
      id={section.id}
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        marginBottom: '6px',
        background: isOpen ? '#ffffff' : '#f5f4f0',
        transition: 'background 0.25s ease',
        border: isOpen ? '1px solid rgba(0,0,0,0.07)' : '1px solid transparent',
      }}
    >
      {/* Header */}
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 24px',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '12px',
              color: accentColor,
              letterSpacing: '0.04em',
              minWidth: '24px',
            }}
          >
            {section.num}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 700,
              fontSize: '22px',
              color: '#333333',
              lineHeight: 1,
            }}
          >
            {section.title}
          </span>
        </div>

        {/* Arrow */}
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            color: '#999999',
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </motion.span>
      </button>

      {/* Animated content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: { type: 'spring', stiffness: 300, damping: 28 },
              opacity: { duration: 0.2 },
            }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              style={{ padding: '4px 24px 28px' }}
            >
              {typeof section.content === 'function'
                ? section.content(isOpen)
                : section.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function EdvanceAccordion({
  sections,
  accentColor = DEFAULT_ACCENT,
  defaultOpen,
}: {
  sections: AccordionSection[]
  accentColor?: string
  defaultOpen?: string
}) {
  const [openSections, setOpenSections] = useState<string[]>([defaultOpen ?? 'overview'])

  const toggleSection = (id: string) => {
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )
  }

  const openAndScroll = (id: string) => {
    setOpenSections((prev) => (prev.includes(id) ? prev : [...prev, id]))
    setTimeout(() => {
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  // Expose for future external navigation
  if (typeof window !== 'undefined') {
    // @ts-expect-error — intentional global for external access
    window.__edvanceOpenSection = openAndScroll
  }

  return (
    <div>
      {sections.map((section) => (
        <AccordionItem
          key={section.id}
          section={section}
          isOpen={openSections.includes(section.id)}
          onToggle={() => toggleSection(section.id)}
          accentColor={accentColor}
        />
      ))}
    </div>
  )
}

/* ── Shared content building blocks ── */

export function SectionText({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-inter)',
        fontWeight: 400,
        fontSize: '15px',
        color: '#555555',
        lineHeight: 1.8,
      }}
    >
      {children}
    </p>
  )
}

export function TwoColLayout({
  left,
  right,
}: {
  left: React.ReactNode
  right: React.ReactNode
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: '40px',
        alignItems: 'start',
      }}
      className="section-two-col"
    >
      <div>{left}</div>
      <div>{right}</div>
    </div>
  )
}

export function SectionImage({
  src,
  alt,
  placeholderBg = '#f0ede6',
  placeholderLabel,
}: {
  src?: string
  alt: string
  placeholderBg?: string
  placeholderLabel?: string
}) {
  if (src && src.startsWith('http')) {
    return (
      <div
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          maxHeight: '400px',
          position: 'relative',
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            maxHeight: '400px',
          }}
        />
      </div>
    )
  }

  if (src && src.startsWith('/')) {
    return (
      <div
        style={{
          borderRadius: '12px',
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
          position: 'relative',
          aspectRatio: '4/3',
          background: placeholderBg,
        }}
      >
        <Image src={src} alt={alt} fill style={{ objectFit: 'cover' }} />
      </div>
    )
  }

  return (
    <div
      style={{
        borderRadius: '12px',
        background: placeholderBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 24px',
        minHeight: '180px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 400,
          fontSize: '11px',
          color: '#aaaaaa',
          textAlign: 'center',
          letterSpacing: '0.03em',
        }}
      >
        {placeholderLabel ?? alt}
      </p>
    </div>
  )
}
