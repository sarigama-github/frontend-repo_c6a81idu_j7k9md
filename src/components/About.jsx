import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl border border-white/10 bg-slate-900/60 p-8 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold text-white tracking-tight">A little about me</h2>
            <p className="mt-4 text-blue-100/80 leading-relaxed">
              I’m a product generalist who loves going from zero to one. I bias towards action, clarify ambiguity with crisp documents, and align cross-functional teams around outcomes.
            </p>
            <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-blue-100/80 text-sm">
              {[
                'PRDs, roadmaps, and KPI trees',
                'User interviews and JTBD synthesis',
                'Experiment design & evaluation',
                'Backlog prioritization & delivery',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5"
          >
            <div className="h-80 rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-600/20 to-blue-500/20 shadow-[0_0_60px_rgba(99,102,241,0.25)]" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
