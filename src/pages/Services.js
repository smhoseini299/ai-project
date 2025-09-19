import React from 'react';

const SERVICES = [
  {
    title: 'Product Design',
    desc: 'Research, UX strategy, wireframes, and high-fidelity UI with design systems.',
    tags: ['Research', 'UX', 'Design System'],
  },
  {
    title: 'Web Engineering',
    desc: 'Modern React frontends with performance, accessibility, and scalability in mind.',
    tags: ['React', 'SPA', 'Performance'],
  },
  {
    title: 'AI-driven Interfaces',
    desc: 'ChatUX, recommendations, and generative features integrated into your product.',
    tags: ['LLMs', 'RAG', 'Automation'],
  },
  {
    title: 'Brand & Motion',
    desc: 'Identity, typography, and purposeful motion to elevate product feel.',
    tags: ['Identity', 'Motion', 'Guidelines'],
  },
];

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: 'url(/picai.jpg)', backgroundAttachment: 'fixed' }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-24 -left-24 w-[26rem] h-[26rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase">Services</p>
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">What we can build for you</h1>
          <p className="text-slate-300/90 mt-4">From strategy to launch, we ship products that feel intuitive and premium.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-12">
          {SERVICES.map((s) => (
            <div key={s.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 transition-transform hover:scale-[1.02]">
              <div className="absolute -inset-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative">
                <h3 className="text-white font-semibold text-lg">{s.title}</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{s.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {s.tags.map(t => (
                    <span key={t} className="px-3 py-1 rounded-full text-xs tracking-wide bg-white/5 border border-white/10 text-slate-300">{t}</span>
                  ))}
                </div>
                <div className="mt-6 inline-flex items-center gap-2 text-cyan-400/90 text-sm">
                  Learn more <span>→</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-extrabold">Have a challenge in mind?</h2>
              <p className="text-slate-300 mt-2">We’ll help you scope it and propose an approach within 48 hours.</p>
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-[1.02] transition">
              Talk to us
              <span className="text-white/80">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


