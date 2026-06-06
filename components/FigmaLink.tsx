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
          color: '#ffffff',
          textDecoration: 'none',
          fontFamily: 'var(--font-inter)',
          fontWeight: 500,
          fontSize: '13px',
          letterSpacing: '0.01em',
          background: '#7B5CF6',
          transition: 'opacity 0.2s ease, transform 0.2s ease',
        }}
        onMouseEnter={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.opacity = '0.85'
          el.style.transform = 'translateY(-2px)'
        }}
        onMouseLeave={(e) => {
          const el = e.currentTarget as HTMLAnchorElement
          el.style.opacity = '1'
          el.style.transform = 'translateY(0)'
        }}
      >
        → Ver Design System completo en Figma
      </a>
    </div>
  )
}
