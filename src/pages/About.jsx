import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import aboutImg from '../assets/images/IMG-20251103-WA0013.jpg'

export const ABOUT_VALUES_DATA = [
  {
    id: 1,
    title: 'Excellence',
    description: 'We hold high standards for ourselves and our students, believing every learner is capable of achieving great height through dedicated guidance.',
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Integrity',
    description: 'We instill honesty, discipline, mutual respect, and ethical accountability alongside academic studies.',
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Curiosity',
    description: 'We encourage students to ask questions, explore innovative ideas, and think critically across every discipline.',
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Community',
    description: 'A thriving school relies on partnership — students, educators, and parents working together with common purpose.',
    icon: (
      <svg className="w-6 h-6 text-gold-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export function About() {
  return (
    <div className="space-y-12 py-6 animate-fade-in max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
          About New Way College
        </h1>
        <p className="text-gold-600 text-lg sm:text-xl font-medium italic">
          "Igniting Minds, Inspiring the Future"
        </p>
      </div>

      {/* Featured Campus Life Image & Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 sm:p-8 rounded-2xl border border-slate-200/80 shadow-md">
        <div className="overflow-hidden rounded-xl shadow-sm max-h-[420px] relative group">
          <img
            src={aboutImg}
            alt="New Way College Campus Life"
            className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 to-transparent opacity-60" />
        </div>
        <div className="space-y-5">
          <Badge className="bg-gold-500/10 text-gold-600 border border-gold-500/20 font-bold px-3 py-1">
            Our Story
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900 leading-tight">
            Building Something Intentional
          </h2>
          <p className="text-slate-600 leading-relaxed text-base">
            New Way College opened its doors in 2026 with a simple belief: every student deserves an education that prepares them not just for examinations, but for the world ahead. We are built on timeless values — discipline, curiosity, and holistic care — combined with a modern approach to teaching and learning. Starting fresh means we get to build something intentional from day one, shaped around what students actually need to thrive.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="max-w-4xl mx-auto">
        <Card className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white border border-navy-800 p-8 sm:p-12 text-center space-y-4 rounded-2xl shadow-xl relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-48 h-48 bg-gold-500/10 rounded-full blur-2xl" />
          <Badge className="bg-gold-500 text-navy-950 font-bold px-4 py-1 mx-auto shadow-sm">
            Our Mission
          </Badge>
          <p className="text-xl sm:text-2xl text-slate-100 leading-relaxed font-semibold max-w-3xl mx-auto">
            To ignite minds and inspire the future by providing a rigorous, supportive ZIMSEC education that helps every learner discover their full potential — academically, socially, and personally.
          </p>
        </Card>
      </div>

      {/* Core Values Section */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-3xl font-black text-navy-900">Our Core Values</h2>
          <p className="text-slate-600">The pillars that guide our institutional culture and daily interactions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ABOUT_VALUES_DATA.map((item) => (
            <Card key={item.id} className="bg-white border border-slate-200 p-6 sm:p-8 rounded-xl shadow-xs hover:border-gold-500 hover:shadow-md transition-all space-y-4">
              <div className="w-12 h-12 rounded-lg bg-gold-500/10 flex items-center justify-center">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
