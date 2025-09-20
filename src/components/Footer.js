import React from 'react';
import { 
  Twitter, MessageSquare, Send, Github,
  Home, Info, Briefcase, Mail, Phone,
  MapPin, ChevronRight, Sparkles
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-900 to-black">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 via-purple-500/5 to-pink-500/5"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/25">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold text-2xl">METAVERSE</h3>
                  <p className="text-xs text-gray-400">Gateway to Digital Future</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md mb-6">
                Step beyond reality into the future of digital experiences. 
                We create immersive solutions that transform how people interact with technology.
              </p>
              
              {/* Newsletter Signup */}
              <div className="space-y-3">
                <p className="text-white text-sm font-medium">Subscribe to our newsletter</p>
                <div className="flex gap-2">
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                    className="flex-1 px-4 py-2 bg-black/30 border border-gray-800 rounded-lg text-white placeholder:text-gray-500 text-sm focus:outline-none focus:border-cyan-400/50 transition-colors"
                  />
                  <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg hover:scale-105 transition-transform">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-cyan-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {[
                  { name: 'Home', href: '/', icon: Home },
                  { name: 'About', href: '/about', icon: Info },
                  { name: 'Services', href: '/services', icon: Briefcase },
                  { name: 'Contact', href: '/contact', icon: Mail }
                ].map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <link.icon className="w-3 h-3 group-hover:scale-110 transition-transform" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Services</h3>
              <ul className="space-y-3">
                {['UI/UX Design', 'Web Development', 'AI Solutions', 'Brand Strategy'].map((service) => (
                  <li key={service}>
                    <a
                      href="/services"
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Mail className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>hello@metaverse.com</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <Phone className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>+1 (555) 123-4567</span>
                </li>
                <li className="flex items-start gap-3 text-gray-400 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-400 mt-0.5" />
                  <span>San Francisco, CA</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-800/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-4">
                <span className="text-gray-400 text-sm">Follow us:</span>
                <div className="flex gap-3">
                  {[
                    { name: 'Twitter', icon: Twitter, href: '#' },
                    { name: 'Discord', icon: MessageSquare, href: '#' },
                    { name: 'Telegram', icon: Send, href: '#' },
                    { name: 'GitHub', icon: Github, href: '#' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      className="w-10 h-10 bg-black/30 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-gray-800 hover:border-cyan-400/50 group"
                      title={social.name}
                    >
                      <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Bottom Links */}
              <div className="flex flex-wrap items-center gap-6 text-xs text-gray-400">
                <p>© 2024 Metaverse Gateway. All rights reserved.</p>
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
