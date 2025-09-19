import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/picai.jpg)', backgroundAttachment: 'fixed' }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-fuchsia-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-center">
          <div className="lg:col-span-3 space-y-6">
            <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase">About us</p>
            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight">
              We craft immersive, human-centered digital experiences
            </h1>
            <p className="text-slate-300/90 text-base md:text-lg leading-relaxed max-w-2xl">
              Our team blends strategy, design, and engineering to build products that feel effortless.
              From brand systems to interactive apps and AI-driven interfaces, we obsess over details that
              make technology feel intuitive, inclusive, and inspiring.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              {[{k:'Years',v:'7+'},{k:'Projects',v:'120+'},{k:'Clients',v:'45+'},{k:'Awards',v:'12'}].map(({k,v}) => (
                <div key={k} className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-4 text-center hover:border-cyan-400/30 transition">
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{v}</div>
                  <div className="text-slate-400 text-xs tracking-wider mt-1 uppercase">{k}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Card */}
          <div className="lg:col-span-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-xl" />
              <div className="relative bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
                <img src="/picapp.jpg" alt="Team" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {["Research","Design","Engineering"].map(tag => (
                    <div key={tag} className="px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-center text-slate-300 text-xs tracking-wide">
                      {tag}
                    </div>
                  ))}
                </div>
                <p className="text-slate-300 text-sm leading-relaxed mt-4">
                  We partner with startups and enterprises to ship delightful products fast, with strong design
                  systems, scalable code, and measurable impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Principles */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {title:'Clarity first',desc:'We reduce friction with clear flows, accessible patterns, and purposeful motion.'},
            {title:'Beauty in rhythm',desc:'We use consistent spacing, scale, and contrast to guide attention elegantly.'},
            {title:'Built to scale',desc:'Design systems and code that grow gracefully with your product.'}
          ].map(card => (
            <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/5 to-white/0">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative p-6">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-28">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-fuchsia-500/10">
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="text-white text-2xl md:text-3xl font-extrabold">Ready to build something exceptional?</h2>
              <p className="text-slate-300 mt-2">Let’s turn ideas into intuitive, scalable products together.</p>
            </div>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-[1.02] transition">
              Start a project
              <span className="text-white/80">→</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}


