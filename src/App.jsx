import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-orange-50 to-amber-50 text-slate-800">
      <div className="pointer-events-none absolute inset-0 -z-0 [background:radial-gradient(60rem_30rem_at_10%_10%,rgba(255,0,153,0.08),transparent),radial-gradient(50rem_28rem_at_90%_0%,rgba(0,153,255,0.08),transparent),radial-gradient(40rem_24rem_at_50%_100%,rgba(255,179,0,0.10),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="relative py-8">
        <div className="mx-auto max-w-7xl px-6 text-center text-slate-500 text-sm">
          © {new Date().getFullYear()} Alex — Product Manager Portfolio
        </div>
      </footer>
    </div>
  )
}

export default App
