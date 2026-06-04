'use client'

import { motion } from 'framer-motion'

export default function AccentTitle({
  title,
  accentLetterIndex,
  accentColor,
}: {
  title: string
  accentLetterIndex: number
  accentColor: string
}) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 32 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
      style={{
        fontFamily: 'var(--font-darker-grotesque)',
        fontWeight: 900,
        fontSize: 'clamp(60px, 9vw, 100px)',
        lineHeight: 0.92,
        letterSpacing: '-0.02em',
        color: '#333333',
      }}
      aria-label={title}
    >
      {title.split('').map((char, i) => (
        <span
          key={i}
          style={{
            color: i === accentLetterIndex ? accentColor : '#333333',
            transition: 'color 0.3s ease',
          }}
        >
          {char}
        </span>
      ))}
    </motion.h1>
  )
}
