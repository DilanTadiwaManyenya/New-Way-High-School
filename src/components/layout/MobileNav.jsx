import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export function MobileNav({ isOpen, onClose }) {
  const location = useLocation()
  if (!isOpen) return null

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academic Programs' },
    { path: '/gallery', label: 'Campus Gallery' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/contact', label: 'Contact Us' },
  ]

  return (
    <div className="md:hidden bg-navy-950 text-white px-6 pt-3 pb-6 space-y-2 border-t border-navy-800 animate-fade-in shadow-xl">
      {navLinks.map((link) => {
        const isActive = location.pathname === link.path
        return (
          <Link
            key={link.path}
            to={link.path}
            onClick={onClose}
            className={`block py-2.5 px-3 rounded-lg text-base font-semibold transition-colors ${
              isActive
                ? 'bg-navy-800 text-gold-300 font-bold border-l-4 border-gold-500'
                : 'text-slate-200 hover:bg-navy-900 hover:text-gold-300'
            }`}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}

export default MobileNav
