import React from 'react'
import { useState } from 'react';

export const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
  return (
    <nav className="bg-indigo-900 py-4 fixed w-full top-0 left-0 z-50">
    <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
      {/* Logo */}
      <div className="text-2xl font-bold text-white">
        <a href="#">Logo</a>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Desktop Navigation Links */}
      <div className="hidden lg:flex space-x-8 text-white font-medium">
        <a href="#home" className="hover:text-indigo-400">Home</a>
        <a href="#about" className="hover:text-indigo-400">About</a>
        <a href="#education" className="hover:text-indigo-400">Education</a>
        <a href="#projects" className="hover:text-indigo-400">Projects</a>
        <a href="#contact" className="hover:text-indigo-400">Contact</a>
        <a href="#resume" className="hover:text-indigo-400">Resume</a>
      </div>
    </div>

    {/* Mobile Pop-up Menu */}
    <div
      className={`lg:hidden ${isMenuOpen ? 'block' : 'hidden'} fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center`}
    >
      <div className="text-white text-center space-y-6">
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-3xl text-white"
        >
          ×
        </button>
        <a href="#home" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>Home</a>
        <a href="#about" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>About</a>
        <a href="#education" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>Education</a>
        <a href="#projects" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>Projects</a>
        <a href="#contact" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>Contact</a>
        <a href="#resume" className="block text-3xl hover:text-indigo-400" onClick={closeMenu}>Resume</a>
      </div>
    </div>
  </nav>
  )
}
