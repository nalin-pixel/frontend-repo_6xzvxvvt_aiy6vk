import Spline from '@splinetool/react-spline'
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion'
import MagneticButton from './MagneticButton'
import { useCallback } from 'react'

export default function Hero() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 120, damping: 20 })
  const sy = useSpring(my, { stiffness: 120, damping: 20 })

  const rotateX = useTransform(sy, [-50, 50], [8, -8])
  const rotateY = useTransform(sx, [-50, 50], [-8, 8])
  const glowX = useTransform(sx, [-50, 50], ['-30%', '30%'])

  const onMouseMove = useCallback((e) => {
    const { innerWidth, innerHeight } = window
    const x = (e.clientX / innerWidth) * 2 - 1
    const y = (e.clientY / innerHeight) * 2 - 1
    mx.set(x * 50)
    my.set(y * 50)
  }, [mx, my])

  const onMouseLeave = useCallback(() => {
    mx.set(0)
    my.set(0)
  }, [mx, my])

  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-white" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/70 to-white pointer-events-none" />

      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: glowX }}
          className="absolute top-24 left-1/2 -translate-x-1/2 h-72 w-[60rem] rounded-full bg-[#0066FF]/10 blur-3xl"
        />
      </div>

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div style={{ rotateX, rotateY }} className="w-full will-change-transform">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-[12vw] leading-[0.9] md:text-[8rem] font-[800] tracking-tight text-[#0f172a]"
          >
            We craft digital experiences
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            className="mt-6 max-w-xl text-slate-600"
          >
            Ultra-minimal design with a futuristic touch. Precision, whitespace and clarity—built into every pixel.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className="mt-10 flex items-center gap-4"
          >
            <MagneticButton
              className="group inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-[#0066FF] hover:bg-[#0052cc] transition-colors shadow-[0_12px_40px_-12px_rgba(0,102,255,0.6)]"
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Projects
            </MagneticButton>
            <a href="#services" className="text-[#0052cc] hover:text-[#003ea3]">Our services</a>
          </motion.div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  )
}
