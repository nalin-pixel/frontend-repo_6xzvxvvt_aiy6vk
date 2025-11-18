import { Code2, PenTool, Cog, Smartphone } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Code2,
    title: 'Development',
    desc: 'Robust, scalable web apps with modern stacks.',
  },
  {
    icon: PenTool,
    title: 'Design',
    desc: 'Minimalist interfaces that feel effortless to use.',
  },
  {
    icon: Cog,
    title: 'Software',
    desc: 'Automation and systems engineered for speed.',
  },
  {
    icon: Smartphone,
    title: 'Mobile Apps',
    desc: 'Fast, native-feeling experiences on iOS and Android.',
  },
]

export default function Services() {
  return (
    <section id="services" className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="mb-12">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">What we do</h2>
          <p className="mt-4 text-slate-600 max-w-2xl">Precision-built services focused on outcomes. Nothing extra—only what moves the needle.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_40px_-24px_rgba(2,6,23,0.2)]"
            >
              <div className="h-12 w-12 rounded-xl bg-[#eff6ff] text-[#0052cc] flex items-center justify-center">
                <s.icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
              <a href="#" className="mt-4 inline-block text-[#0052cc] hover:text-[#003ea3]">Learn more →</a>

              <span className="pointer-events-none absolute -inset-px rounded-2xl ring-1 ring-transparent hover:ring-[#0066FF]/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
