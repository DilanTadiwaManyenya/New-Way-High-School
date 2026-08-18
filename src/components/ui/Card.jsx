import React from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`border p-4 rounded shadow-sm ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
