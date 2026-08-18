import React from 'react'
import { Link } from 'react-router-dom'

export function MobileNav({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="md:hidden bg-navy-900 text-white px-4 pt-2 pb-6 space-y-3 border-t border-navy-700">
      <Link to="/" onClick={onClose} className="block py-2 hover:text-gold-300 transition-colors">Home</Link>
      <Link to="/about" onClick={onClose} className="block py-2 hover:text-gold-300 transition-colors">About</Link>
      <Link to="/academics" onClick={onClose} className="block py-2 hover:text-gold-300 transition-colors">Academics</Link>
      <Link to="/admissions" onClick={onClose} className="block py-2 hover:text-gold-300 transition-colors">Admissions</Link>
      <Link to="/contact" onClick={onClose} className="block py-2 hover:text-gold-300 transition-colors">Contact</Link>
      <Link
        to="/portal"
        onClick={onClose}
        className="inline-block w-full text-center px-4 py-2 mt-2 bg-gold-500 hover:bg-gold-300 text-navy-900 font-semibold rounded transition-colors"
      >
        Parent Portal
      </Link>
    </div>
  )
}

export default MobileNav
