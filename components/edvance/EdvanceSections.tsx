'use client'

import Image from 'next/image'
import EdvanceAccordion, { type AccordionSection } from '@/components/EdvanceAccordion'
import FigmaLink from '@/components/FigmaLink'
import StatGrid from './StatGrid'
import BrandShowcase from './BrandShowcase'
import ScreensMarquee from './ScreensMarquee'
import LoginCarousel from './LoginCarousel'

/* ─────────────────────────────────────────────────────────────
   01 — OVERVIEW
───────────────────────────────────────────────────────────── */
const overviewContent = (isOpen: boolean) => <StatGrid active={isOpen} />

/* ─────────────────────────────────────────────────────────────
   02 — THE PROBLEM
───────────────────────────────────────────────────────────── */
const PROBLEMS = [
  {
    num: '01',
    title: 'Visual fragmentation',
    desc: 'Each team designs its own components. The same UI has 4 different versions.',
  },
  {
    num: '02',
    title: 'Constant rework',
    desc: 'Brand changes require manually updating dozens of files.',
  },
  {
    num: '03',
    title: 'Hard to scale',
    desc: 'Onboarding a new product means starting from scratch with no shared foundation.',
  },
]

const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '680px' }}>
    <p
      style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 800,
        fontSize: 'clamp(15px, 1.6vw, 20px)',
        color: '#4D4D4D',
        marginBottom: '24px',
        lineHeight: 1.1,
      }}
    >
      What happened without a system?
    </p>

    {PROBLEMS.map((item, i) => (
      <div key={item.num}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '40px 1fr',
            gap: '16px',
            padding: '20px 0',
            alignItems: 'start',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 500,
              fontSize: '12px',
              color: '#7B5CF6',
              paddingTop: '2px',
            }}
          >
            {item.num}
          </span>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
            <p
              style={{
                fontFamily: 'var(--font-darker-grotesque)',
                fontWeight: 700,
                fontSize: '15px',
                color: '#7B5CF6',
                lineHeight: 1,
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 400,
                fontSize: '14px',
                color: '#666666',
                lineHeight: 1.7,
              }}
            >
              {item.desc}
            </p>
          </div>
        </div>
        {i < PROBLEMS.length - 1 && (
          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.08)', margin: 0 }} />
        )}
      </div>
    ))}
  </div>
)

/* ─────────────────────────────────────────────────────────────
   03 — TOKEN ARCHITECTURE
───────────────────────────────────────────────────────────── */
const researchContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div
      style={{
        maxWidth: '560px',
        margin: '0 auto',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
      }}
    >
      <p
        style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 800,
          fontSize: 'clamp(15px, 1.6vw, 20px)',
          color: '#4D4D4D',
          lineHeight: 1.1,
        }}
      >
        Token architecture
      </p>
      <p
        style={{
          fontFamily: 'var(--font-dm-sans)',
          fontWeight: 400,
          fontSize: '14px',
          color: '#666666',
          lineHeight: 1.7,
        }}
      >
        3 layers that separate values from their application. This architecture ensures
        that switching a brand requires no changes to any component.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '8px', flexWrap: 'wrap' }}>
        {[
          { num: '01', name: 'Primitives',  sub: '25 base tokens' },
          { num: '02', name: 'Semantics',   sub: '103 tokens · 4 modes' },
          { num: '03', name: 'Components',  sub: 'linked to semantics' },
        ].map((l) => (
          <div key={l.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 500, fontSize: '11px', color: '#7B5CF6' }}>
              {l.num}
            </span>
            <span style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#4D4D4D' }}>
              {l.name}
            </span>
            <span style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#888888' }}>
              {l.sub}
            </span>
          </div>
        ))}
      </div>
    </div>

    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#e8e4f5' }}>
        <Image
          src="/images/edvance/tokens.png"
          alt="Token architecture — primitives, semantics, components"
          width={1400}
          height={900}
          quality={100}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        Token architecture — primitives, semantics, and components
      </p>
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────────
   04 — THE 4 BRANDS
───────────────────────────────────────────────────────────── */
const marcasContent = <BrandShowcase />

/* ─────────────────────────────────────────────────────────────
   05 — DESIGN DECISIONS
───────────────────────────────────────────────────────────── */
const BRAND_FONTS = [
  { name: 'Edvance', font: 'var(--font-montserrat), sans-serif',   color: '#7B5CF6' },
  { name: 'Kira',    font: 'var(--font-plus-jakarta), sans-serif', color: '#1D4ED8' },
  { name: 'Blink',   font: 'var(--font-nunito), sans-serif',       color: '#16A34A' },
  { name: 'Nubi',    font: 'var(--font-fredoka), cursive',         color: '#EA580C' },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '672px' }}>

    {/* Block 1 */}
    <div style={{ padding: '24px 0' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#7B5CF6', marginBottom: '8px', lineHeight: 1.1 }}>
        Brand identity
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        The first challenge was defining what made each brand unique without losing what connected them.
        We defined the user and personality of each sub-platform — professionals, teens,
        kids, and the parent ecosystem — and made visual decisions from there.
      </p>
    </div>

    <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />

    {/* Block 2 — typography with visual example */}
    <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#7B5CF6', lineHeight: 1.1, margin: 0 }}>
        Base typeface + personality typeface
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        Poppins as the universal base typeface maintains structural consistency across all 4 brands.
        Each one adds its own typeface for hierarchical elements, where the personality lives.
      </p>
      {/* Brand font examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {BRAND_FONTS.map((b) => (
          <div key={b.name} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 400,
              fontSize: '13px',
              color: '#aaaaaa',
              minWidth: '68px',
            }}>
              <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: b.color, flexShrink: 0, display: 'inline-block' }} />
              {b.name}
            </span>
            <span style={{
              fontFamily: b.font,
              fontWeight: 700,
              fontSize: '14px',
              color: '#4D4D4D',
              lineHeight: 1,
            }}>
              Interface design
            </span>
          </div>
        ))}
      </div>
    </div>

    <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />

    {/* Block 3 */}
    <div style={{ padding: '24px 0' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#7B5CF6', marginBottom: '8px', lineHeight: 1.1 }}>
        Contrast in Nubi
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        Orange as primary color failed WCAG 2.1 AA contrast ratios on white.
        Instead of changing the brand color, we took different decisions than the other three: dark text
        on brand-tinted backgrounds where orange couldn't work directly.
      </p>
    </div>

  </div>
)

/* ─────────────────────────────────────────────────────────────
   06 — TECHNICAL PROCESS
───────────────────────────────────────────────────────────── */
const PROCESO_BLOCKS = [
  {
    title: 'Architecture in Figma',
    text: 'We organized Figma Variables into three layers: primitives with base values, semantics with a functional role that change per brand, and components linked to semantics. A button never has #1D4ED8 hardcoded — it consumes color/primary, which points to the active brand\'s value.',
  },
  {
    title: 'Why 3 layers and not 2',
    text: 'Primitives exist so that semantics don\'t have hardcoded values. If Nubi\'s orange changes, you edit one primitive and all 103 semantic tokens update automatically. Without primitives, every change requires editing token by token.',
  },
  {
    title: 'QA across all 4 modes',
    text: 'Testing wasn\'t left for the end. Every time a new token or component was added, it was immediately verified across all four modes. This prevented errors from propagating between brands.',
  },
]

const procesoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    {/* Stats row */}
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        maxWidth: '540px',
        margin: '0 auto',
        width: '100%',
      }}
      className="proceso-stats"
    >
      {[
        { value: '3 layers',     label: 'of tokens' },
        { value: '4 modes',      label: 'per collection' },
        { value: 'Continuous QA', label: 'from day 1' },
      ].map((s, i) => (
        <div key={s.value} style={{ padding: '20px 16px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#4D4D4D', marginBottom: '4px', lineHeight: 1 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '12px', color: '#888888', margin: 0 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>

    {/* Text blocks */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '672px' }}>
      {PROCESO_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <div style={{ padding: '24px 0' }}>
            <p style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 700,
              fontSize: '16px',
              color: '#7B5CF6',
              marginBottom: '8px',
              lineHeight: 1.1,
            }}>
              {block.title}
            </p>
            <p style={{
              fontFamily: 'var(--font-dm-sans)',
              fontWeight: 400,
              fontSize: '15px',
              color: '#666666',
              lineHeight: 1.7,
              margin: 0,
            }}>
              {block.text}
            </p>
          </div>
          {i < PROCESO_BLOCKS.length - 1 && (
            <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
          )}
        </div>
      ))}
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────────
   07 — FINAL RESULT
───────────────────────────────────────────────────────────── */
const resultadoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    {/* Header */}
    <div>
      <p style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 800,
        fontSize: 'clamp(20px, 2.2vw, 28px)',
        color: '#4D4D4D',
        lineHeight: 1,
        marginBottom: '8px',
      }}>
        Final result
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#888888', margin: 0 }}>
        5 screens × 3 brands = 15 frames. Switching between brands is just one click.
      </p>
    </div>

    {/* Login carousel */}
    <LoginCarousel />

    {/* Figma link */}
    <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '4px' }}>
      <FigmaLink href="https://figma.com" centered />
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────────
   08 — LEARNINGS
───────────────────────────────────────────────────────────── */
const LEARNINGS = [
  { title: 'Semantic tokens are the key', body: 'Without the semantic layer, changing a brand would require touching every component individually.' },
  { title: 'Document while you design', body: 'Leaving documentation for the end means losing the context behind each decision.' },
  { title: 'The system exists for others', body: 'Every decision was made thinking about the next designer who will use this.' },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNINGS.map((item, i) => (
      <div key={item.title}>
        <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '14px', color: '#7B5CF6', lineHeight: 1.1, margin: 0 }}>
            {item.title}
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
            {item.body}
          </p>
        </div>
        {i < LEARNINGS.length - 1 && (
          <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
        )}
      </div>
    ))}
  </div>
)

/* ─────────────────────────────────────────────────────────────
   ACCORDION DATA + EXPORT
───────────────────────────────────────────────────────────── */
const SECTIONS: AccordionSection[] = [
  { id: 'overview',     num: '01', title: 'Overview',           content: overviewContent },
  { id: 'problema',     num: '02', title: 'The Problem',        content: problemaContent },
  { id: 'research',     num: '03', title: 'Token Architecture', content: researchContent },
  { id: 'marcas',       num: '04', title: 'The 4 Brands',       content: marcasContent },
  { id: 'decisiones',   num: '05', title: 'Design Decisions',   content: decisionesContent },
  { id: 'proceso',      num: '06', title: 'Technical Process',  content: procesoContent },
  { id: 'resultado',    num: '07', title: 'Final Result',       content: resultadoContent },
  { id: 'aprendizajes', num: '08', title: 'Learnings',          content: aprendizajesContent },
]

export default function EdvanceSections() {
  return <EdvanceAccordion sections={SECTIONS} />
}
