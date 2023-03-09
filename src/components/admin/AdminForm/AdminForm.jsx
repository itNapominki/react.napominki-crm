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

        const formData = data
        const elements = Array.from(e.target.elements)

        elements.forEach(({ name, value }) => {
          if (!name) {
            return
          }

          const props = name.split('.')

          if (props.length === 1) {
            return (formData[name] = value)
          }

          let container = formData

          props.map((key, index, values) => {
            let prevProp = values[index - 1]
            let out = value

            try {
              out = JSON.parse(value)
            } catch (error) {}

            const isArray = key.includes('[')
            const isPrevArray = index > 0 && prevProp.includes('[')
            const isLastProp = index === values.length - 1

            const arrayRegex = /\[[^\]]*\]/g

            if (isArray) {
              const arrayKey = key.replace(arrayRegex, '')
              const array = container[arrayKey] ? container[arrayKey] : []

              return (container = container[arrayKey] =
                isLastProp ? [...array, out] : [...array])
            }

            if (isPrevArray && key) {
              const index = prevProp.split('[').pop().split(']')[0]

              return (container = container[index] =
                {
                  ...container[index],
                  [key]: out,
                })
            }

            if (isLastProp) {
              container = container[key] = out
            } else {
              container = container[key] = { ...container[key] }
            }
          })
        })

        return console.log(formData)

        handleSave({ data: formData, model, onSave, onError, id })
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
