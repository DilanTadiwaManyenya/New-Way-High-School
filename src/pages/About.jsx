import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import aboutImg from '../assets/images/IMG-20251103-WA0013.jpg'

export const ABOUT_VALUES_DATA = [
  {
    id: 1,
    title: 'Excellence',
    description:
      'We hold high standards for ourselves and our students, believing every learner is capable of achieving great heights through dedicated guidance.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    )
  },
  {
    id: 2,
    title: 'Integrity',
    description:
      'We instill honesty, discipline, mutual respect, and ethical accountability alongside academic studies.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    id: 3,
    title: 'Curiosity',
    description:
      'We encourage students to ask questions, explore innovative ideas, and think critically across every discipline.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    )
  },
  {
    id: 4,
    title: 'Community',
    description:
      'A thriving school relies on partnership — students, educators, and parents working together with common purpose.',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    )
  },
]

export function About() {
  return (
    <div className="space-y-16 pb-12 animate-fade-in max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Hero Section */}
      <div className="relative py-20 lg:py-32 flex flex-col items-center justify-center text-center overflow-hidden rounded-[2.5rem] bg-navy-900 mt-6 shadow-2xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-gold-500 via-navy-900 to-navy-950"></div>
        <div className="relative z-10 space-y-6 max-w-4xl px-4">
          <Badge className="bg-gold-500/20 text-gold-400 border border-gold-500/30 px-5 py-2 rounded-full uppercase tracking-widest text-sm font-bold shadow-sm">
            Who We Are
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-white tracking-tight">
            About New Way College
          </h1>
          <p className="text-xl sm:text-2xl text-gold-400 font-medium italic">
            "Igniting Minds, Inspiring the Future"
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-5xl mx-auto text-center px-4 space-y-8">
        <Badge className="bg-navy-900/10 text-navy-900 border border-navy-900/10 font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-xs">
          Our Mission
        </Badge>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-navy-900 leading-snug tracking-tight">
          To ignite minds and inspire the future by providing a rigorous, supportive ZIMSEC education that helps every learner discover their full potential — academically, socially, and personally.
        </h2>
        <div className="w-24 h-1.5 bg-gold-500 rounded-full mx-auto mt-8"></div>
      </div>

      {/* Our Story Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center px-4 pt-8">
        <div className="order-2 lg:order-1 space-y-8">
          <div className="space-y-4">
            <Badge className="bg-gold-500/10 text-gold-600 border border-gold-500/20 font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-xs">
              Our Story
            </Badge>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
              Building Something Intentional
            </h3>
          </div>
          <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
            <p>
              New Way College opened its doors in 2026 with a simple belief: every student deserves an education that prepares them not just for examinations, but for the world ahead. 
            </p>
            <p>
              We are built on timeless values — discipline, curiosity, and holistic care — combined with a modern approach to teaching and learning. Starting fresh means we get to build something intentional from day one, shaped around what students actually need to thrive.
            </p>
          </div>
        </div>
        <div className="order-1 lg:order-2 relative group px-4 sm:px-0">
          <div className="absolute inset-0 bg-gold-500/20 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110"></div>
          <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 sm:border-8 border-white aspect-[4/3] bg-gray-100">
            <img
              src={aboutImg}
              alt="New Way College Campus & Students"
              className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="bg-gradient-to-b from-cream-50 to-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 shadow-inner border border-gray-100 mt-12">
        <div className="text-center max-w-3xl mx-auto space-y-6 mb-16">
          <Badge className="bg-navy-900/5 text-navy-900 border border-navy-900/10 font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-xs">
            Guiding Principles
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-lg text-slate-600">
            The pillars that guide our institutional culture and daily interactions.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8">
          {ABOUT_VALUES_DATA.map((item) => (
            <Card key={item.id} className="bg-white p-8 lg:p-10 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 hover:border-gold-500/40 transition-all duration-300 group transform hover:-translate-y-1.5 flex flex-col h-full">
              <div className="w-16 h-16 bg-navy-900/5 text-navy-900 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold-500 group-hover:text-white transition-colors duration-300 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-navy-900 mb-4">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-lg flex-grow">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>

    </div>
  )
}

export default About
