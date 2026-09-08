import React from 'react'
import { Link } from 'react-router-dom'
import heroBgImg from '../../assets/images/IMG-20260605-WA0151.jpg'
import Button from '../ui/Button'

export function HeroSection() {
  return (
    <section className="relative bg-navy-900 text-white min-h-[520px] lg:min-h-[580px] flex items-center justify-center overflow-hidden rounded-2xl my-2 shadow-2xl animate-fade-in border border-navy-800">
      {/* Background Image with higher visibility */}
      <img
        src={heroBgImg}
        alt="New Way College Students in Uniform"
        className="absolute inset-0 w-full h-full object-cover object-center transform scale-105 filter brightness-95"
      />
      
      {/* Lightened Gradient Overlay for better image visibility while keeping text readable */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-navy-900/60 to-navy-950/70" />

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 py-16 sm:py-20 text-center max-w-4xl space-y-6">
        <div>
          <span className="inline-flex items-center space-x-2 px-3.5 py-1.5 text-xs font-bold uppercase tracking-widest bg-gold-500/20 text-gold-300 border border-gold-500/40 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
            <span>Welcome to New Way College</span>
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Igniting Minds, <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-300 via-gold-400 to-amber-200">
            Inspiring the Future
          </span>
        </h1>

        <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal max-w-2xl mx-auto">
          Empowering the next generation of leaders through rigorous ZIMSEC academic excellence, strong values, and a supportive learning environment.
        </p>
        
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/admissions">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold px-8 py-3.5 text-base shadow-lg hover:shadow-gold-500/20 transform hover:-translate-y-0.5 transition-all">
              Apply for Enrollment
            </Button>
          </Link>
          <Link to="/academics">
            <Button className="w-full sm:w-auto bg-navy-800/80 hover:bg-navy-700 text-white border border-slate-600/50 font-semibold px-8 py-3.5 text-base backdrop-blur-sm transform hover:-translate-y-0.5 transition-all">
              Explore Programs
            </Button>
          </Link>
        </div>

        {/* Quick Highlights Strip */}
        <div className="pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-3 gap-4 text-left max-w-2xl mx-auto text-xs sm:text-sm text-slate-300">
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>ZIMSEC Curriculum</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>O-Level & A-Level</span>
          </div>
          <div className="flex items-center space-x-2 col-span-2 md:col-span-1">
            <svg className="w-4 h-4 text-gold-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Dedicated Faculty</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
