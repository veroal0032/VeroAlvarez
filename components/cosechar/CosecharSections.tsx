'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import SeasonShowcase from './SeasonShowcase'

/* ─── Accordion ──────────────────────────────────────────── */
interface Section {
  id: string
  num: string
  title: string
  content: React.ReactNode
}

function AccordionItem({ section, isOpen, onToggle }: { section: Section; isOpen: boolean; onToggle: () => void }) {
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
        style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left', gap: '16px' }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '12px', color: '#1a6a8a', letterSpacing: '0.04em', minWidth: '24px' }}>
            {section.num}
          </span>
          <span style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '22px', color: '#333333', lineHeight: 1 }}>
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
            transition={{ height: { type: 'spring', stiffness: 300, damping: 28 }, opacity: { duration: 0.2 } }}
            style={{ overflow: 'hidden' }}
          >
            <motion.div
              initial={{ y: 12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 8, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
              style={{ padding: '4px 24px 28px' }}
            >
              {section.content}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

/* ─── Helpers ────────────────────────────────────────────── */
const DG = 'var(--font-darker-grotesque)'
const IT = 'var(--font-inter)'

function TextBlock({ title, text, accentColor = '#1a6a8a' }: { title: string; text: string; accentColor?: string }) {
  return (
    <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
      <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '18px', color: accentColor, lineHeight: 1.1, margin: 0 }}>{title}</p>
      <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, margin: 0 }}>{text}</p>
    </div>
  )
}

function HR() {
  return <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
}

/* ─── Sections ───────────────────────────────────────────── */

/* 01 — Start Point */
const startPointContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', width: '100%' }}>
    {/* Quote — centrada */}
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{
        background: '#EBF8FF',
        borderRadius: '12px',
        padding: '20px 32px',
        border: '1.5px solid #92DFFE',
        textAlign: 'center',
        maxWidth: '520px',
      }}>
        <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '22px', color: '#1a6a8a', lineHeight: 1.35, margin: 0 }}>
          "Llegar a un país nuevo significa aprender todo de cero, incluso las estaciones."
        </p>
      </div>
    </div>
    {/* Párrafo — izquierda */}
    <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, margin: 0, textAlign: 'left' }}>
      Ese fue el punto de partida de Cosechar. No un brief de cliente, no una tarea académica —
      una necesidad real que surgió de vivir el desconcierto de las estaciones invertidas en Argentina.
    </p>
  </div>
)

/* 02 — El problema */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', width: '100%' }}>
    {/* Stat — centrada */}
    <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
        <span style={{ fontFamily: DG, fontWeight: 900, fontSize: '96px', lineHeight: 1, color: '#92DFFE', letterSpacing: '-0.03em' }}>
          0
        </span>
        <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '20px', color: '#333', lineHeight: 1.2, margin: 0 }}>
          apps locales resuelven esta problemática
        </p>
        <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '14px', color: '#888', lineHeight: 1.6, maxWidth: '400px', margin: 0 }}>
          Al momento de construir Cosechar, ninguna aplicación argentina usaba datos oficiales
          para informar estacionalidad de manera simple.
        </p>
      </div>
    </div>
    {/* Párrafo — izquierda */}
    <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, margin: 0, textAlign: 'left' }}>
      En Argentina el verano es en diciembre y el invierno en julio. Para visitantes e inmigrantes,
      entender qué está en temporada — y por qué importa — no es obvio. Comprar fuera de temporada
      significa pagar más por productos con menos sabor, sin saber que existe una alternativa más
      fresca y económica.
    </p>
  </div>
)

/* 03 — Decisiones de diseño */
const DECISION_BLOCKS = [
  {
    title: 'Datos oficiales, nada inventado',
    text: 'Toda la información de estacionalidad viene del Ministerio de Economía de Argentina. Eso le da credibilidad real a la app — y significa que el contenido no necesita actualizarse manualmente.',
  },
  {
    title: 'Detalle por producto',
    text: 'Cada ítem tiene calorías, vitaminas, minerales y una descripción con contexto local argentino. No es solo un listado — es información útil para tomar decisiones.',
  },
  {
    title: 'UI estacional',
    text: 'El color de la app cambia según la estación activa. El diseño comunica sin texto adicional — al abrir la app ya sabés en qué época del año estás.',
  },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
      <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '15px', color: '#666', lineHeight: 1.7, margin: '0 0 24px' }}>
        Tres decisiones definieron el producto:
      </p>
      {DECISION_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <TextBlock title={block.title} text={block.text} />
          {i < DECISION_BLOCKS.length - 1 && <HR />}
        </div>
      ))}
    </div>
    <SeasonShowcase />
  </div>
)

/* 04 — Proceso técnico */
const PROCESS_STEPS = [
  { num: '01', title: 'Investigación',    desc: 'Identificación del problema, fuentes oficiales y definición del usuario objetivo. Datos del Ministerio de Economía de Argentina.' },
  { num: '02', title: 'Identidad visual', desc: 'Paleta estacional, tipografía y sistema de colores por temporada. Cada estación tiene su propio lenguaje visual.' },
  { num: '03', title: 'Wireframes',       desc: 'Flujo de navegación, estructura de contenido y jerarquía de pantallas en Figma antes de escribir una línea de código.' },
  { num: '04', title: 'Build y deploy',   desc: 'Desarrollo en React con vibe coding, deploy en Vercel. De Figma al navegador en tiempo récord.' },
]

const procesoContent = (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', maxWidth: '672px' }} className="proceso-grid">
    {PROCESS_STEPS.map((step) => (
      <div key={step.num} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <span style={{ fontFamily: DG, fontWeight: 900, fontSize: '48px', lineHeight: 1, color: '#92DFFE', letterSpacing: '-0.02em' }}>
          {step.num}
        </span>
        <p style={{ fontFamily: DG, fontWeight: 700, fontSize: '16px', color: '#1a6a8a', margin: 0, lineHeight: 1.2 }}>
          {step.title}
        </p>
        <p style={{ fontFamily: IT, fontWeight: 400, fontSize: '14px', color: '#666', lineHeight: 1.7, margin: 0 }}>
          {step.desc}
        </p>
      </div>
    ))}
  </div>
)

/* 05 — Resultado final */
function ResultadoContent() {
  const [hover, setHover] = useState(false)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'center' }}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ type: 'spring', stiffness: 280, damping: 24 }}
        style={{ maxWidth: '480px', width: '100%' }}
      >
        <Image
          src="/images/cosechar/resultado.png"
          alt="Cosechar — resultado final"
          width={2860}
          height={2048}
          quality={100}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </motion.div>
      <motion.a
        href="https://cosechar.vercel.app/"
        target="_blank"
        rel="noopener noreferrer"
        animate={{
          y: hover ? -2 : 0,
          boxShadow: hover ? '0 8px 20px rgba(61,122,78,0.3)' : '0 0px 0px rgba(61,122,78,0)',
          filter: hover ? 'brightness(110%)' : 'brightness(100%)',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: '#3D7A4E',
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
        Frutas y vegetales de temporada →
      </motion.a>
    </div>
  )
}
const resultadoContent = <ResultadoContent />

/* 06 — Aprendizajes */
const LEARNINGS = [
  {
    title: 'Diseñar para mobile aunque el contexto sea desktop',
    text: 'Aunque la app vive en desktop, está en versión responsive para teléfono. La verdad es que el usuario buscaría la información pocas veces desde su casa — la mayoría del tiempo desde un celular, en el mercado o en el supermercado.',
  },
  {
    title: 'La fuente veraz hace que el producto se sostenga solo',
    text: 'Usar datos oficiales significa que la página vive sin grandes modificaciones. No hay que actualizar el contenido manualmente — la información es confiable y estable.',
  },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNINGS.map((item, i) => (
      <div key={item.title}>
        <TextBlock title={item.title} text={item.text} />
        {i < LEARNINGS.length - 1 && <HR />}
      </div>
    ))}
  </div>
)

/* ─── Sections array + export ────────────────────────────── */
const SECTIONS: Section[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',          content: startPointContent },
  { id: 'problema',     num: '02', title: 'El problema',          content: problemaContent },
  { id: 'decisiones',   num: '03', title: 'Decisiones de diseño', content: decisionesContent },
  { id: 'proceso',      num: '04', title: 'Proceso técnico',      content: procesoContent },
  { id: 'resultado',    num: '05', title: 'Resultado final',      content: resultadoContent },
  { id: 'aprendizajes', num: '06', title: 'Aprendizajes',         content: aprendizajesContent },
]

export default function CosecharSections() {
  const [openSections, setOpenSections] = useState<string[]>(['start-point'])
  const toggle = (id: string) =>
    setOpenSections((prev) => prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id])

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
