import React from 'react'
import { Button } from 'components'
import {
  Address,
  Comment,
  EditUser,
  Group,
  Metro,
  RestaurantName,
} from './components'
import { useCancel } from './hooks'

export default function AdminForm(data) {
  const { title, children, onSave, onCancel, removeBtn } = data

  const handleCancel = useCancel(onCancel)

  return (
    <div className="admin-form">
      {removeBtn && (
        <div className="admin-form__remove-btn" onClick={removeBtn.onClick}>
          {removeBtn.text}
        </div>
      )}
      {title && <div className="admin-form__title">{title}</div>}
      {children}
      <div className="admin-form__actions row">
        <Button
          text="Сохранить"
          className="admin-form__button col col-2"
          onClick={onSave}
        />
        <Button
          mode="light"
          text="Отменить"
          className="admin-form__button col col-2"
          onClick={handleCancel}
        />
      </div>
    </div>
  )
}

AdminForm.Group = Group
AdminForm.Address = Address
AdminForm.Comment = Comment
AdminForm.Metro = Metro
AdminForm.RestaurantName = RestaurantName

AdminForm.EditUser = EditUser
