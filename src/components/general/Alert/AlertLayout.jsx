import React from 'react'

export default function AlertLayout(data) {
  const { children } = data
  return (
    <div className="alert-layout">
      <div className="alert-layout__overlay"></div>
      <div className="alert-layout__content">{children}</div>
    </div>
  )
}
