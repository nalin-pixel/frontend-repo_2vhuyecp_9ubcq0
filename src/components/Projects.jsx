export default function Projects() {
  const projects = [
    {
      title: 'Interactive 3D Portfolio',
      description: 'A playful WebGL portfolio with Spline scenes and smooth scroll animations.',
      tags: ['React', 'Spline', 'Three.js'],
      link: '#',
    },
    {
      title: 'Task Manager API',
      description: 'RESTful API with FastAPI and MongoDB for managing tasks with authentication.',
      tags: ['FastAPI', 'MongoDB', 'JWT'],
      link: '#',
    },
    {
      title: 'Design System',
      description: 'Reusable component library with Tailwind and Radix UI primitives.',
      tags: ['Tailwind', 'Radix', 'Storybook'],
      link: '#',
    },
  ]

  return (
    <section id="projects" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Featured Projects</h2>
          <a href="#contact" className="hidden sm:inline-flex px-4 py-2 rounded-md text-sm font-semibold bg-white text-slate-900 hover:bg-slate-100">Contact Me</a>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <a key={p.title} href={p.link} className="group relative rounded-2xl p-6 border border-white/10 bg-white/5 hover:border-blue-400/40 transition-colors">
              <div className="absolute -inset-px rounded-2xl bg-gradient-to-r from-blue-500/0 via-blue-500/10 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-slate-300 text-sm">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-md bg-white/10 text-slate-200">{t}</span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
