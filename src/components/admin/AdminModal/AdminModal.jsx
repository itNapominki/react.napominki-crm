import './AdminModal.scss'

import React from 'react'
import { Input, Separator } from 'components'
import { Metro, Restaurants } from './components'

export default function AdminModal(data) {
  const { children, onClose, search } = data

  return (
    <div className="admin-modal">
      <div className="admin-modal__overlay" onClick={onClose}></div>
      <div className="admin-modal__content">
        {search && (
          <React.Fragment>
            <Input
              type="search"
              label="Поиск"
              bigLabel
              className="admin-modal__search"
            />
            <Separator />
          </React.Fragment>
        )}
        <div className="admin-modal__data">{children}</div>
      </div>
    </div>
  )
}

AdminModal.Metro = Metro
AdminModal.Restaurants = Restaurants
