export default function Skills() {
  const skills = [
    { name: 'React', level: 85 },
    { name: 'Tailwind', level: 90 },
    { name: 'FastAPI', level: 75 },
    { name: 'MongoDB', level: 70 },
    { name: 'Framer Motion', level: 65 },
    { name: 'Spline', level: 60 },
  ]

  return (
    <section id="skills" className="relative py-24 bg-gradient-to-b from-slate-950 to-slate-900">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Skills</h2>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((s) => (
            <div key={s.name} className="rounded-xl border border-white/10 p-5 bg-white/5">
              <div className="flex items-center justify-between">
                <p className="text-white font-medium">{s.name}</p>
                <p className="text-slate-300 text-sm">{s.level}%</p>
              </div>
              <div className="mt-3 h-2 rounded bg-white/10 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-blue-500 to-purple-500" style={{ width: `${s.level}%` }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
