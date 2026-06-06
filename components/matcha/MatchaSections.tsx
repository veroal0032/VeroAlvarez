'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

/* ─── Accordion primitives ───────────────────────────────── */

type SectionContent = React.ReactNode | ((isOpen: boolean) => React.ReactNode)

interface Section {
  id: string
  num: string
  title: string
  content: SectionContent
}

function AccordionItem({
  section,
  isOpen,
  onToggle,
}: {
  section: Section
  isOpen: boolean
  onToggle: () => void
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
          <span style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 500,
            fontSize: '12px',
            color: '#155020',
            letterSpacing: '0.04em',
            minWidth: '24px',
          }}>
            {section.num}
          </span>
          <span style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '22px',
            color: '#333333',
            lineHeight: 1,
          }}>
            {section.title}
          </span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ display: 'inline-flex', alignItems: 'center', flexShrink: 0, color: '#999' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 3L11 8L6 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.span>
      </button>

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

/* ─── Shared helpers ─────────────────────────────────────── */

const DG = 'var(--font-darker-grotesque)'
const IT = 'var(--font-inter)'

function TextBlock({ title, text }: { title: string; text: string }) {
  return (
    <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '18px', color: '#155020', lineHeight: 1.1, margin: 0 }}>
        {title}
      </p>
      <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, margin: 0 }}>
        {text}
      </p>
    </div>
  )
}

function HR() {
  return <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
}

/* ─── Section content ────────────────────────────────────── */

/* 01 — Start Point */
const startPointContent = (
  <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, maxWidth: '672px', margin: 0 }}>
    Este proyecto nació de una necesidad real: agilizar la toma de pedidos en una cafetería
    especializada en matcha. A diferencia de otros proyectos, acá también fui la arquitecta que
    lideró la creación del local, por lo que el look and feel ya lo manejaba y sabía lo que la
    marca quería buscar.
  </p>
)

/* 02 — El problema */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    <TextBlock
      title="Los clientes prefieren pedir solos"
      text="Especialmente en horas pico, esperar al personal genera fricción. Un kiosco de autoservicio elimina esa espera y libera al equipo para otras tareas."
    />
    <HR />
    <TextBlock
      title="El menú sin imágenes limita el ticket"
      text="Ver fotos y descripciones visuales de los productos aumenta el ticket promedio — el cliente descubre y pide cosas que no hubiera pedido sin verlas."
    />
    <HR />
    <TextBlock
      title="Sin datos reales de comportamiento"
      text="Sin un sistema digital no había forma de saber qué pedían los clientes, en qué horarios, ni qué productos fallaban. El kiosco genera esos datos automáticamente."
    />
  </div>
)

/* 03 — Decisiones de diseño */
function DecisionesContent() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
      <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, maxWidth: '672px', margin: 0 }}>
        Las decisiones de color y arquitectura del menú vinieron del branding de la marca —
        no hubo que inventar nada desde cero. Las premisas fueron tres: que fuera completamente
        intuitivo para cualquier cliente, que mostrara imágenes reales de los productos, y que
        el equipo tuviera una sesión de administrador para manejar pedidos y pagos en tiempo real.
      </p>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        style={{
          borderRadius: '16px',
          overflow: 'hidden',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          background: '#e8f0e8',
        }}
      >
        <Image
          src="/images/matcha/menu.png"
          alt="Menú del kiosco Matcha Chá"
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
const decisionesContent = <DecisionesContent />

/* 04 — Proceso técnico */
const PROCESO_BLOCKS = [
  {
    title: 'Del boceto al producto',
    text: 'El primer prototipo se hizo en Google Slides para validar el flujo con el cliente antes de tocar Figma. Una vez aprobado el flujo, se pasó a Figma Make para construir la base de componentes y tokens.',
  },
  {
    title: 'Stack técnico',
    text: 'Claude Code se usó para las conexiones a Supabase, los cambios visuales y las transiciones del menú. PostHog quedó integrado para registrar el comportamiento real de los clientes — qué productos exploran, en qué punto abandonan, qué combinaciones eligen.',
  },
  {
    title: 'Sesión de administrador',
    text: 'Además del kiosco para clientes, el sistema incluye una vista de administrador para gestionar pedidos y pagos en tiempo real sin depender de un sistema externo.',
  },
]

const procesoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    {/* Stats */}
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
        { value: 'Figma Make',  label: 'diseño base' },
        { value: 'Supabase',    label: 'base de datos' },
        { value: 'PostHog',     label: 'estadísticas' },
      ].map((s, i) => (
        <div key={s.value} style={{ padding: '20px 16px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
          <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '24px', color: '#155020', marginBottom: '4px', lineHeight: 1 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '12px', color: '#888', margin: 0 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>

    {/* Text blocks */}
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

/* 05 — Resultado final */
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
        style={{
          width: '100%',
          borderRadius: '16px',
          boxShadow: '0 8px 40px rgba(0,0,0,0.08)',
          display: 'block',
        }}
      />
      <motion.a
        href="https://mask-ritzy-25054031.figma.site/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: btnHover ? -2 : 0,
          boxShadow: btnHover
            ? '0 8px 20px rgba(21,80,32,0.3)'
            : '0 0px 0px rgba(21,80,32,0)',
          filter: btnHover ? 'brightness(110%)' : 'brightness(100%)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        style={{
          background: '#155020',
          color: '#ffffff',
          borderRadius: '100px',
          padding: '14px 32px',
          fontFamily: DG,
          fontWeight: 700,
          fontSize: '15px',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: '6px',
        }}
      >
        Ordená aquí →
      </motion.a>
    </div>
  )
}
const resultadoContent = <ResultadoContent />

/* 06 — Aprendizajes */
const LEARNING_BLOCKS = [
  {
    title: 'Figma Make funciona mejor con estructura previa',
    text: 'Cuando se tiene claro el objetivo y se administra una base sólida de componentes y tokens desde el inicio, Figma Make es notablemente más eficiente. Improvisar la estructura sobre la marcha cuesta el doble.',
  },
  {
    title: 'La simplicidad es la métrica',
    text: 'Mientras más intuitivo y sencillo es el proceso para el cliente, más eficiente es el diseño. Cada fricción eliminada en el flujo de pedido se traduce directamente en conversión.',
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

/* ─── Sections array ─────────────────────────────────────── */
const SECTIONS: Section[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',         content: startPointContent },
  { id: 'problema',     num: '02', title: 'El problema',         content: problemaContent },
  { id: 'decisiones',   num: '03', title: 'Decisiones de diseño',content: decisionesContent },
  { id: 'proceso',      num: '04', title: 'Proceso técnico',     content: procesoContent },
  { id: 'resultado',    num: '05', title: 'Resultado final',     content: resultadoContent },
  { id: 'aprendizajes', num: '06', title: 'Aprendizajes',        content: aprendizajesContent },
]

/* ─── Export ─────────────────────────────────────────────── */
export default function MatchaSections() {
  const [openSections, setOpenSections] = useState<string[]>(['start-point'])

  const toggle = (id: string) =>
    setOpenSections((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    )

  return (
    <div>
      {SECTIONS.map((section) => (
        <AccordionItem
          key={section.id}
          section={section}
          isOpen={openSections.includes(section.id)}
          onToggle={() => toggle(section.id)}
        />
      ))}
    </div>
  )
}
