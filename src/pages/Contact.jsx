import React, { useState } from 'react'
import Card from '../components/ui/Card'
import Badge from '../components/ui/Badge'
import Button from '../components/ui/Button'

export const CONTACT_INFO_DATA = {
  phone: '[PHONE NUMBER]',
  email: '[EMAIL ADDRESS]',
  address: '[PHYSICAL ADDRESS]',
  hours: '[OFFICE HOURS PLACEHOLDER: e.g. Mon – Fri, 8:00 AM – 4:30 PM]',
  whatsapp: '[WHATSAPP NUMBER]',
}

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // UI placeholder for submission logic
    console.log('Contact form submitted:', formData)
    setSubmitted(true)
  }

  return (
    <div className="space-y-12 py-6">
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest bg-gold-500/10 text-gold-500 border border-gold-500/20 rounded-full">
          Get In Touch
        </span>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-navy-900">
          Contact New Way College
        </h1>
        <p className="text-gray-600 text-base sm:text-lg">
          [CONTACT OVERVIEW PLACEHOLDER: Reach out to our administrative team for inquiries, admissions, or campus visits.]
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Contact Info Sidebar */}
        <div className="space-y-6 lg:col-span-1">
          <Card className="bg-navy-900 text-white border border-navy-700 p-6 rounded-xl space-y-6 shadow-md">
            <div>
              <Badge className="bg-gold-500 text-navy-900 font-bold px-2.5 py-0.5 mb-2">
                Information
              </Badge>
              <h2 className="text-xl font-bold text-white">Office Details</h2>
            </div>

            <div className="space-y-4 text-sm text-gray-200">
              <div>
                <span className="block text-xs uppercase text-gold-300 font-semibold">Phone</span>
                <p>{CONTACT_INFO_DATA.phone}</p>
              </div>

              <div>
                <span className="block text-xs uppercase text-gold-300 font-semibold">Email</span>
                <p>{CONTACT_INFO_DATA.email}</p>
              </div>

              <div>
                <span className="block text-xs uppercase text-gold-300 font-semibold">Address</span>
                <p>{CONTACT_INFO_DATA.address}</p>
              </div>

              <div>
                <span className="block text-xs uppercase text-gold-300 font-semibold">Office Hours</span>
                <p>{CONTACT_INFO_DATA.hours}</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="pt-4 border-t border-navy-700">
              <a
                href={`https://wa.me/?text=Inquiry%20regarding%20New%20Way%20College`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded transition-colors space-x-2"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.157 4.228 4.301-1.127z"/>
                </svg>
                <span>WhatsApp Us: {CONTACT_INFO_DATA.whatsapp}</span>
              </a>
            </div>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="bg-white border border-gray-200 p-6 sm:p-8 rounded-xl shadow-sm space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-navy-900">Send a Message</h2>
              <p className="text-sm text-gray-500 mt-1">
                Fill in your details below and our administration will respond promptly.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-4 rounded-lg text-sm">
                Thank you for your message! [FORM SUBMISSION ACKNOWLEDGMENT PLACEHOLDER]
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="e.g. Jane Doe"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="e.g. parent@example.com"
                      className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    placeholder="e.g. Form 1 Admissions Inquiry"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Enter your message or question..."
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  className="bg-navy-900 hover:bg-navy-700 text-gold-300 font-bold px-6 py-2.5 text-sm transition-colors cursor-pointer"
                >
                  Send Inquiry
                </Button>
              </form>
            )}
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Contact
