import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export const ADMISSIONS_STEPS_DATA = [
  {
    step: 1,
    title: 'Enquire & Visit',
    description: 'Contact our admissions desk or visit our campus to learn about available subject combinations and class intake slots.',
  },


  {
    step: 2,
    title: 'Submit Application Pack',
    description: 'Fill out the official student registration form and submit the required supporting certificates.',
  },
  {
    step: 3,
    title: 'Placement Assessment',
    description: 'Prospective students complete a brief academic assessment and orientation interview.',
  },
  {
    step: 4,
    title: 'Offer & Registration',
    description: 'Receive your formal acceptance letter, settle the initial term fees, and complete uniform fitting.',
  },
]

export const ADMISSIONS_REQUIREMENTS_DATA = [
  {
    id: 1,
    title: 'Certified Copy of Birth Certificate',
    details: 'Required for official registration and national exam index verification.',
  },
  {
    id: 2,
    title: 'Latest Academic Report / Transcript',
    details: 'Used for subject stream placement and academic progress tracking.',
  },
  {
    id: 3,
    title: 'Two Passport-Size Photos',
    details: 'For student identification card and administrative cumulative file.',
  },
  {
    id: 4,
    title: 'Completed Application Form',
    details: 'Duly signed by parent, guardian, or sponsor.',
  },
  {
    id: 5,
    title: 'Proof of Residence',
    details: 'Utility bill or official confirmation letter verifying residential address.',
  },
]

export function Admissions() {
  return (
    <div className="space-y-12 py-6 animate-fade-in max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full">
          Enrollment Guide
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
          Admissions & Enrollment
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Joining New Way College is simple and transparent. We welcome students ready to embrace learning, discipline, and growth. Our administrative team will assist you through every step of the process.
        </p>
      </div>

      {/* Step-by-Step Admissions Process */}
      <div className="space-y-6">
        <div className="border-b border-slate-200 pb-3">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">4-Step Enrollment Process</h2>
          <p className="text-sm text-slate-500 mt-1">A clear path from initial inquiry to your first day of class.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADMISSIONS_STEPS_DATA.map((item) => (
            <Card key={item.step} className="bg-white border border-slate-200 p-6 sm:p-7 rounded-2xl shadow-xs hover:border-gold-500 hover:shadow-md transition-all flex space-x-5 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-navy-900 text-gold-300 font-black flex items-center justify-center text-xl shadow-sm">
                {item.step}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-lg font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Entry Requirements Section */}
      <div className="space-y-6 bg-cream-100 p-6 sm:p-10 rounded-2xl border border-tan-200">
        <div className="space-y-2">
          <Badge className="bg-navy-900 text-gold-300 font-bold px-3 py-1">
            Checklist
          </Badge>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Required Documents & Criteria</h2>
          <p className="text-sm text-slate-600">Please prepare the following documentation when submitting your application.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {ADMISSIONS_REQUIREMENTS_DATA.map((req) => (
            <Card key={req.id} className="bg-white border border-slate-200/80 p-5 rounded-xl shadow-xs hover:border-gold-500 transition-colors">
              <div className="flex items-center space-x-2 mb-2">
                <svg className="w-5 h-5 text-gold-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h3 className="text-sm font-bold text-navy-900">{req.title}</h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{req.details}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 text-white p-8 sm:p-12 rounded-2xl text-center space-y-6 shadow-xl border border-navy-800">
        <h2 className="text-3xl sm:text-4xl font-black text-white">Have Questions About Admissions?</h2>
        <p className="text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Reach out directly to our admissions team on WhatsApp or phone to check current space availability, tuition details, or subject combinations.
        </p>
        <div>
          <Link to="/contact">
            <Button className="bg-gradient-to-r from-gold-500 to-amber-600 hover:from-gold-400 hover:to-amber-500 text-navy-950 font-bold px-8 py-3.5 text-base shadow-lg hover:shadow-gold-500/20 transform hover:-translate-y-0.5 transition-all">
              Contact Admissions Desk
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admissions
