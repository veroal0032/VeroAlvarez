'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'Edvance DS',
    category: 'Design Systems · EdTech',
    description: 'Sistema de diseño multibrand para un ecosistema EdTech. 4 marcas, 94 variantes, WCAG 2.1 AA.',
    tools: 'Figma · Variables · Tokens',
    link: '/work/edvance',
    internal: true,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/EDVANCE.png',
    imagePosition: 'center 50%',
  },
  {
    id: 2,
    title: 'Matcha Chá',
    category: 'UX/UI · Vibe Coding · AI',
    description: 'Kiosco de autoservicio para una cafetería especializada en matcha.',
    tools: 'Figma · Figma Make · Claude',
    link: '/work/matcha-cha',
    internal: true,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/MATCHA.png',
    imagePosition: 'center center',
  },
  {
    id: 3,
    title: 'Petlink',
    category: 'UX/UI · Mobile App',
    description: 'Plataforma centralizada de salud para mascotas. Research, wireframes y UI completo.',
    tools: 'Figma · ChatGPT',
    link: '/work/petlink',
    internal: true,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/PETLINK.png',
    imagePosition: 'center 30%',
  },
  {
    id: 4,
    title: 'Cosechar',
    category: 'UX/UI · Vibe Coding · Dev',
    description: 'Guía de frutas y verduras de temporada para Argentina.',
    tools: 'Next.js · Claude · Vercel',
    link: '/work/cosechar',
    internal: true,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/COSECHAR.png',
    imagePosition: 'center center',
  },
  {
    id: 5,
    title: 'Bitácora Psicológica',
    category: 'Web Design · Canva Sites',
    description: 'Sitio web para consultorio de psicología. Diseñado para convertir visitas en consultas.',
    tools: 'Canva Sites',
    link: 'https://bitacorapsicologica.my.canva.site/',
    internal: false,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/BITACORA.png',
    imagePosition: 'center top',
  },
  {
    id: 6,
    title: 'Breeeeeath',
    category: 'Interaction · Vibe Coding',
    description: 'App de respiración guiada. Sin frameworks, sin dependencias.',
    tools: 'HTML · CSS · JS',
    link: '/work/breeeeeath',
    internal: true,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/BREEEEEATH.png',
    imagePosition: 'center center',
  },
  {
    id: 7,
    title: 'Compani',
    category: 'Branding · Graphic Design',
    description: 'Identidad de marca para una cafetería pet-friendly.',
    tools: 'Illustrator · Mockups',
    link: 'https://www.instagram.com/p/DLlhTsXMONc/',
    internal: false,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/COMPANI.jpg',
    imagePosition: 'center 40%',
  },
  {
    id: 8,
    title: 'Palmira',
    category: 'Branding · Graphic Design',
    description: 'Identidad visual para un resort boutique de playa.',
    tools: 'Illustrator · Photoshop · Canva',
    link: 'https://www.behance.net/gallery/230949423/Palmira-Boutique-Beach-Resort',
    internal: false,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/PALMIRA.jpg',
    imagePosition: 'center center',
  },
  {
    id: 9,
    title: 'Playground',
    category: 'Daily UI · Explorations',
    description: 'Ejercicios diarios de diseño y exploraciones de UI.',
    tools: 'Figma · Dribbble',
    link: 'https://dribbble.com/veroal0032',
    internal: false,
    image: 'https://raw.githubusercontent.com/veroal0032/Portfolio/main/PLAYGROUND.png',
    imagePosition: 'center center',
  },
]

const CARD_WIDTH = 380
const CARD_HEIGHT = 480
const GAP = 20
const SPEED = 0.4
const SIDE_PADDING = 24
const STRIDE = CARD_WIDTH + GAP
const TOTAL_WIDTH = PROJECTS.length * STRIDE

type Project = (typeof PROJECTS)[0]

function ProjectCard({
  project,
  isMobileActive = false,
  wasDragged,
  cardWidth,
  cardHeight,
}: {
  project: Project
  isMobileActive?: boolean
  wasDragged?: React.MutableRefObject<boolean>
  cardWidth?: number
  cardHeight?: number
}) {
  const router = useRouter()
  const [hovered, setHovered] = useState(false)
  const active = hovered || isMobileActive
  const w = cardWidth ?? CARD_WIDTH
  const h = cardHeight ?? CARD_HEIGHT

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: `${w}px`,
        minWidth: `${w}px`,
        height: `${h}px`,
        borderRadius: '24px',
        overflow: 'hidden',
        position: 'relative',
        flexShrink: 0,
        userSelect: 'none',
        cursor: 'inherit',
      }}
    >
      {/* Imagen de fondo */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `url(${project.image})`,
          backgroundSize: 'cover',
          backgroundPosition: project.imagePosition,
          filter: active ? 'grayscale(0%)' : 'grayscale(100%)',
          transform: active ? 'scale(1.04)' : 'scale(1)',
          transition: 'filter 0.4s ease, transform 0.4s ease',
        }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: active
            ? 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)'
            : 'linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 60%)',
          transition: 'background 0.4s ease',
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '28px',
        }}
      >
        {/* Category */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.07em',
            color: 'rgba(255,255,255,0.75)',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease 0.00s, transform 0.3s ease 0.00s',
            marginBottom: '6px',
            margin: '0 0 6px',
          }}
        >
          {project.category}
        </p>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '28px',
            color: '#ffffff',
            lineHeight: 1.05,
            opacity: active ? 1 : 0.9,
            transform: active ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s',
            margin: '0 0 10px',
          }}
        >
          {project.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize: '12px',
            color: 'rgba(255,255,255,0.75)',
            lineHeight: 1.55,
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease 0.10s, transform 0.3s ease 0.10s',
            margin: '0 0 8px',
          }}
        >
          {project.description}
        </p>

        {/* Tools */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '10px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.04em',
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease 0.13s, transform 0.3s ease 0.13s',
            margin: '0 0 18px',
          }}
        >
          {project.tools}
        </p>

        {/* Botón */}
        <div
          style={{
            opacity: active ? 1 : 0,
            transform: active ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 0.3s ease 0.16s, transform 0.3s ease 0.16s',
          }}
        >
          <button
            onClick={(e) => {
              e.stopPropagation()
              if (wasDragged?.current) return
              if (project.internal) {
                router.push(project.link)
              } else {
                window.open(project.link, '_blank')
              }
            }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              background: '#ffffff',
              color: '#111111',
              padding: '7px 16px',
              borderRadius: '999px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '10px',
              border: 'none',
              cursor: 'pointer',
            }}
          >
            Ver proyecto ↗
          </button>
        </div>
      </div>
    </div>
  )
}

function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [cardWidth, setCardWidth] = useState(300)
  const touchStartX = useRef(0)
  const touchMoveX = useRef(0)

  useEffect(() => {
    const update = () => setCardWidth(window.innerWidth - SIDE_PADDING * 2)
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchMoveX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    touchMoveX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchMoveX.current
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        setActiveIndex((i) => Math.min(i + 1, PROJECTS.length - 1))
      } else {
        setActiveIndex((i) => Math.max(i - 1, 0))
      }
    }
  }

  const offset = activeIndex * (cardWidth + GAP)

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '24px' }}>
      <div
        style={{ width: '100%', overflow: 'hidden' }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div
          style={{
            display: 'flex',
            gap: `${GAP}px`,
            paddingLeft: `${SIDE_PADDING}px`,
            paddingRight: `${SIDE_PADDING}px`,
            transform: `translateX(-${offset}px)`,
            transition: 'transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
            willChange: 'transform',
          }}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isMobileActive={i === activeIndex}
              cardWidth={cardWidth}
              cardHeight={CARD_HEIGHT}
            />
          ))}
        </div>
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {PROJECTS.map((_, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            style={{
              width: i === activeIndex ? '20px' : '6px',
              height: '6px',
              borderRadius: '999px',
              background: i === activeIndex ? '#333333' : '#cccccc',
              border: 'none',
              padding: 0,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  )
}

function DesktopCarousel() {
  const trackRef = useRef<HTMLDivElement>(null)
  const animRef = useRef<number | null>(null)
  const posRef = useRef(-TOTAL_WIDTH)
  const pausedRef = useRef(false)
  const isHovered = useRef(false)
  const isDragging = useRef(false)
  const dragStartX = useRef(0)
  const dragStartPos = useRef(0)
  const hasDragged = useRef(false)
  const [grabbing, setGrabbing] = useState(false)

  const tick = useCallback(() => {
    if (!pausedRef.current) {
      posRef.current -= SPEED
      if (posRef.current <= -TOTAL_WIDTH * 2) {
        posRef.current += TOTAL_WIDTH
      }
    }
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${posRef.current}px)`
    }
    animRef.current = requestAnimationFrame(tick)
  }, [])

  useEffect(() => {
    animRef.current = requestAnimationFrame(tick)
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current) }
  }, [tick])

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    hasDragged.current = false
    dragStartX.current = e.clientX
    dragStartPos.current = posRef.current
    pausedRef.current = true
    setGrabbing(true)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !trackRef.current) return
    const delta = e.clientX - dragStartX.current
    if (Math.abs(delta) > 3) hasDragged.current = true
    posRef.current = dragStartPos.current + delta
    trackRef.current.style.transform = `translateX(${posRef.current}px)`
  }

  const onMouseUp = () => {
    isDragging.current = false
    setGrabbing(false)
    if (!isHovered.current) pausedRef.current = false
  }

  const onMouseLeave = () => {
    isHovered.current = false
    isDragging.current = false
    pausedRef.current = false
    setGrabbing(false)
  }

  return (
    <div
      style={{
        overflow: 'hidden',
        paddingLeft: 'max(24px, calc((100vw - 1152px) / 2 + 80px))',
        cursor: grabbing ? 'grabbing' : 'grab',
      }}
      onMouseEnter={() => { isHovered.current = true; pausedRef.current = true }}
      onMouseLeave={onMouseLeave}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          gap: `${GAP}px`,
          willChange: 'transform',
          width: 'max-content',
        }}
      >
        {[...PROJECTS, ...PROJECTS, ...PROJECTS].map((project, i) => (
          <ProjectCard
            key={`${project.id}-${i}`}
            project={project}
            wasDragged={hasDragged}
          />
        ))}
      </div>
    </div>
  )
}

export default function ProjectCarousel() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 810)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  return (
    <section id="projects" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto mb-10"
      >
        <h2
          className="text-center md:text-left mb-2 md:mb-0"
          style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 800,
            fontSize: 'clamp(36px, 4vw, 42px)',
            color: '#333333',
          }}
        >
          Projects
        </h2>
        <p
          className="md:hidden text-center mt-2"
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 300,
            fontSize: '14px',
            color: '#888',
            lineHeight: 1.5,
          }}
        >
          A mix of design, no-code and digital experiences.
        </p>
      </motion.div>

      {isMobile ? <MobileCarousel /> : <DesktopCarousel />}
    </section>
  )
}
