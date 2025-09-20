import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Home, Info, Briefcase, Mail, Sparkles } from 'lucide-react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isMenuOpen && !e.target.closest('nav')) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  const navItems = [
    { name: 'HOME', path: '/', icon: Home },
    { name: 'ABOUT', path: '/about', icon: Info },
    { name: 'SERVICES', path: '/services', icon: Briefcase },
    { name: 'CONTACT', path: '/contact', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'backdrop-blur-lg bg-black/20' : 'backdrop-blur-md bg-black/5'
    }`}>
      <nav className={`border-b transition-all duration-300 ${
        isScrolled ? 'border-gray-800/50 py-4' : 'border-black/10 py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/25 group-hover:scale-110 transition-transform">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              METAVERSE
            </span>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={({ isActive }) => `
                  relative text-sm font-medium tracking-wide transition-all duration-300 
                  ${isActive 
                    ? 'text-cyan-400' 
                    : 'text-gray-300 hover:text-cyan-400'
                  }
                `}
              >
                {({ isActive }) => (
                  <>
                    <span className="flex items-center gap-2">
                      <item.icon className={`w-4 h-4 ${isActive ? 'scale-110' : ''} transition-transform`} />
                      {item.name}
                    </span>
                    {isActive && (
                      <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></span>
                    )}
                  </>
                )}
              </NavLink>
            ))}
            
            {/* CTA Button */}
            <NavLink
              to="/contact"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-sm font-semibold rounded-full hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 transition-all duration-300"
            >
              Get Started
            </NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden relative w-10 h-10 bg-black/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white hover:bg-black/30 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-6 py-4 space-y-2 bg-black/10 backdrop-blur-lg border-t border-gray-800/50 mt-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300
                  ${isActive 
                    ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20 text-cyan-400 border border-cyan-400/30' 
                    : 'text-gray-300 hover:bg-black/20 hover:text-cyan-400'
                  }
                `}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.name}</span>
                {({ isActive }) => isActive && (
                  <span className="ml-auto w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></span>
                )}
              </NavLink>
            ))}
            
            {/* Mobile CTA */}
            <NavLink
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-4 w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-center font-semibold rounded-xl hover:scale-[1.02] transition-transform"
            >
              Get Started
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  );
}
