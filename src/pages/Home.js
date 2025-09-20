import React from 'react';
import { 
  ChevronRight, Globe, User, Palette, Users, Zap, HeadphonesIcon,
  TrendingUp, Rocket, Smartphone, Languages, Star, Quote,
  Mail, Building2, Cpu, Diamond, Cloud, Microscope, 
  Sparkles, Network
} from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: 'url(/picai.jpg)',
          backgroundAttachment: 'fixed'
        }}
      ></div>
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
      <div className="absolute top-20 left-20 w-64 h-64 bg-cyan-400/20 rounded-full blur-3xl animate-bounce"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-600/10 rounded-full blur-3xl"></div>
      
      <div className="relative z-40 px-8 pt-20">
      {/* Hero Section */}
      <div className="flex items-center min-h-[80vh]">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <p className="text-cyan-400 text-sm font-medium tracking-widest uppercase animate-pulse">
                The future is now
              </p>
              <h1 className="text-5xl lg:text-7xl font-black text-white leading-tight">
                STEP BEYOND
                <br />
                <span className="bg-gradient-to-r from-green-400 via-cyan-400 to-green-400 bg-clip-text text-transparent animate-pulse">
                  REALITY
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                Discover
                <div className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                  <ChevronRight className="w-4 h-4" />
                </div>
              </button>
              <button className="text-cyan-400 px-8 py-4 border border-cyan-400/30 rounded-full font-semibold hover:bg-cyan-400/10 transition-all duration-300 hover:scale-105">
                Connect
              </button>
            </div>
          </div>

          {/* Right Side - Futuristic Avatar */}
          <div className="relative">
            <div className="relative z-20">
              {/* Main Avatar Container */}
              <div className="relative w-full max-w-md mx-auto">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/30 via-purple-500/30 to-pink-500/30 rounded-2xl blur-xl animate-pulse"></div>

                {/* Avatar Silhouette */}
                <div className="relative bg-gradient-to-br from-black/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
                  {/* Avatar Image */}
                  <div className="w-56 h-72 mx-auto relative overflow-hidden rounded-xl">
                    <img
                      src="/picapp.jpg"
                      alt="Cyberpunk Avatar"
                      className="w-full h-full object-cover object-center rounded-xl"
                    />
                    {/* Simple Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-cyan-400/20 rounded-xl"></div>

                    {/* Tech Indicators */}
                    <div className="absolute top-4 right-4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-2 h-2 bg-pink-500 rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Floating Tech Elements */}
                <div className="absolute top-10 -right-4 w-8 h-8 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg animate-bounce"></div>
                <div className="absolute bottom-20 -left-6 w-6 h-6 bg-gradient-to-br from-pink-400 to-red-500 rounded-full animate-pulse"></div>
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-green-400 rounded-full animate-ping"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="group bg-gradient-to-br from-black/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <button className="ml-auto bg-black/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Explore the endless realms of the metaverse, from futuristic digital cities to virtual concerts, events, and meetings in VR.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="group bg-gradient-to-br from-black/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <button className="ml-auto bg-black/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Create your unique virtual persona! Choose your style, enhance it with AI-powered features.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="group bg-gradient-to-br from-black/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <button className="ml-auto bg-black/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                <ChevronRight className="w-4 h-4 text-cyan-400" />
              </button>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience generative artworks, interactive NFTs, and AI-driven creativity, shaping the next evolution of digital expression.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Powering the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Next Generation</span>
          </h2>
          <p className="text-gray-400 text-lg">Join millions exploring the metaverse</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '5M+', label: 'Active Users', icon: Users },
            { value: '150K+', label: 'Virtual Worlds', icon: Globe },
            { value: '99.9%', label: 'Uptime', icon: Zap },
            { value: '24/7', label: 'Support', icon: HeadphonesIcon }
          ].map((stat, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300"
            >
              <div className="text-cyan-400 mb-3">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/0 to-purple-400/0 group-hover:from-cyan-400/10 group-hover:to-purple-400/10 rounded-2xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline/Roadmap Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Journey</span>
          </h2>
          <p className="text-gray-400 text-lg">Building the future, one milestone at a time</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-400/50 via-purple-400/50 to-pink-400/50"></div>
          
          {/* Timeline Items */}
          <div className="space-y-12">
            {[
              { date: 'Q1 2024', title: 'Platform Launch', desc: 'Initial release with core features', side: 'left', icon: Rocket },
              { date: 'Q2 2024', title: 'AI Integration', desc: 'Advanced AI avatars and interactions', side: 'right', icon: Cpu },
              { date: 'Q3 2024', title: 'Mobile Experience', desc: 'iOS and Android apps release', side: 'left', icon: Smartphone },
              { date: 'Q4 2024', title: 'Global Expansion', desc: 'Multi-language support and new regions', side: 'right', icon: Languages }
            ].map((item, index) => (
              <div key={index} className={`flex items-center ${item.side === 'right' ? 'justify-start' : 'justify-end'}`}>
                <div className={`w-5/12 ${item.side === 'right' ? 'order-2 pl-8' : 'pr-8 text-right'}`}>
                  <div className="group bg-gradient-to-br from-black/20 to-black/10 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="text-cyan-400">
                        <item.icon className="w-6 h-6" />
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">{item.date}</div>
                    </div>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                </div>
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-cyan-400 to-purple-400 rounded-full border-4 border-slate-900 relative z-10"></div>
                </div>
                <div className="w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            What People <span className="bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Real experiences from our community</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: 'Sarah Chen', role: 'Digital Artist', comment: 'The creative possibilities are endless. I\'ve built entire worlds that I never imagined possible.' },
            { name: 'Marcus Johnson', role: 'Game Developer', comment: 'Best platform for building immersive experiences. The tools are intuitive and powerful.' },
            { name: 'Elena Rodriguez', role: 'Community Manager', comment: 'Our community has grown 10x since joining. The engagement is incredible!' }
          ].map((testimonial, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400/20 to-purple-400/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative bg-gradient-to-br from-black/30 to-black/20 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-cyan-400 text-sm">{testimonial.role}</div>
                  </div>
                  <Quote className="w-8 h-8 text-cyan-400/20" />
                </div>
                <p className="text-gray-300 text-sm italic">&ldquo;{testimonial.comment}&rdquo;</p>
                <div className="mt-4 flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA Section */}
      <div className="max-w-7xl mx-auto py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-md border border-cyan-400/20">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/5 to-purple-400/5"></div>
          <div className="relative p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Enter the <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Metaverse?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Join our newsletter and be the first to know about new features, exclusive events, and special offers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-12 pr-6 py-3 rounded-full bg-black/20 border border-cyan-400/20 text-white placeholder:text-gray-400 focus:outline-none focus:border-cyan-400/50 transition-colors"
                />
              </div>
              <button className="px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold hover:scale-105 transition-transform flex items-center justify-center gap-2">
                Subscribe
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Partners Section */}
      <div className="max-w-7xl mx-auto py-20 pb-32">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by <span className="bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">Industry Leaders</span>
          </h2>
          <p className="text-gray-400 text-lg">Partnering with the best to build the future</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { name: 'TechCorp', icon: Rocket },
            { name: 'DigitalX', icon: Diamond },
            { name: 'FutureAI', icon: Cpu },
            { name: 'MetaBuilders', icon: Building2 },
            { name: 'CloudNine', icon: Cloud },
            { name: 'InnovateLab', icon: Microscope },
            { name: 'NextGen', icon: Sparkles },
            { name: 'VirtualCo', icon: Network }
          ].map((partner, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="group relative bg-gradient-to-br from-black/10 to-black/5 backdrop-blur-sm rounded-xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-300 hover:scale-110 w-full text-center">
                <div className="text-cyan-400 mb-2 flex justify-center">
                  <partner.icon className="w-8 h-8" />
                </div>
                <div className="text-gray-400 font-semibold">{partner.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
}
