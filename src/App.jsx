import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />

      {/* Hero with Spline 3D */}
      <Hero />

      {/* About */}
      <About />

      {/* Projects */}
      <Projects />

      {/* Skills */}
      <Skills />

      {/* Contact */}
      <Contact />

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Student Portfolio. All rights reserved.</p>
          <div className="text-slate-400 text-sm">Built with love, React and Spline ✨</div>
        </div>
      </footer>
    </div>
  )
}

export default App
