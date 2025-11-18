import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')

    // In a real app, this would call your backend endpoint
    await new Promise((r) => setTimeout(r, 800))
    setStatus('Message sent! I will get back to you soon.')
  }

  return (
    <section id="contact" className="relative py-24 bg-slate-950">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.1),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Let’s build something</h2>
            <p className="mt-4 text-slate-300">Have an idea or internship opportunity? Drop a message and I’ll reply promptly.</p>
            <div className="mt-6 rounded-2xl border border-white/10 p-6 bg-white/5">
              <p className="text-slate-300">Email</p>
              <a href="mailto:hello@example.com" className="text-white font-medium">hello@example.com</a>
              <p className="mt-4 text-slate-300">Location</p>
              <p className="text-white font-medium">Remote • Open worldwide</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-white/10 p-6 bg-white/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-slate-300">Name</label>
                <input className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label className="block text-sm text-slate-300">Email</label>
                <input type="email" className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm text-slate-300">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-md bg-slate-900 border border-white/10 px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
            </div>
            <div className="mt-6 flex items-center gap-4">
              <button type="submit" className="inline-flex px-5 py-3 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-500 transition-colors">Send Message</button>
              <span className="text-slate-300 text-sm">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
