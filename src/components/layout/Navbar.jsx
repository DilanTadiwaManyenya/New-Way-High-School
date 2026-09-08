import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logoImg from '../../assets/images/IMG-20251128-WA0019.jpg'
import MobileNav from './MobileNav'

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/academics', label: 'Academics' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-navy-950/95 backdrop-blur-md text-white border-b border-navy-800 shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Brand logo & title */}
        <Link to="/" className="flex items-center space-x-3 group">
          <img
            src={logoImg}
            alt="New Way College Crest"
            className="h-11 w-auto object-contain rounded-md shadow-sm group-hover:scale-105 transition-transform"
          />
          <div className="flex flex-col">
            <span className="font-black text-xl tracking-tight text-white group-hover:text-gold-300 transition-colors">
              New Way College
            </span>
            <span className="text-[10px] text-gold-400 font-semibold uppercase tracking-widest -mt-1 hidden sm:block">
              Igniting Minds, Inspiring the Future
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-7 text-sm font-semibold">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`transition-colors py-1 border-b-2 ${
                  isActive
                    ? 'text-gold-300 border-gold-500 font-bold'
                    : 'text-slate-200 border-transparent hover:text-gold-300 hover:border-gold-500/50'
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden text-slate-200 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-navy-800 transition-colors"
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
