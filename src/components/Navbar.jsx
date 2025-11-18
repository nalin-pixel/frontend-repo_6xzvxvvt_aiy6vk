import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { href: '#projects', label: 'Projects' },
    { href: '#services', label: 'Services' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <header className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-[84%] transition-all ${
      scrolled ? 'backdrop-blur-xl bg-white/60 border border-slate-200/60 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.12)]' : 'bg-white/30 backdrop-blur-md border border-white/40'
    } rounded-2xl`}
    >
      <div className="px-5 md:px-6 h-14 flex items-center justify-between">
        <a href="#" className="font-semibold tracking-tight text-slate-900">Axiom</a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-slate-900 transition-colors">
              {l.label}
            </a>
          ))}
          <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] px-4 py-2 rounded-xl transition-colors">
            Get in touch
          </a>
        </nav>

        <button className="md:hidden p-2 rounded-lg text-slate-700" aria-label="Menu" onClick={() => setOpen(v => !v)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-5 pb-4 space-y-2">
          {links.map(l => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block text-sm text-slate-700 py-2">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="block text-sm font-medium text-white bg-[#0066FF] hover:bg-[#0052cc] px-4 py-2 rounded-xl">
            Get in touch
          </a>
        </div>
      )}
    </header>
  )
}
