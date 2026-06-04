'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const POLAROIDS = [
  {
    src: '/images/polaroid-luna.png',
    alt: 'Luna, my dog',
    rotate: '-5deg',
  },
  {
    src: '/images/polaroid-ba.png',
    alt: 'Buenos Aires',
    rotate: '2deg',
  },
  {
    src: '/images/polaroid-vero.png',
    alt: 'Verónica at a restaurant',
    rotate: '7deg',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
      >
        {/* LEFT — text */}
        <div className="flex flex-col gap-6">
          <h2
            className="text-center md:text-left"
            style={{
              fontFamily: 'var(--font-darker-grotesque)',
              fontWeight: 800,
              fontSize: 'clamp(36px, 4vw, 42px)',
              color: '#333333',
              lineHeight: 1,
            }}
          >
            About me
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 300,
              fontSize: '13px',
              color: '#666666',
              lineHeight: 1.8,
              maxWidth: '480px',
            }}
          >
            I&apos;m a Venezuelan-born designer currently living in Argentina, with a dog,
            love for art and creative expression. Architecture taught me how to observe,
            think in ideas, and design with purpose — always thinking about people and
            the access they inhabit.
            <br /><br />
            Today, I&apos;m combining my journey into UX/UI, exploring how these same
            principles translate into digital experiences — I see design as a process of
            building, modeling, and giving form — shaping ideas until they feel simple,
            human, and meaningful.
          </p>

          <a
            href="#"
            style={{
              fontFamily: 'var(--font-inter)',
              fontWeight: 500,
              fontSize: '13px',
              color: '#333333',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
              width: 'fit-content',
            }}
          >
            → VIEW CV
          </a>
        </div>

        {/* RIGHT — polaroid row */}
        <div className="flex justify-center md:justify-end">
          <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
            {POLAROIDS.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.6,
                  delay: i * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  position: 'relative',
                  background: '#ffffff',
                  padding: '7px 7px 22px 7px',
                  boxShadow: '0 4px 18px rgba(0,0,0,0.1), 0 1px 4px rgba(0,0,0,0.06)',
                  transform: `rotate(${p.rotate})`,
                  transformOrigin: 'bottom center',
                  width: '120px',
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    width: '106px',
                    height: '106px',
                    position: 'relative',
                    overflow: 'hidden',
                    background: '#e0e0e0',
                  }}
                >
                  <Image
                    src={p.src}
                    alt={p.alt}
                    fill
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
