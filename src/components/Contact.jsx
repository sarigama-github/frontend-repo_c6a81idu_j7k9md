import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-white bg-white/70 p-8 backdrop-blur-xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">Let’s build something great</h2>
          <p className="mt-2 text-slate-700">I’m actively exploring full-time product roles and internship opportunities.</p>
          <div className="mt-5 grid sm:grid-cols-3 gap-2.5">
            <a href="#" className="rounded-xl bg-gradient-to-br from-pink-500 via-orange-500 to-amber-400 px-5 py-3 text-white font-semibold shadow-lg">Email</a>
            <a href="#" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-amber-50 transition">LinkedIn</a>
            <a href="#" className="rounded-xl border border-slate-200 bg-white px-5 py-3 text-slate-800 hover:bg-amber-50 transition">Resume</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
