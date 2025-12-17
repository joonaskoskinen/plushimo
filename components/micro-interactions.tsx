"use client"

import { useEffect, useState } from "react"

interface PawPrint {
  id: number
  x: number
  y: number
}

interface Confetti {
  id: number
  x: number
  y: number
  rotation: number
  color: string
}

export function MicroInteractions() {
  const [pawPrints, setPawPrints] = useState<PawPrint[]>([])
  const [confetti, setConfetti] = useState<Confetti[]>([])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const id = Date.now()
      setPawPrints((prev) => [...prev.slice(-8), { id, x: e.clientX, y: e.clientY }])

      setTimeout(() => {
        setPawPrints((prev) => prev.filter((p) => p.id !== id))
      }, 800)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    const handleConfetti = (e: CustomEvent) => {
      const rect = (e.target as HTMLElement).getBoundingClientRect()
      const colors = ["#ec4899", "#f472b6", "#fbbf24", "#a78bfa", "#60a5fa"]

      const newConfetti = Array.from({ length: 20 }).map((_, i) => ({
        id: Date.now() + i,
        x: rect.left + rect.width / 2,
        y: rect.top + rect.height / 2,
        rotation: Math.random() * 360,
        color: colors[Math.floor(Math.random() * colors.length)],
      }))

      setConfetti((prev) => [...prev, ...newConfetti])

      setTimeout(() => {
        setConfetti((prev) => prev.filter((c) => !newConfetti.find((nc) => nc.id === c.id)))
      }, 1000)
    }

    window.addEventListener("confetti" as any, handleConfetti)
    return () => window.removeEventListener("confetti" as any, handleConfetti)
  }, [])

  return (
    <>
      {/* Paw print cursor trail */}
      {pawPrints.map((paw) => (
        <div
          key={paw.id}
          className="fixed pointer-events-none z-50 text-pink-300/40 animate-fade-out"
          style={{
            left: paw.x - 12,
            top: paw.y - 12,
            fontSize: "24px",
          }}
        >
          🐾
        </div>
      ))}

      {/* Confetti */}
      {confetti.map((c, i) => (
        <div
          key={c.id}
          className="fixed pointer-events-none z-50 w-2 h-2 animate-confetti"
          style={{
            left: c.x,
            top: c.y,
            backgroundColor: c.color,
            transform: `rotate(${c.rotation}deg)`,
            animationDelay: `${i * 20}ms`,
          }}
        />
      ))}
    </>
  )
}
