'use client'

import Image from 'next/image'
import EdvanceAccordion, { type AccordionSection } from '@/components/EdvanceAccordion'
import PetlinkScreensMarquee from './PetlinkScreensMarquee'

const ACCENT = '#1C9674'

const T = {
  body: {
    fontFamily: 'var(--font-dm-sans)',
    fontWeight: 400 as const,
    fontSize: '15px',
    color: '#666666',
    lineHeight: 1.8,
    margin: 0,
  },
  heading: (color = ACCENT) => ({
    fontFamily: 'var(--font-darker-grotesque)',
    fontWeight: 700 as const,
    fontSize: '15px',
    color,
    lineHeight: 1.1,
    marginBottom: '8px',
  }),
  hr: { border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 } as React.CSSProperties,
}

/* ── 01 — START POINT ─────────────────────────────────────────── */
const startPointContent = (
  <div
    style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}
    className="section-two-col"
  >
    <p style={{ ...T.body, maxWidth: '480px' }}>
      Petlink was the final project for the UX/UI design course at Coderhouse. The premise was simple: owning a pet is wonderful, but it can feel overwhelming.
      <br /><br />
      I developed it solo — from research to final animations — as my first formal design project. That meant making every decision on my own and documenting the entire process.
    </p>

    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#e6f5ef' }}>
      <Image
        src="/images/petlink/cover.png"
        alt="Petlink — cover with 3D dog"
        width={1400}
        height={750}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
)

/* ── 02 — THE PROBLEM ─────────────────────────────────────────── */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    <p style={{ ...T.body, maxWidth: '680px' }}>
      Pet owners need access to multiple services — vets, walkers, shops, grooming — across different apps or with none at all. There's no unified platform connecting the entire pet care ecosystem in one place.
    </p>

    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{
        background: '#F0FBF7',
        border: `1.5px solid ${ACCENT}`,
        borderRadius: '12px',
        padding: '20px 32px',
        textAlign: 'center',
        maxWidth: '520px',
      }}>
        <p style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 700,
          fontSize: '20px',
          color: ACCENT,
          lineHeight: 1.35,
          margin: 0,
        }}>
          "Petlink links you to everything your furry friend needs."
        </p>
      </div>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      {[
        { value: 'Surveys',    label: 'Research conducted' },
        { value: 'Benchmark',  label: 'Competitive analysis' },
        { value: 'Interviews', label: 'Users tested' },
      ].map((s, i) => (
        <div key={s.value} style={{
          padding: '16px 8px',
          textAlign: 'center',
          borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
        }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: ACCENT, marginBottom: '4px', lineHeight: 1.2 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#888888', margin: 0 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>

    <div style={{ marginTop: '8px' }}>
      <p style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 700,
        fontSize: '17px',
        color: '#4D4D4D',
        marginBottom: '16px',
        lineHeight: 1.1,
      }}>
        The MVP
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[
          { title: 'Pet Profiles',          desc: 'Personalized profile with age, breed, weight, vaccines and vet history.' },
          { title: 'Shop',                  desc: 'Curated deals from top brands. Everything your pet needs in one place.' },
          { title: '24/7 Vet Assistance',   desc: 'Instant online vet help, anytime and anywhere.' },
          { title: 'Pet-friendly places',   desc: 'Find and explore nearby pet-friendly spots, rated by the community.' },
          { title: 'Walkers & sitters',     desc: 'Connect with trusted walkers and sitters, reviewed by the Petlink community.' },
        ].map((item, i, arr) => (
          <div key={item.title}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 0' }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: '5px' }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '15px', color: '#4D4D4D', lineHeight: 1.1, margin: 0 }}>
                  {item.title}
                </p>
                <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '14px', color: '#666666', lineHeight: 1.6, margin: 0 }}>
                  {item.desc}
                </p>
              </div>
            </div>
            {i < arr.length - 1 && <hr style={T.hr} />}
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ── 03 — RESEARCH ────────────────────────────────────────────── */
const researchContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#e6f5ef' }}>
        <Image
          src="/images/petlink/persona.png"
          alt="User persona — Maribel"
          width={1400}
          height={750}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="100vw"
        />
      </div>
    </div>

    <p style={{ ...T.body, maxWidth: '720px' }}>
      Maribel, 32, Buenos Aires. First-time pet owner. Motivated to be responsible, but frustrated by having no one to ask and the fear of leaving her puppy alone.
      <br /><br />
      The research confirmed that the target user needs guidance, quick access to professionals and a trusted community — not just a service directory.
    </p>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.07)', background: '#f5faf8' }}>
        <Image
          src="/images/petlink/userflow.png"
          alt="User Flow — Petlink"
          width={1400}
          height={750}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="100vw"
        />
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        User Flow — onboarding, authentication and main navigation
      </p>
    </div>
  </div>
)

/* ── 04 — DESIGN DECISIONS ────────────────────────────────────── */
const DESIGN_BLOCKS = [
  {
    title: 'Native iOS app',
    body: 'The decision was to design for iOS following Human Interface Guidelines — SF Pro as the system typeface, native navigation patterns and components the user already knows. The app had to feel like it was made by Apple.',
  },
  {
    title: 'Bright colors, clear identity',
    body: 'Green #1C9674 as the primary color for its association with nature, health and animal wellbeing. Orange, pink and blue as secondary colors to categorize services without losing visual coherence. Bright but never aggressive.',
  },
  {
    title: 'The logo as a concept',
    body: 'The P takes the shape of a dog. The i and n are linked — just like the app links the owner to their pet\'s world. The name and logo tell the same story.',
  },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
      {DESIGN_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <div style={{ padding: '24px 0' }}>
            <p style={T.heading()}>{block.title}</p>
            <p style={T.body}>{block.body}</p>
          </div>
          {i < DESIGN_BLOCKS.length - 1 && <hr style={T.hr} />}
        </div>
      ))}
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#e6f5ef' }}>
        <Image
          src="/images/petlink/wireframes.png"
          alt="Wireframes — 6 main screens"
          width={1400}
          height={750}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="100vw"
        />
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        Wireframes — 6 main screens
      </p>
    </div>
  </div>
)

/* ── 05 — FINAL RESULT ─────────────────────────────────────────── */
const resultadoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <div>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 800, fontSize: 'clamp(20px, 2.5vw, 28px)', color: '#4D4D4D', lineHeight: 1, marginBottom: '8px' }}>
        Final result
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#888888', margin: 0 }}>
        From wireframes to animated prototype. A complete app with onboarding, authentication, home, assistance, vets and shop.
      </p>
    </div>

    <PetlinkScreensMarquee />

    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
      <a
        href="https://www.figma.com/deck/pkCHmOVcfQfGKRMkt5knfZ/Petlink---Entrega-final---Alvarez-V.?node-id=98-326&t=Cdmk8fEzZeKjQMEw-1"
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
        View full prototype in Figma →
      </a>
    </div>
  </div>
)

/* ── 06 — LEARNINGS ────────────────────────────────────────────── */
const LEARNINGS = [
  {
    title: 'Research changes everything',
    body: 'Running surveys, benchmarks and interviews before designing a single screen guaranteed every decision had a real foundation. Not intuition — evidence.',
  },
  {
    title: 'Designing native is designing with the user',
    body: 'Following Human Interface Guidelines isn\'t a limitation — it\'s a shortcut to usability. The user already knows how iOS works. The job is not to break that expectation.',
  },
  {
    title: 'A complete project from start to finish',
    body: 'From research to animations, Petlink was the first project where I controlled every stage of the process. That makes it the foundation of everything that came after.',
  },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNINGS.map((item, i) => (
      <div key={item.title}>
        <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={T.heading()}>{item.title}</p>
          <p style={T.body}>{item.body}</p>
        </div>
        {i < LEARNINGS.length - 1 && <hr style={T.hr} />}
      </div>
    ))}
  </div>
)

/* ── ACCORDION DATA ────────────────────────────────────────────── */
const SECTIONS: AccordionSection[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',      content: startPointContent },
  { id: 'problema',     num: '02', title: 'The Problem',      content: problemaContent },
  { id: 'research',     num: '03', title: 'Research',         content: researchContent },
  { id: 'decisiones',   num: '04', title: 'Design Decisions', content: decisionesContent },
  { id: 'resultado',    num: '05', title: 'Final Result',     content: resultadoContent },
  { id: 'aprendizajes', num: '06', title: 'Learnings',        content: aprendizajesContent },
]

export default function PetlinkSections() {
  return (
    <EdvanceAccordion
      sections={SECTIONS}
      accentColor={ACCENT}
      defaultOpen="start-point"
    />
  )
}
