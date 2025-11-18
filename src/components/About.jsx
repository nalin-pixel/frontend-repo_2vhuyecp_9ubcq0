export default function About() {
  return (
    <section id="about" className="relative py-24 bg-gradient-to-b from-slate-900 to-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">About Me</h2>
            <p className="mt-4 text-slate-300 leading-relaxed">
              I’m a student developer focused on crafting responsive, accessible interfaces with a strong eye for detail. I enjoy merging design and engineering to create engaging, performant apps.
            </p>
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p className="text-3xl font-bold text-white">3+</p>
                <p className="text-slate-300">Years coding</p>
              </div>
              <div className="rounded-xl border border-white/10 p-4 bg-white/5">
                <p className="text-3xl font-bold text-white">12</p>
                <p className="text-slate-300">Projects</p>
              </div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 p-1 bg-gradient-to-br from-blue-500/30 to-purple-500/30">
            <div className="rounded-2xl p-8 bg-slate-900 h-full">
              <ul className="space-y-3 text-slate-200">
                <li>• Frontend: React, Tailwind, Framer Motion</li>
                <li>• Backend: FastAPI, Node, MongoDB</li>
                <li>• Tools: Git, Figma, Spline, Vite</li>
                <li>• Interests: 3D, Motion, Accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
