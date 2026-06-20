'use client'

const ACCENT = '#553d6e'

export default function BitacoraSections() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', paddingTop: '8px' }}>
      <p style={{
        fontFamily: 'var(--font-dm-sans)',
        fontWeight: 400,
        fontSize: '15px',
        color: '#666666',
        lineHeight: 1.8,
        maxWidth: '600px',
        margin: '0 auto',
        textAlign: 'center',
      }}>
        Bitácora Psicológica is the digital space of a psychologist based in Venezuela.
        The goal was simple: whoever arrives looking for help should find the information
        they need and take the next step.
        <br /><br />
        The site was designed in Canva Sites, prioritizing clarity, warmth and a structure
        that guides the visitor toward contact.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://bitacorapsicologica.my.canva.site/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            background: ACCENT,
            color: '#ffffff',
            borderRadius: '100px',
            padding: '14px 32px',
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '15px',
            textDecoration: 'none',
            transition: 'filter 0.2s ease, transform 0.2s ease',
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.filter = 'brightness(120%)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.filter = 'brightness(100%)'
            el.style.transform = 'translateY(0)'
          }}
        >
          Visit the site →
        </a>
      </div>
    </div>
  )
}
