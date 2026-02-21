'use client'

import { motion } from 'framer-motion'

export function SubtleBackground() {
    return (
        <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
            {/* Base dark gradient for dark mode */}
            <div className="absolute inset-0 bg-gradient-to-b from-orange-50/30 via-white to-slate-50/30 dark:from-[#1a1008] dark:via-[#1a1410] dark:to-[#1a1008]" />

            {/* 3D Perspective Grid */}
            <div
                className="absolute inset-0"
                style={{
                    perspective: '600px',
                    perspectiveOrigin: '50% 30%'
                }}
            >
                <motion.div
                    className="absolute w-[120%] h-[250%] -left-[10%] -top-[30%]"
                    animate={{ rotateX: [55, 56, 55] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    style={{
                        transform: 'rotateX(55deg)',
                        willChange: 'transform',
                        backgroundImage: `
              linear-gradient(rgba(249,115,22,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.08) 1px, transparent 1px),
              linear-gradient(rgba(249,115,22,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(249,115,22,0.04) 1px, transparent 1px)
            `,
                        backgroundSize: '60px 60px, 60px 60px, 20px 20px, 20px 20px',
                        maskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)',
                        WebkitMaskImage: 'radial-gradient(ellipse 80% 60% at 50% 50%, black 20%, transparent 70%)'
                    }}
                />
            </div>

            {/* Animated gradient orbs */}
            <motion.div
                className="absolute w-[500px] h-[500px] rounded-full opacity-30 dark:opacity-20"
                style={{
                    background: 'radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(245,158,11,0.05) 50%, transparent 70%)',
                    top: '10%',
                    left: '60%',
                    willChange: 'transform'
                }}
                animate={{
                    x: [0, -60, 30, 0],
                    y: [0, 40, -20, 0],
                    scale: [1, 1.1, 0.95, 1]
                }}
                transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
                className="absolute w-[400px] h-[400px] rounded-full opacity-25 dark:opacity-15"
                style={{
                    background: 'radial-gradient(circle, rgba(234,179,8,0.12) 0%, rgba(249,115,22,0.04) 50%, transparent 70%)',
                    bottom: '20%',
                    left: '10%',
                    willChange: 'transform'
                }}
                animate={{
                    x: [0, 40, -30, 0],
                    y: [0, -30, 20, 0],
                    scale: [1, 0.95, 1.05, 1]
                }}
                transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            />

            {/* Top edge glow */}
            <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-orange-500/[0.07] to-transparent dark:from-orange-500/[0.04]" />
        </div>
    )
}
