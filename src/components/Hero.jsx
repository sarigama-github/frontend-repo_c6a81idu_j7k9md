import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <div className="h-full w-full rounded-b-[3rem] overflow-hidden border-b border-white/10 bg-slate-900">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/50 to-slate-900" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-6 md:p-8 shadow-[0_0_60px_rgba(99,102,241,0.2)]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800/60 px-3 py-1 text-[12px] text-blue-200">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Open to Product Roles
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold tracking-tight text-white">
                Hi, I’m Alex — a Product Manager who ships delightful experiences
              </h1>
              <p className="mt-4 text-blue-200/80 text-lg">
                I turn ambiguous problems into lovable products through research, prioritization, and rapid iteration.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-500/30 hover:translate-y-[-2px] transition-transform">View Work</a>
                <a href="#contact" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">Get in Touch</a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>

        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 opacity-90">
          {['User Research','A/B Testing','Roadmapping','Stakeholder Comms'].map((t) => (
            <motion.div key={t} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-4 text-center text-blue-100">
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
