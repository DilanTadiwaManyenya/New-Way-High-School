import React, { useState } from 'react'
import Card from '../ui/Card'
import Badge from '../ui/Badge'

export const SAMPLE_SUBJECTS = [
  // O-Level Subjects
  {
    id: 1,
    name: 'Mathematics',
    level: 'O-Level',
    category: 'Sciences',
    description: 'Core numerical, algebraic, and problem-solving skills for everyday applications and higher studies.',
  },
  {
    id: 2,
    name: 'English Language',
    level: 'O-Level',
    category: 'Languages',
    description: 'Comprehensive reading, writing, comprehension, and grammar skills for academic communication.',
  },
  {
    id: 3,
    name: 'Combined Science',
    level: 'O-Level',
    category: 'Sciences',
    description: 'Foundational principles covering Biology, Chemistry, and Physics in an integrated syllabus.',
  },
  {
    id: 4,
    name: 'Geography',
    level: 'O-Level',
    category: 'Humanities',
    description: 'Study of physical landforms, climate patterns, environmental management, and population dynamics.',
  },
  {
    id: 5,
    name: 'History',
    level: 'O-Level',
    category: 'Humanities',
    description: 'Explore Zimbabwean, regional, and international historical events, governance, and social change.',
  },
  {
    id: 6,
    name: 'Accounts',
    level: 'O-Level',
    category: 'Commercials',
    description: 'Introduction to bookkeeping, financial statements, cashbooks, and business record-keeping.',
  },
  {
    id: 7,
    name: 'Business Studies',
    level: 'O-Level',
    category: 'Commercials',
    description: 'Fundamental concepts of business ownership, marketing, operations, and enterprise management.',
  },
  {
    id: 8,
    name: 'Computer Science',
    level: 'O-Level',
    category: 'Sciences',
    description: 'Introduction to computational thinking, basic programming algorithms, and IT fundamentals.',
  },
  {
    id: 9,
    name: 'Shona/Ndebele',
    level: 'O-Level',
    category: 'Languages',
    description: 'Indigenous language literacy, African literature, cultural heritage, and composition writing.',
  },
  {
    id: 10,
    name: 'Agriculture',
    level: 'O-Level',
    category: 'Sciences',
    description: 'Practical and theoretical aspects of crop cultivation, animal husbandry, and soil science.',
  },
  // A-Level Subjects
  {
    id: 11,
    name: 'Pure Mathematics',
    level: 'A-Level',
    category: 'Sciences',
    description: 'Advanced calculus, algebra, trigonometry, and analytical methods for university STEM preparation.',
  },
  {
    id: 12,
    name: 'Physics',
    level: 'A-Level',
    category: 'Sciences',
    description: 'In-depth study of mechanics, electricity, waves, thermodynamics, and modern physics.',
  },
  {
    id: 13,
    name: 'Chemistry',
    level: 'A-Level',
    category: 'Sciences',
    description: 'Physical, inorganic, and organic chemistry theories coupled with rigorous practical laboratory work.',
  },
  {
    id: 14,
    name: 'Biology',
    level: 'A-Level',
    category: 'Sciences',
    description: 'Detailed exploration of cellular biology, genetics, ecology, physiology, and biochemistry.',
  },
  {
    id: 15,
    name: 'Business Studies',
    level: 'A-Level',
    category: 'Commercials',
    description: 'Strategic management, decision-making models, marketing strategy, and organizational behavior.',
  },
  {
    id: 16,
    name: 'Economics',
    level: 'A-Level',
    category: 'Commercials',
    description: 'Microeconomic market dynamics, macroeconomic policies, international trade, and development economics.',
  },
  {
    id: 17,
    name: 'Accounting',
    level: 'A-Level',
    category: 'Commercials',
    description: 'Advanced financial accounting, managerial accounting, costing systems, and financial analysis.',
  },
  {
    id: 18,
    name: 'Geography',
    level: 'A-Level',
    category: 'Humanities',
    description: 'Advanced physical hydrology, geomorphology, urban development, and global economic geography.',
  },
  {
    id: 19,
    name: 'History',
    level: 'A-Level',
    category: 'Humanities',
    description: 'In-depth analytical study of European, African, and international diplomatic and political history.',
  },
  {
    id: 20,
    name: 'Computer Science',
    level: 'A-Level',
    category: 'Sciences',
    description: 'Advanced data structures, object-oriented programming, database design, and software systems.',
  },
]

export function SubjectsGrid({ subjects = SAMPLE_SUBJECTS }) {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredSubjects = subjects.filter((subject) => {
    if (activeFilter === 'All') return true
    return subject.level === activeFilter
  })

  return (
    <section className="py-6">
      {/* Filter Tabs */}
      <div className="flex items-center justify-center space-x-2 mb-8">
        {['All', 'O-Level', 'A-Level'].map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors cursor-pointer ${
              activeFilter === filter
                ? 'bg-navy-900 text-gold-300 shadow-sm'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Subjects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {filteredSubjects.map((subject) => (
          <Card
            key={subject.id}
            className="bg-white border border-gray-200 hover:border-gold-500 transition-all flex flex-col justify-between p-5 rounded-lg shadow-sm"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <Badge className="bg-navy-900/5 text-navy-900 font-semibold border border-navy-900/10 px-2.5 py-0.5">
                  {subject.level}
                </Badge>
                <span className="text-xs text-gray-500 font-medium">{subject.category}</span>
              </div>
              <h3 className="text-lg font-bold text-navy-900 mb-2">{subject.name}</h3>
              <p className="text-sm text-gray-600">{subject.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default SubjectsGrid
