import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { PUBLIC_PAGES, SITE_URL } from '../../seo'

export default function SEO() {
  const { pathname } = useLocation()
  useEffect(() => {
    const path = pathname.replace(/\/+$/, '').toLowerCase() || '/'
    const page = PUBLIC_PAGES[path]
    document.title = page?.title || 'Page Not Found | New Way College'
    function meta(attribute, key, content) {
      let element = document.head.querySelector('meta[' + attribute + '="' + key + '"]')
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(attribute, key)
        document.head.append(element)
      }
      element.setAttribute('content', content)
    }
    meta('name', 'description', page?.description || 'The requested page could not be found.')
    meta('name', 'robots', page ? 'index, follow' : 'noindex, follow')
    meta('property', 'og:title', document.title)
    meta('property', 'og:description', page?.description || 'The requested page could not be found.')
    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (page) {
      if (!canonical) {
        canonical = document.createElement('link')
        canonical.rel = 'canonical'
        document.head.append(canonical)
      }
      canonical.href = SITE_URL + path
      meta('property', 'og:url', SITE_URL + path)
    } else {
      canonical?.remove()
      document.head.querySelector('meta[property="og:url"]')?.remove()
    }
  }, [pathname])
  return null
}
