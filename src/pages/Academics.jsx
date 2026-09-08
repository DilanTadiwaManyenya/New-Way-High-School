import React from 'react'
import SubjectsGrid from '../components/home/SubjectsGrid'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export function Academics() {
  return (
    <div className="space-y-10 py-6 animate-fade-in max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full">
          Academic Excellence
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
          Academic Programs
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          New Way College follows the ZIMSEC curriculum at both 'O' Level and Advanced Level, offering students nationally recognised pathways to university entry, vocational careers, and global opportunities.
        </p>
      </div>

      {/* Curriculum Overview Section */}
      <Card className="bg-white border border-slate-200/80 p-6 sm:p-8 rounded-2xl shadow-sm space-y-4">
        <div className="flex items-center space-x-3">
          <Badge className="bg-navy-900 text-gold-300 font-bold px-3 py-1">
            ZIMSEC Syllabus
          </Badge>
          <h2 className="text-xl sm:text-2xl font-bold text-navy-900">Curriculum Overview</h2>
        </div>
        <p className="text-slate-600 leading-relaxed text-base">
          Our subject offerings span the sciences, humanities, commercial, and technical disciplines — allowing students to tailor an academic profile suited to their strengths and career ambitions. Whether a student is preparing for medicine, engineering, business, law, or computing, New Way College provides structured coursework, exam preparation, and holistic academic mentorship.
        </p>
      </Card>

      {/* Subject Offering Grid Header */}
      <div className="space-y-6 pt-2">
        <div className="border-b border-slate-200 pb-4 flex flex-col md:flex-row md:items-end justify-between gap-2">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-navy-900">Subject Offerings</h2>
            <p className="text-sm text-slate-500 mt-1">Explore available subjects across Ordinary & Advanced level streams.</p>
          </div>
          <span className="text-xs font-semibold uppercase tracking-wider text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full self-start md:self-auto">
            Form 1 through Form 6
          </span>
        </div>
        <SubjectsGrid />
      </div>
    </div>
  )
}

export default Academics
