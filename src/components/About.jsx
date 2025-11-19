import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-7 rounded-3xl border border-white bg-white/70 p-7 backdrop-blur-xl"
          >
            <h2 className="text-3xl font-bold text-slate-900 tracking-tight">A little about me</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              I’m a product generalist who loves going from zero to one. I bias towards action, clarify ambiguity with crisp documents, and align cross-functional teams around outcomes.
            </p>
            <ul className="mt-5 grid sm:grid-cols-2 gap-2.5 text-slate-700 text-sm">
              {[
                'PRDs, roadmaps, and KPI trees',
                'User interviews and JTBD synthesis',
                'Experiment design & evaluation',
                'Backlog prioritization & delivery',
              ].map((item) => (
                <li key={item} className="rounded-xl border border-slate-200 bg-white px-4 py-2.5">{item}</li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.05 }}
            className="lg:col-span-5"
          >
            <div className="h-72 rounded-3xl border border-white bg-white/70 shadow-[0_0_60px_rgba(255,179,0,0.25)] overflow-hidden">
              <img alt="Product management" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?q=80&w=1600&auto=format&fit=crop" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
