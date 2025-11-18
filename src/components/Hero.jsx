import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/75 to-white pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="w-full">
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
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl text-white bg-[#0066FF] hover:bg-[#0052cc] transition-colors shadow-[0_12px_40px_-12px_rgba(0,102,255,0.6)]"
            >
              Explore Projects
            </a>
            <a href="#services" className="text-[#0052cc] hover:text-[#003ea3]">Our services</a>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:40px_40px]" />
    </section>
  )
}
