import { motion } from 'framer-motion'

const projects = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `Project ${i + 1}`,
  category: i % 2 === 0 ? 'Web' : 'Mobile',
  image: `https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format&fit=crop`,
}))

export default function Projects() {
  return (
    <section id="projects" className="relative bg-white">
      <div className="max-w-7xl mx-auto px-6 py-28">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">Selected Work</h2>
          <a href="#" className="text-[#0052cc] hover:text-[#003ea3]">Load more</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projects.map((p, idx) => (
            <motion.a
              key={p.id}
              href="#"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: idx * 0.03 }}
              className="group relative overflow-hidden rounded-2xl bg-white border border-slate-200 shadow-[0_8px_40px_-20px_rgba(2,6,23,0.2)]"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3">
                  <span className="text-xs px-2 py-1 rounded-md bg-slate-100 text-slate-600">{p.category}</span>
                  <span className="h-3 w-[2px] bg-slate-300" />
                  <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                </div>
              </div>
              <span className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-[#0066FF] to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <span className="pointer-events-none absolute inset-0 ring-1 ring-[#0066FF]/0 group-hover:ring-[#0066FF]/30 transition" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
