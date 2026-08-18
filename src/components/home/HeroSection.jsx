import React from 'react'
import { Link } from 'react-router-dom'
import heroBgImg from '../../assets/images/IMG-20260130-WA0059.jpg'
import Button from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative bg-navy-900 text-white min-h-[500px] flex items-center justify-center overflow-hidden rounded-xl my-4">
      {/* Background Image */}
      <img
        src={heroBgImg}
        alt="New Way College Students"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      
      {/* Navy Overlay */}
      <div className="absolute inset-0 bg-navy-900/80 backdrop-blur-[2px]" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 text-center max-w-3xl">
        <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold uppercase tracking-widest bg-gold-500/20 text-gold-300 border border-gold-500/40 rounded-full">
          Official College Portal
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
          New Way College
        </h1>
        <p className="text-xl sm:text-2xl text-gold-300 font-medium italic mb-6">
          "Igniting Minds, Inspiring the Future"
        </p>
        <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-xl mx-auto">
          [COLLEGE INTRODUCTORY SLOGAN / OVERVIEW PLACEHOLDER]
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/admissions">
            <Button className="bg-gold-500 hover:bg-gold-300 text-navy-900 font-bold px-6 py-3 text-base shadow-lg transition-colors">
              Admissions Info
            </Button>
          </Link>
          <Link to="/portal">
            <Button className="bg-transparent hover:bg-white/10 text-white border border-white/40 font-semibold px-6 py-3 text-base transition-colors">
              Parent Portal
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
