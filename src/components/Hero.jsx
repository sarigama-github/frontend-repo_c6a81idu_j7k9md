import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[90vh] pt-28">
      <div className="absolute inset-0">
        <div className="h-full w-full rounded-b-[3rem] overflow-hidden border-b border-white/30 bg-white">
          <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/40 to-white" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-6 items-center min-h-[70vh]">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ y: 16, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="rounded-3xl bg-white/70 backdrop-blur-xl border border-white p-6 md:p-8 shadow-[0_0_60px_rgba(255,105,180,0.25)]"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white bg-white/70 px-3 py-1 text-[12px] text-pink-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to Product Roles
              </div>
              <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900">
                Hi, I’m Alex — a Product Manager who ships delightful experiences
              </h1>
              <p className="mt-3 text-slate-700 text-lg">
                I turn ambiguous problems into lovable products through research, prioritization, and rapid iteration.
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <a href="#projects" className="rounded-xl bg-gradient-to-br from-pink-500 via-orange-500 to-amber-400 px-5 py-3 text-white font-semibold shadow-lg hover:translate-y-[-2px] transition-transform">View Work</a>
                <a href="#contact" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-amber-50 transition">Get in Touch</a>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-6" />
        </div>

        <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
          {['Product Discovery','A/B Testing','Roadmapping','Stakeholder Comms'].map((t) => (
            <motion.div key={t} initial={{ opacity: 0, y: 6 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45 }} className="rounded-2xl border border-white bg-white/70 backdrop-blur-xl p-4 text-center text-slate-800">
              {t}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
