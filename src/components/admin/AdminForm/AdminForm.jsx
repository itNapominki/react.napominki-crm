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
    <form
      className={classNames(styles.container, [className])}
      onSubmit={function (e) {
        e.preventDefault()

        const data = {}
        const elements = Array.from(e.target.elements)

        elements.forEach(({ name, value }) => {
          if (!name) {
            return
          }

          const props = name.split('.')

          if (props.length === 1) {
            return (data[name] = value)
          }

          let container = data

          props.map((key, index, values) => {
            const isArray = key.includes('[')

            if (isArray) {
              const arrayKey = key.replace(/\[[^\]]*\]/g, '')
              const array = container[arrayKey] ? container[arrayKey] : []

              container = container[arrayKey] =
                index === values.length - 1
                  ? [...array, value]
                  : console.log('Это надо исправить')
            }

            if (!isArray) {
              container = container[key] =
                index === values.length - 1 ? value : { ...container[key] }
            }
          })
        })

        // return console.log(data)

        handleSave({ data, model, onSave, onError, id })
      }}
    >
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
        <Button text="Сохранить" className="col col-2" />
        <Button
          mode="light"
          text="Отменить"
          className="col col-2"
          onClick={handleCancel(onCancel)}
        />
      </div>
    </form>
  )
}

AdminForm.Group = Group
AdminForm.Address = Address
AdminForm.Contacts = Contacts
AdminForm.Inputlist = Inputlist
AdminForm.Shedule = Shedule
