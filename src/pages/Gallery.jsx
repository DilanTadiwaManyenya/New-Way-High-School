import React, { useState } from 'react'
import img1 from '../assets/images/IMG-20251103-WA0013.jpg'
import img2 from '../assets/images/IMG-20251103-WA0019.jpg'
import img3 from '../assets/images/IMG-20251106-WA0055.jpg'
import img4 from '../assets/images/IMG-20251122-WA0052.jpg'
import img5 from '../assets/images/IMG-20251128-WA0019.jpg'
import img6 from '../assets/images/IMG-20251220-WA0049(1).jpg'
import img7 from '../assets/images/IMG-20251220-WA0066.jpg'
import img8 from '../assets/images/IMG-20260201-WA0179.jpg'
import img9 from '../assets/images/IMG-20260326-WA0098.jpg'
import img10 from '../assets/images/IMG-20260328-WA0073.jpg'
import img11 from '../assets/images/IMG-20260328-WA0104.jpg'
import img12 from '../assets/images/IMG-20260328-WA0122.jpg'
import img13 from '../assets/images/IMG-20260605-WA0151.jpg'

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const images = [
    { src: img1, title: 'Campus Life & Activities' },
    { src: img2, title: 'Student Engagement' },
    { src: img3, title: 'Learning Environment' },
    { src: img4, title: 'School Uniform & Crest' },
    { src: img5, title: 'School Identity' },
    { src: img6, title: 'Campus Gathering' },
    { src: img7, title: 'Student Community' },
    { src: img8, title: 'Academic Focus' },
    { src: img9, title: 'School Assembly' },
    { src: img10, title: 'Campus Moments' },
    { src: img11, title: 'Student Collaboration' },
    { src: img12, title: 'Daily College Routine' },
    { src: img13, title: 'Pride & Culture' },
  ]

  return (
    <div className="space-y-10 py-6 animate-fade-in max-w-7xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3 px-4">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full">
          Campus Experience
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
          Life at New Way College
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          A visual glimpse into our vibrant school environment, active student life, and memorable events.
        </p>
      </div>

      {/* Responsive Masonry Image Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 px-4">
        {images.map((item, idx) => (
          <div
            key={idx}
            className="break-inside-avoid mb-5 group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer"
            onClick={() => setSelectedImage(item)}
          >
            <img 
              src={item.src} 
              alt={item.title} 
              className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
            {/* Subtle Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-navy-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <div className="text-white space-y-1">
                <p className="text-xs uppercase tracking-widest text-gold-300 font-bold">New Way College</p>
                <p className="text-sm font-semibold">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Image Lightbox Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-navy-950/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-4xl max-h-[90vh] bg-navy-900 rounded-2xl overflow-hidden shadow-2xl border border-navy-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-3 right-3 text-white/80 hover:text-white bg-black/40 hover:bg-black/60 rounded-full p-2 transition-colors z-10"
              onClick={() => setSelectedImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.title}
              className="max-h-[80vh] w-auto mx-auto object-contain"
            />
            <div className="p-4 bg-navy-900 text-center border-t border-navy-800">
              <p className="text-white font-bold text-base">{selectedImage.title}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Gallery
