import { motion } from 'framer-motion'

const examples = [
  {
    title: 'Onboarding Conversion +18%',
    summary: 'Led a 4-week sprint to simplify signup flow for a SaaS tool. Reduced steps from 7 to 3, introducing progressive profiling and social auth.',
    metrics: ['+18% conversion', '-22% time-to-value', '+9 NPS'],
  },
  {
    title: 'Mobile Retention Initiative',
    summary: 'Partnered with data to identify week-1 drop-offs. Shipped habit-forming nudges and a lightweight checklist.',
    metrics: ['+11% D7 retention', '75% task completion'],
  },
  {
    title: 'Pricing & Packaging Refresh',
    summary: 'Ran user interviews and price testing. Introduced a usage-based tier, improving self-serve ARPU.',
    metrics: ['+16% ARPU', '+12% self-serve revenue'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(600px_200px_at_20%_20%,rgba(99,102,241,0.08),transparent),radial-gradient(600px_200px_at_80%_60%,rgba(56,189,248,0.07),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Highlighted Projects</h2>
          <span className="text-blue-200/70 text-sm">Sample work to showcase approach</span>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {examples.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group rounded-3xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl hover:border-blue-400/30 transition-all"
            >
              <div className="h-36 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-800 mb-5 group-hover:from-indigo-600/30 group-hover:to-blue-600/30 transition-colors" />
              <h3 className="text-xl font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm text-blue-100/80 mb-4">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.metrics.map((m) => (
                  <span key={m} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-blue-100">{m}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
