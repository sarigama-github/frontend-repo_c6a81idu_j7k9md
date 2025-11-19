import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-blue-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(800px_500px_at_80%_-10%,rgba(56,189,248,0.07),transparent),radial-gradient(800px_500px_at_10%_10%,rgba(99,102,241,0.06),transparent)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="relative pb-10">
        <div className="mx-auto max-w-7xl px-6 text-center text-blue-300/60 text-sm">
          © {new Date().getFullYear()} Alex — Product Manager Portfolio
        </div>
      </footer>
    </div>
  )
}

export default App
