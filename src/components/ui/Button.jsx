import React from 'react'

export function Button({ children, className = '', type = 'button', ...props }) {
  return (
    <button
      type={type}
      className={`inline-flex items-center justify-center px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gold-500/50 cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
