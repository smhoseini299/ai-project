import React, { useState } from 'react';
import { 
  Users, Target, Lightbulb, Award, ChevronRight, 
  Quote, Linkedin, Twitter, Github, ArrowRight,
  Briefcase, GraduationCap, Heart, Sparkles,
  Code, Palette, Megaphone, TrendingUp
} from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: 'url(/vecteezy-ai.jpg)', backgroundAttachment: 'fixed' }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-fuchsia-500/10 to-emerald-500/10" />
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 -right-20 w-[28rem] h-[28rem] bg-fuchsia-500/20 rounded-full blur-3xl" />

      {/* Content */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-24 mt-20">
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
                <div key={k} className="bg-black/5 backdrop-blur-md rounded-2xl border border-black/10 p-4 text-center hover:border-cyan-400/30 transition">
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
              <div className="relative bg-slate-900/60 border border-black/10 rounded-3xl p-6 backdrop-blur-xl">
                <img src="/vecteezy-ai.jpg" alt="Team" className="w-full h-64 md:h-80 object-cover rounded-2xl" />
                <div className="grid grid-cols-3 gap-3 mt-4">
                  {["Research","Design","Engineering"].map(tag => (
                    <div key={tag} className="px-3 py-2 rounded-xl bg-black/5 border border-black/10 text-center text-slate-300 text-xs tracking-wide">
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
            <div key={card.title} className="group relative overflow-hidden rounded-2xl border border-black/10 bg-gradient-to-b from-black/5 to-black/0">
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
              <div className="relative p-6">
                <h3 className="text-white font-semibold text-lg">{card.title}</h3>
                <p className="text-slate-300 text-sm mt-2 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-gray-400 text-lg">Passionate experts dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { 
              name: 'Sarah Chen', 
              role: 'CEO & Founder', 
              expertise: 'Strategy & Vision',
              bio: '10+ years in tech leadership',
              icon: Briefcase
            },
            { 
              name: 'Marcus Johnson', 
              role: 'CTO', 
              expertise: 'Engineering & Architecture',
              bio: 'Full-stack expert, AI enthusiast',
              icon: Code
            },
            { 
              name: 'Elena Rodriguez', 
              role: 'Design Director', 
              expertise: 'UX/UI & Branding',
              bio: 'Award-winning designer',
              icon: Palette
            },
            { 
              name: 'David Kim', 
              role: 'Head of Growth', 
              expertise: 'Marketing & Analytics',
              bio: 'Data-driven growth hacker',
              icon: TrendingUp
            }
          ].map((member, index) => (
            <div key={index} className="group relative">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              <div className="relative bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-black/10 hover:border-cyan-400/30 transition-all duration-300 h-full">
                {/* Avatar */}
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <member.icon className="w-12 h-12 text-white" />
                </div>
                
                {/* Info */}
                <div className="text-center">
                  <h3 className="text-white font-bold text-lg">{member.name}</h3>
                  <p className="text-cyan-400 text-sm mb-2">{member.role}</p>
                  <p className="text-gray-400 text-xs mb-3">{member.expertise}</p>
                  <p className="text-gray-500 text-xs italic">{member.bio}</p>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-black/50 transition-all">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-black/50 transition-all">
                    <Twitter className="w-4 h-4" />
                  </button>
                  <button className="w-8 h-8 bg-black/30 rounded-full flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-black/50 transition-all">
                    <Github className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values & Culture Section */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Values Drive 
              <br />
              <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
                Everything We Do
              </span>
            </h2>
            <p className="text-gray-400 text-lg mb-8">
              We believe in creating a culture where innovation thrives, collaboration is celebrated, and excellence is the standard.
            </p>

            <div className="space-y-4">
              {[
                { icon: Target, title: 'Mission-Driven', desc: 'Every project aligns with our goal to make technology more human' },
                { icon: Users, title: 'Collaborative', desc: 'We work as partners, not vendors, ensuring your success is our success' },
                { icon: Lightbulb, title: 'Innovative', desc: 'Always exploring new technologies and methodologies to stay ahead' },
                { icon: Heart, title: 'Passionate', desc: 'We love what we do, and it shows in every line of code and pixel' }
              ].map((value, index) => (
                <div key={index} className="flex gap-4 p-4 rounded-xl bg-black/10 border border-black/10 hover:border-cyan-400/30 transition-all group">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{value.title}</h3>
                    <p className="text-gray-400 text-sm">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Interactive Timeline */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-400/10 rounded-3xl blur-2xl"></div>
            <div className="relative bg-black/20 backdrop-blur-sm rounded-3xl p-8 border border-cyan-400/20">
              <h3 className="text-white text-xl font-bold mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                Our Journey
              </h3>
              
              <div className="space-y-6">
                {[
                  { year: '2017', event: 'Founded with a vision', highlight: 'Started in a garage' },
                  { year: '2019', event: 'First major client', highlight: '$1M milestone' },
                  { year: '2021', event: 'Team expansion', highlight: '25+ employees' },
                  { year: '2023', event: 'Global presence', highlight: '5 countries' },
                  { year: '2024', event: 'AI Integration', highlight: 'Future-ready' }
                ].map((milestone, index) => (
                  <div key={index} className="flex gap-4 group cursor-pointer">
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {milestone.year.slice(-2)}
                      </div>
                      {index < 4 && (
                        <div className="absolute top-12 left-1/2 transform -translate-x-1/2 w-0.5 h-6 bg-gradient-to-b from-cyan-400/50 to-purple-400/50"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold group-hover:text-cyan-400 transition-colors">{milestone.event}</h4>
                      <p className="text-gray-500 text-sm">{milestone.highlight}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Awards & <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Recognition</span>
          </h2>
          <p className="text-gray-400 text-lg">Recognized for excellence in design and development</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { title: 'Best Design', year: '2023', org: 'Awwwards' },
            { title: 'Innovation Award', year: '2023', org: 'TechCrunch' },
            { title: 'Top Agency', year: '2022', org: 'Clutch' },
            { title: 'UX Excellence', year: '2022', org: 'CSS Design Awards' }
          ].map((award, index) => (
            <div key={index} className="group">
              <div className="bg-black/10 backdrop-blur-sm rounded-2xl p-6 border border-black/10 hover:border-yellow-400/30 transition-all text-center">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold">{award.title}</h3>
                <p className="text-gray-400 text-sm">{award.org}</p>
                <p className="text-gray-500 text-xs">{award.year}</p>
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


