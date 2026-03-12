import { useEffect, useRef } from "react"

export function WaveBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let time = 0

    const resize = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = canvas.offsetWidth * dpr
      canvas.height = canvas.offsetHeight * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const drawWave = (
      yOffset: number,
      amplitude: number,
      frequency: number,
      speed: number,
      color: string
    ) => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.beginPath()
      ctx.moveTo(0, h)

      for (let x = 0; x <= w; x += 2) {
        const y =
          yOffset +
          Math.sin(x * frequency + time * speed) * amplitude +
          Math.sin(x * frequency * 0.6 + time * speed * 0.8 + 1.5) * amplitude * 0.4 +
          Math.cos(x * frequency * 0.3 + time * speed * 0.5) * amplitude * 0.3
        ctx.lineTo(x, y)
      }

      ctx.lineTo(w, h)
      ctx.closePath()

      ctx.fillStyle = color
      ctx.fill()
    }

    const animate = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight

      ctx.clearRect(0, 0, w, h)

      // Layered waves from back to front, increasing opacity
      drawWave(h * 0.55, 40, 0.002, 0.4, "rgba(255, 255, 255, 0.03)")
      drawWave(h * 0.60, 35, 0.003, 0.6, "rgba(255, 255, 255, 0.04)")
      drawWave(h * 0.65, 30, 0.004, 0.8, "rgba(255, 255, 255, 0.05)")
      drawWave(h * 0.72, 25, 0.005, 1.0, "rgba(255, 255, 255, 0.06)")
      drawWave(h * 0.78, 20, 0.006, 1.2, "rgba(255, 255, 255, 0.08)")
      drawWave(h * 0.84, 15, 0.007, 0.9, "rgba(255, 255, 255, 0.10)")

      time += 0.012
      animationId = requestAnimationFrame(animate)
    }

    resize()
    animate()

    window.addEventListener("resize", resize)

    return () => {
      window.removeEventListener("resize", resize)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      aria-hidden="true"
    />
  )
}
