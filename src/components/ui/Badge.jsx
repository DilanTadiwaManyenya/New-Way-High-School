import React from 'react'

export function Badge({ children, className = '', ...props }) {
  return (
    <span className={`inline-block px-2 py-1 text-xs rounded bg-gray-200 text-gray-800 ${className}`} {...props}>
      {children}
    </span>
  )
}

export default Badge
