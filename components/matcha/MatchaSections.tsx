'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import EdvanceAccordion, { type AccordionSection } from '@/components/EdvanceAccordion'

const ACCENT = '#155020'

/* ─── Shared helpers ─────────────────────────────────────── */
function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '15px', color: ACCENT, lineHeight: 1.1, margin: 0 }}>
        {title}
      </p>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

function HR() {
  return <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
}

/* ─── 01 — Start Point ───────────────────────────────────── */
const startPointContent = (
  <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, maxWidth: '672px', margin: 0 }}>
    This project came from a real need: streamlining order-taking at a matcha specialty café.
    Unlike other projects, I also was the architect who led the build-out of the space itself,
    so the look and feel was already familiar — I knew exactly what the brand was going for.
  </p>
)

/* ─── 02 — The Problem ───────────────────────────────────── */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    <TextBlock
      title="Customers prefer to order on their own"
      text="Especially during peak hours, waiting for staff creates friction. A self-service kiosk eliminates that wait and frees the team for other tasks."
    />
    <HR />
    <TextBlock
      title="A menu without images limits the ticket"
      text="Showing photos and visual descriptions of products increases the average ticket — customers discover and order things they wouldn't have without seeing them."
    />
    <HR />
    <TextBlock
      title="No real behavior data"
      text="Without a digital system there was no way to know what customers ordered, at what times, or which products weren't working. The kiosk generates that data automatically."
    />
  </div>
)

/* ─── 03 — Design Decisions ──────────────────────────────── */
function DecisionesContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, maxWidth: '672px', margin: 0 }}>
        Color and menu architecture decisions came directly from the brand — nothing had to be invented from scratch.
        Three premises guided the design: completely intuitive for any customer, real product images visible at all times,
        and an admin session for the team to manage orders and payments in real time.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', background: '#e8f0e8' }}
      >
        <Image
          src="/images/matcha/menu.png"
          alt="Matcha Chá kiosk menu"
          width={1400}
          height={900}
          quality={100}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>
    </div>
  )
}

/* ─── 04 — Technical Process ─────────────────────────────── */
const PROCESO_BLOCKS = [
  {
    title: 'From sketch to product',
    text: 'The first prototype was built in Google Slides to validate the flow with the client before touching Figma. Once the flow was approved, it moved to Figma Make to build the component and token foundation.',
  },
  {
    title: 'Tech stack',
    text: 'Claude Code handled Supabase connections, visual changes, and menu transitions. PostHog was integrated to record real customer behavior — which products they explore, where they drop off, which combinations they choose.',
  },
  {
    title: 'Admin session',
    text: 'Beyond the customer-facing kiosk, the system includes an admin view to manage orders and payments in real time without relying on an external system.',
  },
]

const procesoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, 1fr)',
        borderTop: '1px solid rgba(0,0,0,0.08)',
        borderBottom: '1px solid rgba(0,0,0,0.08)',
        maxWidth: '520px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {[
        { value: 'Figma Make', label: 'base design' },
        { value: 'Supabase',   label: 'database' },
        { value: 'PostHog',    label: 'analytics' },
      ].map((s, i) => (
        <div key={s.value} style={{ padding: '16px 8px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: 'clamp(14px, 2vw, 20px)', color: ACCENT, marginBottom: '4px', lineHeight: 1.2 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, fontSize: '11px', color: '#888', margin: 0 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
      {PROCESO_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <TextBlock title={block.title} text={block.text} />
          {i < PROCESO_BLOCKS.length - 1 && <HR />}
        </div>
      ))}
    </div>
  </div>
)

/* ─── 05 — Final Result ──────────────────────────────────── */
function ResultadoContent() {
  const [btnHover, setBtnHover] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
      <video
        src="/images/matcha/video.mp4"
        autoPlay
        muted
        loop
        playsInline
        style={{ width: '100%', borderRadius: '16px', boxShadow: '0 8px 40px rgba(0,0,0,0.08)', display: 'block' }}
      />
      <motion.a
        href="https://mask-ritzy-25054031.figma.site/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: btnHover ? -2 : 0,
          boxShadow: btnHover ? '0 8px 20px rgba(21,80,32,0.3)' : '0 0px 0px rgba(21,80,32,0)',
          filter: btnHover ? 'brightness(110%)' : 'brightness(100%)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          background: ACCENT,
          color: '#ffffff',
          borderRadius: '100px',
          padding: '14px 32px',
          fontFamily: 'var(--font-darker-grotesque)',
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        Order here →
      </motion.a>
    </div>
  )
}

/* ─── 06 — Learnings ─────────────────────────────────────── */
const LEARNING_BLOCKS = [
  {
    title: 'Figma Make works better with prior structure',
    text: 'When the goal is clear and a solid component and token foundation is managed from the start, Figma Make is noticeably more efficient. Improvising structure on the fly costs twice as much.',
  },
  {
    title: 'Simplicity is the metric',
    text: 'The more intuitive and frictionless the ordering process is for the customer, the more effective the design. Every point of friction removed translates directly into conversion.',
  },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNING_BLOCKS.map((block, i) => (
      <div key={block.title}>
        <TextBlock title={block.title} text={block.text} />
        {i < LEARNING_BLOCKS.length - 1 && <HR />}
      </div>
    ))}
  </div>
)

/* ─── Sections ───────────────────────────────────────────── */
const SECTIONS: AccordionSection[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',      content: startPointContent },
  { id: 'problema',     num: '02', title: 'The Problem',      content: problemaContent },
  { id: 'decisiones',   num: '03', title: 'Design Decisions', content: <DecisionesContent /> },
  { id: 'proceso',      num: '04', title: 'Tech Process',     content: procesoContent },
  { id: 'resultado',    num: '05', title: 'Final Result',     content: <ResultadoContent /> },
  { id: 'aprendizajes', num: '06', title: 'Learnings',        content: aprendizajesContent },
]

export default function MatchaSections() {
  return <EdvanceAccordion sections={SECTIONS} accentColor={ACCENT} defaultOpen="start-point" />
}
