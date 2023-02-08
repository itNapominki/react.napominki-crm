import './ClientCard.scss'
import React from 'react'

export default function ClientCard(data) {
  const { children } = data

  return <div className="client-card">{children}</div>
}
