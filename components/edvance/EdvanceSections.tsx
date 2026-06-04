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
   02 — EL PROBLEMA
───────────────────────────────────────────────────────────── */
const PROBLEMS = [
  {
    num: '01',
    title: 'Fragmentación visual',
    desc: 'Cada equipo diseña sus propios componentes. La misma UI tiene 4 versiones distintas.',
  },
  {
    num: '02',
    title: 'Retrabajo constante',
    desc: 'Los cambios de marca requieren actualizar decenas de archivos manualmente.',
  },
  {
    num: '03',
    title: 'Difícil de escalar',
    desc: 'Incorporar un nuevo producto significa empezar desde cero sin una base común.',
  },
]

const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '680px' }}>
    <p
      style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 800,
        fontSize: 'clamp(20px, 2.2vw, 26px)',
        color: '#333333',
        marginBottom: '24px',
        lineHeight: 1.1,
      }}
    >
      ¿Qué pasaba sin un sistema?
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
              fontFamily: 'var(--font-inter)',
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
                fontSize: '19px',
                color: '#7B5CF6',
                lineHeight: 1,
              }}
            >
              {item.title}
            </p>
            <p
              style={{
                fontFamily: 'var(--font-inter)',
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
   03 — ARQUITECTURA DE TOKENS
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
          fontSize: 'clamp(20px, 2.2vw, 26px)',
          color: '#333333',
          lineHeight: 1.1,
        }}
      >
        Arquitectura de tokens
      </p>
      <p
        style={{
          fontFamily: 'var(--font-inter)',
          fontWeight: 400,
          fontSize: '14px',
          color: '#666666',
          lineHeight: 1.7,
        }}
      >
        3 capas que separan los valores de su aplicación. Esta arquitectura garantiza que
        cambiar una marca no requiere tocar ningún componente.
      </p>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: '8px', flexWrap: 'wrap' }}>
        {[
          { num: '01', name: 'Primitivos',  sub: '25 tokens base' },
          { num: '02', name: 'Semánticos',  sub: '103 tokens · 4 modos' },
          { num: '03', name: 'Componentes', sub: 'vinculados a semánticos' },
        ].map((l) => (
          <div key={l.num} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px' }}>
            <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '11px', color: '#7B5CF6' }}>
              {l.num}
            </span>
            <span style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#333333' }}>
              {l.name}
            </span>
            <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#888888' }}>
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
          alt="Arquitectura de tokens — primitivos, semánticos, componentes"
          width={1400}
          height={900}
          quality={100}
          sizes="100vw"
          style={{ width: '100%', height: 'auto', display: 'block' }}
        />
      </div>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        Arquitectura de tokens — primitivos, semánticos y componentes
      </p>
    </div>
  </div>
)

/* ─────────────────────────────────────────────────────────────
   04 — LAS 4 MARCAS
───────────────────────────────────────────────────────────── */
const marcasContent = <BrandShowcase />

/* ─────────────────────────────────────────────────────────────
   05 — DECISIONES DE DISEÑO
───────────────────────────────────────────────────────────── */
const BRAND_FONTS = [
  { name: 'Edvance', font: 'var(--font-montserrat), sans-serif',   color: '#7B5CF6' },
  { name: 'Kira',    font: 'var(--font-plus-jakarta), sans-serif', color: '#1D4ED8' },
  { name: 'Blink',   font: 'var(--font-nunito), sans-serif',       color: '#16A34A' },
  { name: 'Nubi',    font: 'var(--font-fredoka), cursive',         color: '#EA580C' },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0', maxWidth: '672px' }}>

    {/* Bloque 1 */}
    <div style={{ padding: '24px 0' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '20px', color: '#7B5CF6', marginBottom: '8px', lineHeight: 1.1 }}>
        Identidad de marca
      </p>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        El primer desafío fue definir qué hacía única a cada marca sin perder lo que las conectaba.
        Definimos el usuario y la personalidad de cada sub-plataforma: profesionales, adolescentes,
        niños y el ecosistema madre, y desde ahí tomamos las decisiones visuales.
      </p>
    </div>

    <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />

    {/* Bloque 2 — tipografías con ejemplo visual */}
    <div style={{ padding: '24px 0', display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '20px', color: '#7B5CF6', lineHeight: 1.1, margin: 0 }}>
        Tipografía base + tipografía de personalidad
      </p>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        Poppins como tipografía base universal mantiene la coherencia estructural entre las 4 marcas.
        Cada una suma su propia tipografía para elementos jerárquicos, donde vive la personalidad.
      </p>
      {/* Brand font examples */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {BRAND_FONTS.map((b) => (
          <div key={b.name} style={{ display: 'flex', alignItems: 'baseline', gap: '12px' }}>
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '5px',
              fontFamily: 'var(--font-inter)',
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
              fontSize: '18px',
              color: '#333333',
              lineHeight: 1,
            }}>
              Diseño de interfaces
            </span>
          </div>
        ))}
      </div>
    </div>

    <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />

    {/* Bloque 3 */}
    <div style={{ padding: '24px 0' }}>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '20px', color: '#7B5CF6', marginBottom: '8px', lineHeight: 1.1 }}>
        Contraste en Nubi
      </p>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
        El naranja como color primario fallaba los ratios de contraste WCAG 2.1 AA sobre blanco.
        En vez de cambiar el color de marca, tomamos decisiones distintas a las otras tres: texto
        oscuro sobre fondos con tinte de la marca donde el naranja no podía funcionar directamente.
      </p>
    </div>

  </div>
)

/* ─────────────────────────────────────────────────────────────
   06 — PROCESO TÉCNICO
───────────────────────────────────────────────────────────── */
const PROCESO_BLOCKS = [
  {
    title: 'Arquitectura en Figma',
    text: 'Organizamos las Variables de Figma en tres capas: primitivos con los valores base, semánticos con rol funcional que cambian por marca, y componentes vinculados a semánticos. Un botón nunca tiene #1D4ED8 hardcodeado — consume color/primary, que apunta al valor de la marca activa.',
  },
  {
    title: 'Por qué 3 capas y no 2',
    text: 'Los primitivos existen para que los semánticos no tengan valores hardcodeados. Si el naranja de Nubi cambia, se edita un primitivo y los 103 tokens semánticos se actualizan solos. Sin primitivos, cada cambio requiere editar token por token.',
  },
  {
    title: 'QA en los 4 modos',
    text: 'El testing no fue al final. Cada vez que se agregaba un token o componente nuevo, se verificaba en los cuatro modos inmediatamente. Eso evitó que los errores se propagaran entre marcas.',
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
        { value: '3 capas',      label: 'de tokens' },
        { value: '4 modos',      label: 'por colección' },
        { value: 'QA continuo',  label: 'desde el día 1' },
      ].map((s, i) => (
        <div key={s.value} style={{ padding: '20px 16px', textAlign: 'center', borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '28px', color: '#333333', marginBottom: '4px', lineHeight: 1 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#888888', margin: 0 }}>
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
              fontSize: '20px',
              color: '#7B5CF6',
              marginBottom: '8px',
              lineHeight: 1.1,
            }}>
              {block.title}
            </p>
            <p style={{
              fontFamily: 'var(--font-inter)',
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
   07 — RESULTADO FINAL
───────────────────────────────────────────────────────────── */
const resultadoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
    {/* Header */}
    <div>
      <p style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 800,
        fontSize: 'clamp(26px, 3vw, 36px)',
        color: '#333333',
        lineHeight: 1,
        marginBottom: '8px',
      }}>
        Resultado final
      </p>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#888888', margin: 0 }}>
        5 pantallas × 3 marcas = 15 frames. El cambio entre marcas es solo un click.
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
   08 — APRENDIZAJES
───────────────────────────────────────────────────────────── */
const LEARNINGS = [
  { title: 'Los tokens semánticos son la clave', body: 'Sin la capa semántica, cambiar una marca requeriría tocar cada componente individualmente.' },
  { title: 'Documentar mientras diseñas', body: 'Dejar la documentación para el final hace que pierdas el contexto de cada decisión.' },
  { title: 'El sistema existe para los demás', body: 'Cada decisión se tomó pensando en el próximo diseñador que va a usar esto.' },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNINGS.map((item, i) => (
      <div key={item.title}>
        <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '18px', color: '#7B5CF6', lineHeight: 1.1, margin: 0 }}>
            {item.title}
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#666666', lineHeight: 1.7, margin: 0 }}>
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
  { id: 'overview',     num: '01', title: 'Overview',               content: overviewContent },
  { id: 'problema',     num: '02', title: 'El Problema',            content: problemaContent },
  { id: 'research',     num: '03', title: 'Arquitectura de tokens', content: researchContent },
  { id: 'marcas',       num: '04', title: 'Las 4 marcas',           content: marcasContent },
  { id: 'decisiones',   num: '05', title: 'Decisiones de diseño',   content: decisionesContent },
  { id: 'proceso',      num: '06', title: 'Proceso técnico',        content: procesoContent },
  { id: 'resultado',    num: '07', title: 'Resultado final',        content: resultadoContent },
  { id: 'aprendizajes', num: '08', title: 'Aprendizajes',           content: aprendizajesContent },
]

export default function EdvanceSections() {
  return <EdvanceAccordion sections={SECTIONS} />
}
