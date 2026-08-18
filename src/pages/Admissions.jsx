import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export const ADMISSIONS_STEPS_DATA = [
  {
    step: 1,
    title: 'Enquire',
    description:
      'Contact the school office to request an application pack and confirm space availability for the intake.',
  },
  {
    step: 2,
    title: 'Submit Application',
    description: 'Complete the application form and submit the required documents.',
  },
  {
    step: 3,
    title: 'Assessment',
    description: 'Shortlisted candidates sit a basic placement assessment and/or interview.',
  },
  {
    step: 4,
    title: 'Offer & Enrollment',
    description:
      "Successful candidates receive an offer letter and complete enrollment with the first term's fees.",
  },
]

export const ADMISSIONS_REQUIREMENTS_DATA = [
  {
    id: 1,
    title: 'Certified copy of birth certificate',
    details: 'Required for official registration and identity verification.',
  },
  {
    id: 2,
    title: 'Most recent school report / academic transcript',
    details: 'Used for academic assessment and level placement.',
  },
  {
    id: 3,
    title: 'Two passport-size photographs',
    details: 'Required for student ID card and official file records.',
  },
  {
    id: 4,
    title: 'Completed application form',
    details: 'Fully filled and signed by the parent or guardian.',
  },
  {
    id: 5,
    title: 'Proof of residence',
    details: 'Utility bill or official letter verifying residential address.',
  },
]

export function Admissions() {
  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          Enrollment Guide
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Admissions & Enrollment
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          [ADMISSIONS OVERVIEW PLACEHOLDER: Welcome statement for prospective parents and students seeking admission to New Way College.]
        </p>
      </div>

      {/* Step-by-Step Admissions Process */}
      <div className="space-y-6">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-bold text-navy-900">Admission Process</h2>
          <p className="text-sm text-gray-500">[STEP-BY-STEP ENROLLMENT STEPS]</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {ADMISSIONS_STEPS_DATA.map((item) => (
            <Card key={item.step} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm flex space-x-4 items-start">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-navy-900 text-gold-300 font-extrabold flex items-center justify-center text-lg">
                {item.step}
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-bold text-navy-900">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Entry Requirements Section */}
      <div className="space-y-6 bg-cream-50 p-6 sm:p-8 rounded-xl border border-gray-200">
        <div className="space-y-1">
          <Badge className="bg-navy-900 text-white font-semibold px-2.5 py-0.5">
            Checklist
          </Badge>
          <h2 className="text-2xl font-bold text-navy-900">Required Documents & Criteria</h2>
          <p className="text-sm text-gray-600">[DOCUMENTATION REQUIRED FOR REGISTRATION]</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {ADMISSIONS_REQUIREMENTS_DATA.map((req) => (
            <Card key={req.id} className="bg-white border border-gray-200 p-4 rounded-lg shadow-sm">
              <h3 className="text-sm font-bold text-navy-900 mb-1">{req.title}</h3>
              <p className="text-xs text-gray-600">{req.details}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-navy-900 text-white p-8 rounded-xl text-center space-y-4 shadow-md">
        <h2 className="text-2xl font-extrabold text-white">Ready to Begin Your Application?</h2>
        <p className="text-sm text-gray-300 max-w-xl mx-auto">
          [ADMISSIONS CTA PLACEHOLDER: Contact our admissions desk to schedule an interview or request registration details.]
        </p>
        <div>
          <Link to="/contact">
            <Button className="bg-gold-500 hover:bg-gold-300 text-navy-900 font-bold px-6 py-3 text-base transition-colors">
              Contact Admissions Office
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Admissions
