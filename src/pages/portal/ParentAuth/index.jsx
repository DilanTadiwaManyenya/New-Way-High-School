import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../../../components/ui/Card'
import Badge from '../../../components/ui/Badge'
import Button from '../../../components/ui/Button'
import { supabase } from '../../../lib/supabaseClient'

export function ParentAuth() {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState('login') // 'login' | 'signup'

  // Request State
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  // Controlled form states
  const [loginPhone, setLoginPhone] = useState('')
  const [loginPassword, setLoginPassword] = useState('')

  const [signupPhone, setSignupPhone] = useState('')
  const [signupPassword, setSignupPassword] = useState('')
  const [admissionNumber, setAdmissionNumber] = useState('')
  const [studentDob, setStudentDob] = useState('')

  const sanitizePhone = (phoneStr) => phoneStr.replace(/\s+/g, '')

  // Client-side phone validation helper
  const validatePhone = (phoneStr) => {
    const cleaned = sanitizePhone(phoneStr)
    return cleaned.length >= 7
  }

  // Handle Log In Submit with Supabase Auth
  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (!loginPhone.trim()) {
      setErrorMessage('Please enter your phone number.')
      return
    }

    if (!validatePhone(loginPhone)) {
      setErrorMessage('Please enter a valid phone number (at least 7 digits).')
      return
    }

    if (!loginPassword) {
      setErrorMessage('Please enter your password.')
      return
    }

    setIsSubmitting(true)

    try {
      const sanitized = sanitizePhone(loginPhone)
      const email = `${sanitized.replace(/[^a-zA-Z0-9]/g, '')}@parent.newwaycollege.ac.zw`

      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password: loginPassword,
      })

      if (error) {
        console.warn('[ParentAuth LogIn] Auth error:', error.message)
        setErrorMessage('Invalid phone number or password. Please verify your credentials and try again.')
      } else if (data?.session) {
        setSuccessMessage('Login successful! Redirecting to dashboard...')
        setTimeout(() => {
          navigate('/portal/parent-dashboard')
        }, 1000)
      }
    } catch (err) {
      console.warn('[ParentAuth LogIn] Network error:', err)
      setErrorMessage('Unable to connect to authentication server. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Handle Sign Up Submit via Edge Function `register-parent`
  const handleSignupSubmit = async (e) => {
    e.preventDefault()
    setErrorMessage('')
    setSuccessMessage('')

    if (!signupPhone.trim()) {
      setErrorMessage('Please enter a parent phone number.')
      return
    }

    if (!validatePhone(signupPhone)) {
      setErrorMessage('Please enter a valid parent phone number (at least 7 digits).')
      return
    }

    if (!signupPassword || signupPassword.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.')
      return
    }

    if (!admissionNumber.trim()) {
      setErrorMessage('Student admission number is required.')
      return
    }

    if (!studentDob) {
      setErrorMessage('Student date of birth is required.')
      return
    }

    setIsSubmitting(true)

    try {
      const { data, error } = await supabase.functions.invoke('register-parent', {
        body: {
          phone: signupPhone,
          password: signupPassword,
          admission_number: admissionNumber.trim(),
          dob: studentDob,
        },
      })

      if (error) {
        console.warn('[ParentAuth SignUp] Edge function error:', error)
        let edgeMsg = ''
        if (error.context && typeof error.context.json === 'function') {
          try {
            const body = await error.context.json()
            if (body?.error) edgeMsg = body.error
          } catch {
            // ignore JSON parse error
          }
        }
        if (!edgeMsg) {
          edgeMsg = error.message || 'Registration failed. Please check your admission details and try again.'
        }
        setErrorMessage(edgeMsg)
      } else if (data && !data.success) {
        setErrorMessage(data.error || 'No student record found matching the provided admission details.')
      } else if (data && data.success) {
        setSuccessMessage('Parent account registered and student linked successfully! Redirecting...')
        setTimeout(() => {
          navigate('/portal/parent-dashboard')
        }, 1200)
      }
    } catch (err) {
      console.warn('[ParentAuth SignUp] Exception:', err)
      setErrorMessage('Unable to connect to registration service. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const switchTab = (tab) => {
    setActiveTab(tab)
    setErrorMessage('')
    setSuccessMessage('')
  }

  return (
    <div className="max-w-md mx-auto py-10 px-4 space-y-6">
      {/* Header */}
      <div className="text-center space-y-2">
        <Badge className="bg-gold-500/10 text-gold-500 font-semibold border border-gold-500/20 px-3 py-1">
          Parent & Student Access
        </Badge>
        <h1 className="text-3xl font-extrabold text-navy-900">
          {activeTab === 'login' ? 'Parent / Student Login' : 'Parent Account Registration'}
        </h1>
      </div>

      <Card className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm space-y-6">
        {/* Auth Toggle Tabs */}
        <div className="flex border-b border-gray-200 pb-2">
          <button
            type="button"
            onClick={() => switchTab('login')}
            className={`flex-1 text-center py-2 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'login'
                ? 'border-navy-900 text-navy-900'
                : 'border-transparent text-gray-400 hover:text-navy-900'
            }`}
          >
            Log In
          </button>
          <button
            type="button"
            onClick={() => switchTab('signup')}
            className={`flex-1 text-center py-2 text-sm font-bold border-b-2 transition-colors cursor-pointer ${
              activeTab === 'signup'
                ? 'border-navy-900 text-navy-900'
                : 'border-transparent text-gray-400 hover:text-navy-900'
            }`}
          >
            Register / Link Child
          </button>
        </div>

        {/* Inline Feedback Alerts */}
        {errorMessage && (
          <div className="bg-rose-50 border border-rose-200 text-rose-800 p-3 rounded text-xs leading-relaxed font-medium">
            {errorMessage}
          </div>
        )}

        {successMessage && (
          <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded text-xs leading-relaxed font-medium">
            {successMessage}
          </div>
        )}

        {/* LOG IN FORM */}
        {activeTab === 'login' && (
          <form onSubmit={handleLoginSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Phone Number
              </label>
              <input
                type="tel"
                value={loginPhone}
                onChange={(e) => setLoginPhone(e.target.value)}
                required
                placeholder="e.g. +263 77 123 4567"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
                placeholder="Enter password"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-500 hover:bg-gold-300 text-navy-900 font-bold py-2.5 text-sm transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Authenticating...' : 'Sign In to Dashboard'}
            </Button>
          </form>
        )}

        {/* SIGN UP & LINK CHILD FORM */}
        {activeTab === 'signup' && (
          <form onSubmit={handleSignupSubmit} className="space-y-4">
            <div className="bg-cream-50 p-3 rounded border border-gray-200 space-y-1">
              <span className="text-xs font-bold text-navy-900 block">Step 1: Account Info</span>
              <p className="text-xs text-gray-500">Provide phone number for login credentials.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Parent Phone Number
              </label>
              <input
                type="tel"
                value={signupPhone}
                onChange={(e) => setSignupPhone(e.target.value)}
                required
                placeholder="e.g. +263 77 123 4567"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Create Password
              </label>
              <input
                type="password"
                value={signupPassword}
                onChange={(e) => setSignupPassword(e.target.value)}
                required
                placeholder="Choose a secure password (min 6 chars)"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <div className="bg-cream-50 p-3 rounded border border-gray-200 space-y-1 mt-4">
              <span className="text-xs font-bold text-navy-900 block">Step 2: Link Student Record</span>
              <p className="text-xs text-gray-500">Enter student admission number & date of birth to verify link.</p>
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Student Admission Number
              </label>
              <input
                type="text"
                value={admissionNumber}
                onChange={(e) => setAdmissionNumber(e.target.value)}
                required
                placeholder="e.g. NWC-2026-014"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold uppercase text-gray-700 mb-1">
                Student Date of Birth
              </label>
              <input
                type="date"
                value={studentDob}
                onChange={(e) => setStudentDob(e.target.value)}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-navy-900 text-sm"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gold-500 hover:bg-gold-300 text-navy-900 font-bold py-2.5 text-sm transition-colors cursor-pointer disabled:opacity-50"
            >
              {isSubmitting ? 'Registering...' : 'Complete Registration & Access Dashboard'}
            </Button>
          </form>
        )}
      </Card>
    </div>
  )
}

export default ParentAuth
