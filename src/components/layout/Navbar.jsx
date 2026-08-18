import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/IMG-20251128-WA0019.jpg'
import MobileNav from './MobileNav'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-navy-900 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Brand logo & title */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logoImg} alt="New Way College Crest" className="h-12 w-auto object-contain rounded-sm" />
          <span className="font-bold text-xl tracking-tight text-white">
            New Way College
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="hover:text-gold-300 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-gold-300 transition-colors">About</Link>
          <Link to="/academics" className="hover:text-gold-300 transition-colors">Academics</Link>
          <Link to="/admissions" className="hover:text-gold-300 transition-colors">Admissions</Link>
          <Link to="/contact" className="hover:text-gold-300 transition-colors">Contact</Link>
          <Link
            to="/portal"
            className="px-4 py-2 bg-gold-500 hover:bg-gold-300 text-navy-900 font-semibold rounded transition-colors"
          >
            Parent Portal
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden text-white focus:outline-none p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <MobileNav isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} />
    </header>
  )
}

export default Navbar
