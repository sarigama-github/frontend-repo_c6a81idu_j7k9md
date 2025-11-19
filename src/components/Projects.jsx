import { motion } from 'framer-motion'

const examples = [
  {
    title: 'Onboarding Conversion +18%',
    summary: 'Simplified signup from 7 to 3 steps with progressive profiling and social auth.',
    metrics: ['+18% conversion', '-22% TTV', '+9 NPS'],
    bg: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)'
  },
  {
    title: 'Mobile Retention Initiative',
    summary: 'Introduced habit nudges and a launch checklist based on week-1 insights.',
    metrics: ['+11% D7 retention', '75% task completion'],
    bg: 'url(https://images.unsplash.com/photo-1629380321590-3b3f75d66dec?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM1MTI1ODN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80)'
  },
  {
    title: 'Pricing & Packaging Refresh',
    summary: 'Ran interviews and price tests; launched a usage-based tier to boost ARPU.',
    metrics: ['+16% ARPU', '+12% revenue'],
    bg: 'url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop)'
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-8 flex items-end justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Highlighted Projects</h2>
          <span className="text-slate-500 text-sm">Sample work to showcase approach</span>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {examples.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-white bg-white/70 p-5 backdrop-blur-xl hover:shadow-xl transition-all"
            >
              <div className="h-40 rounded-2xl mb-4 bg-center bg-cover" style={{ backgroundImage: p.bg }} />
              <h3 className="text-lg font-semibold text-slate-900 mb-1">{p.title}</h3>
              <p className="text-sm text-slate-600 mb-3">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span key={m} className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-700">{m}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
