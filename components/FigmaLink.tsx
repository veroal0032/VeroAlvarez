'use client'

export default function FigmaLink({
  href,
  centered = false,
}: {
  href: string
  centered?: boolean
}) {
  return (
    <div style={centered ? { display: 'flex', justifyContent: 'center' } : undefined}>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '11px 24px',
          borderRadius: '999px',
          border: '1.5px solid #7B5CF6',
          color: '#7B5CF6',
          textDecoration: 'none',
          fontFamily: 'var(--font-inter)',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.01em',
          background: 'transparent',
          transition: 'background 0.2s ease, color 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = '#7B5CF6'
          el.style.color = '#ffffff'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.background = 'transparent'
          el.style.color = '#7B5CF6'
        }}
      >
        → Ver Design System completo en Figma
      </a>
    </div>
  )
}
