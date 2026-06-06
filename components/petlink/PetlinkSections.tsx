'use client'

import Image from 'next/image'
import EdvanceAccordion, { type AccordionSection } from '@/components/EdvanceAccordion'
import PetlinkScreensMarquee from './PetlinkScreensMarquee'

const ACCENT = '#1C9674'

const T = {
  body: (text: string) => ({
    fontFamily: 'var(--font-inter)',
    fontWeight: 400 as const,
    fontSize: '15px',
    color: '#666666',
    lineHeight: 1.8,
    margin: 0,
  }),
  heading: (color = ACCENT) => ({
    fontFamily: 'var(--font-darker-grotesque)',
    fontWeight: 700 as const,
    fontSize: '18px',
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
    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#555555', lineHeight: 1.8, maxWidth: '480px', margin: 0 }}>
      Petlink fue el proyecto final del curso de diseño UX/UI en Coderhouse. La premisa era simple: ser dueña de una mascota es algo maravilloso, pero puede sentirse abrumador.
      <br /><br />
      Lo desarrollé sola — desde el research hasta las animaciones finales — como primer proyecto formal de diseño. Eso significó tomar cada decisión con criterio propio y documentar todo el proceso.
    </p>

    <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 20px rgba(0,0,0,0.08)', background: '#e6f5ef' }}>
      <Image
        src="/images/petlink/cover.png"
        alt="Petlink — portada con perrito 3D"
        width={1400}
        height={750}
        style={{ width: '100%', height: 'auto', display: 'block' }}
        sizes="(max-width: 768px) 100vw, 50vw"
      />
    </div>
  </div>
)

/* ── 02 — EL PROBLEMA ─────────────────────────────────────────── */
const problemaContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '680px' }}>
    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#555555', lineHeight: 1.8, margin: 0 }}>
      Los dueños de mascotas necesitan acceder a múltiples servicios — veterinarios, paseadores,
      tiendas, grooming — desde distintas apps o sin ninguna. No existe una plataforma unificada
      que conecte todo el ecosistema de cuidado animal en un solo lugar.
    </p>

    {/* Quote destacada — centrada */}
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
          fontSize: '22px',
          color: ACCENT,
          lineHeight: 1.35,
          margin: 0,
        }}>
          "Petlink links you to everything your furry friend needs."
        </p>
      </div>
    </div>

    {/* 3 insights */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
    }}>
      {[
        { value: 'Encuestas',   label: 'Research realizado' },
        { value: 'Benchmark',   label: 'Análisis competitivo' },
        { value: 'Entrevistas', label: 'Usuarios testados' },
      ].map((s, i) => (
        <div key={s.value} style={{
          padding: '16px 8px',
          textAlign: 'center',
          borderRight: i < 2 ? '1px solid rgba(0,0,0,0.08)' : 'none',
        }}>
          <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: 'clamp(14px, 2.5vw, 18px)', color: ACCENT, marginBottom: '4px', lineHeight: 1.2 }}>
            {s.value}
          </p>
          <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#888888', margin: 0 }}>
            {s.label}
          </p>
        </div>
      ))}
    </div>

    {/* El MVP */}
    <div style={{ marginTop: '8px' }}>
      <p style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 700,
        fontSize: '20px',
        color: '#333333',
        marginBottom: '16px',
        lineHeight: 1.1,
      }}>
        El MVP
      </p>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {[
          {
            title: 'Pet Profiles',
            desc: 'Perfil personalizado con edad, raza, peso, vacunas e historial veterinario.',
          },
          {
            title: 'Shop',
            desc: 'Ofertas curadas de las mejores marcas. Todo lo que tu mascota necesita en un lugar.',
          },
          {
            title: '24/7 Asistencia veterinaria',
            desc: 'Ayuda veterinaria online instantánea, en cualquier momento y lugar.',
          },
          {
            title: 'Lugares pet-friendly',
            desc: 'Encontrá y explorá lugares cercanos para mascotas, valorados por la comunidad.',
          },
          {
            title: 'Paseadores y cuidadores',
            desc: 'Conectate con paseadores de confianza, revisados por la comunidad Petlink.',
          },
        ].map((item, i, arr) => (
          <div key={item.title}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', padding: '14px 0' }}>
              <span style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                background: ACCENT,
                flexShrink: 0,
                marginTop: '5px',
              }} />
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
                <p style={{
                  fontFamily: 'var(--font-darker-grotesque)',
                  fontWeight: 700,
                  fontSize: '16px',
                  color: '#333333',
                  lineHeight: 1.1,
                  margin: 0,
                }}>
                  {item.title}
                </p>
                <p style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#666666',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {item.desc}
                </p>
              </div>
            </div>
            {i < arr.length - 1 && (
              <hr style={{ border: 'none', borderTop: '1px solid rgba(0,0,0,0.1)', margin: 0 }} />
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
)

/* ── 03 — RESEARCH ────────────────────────────────────────────── */
const researchContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    {/* User persona */}
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

    {/* Texto */}
    <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#555555', lineHeight: 1.8, maxWidth: '720px', margin: 0 }}>
      Maribel, 32 años, Buenos Aires. Primera vez dueña de una mascota. Motivada por ser
      responsable, pero frustrada por no tener a quién consultar y el miedo de dejar
      a su cachorro solo.
      <br /><br />
      El research confirmó que el usuario objetivo necesita guía, acceso rápido a profesionales
      y una comunidad de confianza — no solo un directorio de servicios.
    </p>

    {/* User flow */}
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
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        User Flow — onboarding, autenticación y navegación principal
      </p>
    </div>
  </div>
)

/* ── 04 — DECISIONES DE DISEÑO ────────────────────────────────── */
const DESIGN_BLOCKS = [
  {
    title: 'App nativa iOS',
    body: 'La decisión fue diseñar para iOS siguiendo Human Interface Guidelines — SF Pro como tipografía del sistema, patrones de navegación nativos y componentes que el usuario ya conoce. La app tenía que sentirse como si hubiera sido hecha por Apple.',
  },
  {
    title: 'Colores alegres, identidad clara',
    body: `Verde #1C9674 como color principal por asociación con naturaleza, salud y bienestar animal. Naranja, rosa y azul como colores secundarios para categorizar servicios sin perder la coherencia visual. Bright pero nunca agresivo.`,
  },
  {
    title: 'El logo como concepto',
    body: 'La P toma la forma de un perro. La i y la n se vinculan — igual que la app vincula al dueño con el mundo de su mascota. El nombre y el logo cuentan la misma historia.',
  },
]

const decisionesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
      {DESIGN_BLOCKS.map((block, i) => (
        <div key={block.title}>
          <div style={{ padding: '24px 0' }}>
            <p style={T.heading()}>{block.title}</p>
            <p style={T.body(block.body)}>{block.body}</p>
          </div>
          {i < DESIGN_BLOCKS.length - 1 && <hr style={T.hr} />}
        </div>
      ))}
    </div>

    {/* Wireframes full-width */}
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div style={{ borderRadius: '16px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', background: '#e6f5ef' }}>
        <Image
          src="/images/petlink/wireframes.png"
          alt="Wireframes — 6 pantallas principales"
          width={1400}
          height={750}
          style={{ width: '100%', height: 'auto', display: 'block' }}
          sizes="100vw"
        />
      </div>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '12px', color: '#aaaaaa', textAlign: 'center' }}>
        Wireframes — 6 pantallas principales
      </p>
    </div>
  </div>
)

/* ── 05 — RESULTADO FINAL ─────────────────────────────────────── */
const resultadoContent = (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
    <div>
      <p style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 32px)', color: '#333333', lineHeight: 1, marginBottom: '8px' }}>
        Resultado final
      </p>
      <p style={{ fontFamily: 'var(--font-inter)', fontWeight: 400, fontSize: '15px', color: '#888888', margin: 0 }}>
        De los wireframes al prototipo animado. Una app completa con onboarding, autenticación,
        home, asistencia, veterinarios y tienda.
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
        Ver prototipo completo en Figma →
      </a>
    </div>
  </div>
)

/* ── 06 — APRENDIZAJES ────────────────────────────────────────── */
const LEARNINGS = [
  {
    title: 'El research cambia todo',
    body: 'Hacer encuestas, benchmark y entrevistas antes de diseñar una sola pantalla garantizó que cada decisión tuviera un fundamento real. No fue intuición — fue evidencia.',
  },
  {
    title: 'Diseñar nativo es diseñar con el usuario',
    body: 'Seguir Human Interface Guidelines no es una limitación — es un shortcut hacia la usabilidad. El usuario ya sabe cómo funciona iOS. El trabajo es no romper esa expectativa.',
  },
  {
    title: 'Un proyecto completo de principio a fin',
    body: 'Desde el research hasta las animaciones, Petlink fue el primer proyecto donde controlé cada etapa del proceso. Eso lo convierte en la base de todo lo que vino después.',
  },
]

const aprendizajesContent = (
  <div style={{ display: 'flex', flexDirection: 'column', maxWidth: '672px' }}>
    {LEARNINGS.map((item, i) => (
      <div key={item.title}>
        <div style={{ padding: '20px 0', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <p style={T.heading()}>{item.title}</p>
          <p style={T.body(item.body)}>{item.body}</p>
        </div>
        {i < LEARNINGS.length - 1 && <hr style={T.hr} />}
      </div>
    ))}
  </div>
)

/* ── ACCORDION DATA ────────────────────────────────────────────── */
const SECTIONS: AccordionSection[] = [
  { id: 'start-point',  num: '01', title: 'Start Point',           content: startPointContent },
  { id: 'problema',     num: '02', title: 'El problema',           content: problemaContent },
  { id: 'research',     num: '03', title: 'Research',              content: researchContent },
  { id: 'decisiones',   num: '04', title: 'Decisiones de diseño',  content: decisionesContent },
  { id: 'resultado',    num: '05', title: 'Resultado final',       content: resultadoContent },
  { id: 'aprendizajes', num: '06', title: 'Aprendizajes',          content: aprendizajesContent },
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
