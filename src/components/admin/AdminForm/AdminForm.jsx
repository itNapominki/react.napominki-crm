import styles from './AdminForm.module.scss'
import React from 'react'

import { Button } from 'components/general'
import { Address, Contacts, Group, Inputlist, Shedule } from './components'

import { classNames } from 'core/utils'
import { handleCancel, handleDelete, handleSave } from './handlers'

export default function AdminForm({
  id,
  className,
  children,
  data,
  model,
  title,
  onCancel,
  onSave,
  onError,
  deleteButton,
}) {
  return (
    <div className={classNames(styles.container, [className])}>
      {(title || id) && (
        <div className={styles.heading}>
          <div className={styles.title}>{title}</div>
          {id && (
            <div
              className={styles.removeButton}
              onClick={handleDelete({
                onDelete: deleteButton.onDelete,
                message: deleteButton.message,
                model,
                id,
              })}
            >
              {deleteButton.text}
            </div>
          )}
        </div>
      )}
      {children}
      <div className={`${styles.actions} row`}>
        <Button
          text="Сохранить"
          className="col col-2"
          onClick={handleSave({ data, model, onSave, onError, id })}
        />
        <Button
          mode="light"
          text="Отменить"
          className="col col-2"
          onClick={handleCancel(onCancel)}
        />
      </div>
    </div>
  )
}

AdminForm.Group = Group
AdminForm.Address = Address
AdminForm.Contacts = Contacts
AdminForm.Inputlist = Inputlist
AdminForm.Shedule = Shedule
