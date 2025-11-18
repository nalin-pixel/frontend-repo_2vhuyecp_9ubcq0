import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/40 to-slate-900/80 pointer-events-none" />

      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white ring-1 ring-white/20 backdrop-blur">Open to internships</span>
            <h1 className="mt-6 text-4xl sm:text-6xl font-bold tracking-tight text-white">Hi, I’m Alex — I build playful, modern web experiences</h1>
            <p className="mt-4 text-lg text-slate-200/90">Front‑end developer and design‑minded engineer who loves 3D, motion and delightful interactions.</p>
            <div className="mt-8 flex items-center gap-3">
              <a href="#projects" className="inline-flex items-center px-5 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors">View Projects</a>
              <a href="#contact" className="inline-flex items-center px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
