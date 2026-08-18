import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'

import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import MobileNav from './components/layout/MobileNav'

import Home from './pages/Home'
import About from './pages/About'
import Academics from './pages/Academics'
import Admissions from './pages/Admissions'
import Contact from './pages/Contact'

import PortalEntry from './pages/portal/PortalEntry'
import ParentAuth from './pages/portal/ParentAuth'
import ParentDashboard from './pages/portal/ParentDashboard'
import AdminDashboard from './pages/portal/AdminDashboard'

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <MobileNav />
          <main className="flex-grow p-4 container mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/academics" element={<Academics />} />
              <Route path="/admissions" element={<Admissions />} />
              <Route path="/contact" element={<Contact />} />
              
              <Route path="/portal" element={<PortalEntry />} />
              <Route path="/portal/parent-auth" element={<ParentAuth />} />
              <Route path="/portal/parent-dashboard" element={<ParentDashboard />} />
              <Route path="/portal/admin-dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
