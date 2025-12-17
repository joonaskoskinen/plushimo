"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas size
    const setCanvasSize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    setCanvasSize()
    window.addEventListener("resize", setCanvasSize)

    // Floating plushie elements
    const elements: Array<{
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      rotation: number
      rotationSpeed: number
      emoji: string
      opacity: number
    }> = []

    const emojis = ["🧸", "🎀", "💕", "✨", "⭐", "💝", "🌸", "🐻"]

    // Create floating elements
    for (let i = 0; i < 15; i++) {
      elements.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: 20 + Math.random() * 30,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        emoji: emojis[Math.floor(Math.random() * emojis.length)],
        opacity: 0.15 + Math.random() * 0.15,
      })
    }

    // Animation loop
    let animationFrameId: number
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      elements.forEach((element) => {
        // Update position
        element.x += element.speedX
        element.y += element.speedY
        element.rotation += element.rotationSpeed

        // Wrap around screen edges
        if (element.x < -50) element.x = canvas.width + 50
        if (element.x > canvas.width + 50) element.x = -50
        if (element.y < -50) element.y = canvas.height + 50
        if (element.y > canvas.height + 50) element.y = -50

        // Draw element
        ctx.save()
        ctx.translate(element.x, element.y)
        ctx.rotate(element.rotation)
        ctx.globalAlpha = element.opacity
        ctx.font = `${element.size}px Arial`
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        ctx.fillText(element.emoji, 0, 0)
        ctx.restore()
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", setCanvasSize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" style={{ opacity: 0.4 }} />
}
