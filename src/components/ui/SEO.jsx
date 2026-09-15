import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const PAGE_TITLES = {
  '/': 'Home | New Way College',
  '/about': 'About Us | New Way College',
  '/academics': 'Academic Programs | New Way College',
  '/gallery': 'Campus Gallery | New Way College',
  '/admissions': 'Admissions & Enrollment | New Way College',
  '/contact': 'Contact Us | New Way College',
}

export function SEO({ title, description }) {
  const location = useLocation()

  useEffect(() => {
    const currentTitle = title || PAGE_TITLES[location.pathname] || 'New Way College'
    document.title = `${currentTitle} - Igniting Minds, Inspiring the Future`

    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]')
      if (metaDescription) {
        metaDescription.setAttribute('content', description)
      }
    }
  }, [location, title, description])

  return null
}

export default SEO
