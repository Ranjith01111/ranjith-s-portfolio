'use client'

import { motion } from 'framer-motion'

export function GlowingText({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <span className={`relative inline-block ${className}`}>
            <span className="relative z-10">{children}</span>
            <motion.span
                className="absolute inset-0 blur-xl opacity-50 bg-gradient-to-r from-orange-400 to-amber-400"
                animate={{
                    opacity: [0.3, 0.6, 0.3],
                    scale: [1, 1.05, 1]
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut'
                }}
            />
        </span>
    )
}
