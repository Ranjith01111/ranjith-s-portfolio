'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const GRAD: React.CSSProperties = {
  background: 'linear-gradient(135deg, #f97316 0%, #f59e0b 50%, #eab308 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  lineHeight: 1,
}

function NameText({ text }: { text: string }) {
  return (
    <span
      className="font-black select-none"
      style={{
        ...GRAD,
        fontSize: 'clamp(2rem, 10vw, 8rem)',
      }}
    >
      {text}
    </span>
  )
}

function JLetter({ merged }: { merged: boolean }) {
  return (
    <motion.span
      className="font-black select-none"
      style={{
        ...GRAD,
        fontSize: 'clamp(2rem, 10vw, 8rem)',
      }}
      animate={
        merged
          ? { filter: ['drop-shadow(0 0 50px rgba(249,115,22,1)) drop-shadow(0 0 100px rgba(245,158,11,0.8))', 'drop-shadow(0 0 10px rgba(249,115,22,0.3))'] }
          : { filter: 'drop-shadow(0 0 8px rgba(249,115,22,0.2))' }
      }
      transition={{ duration: 0.7 }}
    >
      J
    </motion.span>
  )
}

function Socket({ side, active }: { side: 'left' | 'right'; active: boolean }) {
  return (
    <motion.div
      className="absolute top-1/2 flex flex-col gap-[6px]"
      style={{
        transform: 'translateY(-50%)',
        [side === 'left' ? 'right' : 'left']: '100%',
        [side === 'left' ? 'marginRight' : 'marginLeft']: '3px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: active ? 1 : 0 }}
      transition={{ duration: 0.3 }}
    >
      {[0, 1].map((i) => (
        <motion.div
          key={i}
          style={{ width: 6, height: 14, borderRadius: 2, background: 'rgba(249,115,22,0.12)', border: '1px solid rgba(249,115,22,0.8)' }}
          animate={active ? { boxShadow: ['0 0 4px rgba(249,115,22,0.3)', '0 0 16px rgba(249,115,22,1)', '0 0 4px rgba(249,115,22,0.3)'] } : {}}
          transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.2 }}
        />
      ))}
    </motion.div>
  )
}

// Prong wrapped in an animated-width container so removal doesn't jump layout
function AnimatedProng({ visible, side }: { visible: boolean; side: 'left' | 'right' }) {
  return (
    <motion.div
      style={{ overflow: 'hidden', display: 'flex', alignItems: 'center' }}
      animate={{ width: visible ? 13 : 0, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.22, ease: 'easeInOut' }}
    >
      <div
        className="flex flex-col gap-[6px] flex-shrink-0"
        style={{ [side === 'left' ? 'marginRight' : 'marginLeft']: '2px' }}
      >
        {[0, 1].map((i) => (
          <motion.div
            key={i}
            style={{ width: 9, height: 14, borderRadius: 2, background: 'linear-gradient(to bottom, #f97316, #f59e0b)', boxShadow: '0 0 10px rgba(249,115,22,0.8)' }}
            animate={visible ? { opacity: [0.75, 1, 0.75] } : {}}
            transition={{ duration: 0.38, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </motion.div>
  )
}

const PARTICLES = [
  { x: 8,  y: 22, size: 2,   delay: 0.0, dur: 2.2 },
  { x: 20, y: 70, size: 1.5, delay: 0.4, dur: 2.8 },
  { x: 35, y: 35, size: 2.5, delay: 0.2, dur: 2.5 },
  { x: 55, y: 80, size: 1.5, delay: 0.6, dur: 3.0 },
  { x: 68, y: 18, size: 2,   delay: 0.3, dur: 2.4 },
  { x: 80, y: 60, size: 1.8, delay: 0.1, dur: 2.7 },
  { x: 90, y: 40, size: 2.2, delay: 0.5, dur: 2.1 },
  { x: 48, y: 12, size: 1.6, delay: 0.7, dur: 2.9 },
]

export function IntroAnimation({ onComplete }: { onComplete: () => void }) {
  // 0=J appears, 1=sockets, 2=RAN+ITH slide, 3=merge, 4=wave opens
  const [phase, setPhase]         = useState(0)
  const [visible, setVisible]     = useState(true)

  useEffect(() => {
    const t = [
      setTimeout(() => setPhase(1), 400),    // sockets pulse
      setTimeout(() => setPhase(2), 900),    // RAN + ITH slide in
      setTimeout(() => setPhase(3), 1500),   // merge
      // merge done: 1500 + 700ms (burst flash) = 2200ms
      // 1 full second hold → phase 4 at 3200ms
      setTimeout(() => setPhase(4), 3200),   // ← exactly 1s after merge complete
    ]
    return () => t.forEach(clearTimeout)
  }, [])

  // Phase 4: fade overlay out then unmount
  useEffect(() => {
    if (phase !== 4) return
    // fade transition is 0.9s, unmount after that
    const t = setTimeout(() => { setVisible(false); onComplete() }, 950)
    return () => clearTimeout(t)
  }, [phase, onComplete])

  const merged   = phase >= 3
  const rippling = phase >= 4

  // Fixed dark background — overlay simply fades out when rippling starts
  const overlayBg = 'radial-gradient(ellipse at 50% 42%, #1c0a00 0%, #0d0400 55%, #000 100%)'

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="intro"
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: overlayBg }}
          animate={rippling ? { opacity: 0 } : { opacity: 1 }}
          transition={rippling ? { duration: 0.95, ease: 'easeInOut' } : { duration: 0 }}
          exit={{ opacity: 0 }}
        >
          {/* Ambient glow — capped so it doesn't overflow on mobile */}
          <motion.div
            className="absolute pointer-events-none rounded-full"
            style={{
              width: 'min(700px, 90vw)',
              height: 'min(350px, 45vw)',
              background: 'radial-gradient(ellipse, rgba(249,115,22,0.1) 0%, transparent 70%)',
              filter: 'blur(55px)',
            }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.35, 0.75, 0.35] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* Floating particles */}
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%`, background: 'rgba(249,115,22,0.4)' }}
              animate={{ opacity: [0, 0.6, 0], y: [-8, 8, -8] }}
              transition={{ duration: p.dur, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
            />
          ))}

          {/* Decorative ripple rings */}
          {rippling && [0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={`r${i}`}
              className="absolute pointer-events-none"
              style={{ borderRadius: '50%', border: `1.5px solid rgba(249,115,22,${0.65 - i * 0.1})` }}
              initial={{ width: '8vw', height: '3vw', opacity: 0.95 }}
              animate={{ width: '160vw', height: '45vw', opacity: 0 }}
              transition={{ duration: 1.15, delay: i * 0.065, ease: [0.15, 0, 0.5, 1] }}
            />
          ))}

          {/* Name scene */}
          <motion.div
            style={{ perspective: '1200px' }}
            animate={rippling ? { opacity: 0, scale: 1.06 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
          >
            <div className="flex items-center" style={{ gap: 0 }}>

              {/* RAN ← slides from left */}
              <motion.div
                className="flex items-center"
                initial={{ x: '-80vw', opacity: 0, rotateY: -20 }}
                animate={phase >= 2 ? { x: 0, opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <NameText text="RAN" />
                <AnimatedProng visible={!merged && phase >= 2} side="right" />
              </motion.div>

              {/* J — materialises from shadow/glow at centre */}
              <motion.div
                className="relative flex-shrink-0"
                initial={{ scale: 0.3, opacity: 0, filter: 'blur(32px)' }}
                animate={{ scale: 1, opacity: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {!merged && <Socket side="left"  active={phase >= 1} />}
                <JLetter merged={merged} />
                {!merged && <Socket side="right" active={phase >= 1} />}

                {/* Merge burst flash */}
                {merged && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 1, scale: 1.8 }}
                    animate={{ opacity: 0, scale: 5 }}
                    transition={{ duration: 0.7, ease: 'easeOut' }}
                    style={{ background: 'radial-gradient(circle, rgba(251,191,36,0.95) 0%, rgba(249,115,22,0.5) 45%, transparent 70%)', borderRadius: '50%' }}
                  />
                )}
              </motion.div>

              {/* ITH → slides from right */}
              <motion.div
                className="flex items-center"
                initial={{ x: '80vw', opacity: 0, rotateY: 20 }}
                animate={phase >= 2 ? { x: 0, opacity: 1, rotateY: 0 } : {}}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <AnimatedProng visible={!merged && phase >= 2} side="left" />
                <NameText text="ITH" />
              </motion.div>
            </div>

            {/* Tagline after merge */}
            <AnimatePresence>
              {merged && !rippling && (
                <motion.p
                  key="tag"
                  className="text-center mt-3 tracking-[0.45em] uppercase text-xs sm:text-sm font-light"
                  style={{ color: 'rgba(251,146,60,0.55)' }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  AI &amp; Data Science Engineer
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
