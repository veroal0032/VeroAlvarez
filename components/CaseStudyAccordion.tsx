'use client'

import { useState, useRef, useEffect } from 'react'
import { ProjectSection } from '@/lib/projects'

function AccordionItem({
  section,
  index,
  isOpen,
  onToggle,
}: {
  section: ProjectSection
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  const contentRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight)
    }
  }, [section.content, section.images])

  const num = String(index + 1).padStart(2, '0')

  return (
    <div
      style={{
        borderBottom: '1px solid rgba(0,0,0,0.08)',
      }}
    >
      <button
        onClick={onToggle}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '20px 0',
          background: 'transparent',
          border: 'none',
          cursor: 'pointer',
          textAlign: 'left',
          gap: '16px',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Number pill */}
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '10px',
              background: isOpen ? '#4D4D4D' : '#f0ede6',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '11px',
              color: isOpen ? '#ffffff' : '#888888',
              flexShrink: 0,
              transition: 'background 0.25s ease, color 0.25s ease',
              letterSpacing: '0.02em',
            }}
          >
            {num}
          </span>

          {/* Title */}
          <span
            style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 700,
              fontSize: '22px',
              color: '#4D4D4D',
              lineHeight: 1,
            }}
          >
            {section.title}
          </span>
        </div>

        {/* Arrow */}
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '28px',
            height: '28px',
            flexShrink: 0,
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
            transition: 'transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
            color: '#999999',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M5 2.5L9.5 7L5 11.5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      {/* Collapsible content */}
      <div
        style={{
          overflow: 'hidden',
          height: isOpen ? `${height}px` : '0px',
          transition: 'height 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <div ref={contentRef} style={{ paddingBottom: '28px' }}>
          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 400,
              fontSize: '15px',
              color: '#555555',
              lineHeight: 1.8,
              maxWidth: '680px',
            }}
            dangerouslySetInnerHTML={{ __html: section.content }}
          />

          {section.images && section.images.length > 0 && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                gap: '12px',
                marginTop: '24px',
              }}
            >
              {section.images.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt=""
                  style={{
                    width: '100%',
                    borderRadius: '16px',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function CaseStudyAccordion({
  sections,
}: {
  sections: ProjectSection[]
}) {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div>
      {sections.map((section, i) => (
        <AccordionItem
          key={section.id}
          section={section}
          index={i}
          isOpen={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
        />
      ))}
    </div>
  )
}
