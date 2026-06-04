'use client'

import { motion } from 'framer-motion'

export interface ProduceData {
  name: string
  imageSrc?: string
  imageBg: string
  seasons: string[]
  cal: string
  vitaminas: string
  minerales: string
  desc: string
}

export default function ProduceCard({
  data,
  primary,
  visible,
}: {
  data: ProduceData
  primary: string
  visible: boolean
}) {
  return (
    <motion.div
      animate={{ opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.15 }}
      whileHover={{ scale: 1.03 }}
      style={{
        width: '260px',
        flexShrink: 0,
        borderRadius: '24px',
        background: '#ffffff',
        boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
        overflow: 'hidden',
      }}
    >
      {/* Image area */}
      <div style={{ height: '160px', overflow: 'hidden', borderRadius: '12px 12px 0 0' }}>
        {data.imageSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={data.imageSrc}
            alt={data.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: data.imageBg }} />
        )}
      </div>

      {/* Season badges */}
      <div
        style={{
          display: 'flex',
          gap: '6px',
          justifyContent: 'center',
          padding: '10px 16px 0',
          flexWrap: 'wrap',
        }}
      >
        {data.seasons.map((s, i) => (
          <span
            key={s}
            style={{
              padding: '4px 12px',
              borderRadius: '100px',
              fontFamily: 'var(--font-inter)',
              fontWeight: 600,
              fontSize: '11px',
              background: i === 0 ? primary : `${primary}22`,
              color: i === 0 ? '#ffffff' : primary,
            }}
          >
            {s}
          </span>
        ))}
      </div>

      {/* Body */}
      <div style={{ padding: '12px 16px 16px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {/* Name */}
        <p
          style={{
            fontFamily: 'var(--font-darker-grotesque)',
            fontWeight: 700,
            fontSize: '20px',
            color: '#1a1a1a',
            lineHeight: 1,
            margin: 0,
          }}
        >
          {data.name}
        </p>

        {/* Stats grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px' }}>
          {[
            { label: 'CAL.',      value: data.cal,       sub: 'kcal' },
            { label: 'VITAMINAS', value: data.vitaminas,  sub: null },
            { label: 'MINERALES', value: data.minerales,  sub: null },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: '#f5f5f5',
                borderRadius: '10px',
                padding: '10px 6px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontWeight: 400,
                  fontSize: '9px',
                  color: '#999',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                }}
              >
                {stat.label}
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-darker-grotesque)',
                  fontWeight: 700,
                  fontSize: '14px',
                  color: '#1a1a1a',
                  lineHeight: 1.1,
                }}
              >
                {stat.value}
              </span>
              {stat.sub && (
                <span
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 400,
                    fontSize: '9px',
                    color: '#999',
                  }}
                >
                  {stat.sub}
                </span>
              )}
            </div>
          ))}
        </div>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-inter)',
            fontWeight: 400,
            fontSize: '13px',
            color: '#666',
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          {data.desc}
        </p>
      </div>
    </motion.div>
  )
}
