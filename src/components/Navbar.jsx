import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-[0_0_40px_rgba(59,130,246,0.15)]">
          <div className="flex items-center justify-between px-6 py-4">
            <button onClick={() => scrollTo('top')} className="group inline-flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 shadow-lg shadow-blue-500/30" />
              <span className="text-white/90 font-semibold tracking-tight group-hover:text-white transition-colors">PM Portfolio</span>
            </button>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-blue-100/80 hover:text-white transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                className="inline-flex items-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 hover:shadow-indigo-500/30 transition-all"
              >
                Hire Me
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-blue-100">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-6 pb-6 grid gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full rounded-xl bg-slate-800/60 px-4 py-3 text-left text-blue-100 hover:text-white hover:bg-slate-800 transition"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                className="w-full text-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-500 px-4 py-3 font-semibold text-white shadow-lg shadow-blue-500/30"
              >
                Hire Me
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
