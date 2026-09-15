import React from 'react'
import HeroSection from '../components/home/HeroSection'
import SubjectsGrid from '../components/home/SubjectsGrid'
import EnrollCTA from '../components/home/EnrollCTA'

export function Home() {
  return (
    <div className="space-y-12 pb-8 animate-fade-in">
      <HeroSection />

      <section className="space-y-6 pt-4">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-navy-900/5 text-navy-900 border border-navy-900/10 rounded-full">
            Comprehensive Curriculum
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-navy-900">Featured Subjects & Programs</h2>
          <p className="text-base text-slate-600">Discover our broad range of ZIMSEC accredited Ordinary and Advanced Level subjects.</p>
        </div>
        <SubjectsGrid />
      </section>

      <EnrollCTA />
    </div>
  )
}

export default Home
