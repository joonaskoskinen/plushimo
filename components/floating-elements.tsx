"use client"

import { useEffect, useState } from "react"
import { Heart, Star, Sparkles } from "lucide-react"

interface FloatingIcon {
  id: number
  Icon: typeof Heart | typeof Star | typeof Sparkles
  x: number
  y: number
  delay: number
  duration: number
}

export function FloatingElements() {
  const [icons, setIcons] = useState<FloatingIcon[]>([])

  useEffect(() => {
    const iconTypes = [Heart, Star, Sparkles]
    const newIcons: FloatingIcon[] = Array.from({ length: 8 }, (_, i) => ({
      id: i,
      Icon: iconTypes[Math.floor(Math.random() * iconTypes.length)],
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 15 + Math.random() * 10,
    }))
    setIcons(newIcons)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden opacity-20">
      {icons.map((icon) => (
        <div
          key={icon.id}
          className="absolute animate-float"
          style={{
            left: `${icon.x}%`,
            top: `${icon.y}%`,
            animationDelay: `${icon.delay}s`,
            animationDuration: `${icon.duration}s`,
          }}
        >
          <icon.Icon className="h-6 w-6 text-primary" />
        </div>
      ))}
    </div>
  )
}
