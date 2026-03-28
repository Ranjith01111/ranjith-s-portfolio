'use client'

import { useEffect, useState } from 'react'
import { Sun, Moon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') {
      document.documentElement.classList.add('dark')
      setIsDark(true)
    } else {
      document.documentElement.classList.remove('dark')
      setIsDark(false)
    }
  }, [])

  const toggle = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDark(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDark(true)
    }
  }

  return (
    <motion.button
      onClick={toggle}
      aria-label="Toggle dark mode"
      whileTap={{ scale: 0.92 }}
      className="relative flex items-center w-[52px] h-[28px] rounded-full border transition-colors duration-300 cursor-pointer
        bg-gradient-to-r from-amber-100 to-orange-100 border-orange-300
        dark:from-slate-800 dark:to-orange-950 dark:border-orange-800
        shadow-inner focus:outline-none"
    >
      {/* Track label icons */}
      <span className="absolute left-1.5 text-[10px] opacity-60 dark:opacity-0 transition-opacity duration-200 select-none pointer-events-none">
        <Sun className="h-3 w-3 text-orange-500" />
      </span>
      <span className="absolute right-1.5 text-[10px] opacity-0 dark:opacity-60 transition-opacity duration-200 select-none pointer-events-none">
        <Moon className="h-3 w-3 text-orange-400" />
      </span>

      {/* Sliding knob */}
      <motion.div
        className="absolute w-5 h-5 rounded-full bg-gradient-to-br from-orange-500 to-amber-500 dark:from-orange-400 dark:to-amber-600 shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 26 : 2 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isDark ? (
            <motion.span
              key="moon"
              initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
              transition={{ duration: 0.18 }}
            >
              <Moon className="h-2.5 w-2.5 text-white" />
            </motion.span>
          ) : (
            <motion.span
              key="sun"
              initial={{ opacity: 0, rotate: 90, scale: 0.5 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.5 }}
              transition={{ duration: 0.18 }}
            >
              <Sun className="h-2.5 w-2.5 text-white" />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.button>
  )
}
