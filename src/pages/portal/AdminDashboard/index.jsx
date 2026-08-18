import React, { useState } from 'react'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'

/**
 * MOCK ADMIN DATA FOR FRONTEND ROSTER & FEE STATUS EDITOR REVIEW
 * Real Supabase query integration will replace local state in backend stage.
 */
export const MOCK_STUDENTS_DATA = [
  { id: 'std-101', admission_number: 'NWC-2026-001', full_name: '[STUDENT NAME 1]', class: 'Form 3 Navy', fees_status: 'paid' },
  { id: 'std-102', admission_number: 'NWC-2026-002', full_name: '[STUDENT NAME 2]', class: 'Form 1 Gold', fees_status: 'owing' },
  { id: 'std-103', admission_number: 'NWC-2026-003', full_name: '[STUDENT NAME 3]', class: 'Form 4 Navy', fees_status: 'partial' },
  { id: 'std-104', admission_number: 'NWC-2026-004', full_name: '[STUDENT NAME 4]', class: 'Form 2 Blue', fees_status: 'paid' },
  { id: 'std-105', admission_number: 'NWC-2026-005', full_name: '[STUDENT NAME 5]', class: 'Form 5 Science', fees_status: 'owing' },
  { id: 'std-106', admission_number: 'NWC-2026-006', full_name: '[STUDENT NAME 6]', class: 'Form 6 Arts', fees_status: 'paid' },
]

export const MOCK_ADMIN_ANNOUNCEMENTS = [
  { id: 'ann-1', title: '[ANNOUNCEMENT 1 TITLE]', body: '[ANNOUNCEMENT 1 BODY: Parent-teacher consultation day notice.]', audience: 'parents', created_at: '2026-08-10' },
  { id: 'ann-2', title: '[ANNOUNCEMENT 2 TITLE]', body: '[ANNOUNCEMENT 2 BODY: Mid-term athletics competition schedule.]', audience: 'all', created_at: '2026-08-05' },
]

export function AdminDashboard() {
  // Local state management for UI demonstration
  const [students, setStudents] = useState(MOCK_STUDENTS_DATA)
  const [announcements, setAnnouncements] = useState(MOCK_ADMIN_ANNOUNCEMENTS)

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('')
  const [classFilter, setClassFilter] = useState('All')
  const [editingStudentId, setEditingStudentId] = useState(null)

  // Announcement Form State
  const [newTitle, setNewTitle] = useState('')
  const [newBody, setNewBody] = useState('')
  const [newAudience, setNewAudience] = useState('all')

  // Extract unique classes for filter dropdown
  const availableClasses = ['All', ...new Set(students.map((s) => s.class))]

  // Filtered student list
  const filteredStudents = students.filter((s) => {
    const matchesSearch =
      s.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.admission_number.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesClass = classFilter === 'All' || s.class === classFilter
    return matchesSearch && matchesClass
  })

  // Handle fee status change in local state
  const handleFeeStatusChange = (studentId, newStatus) => {
    setStudents((prev) =>
      prev.map((s) => (s.id === studentId ? { ...s, fees_status: newStatus } : s))
    )
    setEditingStudentId(null)
  }

  // Handle adding new announcement to local state
  const handleAddAnnouncement = (e) => {
    e.preventDefault()
    if (!newTitle.trim() || !newBody.trim()) return

    const newEntry = {
      id: `ann-${Date.now()}`,
      title: newTitle,
      body: newBody,
      audience: newAudience,
      created_at: new Date().toISOString().split('T')[0],
    }

    setAnnouncements([newEntry, ...announcements])
    setNewTitle('')
    setNewBody('')
    setNewAudience('all')
  }

  return (
    <div className="space-y-8 py-6">
      {/* Top Header */}
      <div className="border-b border-gray-200 pb-4 space-y-1">
        <Badge className="bg-navy-900 text-gold-300 font-bold px-3 py-0.5">
          Administration Console
        </Badge>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-navy-900">
          School Administration & Student Roster
        </h1>
        <p className="text-xs text-gray-500">
          [FRONTEND DEMONSTRATION MODE: Local state updates for Fee Status and Announcements]
        </p>
      </div>

      {/* STUDENT ROSTER & FEE STATUS EDITOR */}
      <div className="space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-xl font-bold text-navy-900">Student Roster Management</h2>

          {/* Search & Filter Controls */}
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Search by name or admission #..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded text-sm focus:outline-none focus:border-navy-900"
            />
            <select
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="px-3 py-1.5 border border-gray-300 rounded text-sm font-medium text-navy-900 focus:outline-none focus:border-navy-900"
            >
              {availableClasses.map((cls) => (
                <option key={cls} value={cls}>
                  Class: {cls}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Student Table */}
        <Card className="bg-white border border-gray-200 p-0 rounded-xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-navy-900 text-white text-xs uppercase tracking-wider">
                  <th className="py-3 px-4">Admission #</th>
                  <th className="py-3 px-4">Student Name</th>
                  <th className="py-3 px-4">Class</th>
                  <th className="py-3 px-4">Fees Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 text-sm text-gray-700">
                {filteredStudents.length > 0 ? (
                  filteredStudents.map((student) => (
                    <tr key={student.id} className="hover:bg-gray-50">
                      <td className="py-3 px-4 font-mono text-xs text-navy-900 font-bold">
                        {student.admission_number}
                      </td>
                      <td className="py-3 px-4 font-semibold text-navy-900">
                        {student.full_name}
                      </td>
                      <td className="py-3 px-4">{student.class}</td>
                      <td className="py-3 px-4">
                        {editingStudentId === student.id ? (
                          <select
                            value={student.fees_status}
                            onChange={(e) => handleFeeStatusChange(student.id, e.target.value)}
                            className="bg-white border border-navy-900 rounded text-xs font-bold p-1 focus:outline-none"
                          >
                            <option value="paid">Paid</option>
                            <option value="partial">Partial</option>
                            <option value="owing">Owing</option>
                          </select>
                        ) : (
                          <span>
                            {student.fees_status === 'paid' && (
                              <Badge className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-0.5">Paid</Badge>
                            )}
                            {student.fees_status === 'partial' && (
                              <Badge className="bg-amber-100 text-amber-900 font-bold px-2.5 py-0.5">Partial</Badge>
                            )}
                            {student.fees_status === 'owing' && (
                              <Badge className="bg-rose-100 text-rose-800 font-bold px-2.5 py-0.5">Owing</Badge>
                            )}
                          </span>
                        )}
                      </td>
                      <td className="py-3 px-4 text-right">
                        <button
                          type="button"
                          onClick={() => setEditingStudentId(editingStudentId === student.id ? null : student.id)}
                          className="text-xs text-navy-900 hover:text-gold-500 font-bold underline cursor-pointer"
                        >
                          {editingStudentId === student.id ? 'Done' : 'Edit Status'}
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="py-6 text-center text-sm text-gray-500 italic">
                      No matching student records found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* ANNOUNCEMENT BROADCAST MANAGEMENT */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pt-4">
        {/* Create New Announcement Form */}
        <div className="lg:col-span-1 space-y-4">
          <Card className="bg-cream-50 border border-gray-200 p-6 rounded-xl space-y-4">
            <h2 className="text-lg font-bold text-navy-900">Broadcast Announcement</h2>
            <form onSubmit={handleAddAnnouncement} className="space-y-3">
              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Title
                </label>
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  required
                  placeholder="e.g. End of Term Notice"
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-navy-900"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Target Audience
                </label>
                <select
                  value={newAudience}
                  onChange={(e) => setNewAudience(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-navy-900"
                >
                  <option value="all">All (Parents & Students)</option>
                  <option value="parents">Parents Only</option>
                  <option value="students">Students Only</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                  Message Body
                </label>
                <textarea
                  rows="3"
                  value={newBody}
                  onChange={(e) => setNewBody(e.target.value)}
                  required
                  placeholder="Enter announcement text..."
                  className="w-full px-3 py-2 border border-gray-300 rounded text-sm bg-white focus:outline-none focus:border-navy-900"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-navy-900 hover:bg-navy-700 text-gold-300 font-bold py-2 text-sm transition-colors cursor-pointer"
              >
                Publish Announcement
              </Button>
            </form>
          </Card>
        </div>

        {/* Existing Announcements List */}
        <div className="lg:col-span-2 space-y-4">
          <h2 className="text-lg font-bold text-navy-900">Active Announcements ({announcements.length})</h2>
          <div className="space-y-3">
            {announcements.map((item) => (
              <Card key={item.id} className="bg-white border border-gray-200 p-4 rounded-xl space-y-2 shadow-sm">
                <div className="flex items-center justify-between text-xs">
                  <div className="flex space-x-2 items-center">
                    <Badge className="bg-gold-500/10 text-gold-500 font-semibold px-2 py-0.5">
                      Target: {item.audience}
                    </Badge>
                    <span className="text-gray-400 font-mono">{item.created_at}</span>
                  </div>
                </div>
                <h3 className="font-bold text-navy-900 text-base">{item.title}</h3>
                <p className="text-xs text-gray-600 leading-relaxed">{item.body}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdminDashboard
