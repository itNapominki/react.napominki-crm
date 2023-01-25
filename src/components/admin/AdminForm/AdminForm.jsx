import React from 'react'
import { Button } from 'components'
import {
  Address,
  EditObject,
  EditUser,
  Group,
  Inputlist,
  Metro,
  Shedule,
} from './components'
import { useCancel, useDelete, useSave } from './hooks'

export default function AdminForm(data) {
  const { children, deleteBtn, model, onSave, onCancel, title } = data

  const handleCancel = useCancel({ ...onCancel, model })
  const handleDelete = useDelete({ ...onSave, model })
  const handleSave = useSave({ ...onSave, model })

  return (
    <div className="admin-form">
      {deleteBtn && (
        <div className="admin-form__remove-btn" onClick={handleDelete}>
          {deleteBtn.text}
        </div>
      )}
      {title && <div className="admin-form__title">{title}</div>}
      {children}
      <div className="admin-form__actions row">
        <Button
          text="Сохранить"
          className="admin-form__button col col-2"
          onClick={handleSave}
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
AdminForm.Inputlist = Inputlist
AdminForm.Metro = Metro
AdminForm.Shedule = Shedule

AdminForm.EditObject = EditObject
AdminForm.EditUser = EditUser
