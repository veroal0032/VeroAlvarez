'use client'

const ACCENT = '#13947A'

export default function BreeeeeathSections() {
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
        Breathing is a tool anyone can use at any moment — not only in situations
        of stress or anxiety. I wanted to build something simple that reminded you of that.
        <br /><br />
        It started with a sketch. Then I built it vibecoding with HTML, CSS and JavaScript.
        No frameworks, no dependencies.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <a
          href="https://veroal0032.github.io/Breeeeeath/"
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
            el.style.filter = 'brightness(110%)'
            el.style.transform = 'translateY(-2px)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.filter = 'brightness(100%)'
            el.style.transform = 'translateY(0)'
          }}
        >
          Breathe now →
        </a>
      </div>
    </div>
  )
}
