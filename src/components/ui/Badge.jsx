import React from 'react'

export function Badge({ children, className = '', ...props }) {
  return (
    <span className={`inline-inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
