import React from 'react'
import img1 from '../assets/images/IMG-20251106-WA0055.jpg'
import img2 from '../assets/images/IMG-20251103-WA0013.jpg'
import img3 from '../assets/images/IMG-20251106-WA0055.jpg'
import img5 from '../assets/images/IMG-20251220-WA0047.jpg'
import img6 from '../assets/images/IMG-20260130-WA0059.jpg'
import img7 from '../assets/images/IMG-20260201-WA0179.jpg'
import img8 from '../assets/images/IMG-20260328-WA0073.jpg'
import img9 from '../assets/images/IMG-20260328-WA0104.jpg'
import img10 from '../assets/images/IMG-20260522-WA0143.jpg'
import img11 from '../assets/images/IMG-20260522-WA0151.jpg'
import img12 from '../assets/images/IMG-20260605-WA0151.jpg'

export function StudentLife() {
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12
  ];

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          Campus Experience
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Student Life
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          A glimpse into the daily lives, activities, and vibrant community at New Way College.
        </p>
      </div>

      {/* Responsive Masonry Image Grid */}
      <div className="columns-1 sm:columns-2 md:columns-3 gap-4 px-4 max-w-7xl mx-auto">
        {images.map((src, idx) => (
          <div key={idx} className="break-inside-avoid mb-4">
            <img 
              src={src} 
              alt={`Student life placeholder ${idx + 1}`} 
              className="w-full h-auto rounded-xl shadow-sm hover:shadow-md transition-all object-cover border border-gray-100"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default StudentLife
