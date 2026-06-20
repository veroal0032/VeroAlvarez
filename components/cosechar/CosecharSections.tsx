'use client'

import Image from 'next/image'
import EdvanceAccordion, { type AccordionSection } from '@/components/EdvanceAccordion'
import SeasonShowcase from './SeasonShowcase'

const ACCENT = '#1a6a8a'

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

/* ── 01 — START POINT ─────────────────────────────────────── */
const startPointContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{
        background: '#EBF8FF',
        borderRadius: '12px',
        padding: '20px 32px',
        border: `1.5px solid #92DFFE`,
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
          "Moving to a new country means learning everything from scratch — even the seasons."
        </p>
      </div>
    </div>
    <p style={T.body}>
      That was the starting point for Cosechar. Not a client brief, not an academic assignment — a real need that came from living through the disorientation of reversed seasons in Argentina.
    </p>
  </div>
)

/* ── 02 — THE PROBLEM ─────────────────────────────────────── */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 900,
          fontSize: '96px',
          lineHeight: 1,
          color: '#92DFFE',
          letterSpacing: '-0.03em',
        }}>
          0
        </span>
        <p style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 700,
          fontSize: '20px',
          color: '#4D4D4D',
          lineHeight: 1.2,
          margin: 0,
        }}>
          local apps solve this problem
        </p>
        <p style={{ ...T.body, textAlign: 'center', maxWidth: '400px' }}>
          At the time Cosechar was built, no Argentine app used official data to communicate seasonality in a simple way.
        </p>
      </div>
    </div>
    <p style={T.body}>
      In Argentina, summer is in December and winter is in July. For visitors and immigrants, understanding what's in season — and why it matters — isn't obvious. Buying out of season means paying more for produce with less flavor, without knowing a fresher, cheaper alternative exists.
    </p>
  </div>
)

/* ── 03 — DESIGN DECISIONS ────────────────────────────────── */
const DECISION_BLOCKS = [
  {
    title: 'Official data, nothing made up',
    body: 'All seasonality information comes from the Argentine Ministry of Economy. That gives the app real credibility — and means the content doesn\'t need to be updated manually.',
  },
  {
    title: 'Detail per product',
    body: 'Each item includes calories, vitamins, minerals and a description with local Argentine context. It\'s not just a list — it\'s useful information for making decisions.',
  },
  {
    title: 'Seasonal UI',
    body: 'The app\'s color palette changes with the active season. The design communicates without extra text — opening the app immediately tells you what time of year it is.',
  },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
      <p style={{ ...T.body, marginBottom: '24px' }}>Three decisions defined the product:</p>
      {DECISION_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
            <p style={T.heading()}>{block.title}</p>
            <p style={T.body}>{block.body}</p>
          </div>
          {i < DECISION_BLOCKS.length - 1 && <hr style={T.hr} />}
        </div>
      ))}
    </div>
    <SeasonShowcase />
  </div>
)

/* ── 04 — TECH PROCESS ────────────────────────────────────── */
const PROCESS_STEPS = [
  { num: '01', title: 'Research',        desc: 'Problem identification, official sources and target user definition. Data from the Argentine Ministry of Economy.' },
  { num: '02', title: 'Visual identity', desc: 'Seasonal palette, typography and color system per season. Each season has its own visual language.' },
  { num: '03', title: 'Wireframes',      desc: 'Navigation flow, content structure and screen hierarchy in Figma before writing a single line of code.' },
  { num: '04', title: 'Build & deploy',  desc: 'Development in React with vibe coding, deployed on Vercel. From Figma to the browser at record speed.' },
]

const procesoContent = (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '672px' }}>
    {PROCESS_STEPS.map((step) => (
      <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 900,
          fontSize: '48px',
          lineHeight: 1,
          color: '#92DFFE',
          letterSpacing: '-0.02em',
        }}>
          {step.num}
        </span>
        <p style={T.heading()}>{step.title}</p>
        <p style={T.body}>{step.desc}</p>
      </div>
    ))}
  </div>
)

/* ── 05 — FINAL RESULT ────────────────────────────────────── */
const resultadoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#EBF8FF', maxWidth: '480px', margin: '0 auto' }}>
      <Image
        src="/images/cosechar/resultado.png"
        alt="Cosechar — final result"
        width={2860}
        height={2048}
        quality={100}
        sizes="50vw"
        style={{ width: '100%', height: 'auto', display: 'block' }}
      />
    </div>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <a
        href="https://cosechar.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          background: '#3D7A4E',
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
        Fruits & vegetables in season →
      </a>
    </div>
  </div>
)

/* ── 06 — LEARNINGS ───────────────────────────────────────── */
const LEARNINGS = [
  {
    title: 'Design for mobile even when the context is desktop',
    body: 'Although the app lives on desktop, it\'s fully responsive for mobile. The reality is that users would look up this information on their phone — at the market or the supermarket, not at home.',
  },
  {
    title: 'A trustworthy source makes the product sustain itself',
    body: 'Using official data means the site lives without major updates. No need to manually refresh content — the information is reliable and stable.',
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

/* ── ACCORDION DATA ───────────────────────────────────────── */
const SECTIONS: AccordionSection[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',      content: startPointContent },
  { id: 'problema',     num: '02', title: 'The Problem',       content: problemaContent },
  { id: 'decisiones',   num: '03', title: 'Design Decisions',  content: decisionesContent },
  { id: 'proceso',      num: '04', title: 'Tech Process',      content: procesoContent },
  { id: 'resultado',    num: '05', title: 'Final Result',      content: resultadoContent },
  { id: 'aprendizajes', num: '06', title: 'Learnings',         content: aprendizajesContent },
]

export default function CosecharSections() {
  return (
    <EdvanceAccordion
      sections={SECTIONS}
      accentColor={ACCENT}
      defaultOpen="start-point"
    />
  )
}
