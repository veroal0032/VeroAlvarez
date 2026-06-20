'use client'

import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'

export default function BackButton() {
  const router = useRouter()

  const handleClick = () => {
    router.push('/')
  }

  return (
    <motion.button
      onClick={handleClick}
      initial={false}
      whileHover={{ x: -2, backgroundColor: 'rgba(255,255,255,0.95)' }}
      transition={{ type: 'spring', stiffness: 400, damping: 28 }}
      style={{
        position: 'fixed',
        top: '24px',
        left: '24px',
        zIndex: 50,
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        background: 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
        border: '1px solid rgba(0,0,0,0.08)',
        borderRadius: '100px',
        padding: '10px 18px',
        boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
        cursor: 'pointer',
      }}
    >
      <span style={{ fontFamily: 'var(--font-darker-grotesque)', fontWeight: 700, fontSize: '16px', color: '#4D4D4D', lineHeight: 1 }}>
        ←
      </span>
      <span style={{ fontFamily: 'var(--font-inter)', fontWeight: 500, fontSize: '13px', color: '#4D4D4D', lineHeight: 1 }}>
        Volver
      </span>
    </motion.button>
  )
}
