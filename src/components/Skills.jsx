import { motion } from 'framer-motion'

const skills = [
  { name: 'Product Strategy', level: 90 },
  { name: 'User Research', level: 85 },
  { name: 'Analytics (SQL, GA4)', level: 70 },
  { name: 'Prototyping (FigJam, Figma)', level: 80 },
  { name: 'Agile Delivery', level: 88 },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-8">Core Skills</h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-100">{s.name}</span>
                <span className="text-blue-200/70 text-sm">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-indigo-500 to-blue-500" initial={{ width: 0 }} whileInView={{ width: s.level + '%' }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
