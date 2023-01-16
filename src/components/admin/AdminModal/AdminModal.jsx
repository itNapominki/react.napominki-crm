import React from 'react'
import { Metro } from './components'

export default function AdminModal(data) {
  const { children, onClose } = data

  console.log(onClose)

  return (
    <div className="admin-modal">
      <div className="admin-modal__overlay" onClick={onClose}></div>
      <div className="admin-modal__content">{children}</div>
    </div>
  )
}

AdminModal.Metro = Metro
