import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import aboutImg from '../assets/images/IMG-20251103-WA0013.jpg'

export const ABOUT_VALUES_DATA = [
  {
    id: 1,
    title: 'Academic Excellence',
    description:
      'Rigorous teaching and a culture of high expectations that prepares every learner for O-Level, A-Level, and beyond.',
  },
  {
    id: 2,
    title: 'Character & Leadership',
    description:
      'Building confident, disciplined young people who lead with integrity in and out of the classroom.',
  },
  {
    id: 3,
    title: 'Safe, Structured Learning',
    description:
      'A secure, supportive campus environment where students can focus fully on growth.',
  },
  {
    id: 4,
    title: 'Holistic Development',
    description:
      'Sport, clubs, and extracurricular life that develop the whole learner, not just the transcript.',
  },
]

export function About() {
  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          Who We Are
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          About New Way College
        </h1>
        <p className="text-gold-500 text-lg font-medium italic">
          "Igniting Minds, Inspiring the Future"
        </p>
      </div>

      {/* Mission & Vision Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-navy-900 text-white border border-navy-700 p-6 space-y-3 rounded-xl shadow-md">
          <Badge className="bg-gold-500 text-navy-900 font-bold px-3 py-1">
            Our Mission
          </Badge>
          <h2 className="text-xl font-bold text-white">[MISSION TITLE PLACEHOLDER]</h2>
          <p className="text-sm text-gray-300 leading-relaxed">
            [MISSION STATEMENT PLACEHOLDER: High-level overview of the college's educational purpose, standards, and commitment to student achievement.]
          </p>
        </Card>

        <Card className="bg-cream-50 text-navy-900 border border-gray-200 p-6 space-y-3 rounded-xl shadow-sm">
          <Badge className="bg-navy-900/10 text-navy-900 font-bold px-3 py-1">
            Our Vision
          </Badge>
          <h2 className="text-xl font-bold text-navy-900">[VISION TITLE PLACEHOLDER]</h2>
          <p className="text-sm text-gray-700 leading-relaxed">
            [VISION STATEMENT PLACEHOLDER: Strategic vision for future leadership, academic innovation, and holistic student development.]
          </p>
        </Card>
      </div>

      {/* Featured Campus Life Image & Narrative */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <div className="overflow-hidden rounded-lg shadow-sm max-h-[350px]">
          <img
            src={aboutImg}
            alt="New Way College Campus & Students"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="space-y-4">
          <Badge className="bg-gold-500/10 text-gold-500 font-semibold px-2.5 py-1">
            Campus Community
          </Badge>
          <h2 className="text-2xl font-bold text-navy-900">
            [COLLEGE HERITAGE & OVERVIEW PLACEHOLDER]
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            [DETAILED NARRATIVE PLACEHOLDER: Overview of New Way College history, campus environment, teaching faculty ethos, and community engagement.]
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="space-y-6">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="text-2xl font-bold text-navy-900">Core Pillars & Values</h2>
          <p className="text-sm text-gray-500">[OUR GUIDING PRINCIPLES]</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {ABOUT_VALUES_DATA.map((item) => (
            <Card key={item.id} className="bg-white border border-gray-200 p-5 rounded-lg shadow-sm hover:border-gold-500 transition-all">
              <h3 className="text-base font-bold text-navy-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
