import React from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/ui/Card'
import Badge from '../../components/ui/Badge'

export function PortalEntry() {
  return (
    <div className="max-w-4xl mx-auto py-12 px-4 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          New Way College Portal
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Select Portal Gateway
        </h1>
        <p className="text-gray-600 text-base max-w-lg mx-auto">
          Please select your role to proceed to the appropriate authentication or management area.
        </p>
      </div>

      {/* Role Selection Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Parent Role */}
        <Card className="bg-white border border-gray-200 hover:border-gold-500 transition-all p-6 rounded-xl shadow-sm flex flex-col justify-between text-center space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-navy-900/10 text-navy-900 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <Badge className="bg-navy-900 text-white font-semibold px-2.5 py-0.5">
              Parent Portal
            </Badge>
            <h2 className="text-xl font-bold text-navy-900">Parent Access</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              View academic reports, attendance history, fees status, and announcements for your child.
            </p>
          </div>
          <Link
            to="/portal/parent-auth"
            className="w-full py-2.5 bg-gold-500 hover:bg-gold-300 text-navy-900 font-bold text-sm rounded transition-colors block"
          >
            Parent Sign In
          </Link>
        </Card>

        {/* Student Role */}
        <Card className="bg-white border border-gray-200 hover:border-gold-500 transition-all p-6 rounded-xl shadow-sm flex flex-col justify-between text-center space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-navy-900/10 text-navy-900 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <Badge className="bg-navy-900/10 text-navy-900 font-semibold px-2.5 py-0.5">
              Student Portal
            </Badge>
            <h2 className="text-xl font-bold text-navy-900">Student Access</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              Access your subject progress, term records, schedule, and campus notices.
            </p>
          </div>
          <Link
            to="/portal/parent-auth"
            className="w-full py-2.5 bg-navy-900 hover:bg-navy-700 text-gold-300 font-bold text-sm rounded transition-colors block"
          >
            Student Sign In
          </Link>
        </Card>

        {/* Admin Role */}
        <Card className="bg-white border border-gray-200 hover:border-gold-500 transition-all p-6 rounded-xl shadow-sm flex flex-col justify-between text-center space-y-4">
          <div className="space-y-3">
            <div className="w-12 h-12 mx-auto rounded-full bg-navy-900/10 text-navy-900 flex items-center justify-center">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <Badge className="bg-gray-200 text-gray-800 font-semibold px-2.5 py-0.5">
              Administration
            </Badge>
            <h2 className="text-xl font-bold text-navy-900">Admin Portal</h2>
            <p className="text-xs text-gray-500 leading-relaxed">
              School management, student records updates, fee status management, and announcement broadcasts.
            </p>
          </div>
          <Link
            to="/portal/admin-dashboard"
            className="w-full py-2.5 bg-gray-100 hover:bg-gray-200 text-navy-900 font-bold text-sm rounded transition-colors block"
          >
            Admin Entrance
          </Link>
        </Card>
      </div>
    </div>
  )
}

export default PortalEntry
