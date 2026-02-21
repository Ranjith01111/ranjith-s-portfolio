'use client'

import { useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export function MagneticButton({ children, asChild = false, ...props }: React.ComponentProps<typeof Button>) {
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const el = containerRef.current
        if (!el) return

        const handleMouseMove = (e: MouseEvent) => {
            const rect = el.getBoundingClientRect()
            const x = e.clientX - rect.left - rect.width / 2
            const y = e.clientY - rect.top - rect.height / 2
            el.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`
        }

        const handleMouseLeave = () => {
            el.style.transform = 'translate(0, 0)'
        }

        el.addEventListener('mousemove', handleMouseMove)
        el.addEventListener('mouseleave', handleMouseLeave)

        return () => {
            el.removeEventListener('mousemove', handleMouseMove)
            el.removeEventListener('mouseleave', handleMouseLeave)
        }
    }, [])

    return (
        <div ref={containerRef} style={{ display: 'inline-block' }}>
            <Button asChild={asChild} {...props}>
                {children}
            </Button>
        </div>
    )
}
