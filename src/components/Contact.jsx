import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-3xl border border-white/10 bg-slate-900/60 p-10 backdrop-blur-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Let’s build something great</h2>
          <p className="mt-3 text-blue-100/80">I’m actively exploring full-time product roles and internship opportunities.</p>
          <div className="mt-6 grid sm:grid-cols-3 gap-3">
            <a href="#" className="rounded-xl bg-gradient-to-br from-indigo-500 to-blue-500 px-5 py-3 text-white font-semibold shadow-lg shadow-indigo-500/30">Email</a>
            <a href="#" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">LinkedIn</a>
            <a href="#" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition">Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
