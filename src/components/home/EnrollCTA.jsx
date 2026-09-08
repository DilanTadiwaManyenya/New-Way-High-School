import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../ui/Button'

export function EnrollCTA() {
  return (
    <section className="py-12 px-6 sm:px-10 bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white rounded-2xl shadow-xl border border-navy-800 relative overflow-hidden my-8 animate-fade-in">
      {/* Background Decorative Circles */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
        <span className="inline-block px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest bg-gold-500/20 text-gold-300 border border-gold-500/30 rounded-full">
          Enrollment Now Open
        </span>
        
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
          Ready to Start Your Journey at New Way College?
        </h2>

        <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          We invite prospective students and parents to discover our ZIMSEC curriculum, modern facilities, and vibrant academic community. Secure your placement for the upcoming term.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/admissions" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold px-8 py-3.5 text-base shadow-lg hover:shadow-gold-500/20 transform hover:-translate-y-0.5 transition-all">
              View Admission Requirements
            </Button>
          </Link>
          <Link to="/contact" className="w-full sm:w-auto">
            <Button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3.5 text-base backdrop-blur-sm transform hover:-translate-y-0.5 transition-all">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default EnrollCTA
