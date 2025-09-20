import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
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
  );
}
