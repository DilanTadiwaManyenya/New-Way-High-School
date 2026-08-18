import React from 'react'
import HeroSection from '../components/home/HeroSection'
import SubjectsGrid from '../components/home/SubjectsGrid'
import EnrollCTA from '../components/home/EnrollCTA'

export function Home() {
  return (
    <div className="space-y-12 pb-8">
      <HeroSection />

      <section className="space-y-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Featured Subjects & Programs</h2>
          <p className="text-sm text-gray-600 mt-1">[DISCOVER O-LEVEL & A-LEVEL ACADEMIC OFFERINGS]</p>
        </div>
        <SubjectsGrid />
      </section>

      <EnrollCTA />
    </div>
  )
}

export default Home
