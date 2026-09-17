import React from 'react'
import { Link } from 'react-router-dom'
import logoImg from '../../assets/images/IMG-20251128-WA0019.jpg'

export function Footer() {
  return (
    <footer className="bg-navy-950 text-white border-t border-navy-800 mt-auto">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Brand Lockup */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src={logoImg} alt="New Way College Crest" className="h-11 w-auto object-contain rounded-md shadow-sm" />
            <span className="font-extrabold text-xl text-white tracking-tight">New Way College</span>
          </div>
          <p className="text-sm text-gold-300 italic font-medium">
            "Igniting Minds, Inspiring the Future"
          </p>
          <p className="text-xs text-slate-400 leading-relaxed">
            Providing high-quality ZIMSEC 'O' and 'A' Level education focused on discipline, academic strength, and leadership.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-bold text-gold-400 mb-4 uppercase tracking-wider text-xs">Quick Links</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link to="/" className="hover:text-gold-300 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-gold-300 transition-colors">About Us</Link></li>
            <li><Link to="/academics" className="hover:text-gold-300 transition-colors">Academics</Link></li>
            <li><Link to="/gallery" className="hover:text-gold-300 transition-colors">Campus Gallery</Link></li>
            <li><Link to="/admissions" className="hover:text-gold-300 transition-colors">Admissions</Link></li>
            <li><Link to="/contact" className="hover:text-gold-300 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Levels Offered */}
        <div>
          <h3 className="font-bold text-gold-400 mb-4 uppercase tracking-wider text-xs">Academic Streams</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Ordinary Level (Form 1 – 4)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Advanced Level (Form 5 – 6)</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>Sciences, Commercials & Arts</span>
            </li>
            <li className="flex items-center space-x-2">
              <span className="w-1.5 h-1.5 rounded-full bg-gold-500"></span>
              <span>ZIMSEC Syllabus accredited</span>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="font-bold text-gold-400 mb-4 uppercase tracking-wider text-xs">Get In Touch</h3>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-white">Phone:</span>
              <span>+263 78 491 3304</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-white">WhatsApp:</span>
              <span>+263 78 491 3304</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-white">Address:</span>
              <span>1350 Dzivareskwa extension, Harare, Zimbabwe</span>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold text-white">Email:</span>
              <a href="mailto:newaycollege@gmail.com" className="hover:text-gold-400 transition-colors">newaycollege@gmail.com</a>
            </li>
          </ul>
        </div>

      </div>

      <div className="border-t border-navy-900 py-6 text-center text-xs text-slate-400">
        <p>&copy; {new Date().getFullYear()} New Way College. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
