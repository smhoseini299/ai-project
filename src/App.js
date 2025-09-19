import React, { useState, useEffect } from 'react';
import { ChevronRight, Play, Globe, User, Palette } from 'lucide-react';
import { Routes, Route, NavLink } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % 3);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
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

      {/* Navigation */
      }
      <nav className="relative z-50 flex items-center justify-between px-8 py-6">
        <div className="text-white font-bold text-2xl tracking-wider">
          <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">MG</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `text-gray-300 transition-all duration-300 font-medium tracking-wide hover:scale-105 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `text-gray-300 transition-all duration-300 font-medium tracking-wide hover:scale-105 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/services"
            className={({ isActive }) => `text-gray-300 transition-all duration-300 font-medium tracking-wide hover:scale-105 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
          >
            SERVICES
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `text-gray-300 transition-all duration-300 font-medium tracking-wide hover:scale-105 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`}
          >
            CONTACT
          </NavLink>
        </div>
      </nav>

      {/* Routes */}
      <Routes>
        <Route
          path="/"
          element={
            <div className="relative z-40 flex items-center min-h-[80vh] px-8">
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
                 <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/20">
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
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Bottom Features Section */}
      <div className="relative z-40 px-8 pb-16">
        {/* Background Image for Features */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{
            backgroundImage: 'url(/picai.jpg)',
            backgroundAttachment: 'fixed'
          }}
        ></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <button className="ml-auto bg-white/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Explore the endless realms of the metaverse, from futuristic digital cities to virtual concerts, events, and meetings in VR.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <User className="w-6 h-6 text-white" />
                </div>
                <button className="ml-auto bg-white/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Create your unique virtual persona! Choose your style, enhance it with AI-powered features.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm rounded-2xl p-6 border border-cyan-400/10 hover:border-cyan-400/30 transition-all duration-500 hover:scale-105">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <button className="ml-auto bg-white/10 rounded-full p-2 group-hover:bg-cyan-400/20 transition-colors">
                  <ChevronRight className="w-4 h-4 text-cyan-400" />
                </button>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Experience generative artworks, interactive NFTs, and AI-driven creativity, shaping the next evolution of digital expression.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 space-y-2 z-50">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === activeSlide
                ? 'bg-green-400 scale-125'
                : 'bg-white/30 hover:bg-white/50'
            }`}
          ></div>
        ))}
      </div>

      {/* Footer */}
      <footer className="relative z-40 bg-gradient-to-r from-slate-900/80 via-slate-800/80 to-slate-900/80 backdrop-blur-sm border-t border-cyan-400/20">
        <div className="max-w-7xl mx-auto px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MG</span>
                </div>
                <span className="text-white font-bold text-xl tracking-wider">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">METAVERSE</span>
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed max-w-md">
                Step beyond reality into the future of digital experiences. 
                Explore, create, and connect in the limitless metaverse.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Quick Links</h3>
              <ul className="space-y-3">
                {['Home', 'About', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Connect</h3>
              <div className="flex space-x-4">
                {[
                  { name: 'Twitter', icon: '𝕏' },
                  { name: 'Discord', icon: '💬' },
                  { name: 'Telegram', icon: '✈️' },
                  { name: 'GitHub', icon: '⚡' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-10 h-10 bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:bg-gradient-to-br hover:from-cyan-500/20 hover:to-purple-500/20 transition-all duration-300 border border-slate-600/30 hover:border-cyan-400/30"
                    title={social.name}
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs">
                © 2024 Metaverse Gateway. All rights reserved.
              </p>
              <div className="flex items-center gap-6 text-xs text-gray-500">
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}