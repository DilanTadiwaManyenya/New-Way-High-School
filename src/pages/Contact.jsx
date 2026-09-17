import React from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'

export const CONTACT_INFO_DATA = {
  phone: '+263 78 491 3304',
  address: '1350 Dzivareskwa extension, Harare, Zimbabwe',
  hours: 'Monday – Friday: 7:30 AM – 4:30 PM',
  whatsapp: '+263 78 491 3304',
  email: 'newaycollege@gmail.com',
}

export function Contact() {
  return (
    <div className="space-y-12 py-6 animate-fade-in max-w-4xl mx-auto">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3.5 py-1 text-xs font-bold uppercase tracking-widest bg-gold-500/10 text-gold-600 border border-gold-500/20 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-navy-900 tracking-tight">
          Contact New Way College
        </h1>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
          Reach out to our administrative office for enrollment inquiries, subject options, or campus visits.
        </p>
      </div>

      <div className="max-w-2xl mx-auto">
        <Card className="bg-gradient-to-br from-navy-900 via-navy-950 to-navy-900 text-white border border-navy-800 p-8 sm:p-10 rounded-2xl space-y-8 shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-gold-500/10 rounded-full blur-3xl" />

          <div className="text-center space-y-2">
            <Badge className="bg-gold-500 text-navy-950 font-bold px-3.5 py-1 inline-block shadow-sm">
              Instant Inquiry Desk
            </Badge>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">Contact Us via WhatsApp</h2>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              For immediate assistance and application guidelines, connect directly with our administration on WhatsApp.
            </p>
          </div>

          <div className="space-y-4 text-sm text-slate-200">
            <div className="flex flex-col items-center p-5 bg-navy-800/80 rounded-xl border border-navy-700/60 shadow-inner">
              <span className="block text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">Direct Phone & WhatsApp</span>
              <p className="text-2xl font-black text-white tracking-wide">{CONTACT_INFO_DATA.phone}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="p-4 bg-navy-800/60 rounded-xl border border-navy-700/50">
                <span className="block text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">Campus Location</span>
                <p className="text-white font-medium">{CONTACT_INFO_DATA.address}</p>
              </div>
              <div className="p-4 bg-navy-800/60 rounded-xl border border-navy-700/50">
                <span className="block text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">Email Address</span>
                <a href={`mailto:${CONTACT_INFO_DATA.email}`} className="text-white font-medium hover:text-gold-400 transition-colors">
                  {CONTACT_INFO_DATA.email}
                </a>
              </div>
              <div className="p-4 bg-navy-800/60 rounded-xl border border-navy-700/50">
                <span className="block text-xs uppercase tracking-wider text-gold-400 font-bold mb-1">Office Hours</span>
                <p className="text-white font-medium">{CONTACT_INFO_DATA.hours}</p>
              </div>
            </div>
          </div>

          {/* WhatsApp Prominent CTA Button */}
          <div className="pt-2">
            <a
              href="https://wa.me/263784913304"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-full px-6 py-4 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-500 hover:to-green-500 text-white font-black text-lg rounded-xl transition-all space-x-3 shadow-lg hover:shadow-emerald-900/40 transform hover:-translate-y-0.5 border border-emerald-400/30 cursor-pointer"
            >
              <svg className="w-7 h-7 fill-current flex-shrink-0" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127z"/>
              </svg>
              <span>Chat on WhatsApp Now</span>
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Contact
