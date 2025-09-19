import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: 'idle', msg: '' });

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ type: 'loading', msg: 'Sending...' });
    try {
      await new Promise(r => setTimeout(r, 900));
      setStatus({ type: 'success', msg: 'Message sent successfully!' });
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setStatus({ type: 'error', msg: 'Something went wrong. Try again.' });
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url(/picai.jpg)" }} />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-24 -left-24 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-24 -right-24 w-[30rem] h-[30rem] bg-pink-500/20 rounded-full blur-3xl" />

      <section className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-6">
            <p className="text-cyan-400/80 text-xs tracking-[0.25em] uppercase">Contact</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">Let’s talk about your next project</h1>
            <p className="text-slate-300/90 leading-relaxed">Tell us about your goals and we’ll get back to you within 1–2 business days.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {title:'Email',desc:'hello@yourbrand.com'},
                {title:'Phone',desc:'+1 (555) 123-4567'},
              ].map(i => (
                <div key={i.title} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-5">
                  <div className="text-white font-semibold">{i.title}</div>
                  <div className="text-slate-300 text-sm mt-1">{i.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-500/40 via-purple-500/40 to-pink-500/40 rounded-3xl blur-xl" />
            <form onSubmit={handleSubmit} className="relative bg-slate-900/60 border border-white/10 rounded-3xl p-6 backdrop-blur-xl space-y-4">
              <div>
                <label className="block text-slate-200 text-sm mb-2">Name</label>
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-400 outline-none focus:border-cyan-400/50" required />
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-2">Email</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-400 outline-none focus:border-cyan-400/50" required />
              </div>
              <div>
                <label className="block text-slate-200 text-sm mb-2">Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} rows={5} placeholder="Tell us a bit about your project..." className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-100 placeholder:text-slate-400 outline-none focus:border-cyan-400/50" required />
              </div>

              <div className="flex items-center justify-between">
                <button disabled={status.type==='loading'} className="group inline-flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 disabled:opacity-60">
                  Send message
                  <span className="bg-white/20 rounded-full px-2 py-1 group-hover:bg-white/30 transition-colors">→</span>
                </button>
                {status.type!=='idle' && (
                  <span className={`text-sm ${status.type==='success' ? 'text-emerald-400' : status.type==='error' ? 'text-pink-400' : 'text-slate-300'}`}>{status.msg}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}


