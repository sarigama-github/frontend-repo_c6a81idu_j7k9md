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
        <div className="mt-4 rounded-2xl border border-white/20 bg-white/70 backdrop-blur-xl shadow-[0_10px_40px_rgba(255,105,180,0.15)]">
          <div className="flex items-center justify-between px-4 md:px-6 py-3">
            <button onClick={() => scrollTo('top')} className="group inline-flex items-center gap-2">
              <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-pink-500 to-amber-400 shadow-lg shadow-pink-500/30" />
              <span className="text-slate-800 font-semibold tracking-tight group-hover:text-pink-700 transition-colors">PM Portfolio</span>
            </button>

            <nav className="hidden md:flex items-center gap-5">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="text-sm text-slate-700 hover:text-pink-700 transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                className="inline-flex items-center rounded-xl bg-gradient-to-br from-pink-500 via-orange-500 to-amber-400 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 hover:shadow-pink-500/30 transition-all"
              >
                Hire Me
              </a>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden text-slate-800">
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
          {open && (
            <div className="md:hidden px-4 md:px-6 pb-4 grid gap-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="w-full rounded-xl border border-slate-200 bg-white/60 px-4 py-2 text-left text-slate-800 hover:bg-white/80 transition"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
                className="w-full text-center rounded-xl bg-gradient-to-br from-pink-500 via-orange-500 to-amber-400 px-4 py-2 font-semibold text-white shadow-lg"
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
