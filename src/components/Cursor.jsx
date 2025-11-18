import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    const dotEl = dot.current
    const ringEl = ring.current

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dotEl.style.transform = `translate(${mouseX}px, ${mouseY}px)`
    }

    const tick = () => {
      ringX += (mouseX - ringX) * 0.15
      ringY += (mouseY - ringY) * 0.15
      ringEl.style.transform = `translate(${ringX}px, ${ringY}px)`
      requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', onMove)
    const raf = requestAnimationFrame(tick)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={dot} className="pointer-events-none fixed top-0 left-0 z-[70] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#0066FF] mix-blend-multiply" />
      <div ref={ring} className="pointer-events-none fixed top-0 left-0 z-[70] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#0066FF]/60 bg-[#0066FF]/5 backdrop-blur-sm" />
    </>
  )
}
