import { useRef } from 'react'

export default function MagneticButton({ children, className = '', ...props }) {
  const ref = useRef(null)

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - (rect.left + rect.width / 2)
    const y = e.clientY - (rect.top + rect.height / 2)
    el.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const onMouseLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  return (
    <button
      ref={ref}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`relative will-change-transform transition-transform duration-200 ${className}`}
      {...props}
    >
      {children}
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-[#0066FF]/0 group-hover:ring-[#0066FF]/30 transition"></span>
    </button>
  )
}
