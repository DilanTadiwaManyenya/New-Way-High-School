import React from 'react'
import SubjectsGrid from '../components/home/SubjectsGrid'

export function Academics() {
  return (
    <div className="space-y-8 py-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          Academic Excellence
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Academic Programs & Curriculum
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          [ACADEMICS OVERVIEW PLACEHOLDER: Brief introduction to New Way College academic curriculum, standards, and educational philosophy.]
        </p>
      </div>

      {/* Curriculum Overview Section */}
      <div className="bg-cream-50 p-6 sm:p-8 rounded-xl border border-gray-200 text-navy-900 space-y-4">
        <h2 className="text-xl font-bold text-navy-900">Curriculum Framework</h2>
        <p className="text-sm text-gray-700 leading-relaxed">
          [CURRICULUM STRUCTURE PLACEHOLDER: Information about ZIMSEC / Cambridge syllabus options, Form 1–4 O-Level pathways, and Form 5–6 A-Level specialization tracks.]
        </p>
      </div>

      {/* Subject Offering Grid */}
      <div className="space-y-4">
        <div className="border-b pb-2">
          <h2 className="text-2xl font-bold text-navy-900">Subject Offerings</h2>
          <p className="text-sm text-gray-500">[EXPLORE SUBJECTS OFFERED AT O-LEVEL & A-LEVEL]</p>
        </div>
        <SubjectsGrid />
      </div>
    </div>
  )
}

export default Academics
