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
    <section id="skills" className="relative py-16">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-6">Core Skills</h2>
        <div className="grid lg:grid-cols-2 gap-5">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white bg-white/70 p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-slate-800">{s.name}</span>
                <span className="text-slate-500 text-sm">{s.level}%</span>
              </div>
              <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
                <motion.div className="h-full bg-gradient-to-r from-pink-500 via-orange-500 to-amber-400" initial={{ width: 0 }} whileInView={{ width: s.level + '%' }} viewport={{ once: true }} transition={{ duration: 0.9, ease: 'easeOut' }} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
