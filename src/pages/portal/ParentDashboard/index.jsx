import React, { useState } from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'

/**
 * MOCK DASHBOARD DATA FOR FRONTEND PORTAL REVIEW
 * Real Supabase query integration will replace this mock array in backend stage.
 */
export const MOCK_DASHBOARD_DATA = [
  {
    student_id: 'std-001',
    full_name: '[STUDENT NAME PLACEHOLDER 1]',
    admission_number: 'NWC-2026-001',
    class: 'Form 3 Navy',
    fees_status: 'paid', // 'paid' | 'partial' | 'owing'
    academic_records: [
      { id: 101, term: 'Term 1 2026', subject: '[SUBJECT 1 PLACEHOLDER]', score: 78 },
      { id: 102, term: 'Term 1 2026', subject: '[SUBJECT 2 PLACEHOLDER]', score: 85 },
      { id: 103, term: 'Term 1 2026', subject: '[SUBJECT 3 PLACEHOLDER]', score: 92 },
      { id: 104, term: 'Term 1 2026', subject: '[SUBJECT 4 PLACEHOLDER]', score: 64 },
    ],
    attendance_summary: {
      percentage: '96%',
      days_present: 54,
      days_absent: 2,
      lateness_count: 1,
    },
    behavior_notes: [
      { id: 201, date: '2026-02-10', note: '[BEHAVIOR NOTE PLACEHOLDER 1: Excellent leadership during inter-house sports day.]', staff: '[STAFF MEMBER]' },
      { id: 202, date: '2026-03-04', note: '[BEHAVIOR NOTE PLACEHOLDER 2: Commended for academic performance in science exhibition.]', staff: '[STAFF MEMBER]' },
    ],
  },
  {
    student_id: 'std-002',
    full_name: '[STUDENT NAME PLACEHOLDER 2]',
    admission_number: 'NWC-2026-002',
    class: 'Form 1 Gold',
    fees_status: 'owing', // 'paid' | 'partial' | 'owing'
    academic_records: [],
    attendance_summary: {
      percentage: '90%',
      days_present: 48,
      days_absent: 5,
      lateness_count: 3,
    },
    behavior_notes: [
      { id: 203, date: '2026-02-15', note: '[BEHAVIOR NOTE PLACEHOLDER 3: Active participation in classroom discussions.]', staff: '[STAFF MEMBER]' },
    ],
  },
]

export const MOCK_ANNOUNCEMENTS = [
  {
    id: 1,
    title: '[ANNOUNCEMENT TITLE PLACEHOLDER 1]',
    date: '2026-08-10',
    body: '[ANNOUNCEMENT BODY PLACEHOLDER 1: Notice regarding upcoming parent-teacher consultation day.]',
  },
  {
    id: 2,
    title: '[ANNOUNCEMENT TITLE PLACEHOLDER 2]',
    date: '2026-08-01',
    body: '[ANNOUNCEMENT BODY PLACEHOLDER 2: Term examination timetable release notice.]',
  },
]

export function ParentDashboard() {
  const [selectedStudentId, setSelectedStudentId] = useState(MOCK_DASHBOARD_DATA[0].student_id)

  const selectedStudent = MOCK_DASHBOARD_DATA.find((s) => s.student_id === selectedStudentId) || MOCK_DASHBOARD_DATA[0]

  return (
    <div className="space-y-8 py-6">
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 pb-4">
        <div>
          <Badge className="bg-gold-500/10 text-gold-500 font-semibold border border-gold-500/20 px-3 py-0.5 mb-1">
            Parent Portal
          </Badge>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
            Student Academic Overview
          </h1>
        </div>

        {/* Student Selector (If multiple children exist) */}
        {MOCK_DASHBOARD_DATA.length > 1 && (
          <div className="flex items-center space-x-2">
            <span className="text-xs font-bold text-gray-700 uppercase">Select Child:</span>
            <select
              value={selectedStudentId}
              onChange={(e) => setSelectedStudentId(e.target.value)}
              className="bg-white border border-gray-300 rounded px-3 py-1.5 text-sm font-semibold text-navy-900 focus:outline-none focus:border-navy-900"
            >
              {MOCK_DASHBOARD_DATA.map((student) => (
                <option key={student.student_id} value={student.student_id}>
                  {student.full_name} ({student.class})
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {/* Student Profile Card */}
      <Card className="bg-navy-900 text-white p-6 rounded-xl space-y-4 shadow-md">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-white">{selectedStudent.full_name}</h2>
            <div className="flex flex-wrap gap-3 text-xs text-gray-300">
              <span><strong className="text-gold-300">Class:</strong> {selectedStudent.class}</span>
              <span><strong className="text-gold-300">Admission No:</strong> {selectedStudent.admission_number}</span>
            </div>
          </div>

          {/* Fees Status Badge */}
          <div className="flex items-center space-x-2">
            <span className="text-xs text-gray-300 uppercase font-semibold">Fees Status:</span>
            {selectedStudent.fees_status === 'paid' && (
              <Badge className="bg-emerald-500 text-white font-bold px-3 py-1 uppercase text-xs">
                Paid in Full
              </Badge>
            )}
            {selectedStudent.fees_status === 'partial' && (
              <Badge className="bg-amber-500 text-navy-900 font-bold px-3 py-1 uppercase text-xs">
                Partial Payment
              </Badge>
            )}
            {selectedStudent.fees_status === 'owing' && (
              <Badge className="bg-rose-600 text-white font-bold px-3 py-1 uppercase text-xs">
                Balance Outstanding
              </Badge>
            )}
          </div>
        </div>
      </Card>

      {/* FEES-GATING LOGIC BANNER */}
      {selectedStudent.fees_status === 'owing' ? (
        <Card className="bg-rose-50 border border-rose-200 p-6 rounded-xl text-rose-900 space-y-2 shadow-sm">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-rose-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h3 className="font-bold text-base text-rose-900">Academic Report Restriction (Outstanding Balance)</h3>
          </div>
          <p className="text-sm text-rose-800 leading-relaxed">
            Detailed academic record cards and term grades are withheld due to an outstanding fee balance for <strong>{selectedStudent.full_name}</strong>. Please contact the accounts office to clear the balance and unlock full term results.
          </p>
        </Card>
      ) : selectedStudent.fees_status === 'partial' ? (
        <Card className="bg-amber-50 border border-amber-200 p-4 rounded-xl text-amber-900 space-y-1">
          <h3 className="font-bold text-sm text-amber-900">Partial Balance Notice</h3>
          <p className="text-xs text-amber-800">
            A partial fee balance remains on this account. Please settle the remaining balance before end of term.
          </p>
        </Card>
      ) : null}

      {/* ACADEMIC RECORDS SECTION (Visible if fees_status !== 'owing') */}
      {selectedStudent.fees_status !== 'owing' && (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-navy-900">Academic Performance Records</h2>
          <Card className="bg-white border border-gray-200 p-0 rounded-xl overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-navy-900 text-white text-xs uppercase tracking-wider">
                    <th className="py-3 px-4">Term</th>
                    <th className="py-3 px-4">Subject</th>
                    <th className="py-3 px-4">Score (%)</th>
                    <th className="py-3 px-4">Grade / Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                  {selectedStudent.academic_records.map((record) => (
                    <tr key={record.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-medium text-navy-900">{record.term}</td>
                      <td className="py-3 px-4">{record.subject}</td>
                      <td className="py-3 px-4 font-bold text-navy-900">{record.score}%</td>
                      <td className="py-3 px-4">
                        {record.score >= 75 ? (
                          <Badge className="bg-emerald-100 text-emerald-800 font-semibold px-2 py-0.5">Distinction</Badge>
                        ) : record.score >= 50 ? (
                          <Badge className="bg-blue-100 text-blue-800 font-semibold px-2 py-0.5">Pass</Badge>
                        ) : (
                          <Badge className="bg-rose-100 text-rose-800 font-semibold px-2 py-0.5">Needs Work</Badge>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}

      {/* ATTENDANCE SUMMARY & BEHAVIOR NOTES GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Attendance Summary */}
        <Card className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b pb-2">
            <h3 className="font-bold text-navy-900 text-lg">Attendance Summary</h3>
            <Badge className="bg-navy-900 text-gold-300 font-bold px-2.5 py-0.5">
              {selectedStudent.attendance_summary.percentage}
            </Badge>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-cream-50 p-3 rounded border border-gray-200">
              <span className="block text-xl font-extrabold text-navy-900">{selectedStudent.attendance_summary.days_present}</span>
              <span className="text-xs text-gray-500 font-medium">Days Present</span>
            </div>
            <div className="bg-cream-50 p-3 rounded border border-gray-200">
              <span className="block text-xl font-extrabold text-rose-600">{selectedStudent.attendance_summary.days_absent}</span>
              <span className="text-xs text-gray-500 font-medium">Days Absent</span>
            </div>
            <div className="bg-cream-50 p-3 rounded border border-gray-200">
              <span className="block text-xl font-extrabold text-amber-600">{selectedStudent.attendance_summary.lateness_count}</span>
              <span className="text-xs text-gray-500 font-medium">Lateness</span>
            </div>
          </div>
        </Card>

        {/* Behavior Notes */}
        <Card className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-4">
          <div className="border-b pb-2">
            <h3 className="font-bold text-navy-900 text-lg">Conduct & Behavior Notes</h3>
          </div>
          <div className="space-y-3">
            {selectedStudent.behavior_notes.length > 0 ? (
              selectedStudent.behavior_notes.map((note) => (
                <div key={note.id} className="bg-cream-50 p-3 rounded border border-gray-200 text-xs space-y-1">
                  <div className="flex justify-between text-gray-500 font-semibold">
                    <span>Date: {note.date}</span>
                    <span>By: {note.staff}</span>
                  </div>
                  <p className="text-gray-800 font-medium">{note.note}</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-500 italic">No behavior notes recorded for this student.</p>
            )}
          </div>
        </Card>
      </div>

      {/* ANNOUNCEMENTS SECTION */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-navy-900">School Announcements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_ANNOUNCEMENTS.map((announcement) => (
            <Card key={announcement.id} className="bg-white border border-gray-200 p-5 rounded-xl shadow-sm space-y-2">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <Badge className="bg-gold-500/10 text-gold-500 font-semibold px-2 py-0.5">Notice</Badge>
                <span>{announcement.date}</span>
              </div>
              <h3 className="font-bold text-navy-900 text-base">{announcement.title}</h3>
              <p className="text-xs text-gray-600 leading-relaxed">{announcement.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParentDashboard
