import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/IMG-20251128-WA0019.jpg'

export function Footer() {
  return (
    <footer className="bg-navy-900 text-white border-t border-navy-700 mt-auto">
      <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Brand Lockup */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="New Way College Crest" className="h-10 w-auto object-contain rounded-sm" />
            <span className="font-bold text-lg text-white">New Way College</span>
          </div>
          <p className="text-sm text-gray-300 italic">
            "Igniting Minds, Inspiring the Future" <span className="text-xs text-gold-300"></span>
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-gold-300 mb-3 uppercase tracking-wider text-xs">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gold-300 transition-colors">Academics</Link></li>
            <li><Link to="/admissions" className="hover:text-gold-300 transition-colors">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Levels Offered */}
        <div>
          <h3 className="font-semibold text-gold-300 mb-3 uppercase tracking-wider text-xs">Levels Offered</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Form 1 – Form 4 (O-Level)</li>
            <li>Form 5 – Form 6 (A-Level)</li>
            <li className="text-xs text-gray-400 italic">[ACADEMIC LEVELS PLACEHOLDER]</li>
          </ul>
        </div>

        {/* Contact Placeholders */}
        <div>
          <h3 className="font-semibold text-gold-300 mb-3 uppercase tracking-wider text-xs">Contact Information</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><span className="font-medium text-white">Phone:</span> [PHONE NUMBER]</li>
            <li><span className="font-medium text-white">Email:</span> [EMAIL ADDRESS]</li>
            <li><span className="font-medium text-white">Address:</span> [PHYSICAL ADDRESS]</li>
          </ul>
        </div>

      </div>

      <div className="border-t border-navy-700 py-4 text-center text-xs text-gray-400">
        <p>&copy; {new Date().getFullYear()} New Way College. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
