import React from 'react'

export function Card({ children, className = '', ...props }) {
  return (
    <div className={`bg-white border border-slate-200/80 rounded-xl shadow-xs hover:shadow-md transition-all duration-300 ${className}`} {...props}>
      {children}
    </div>
  )
}

export default Card
