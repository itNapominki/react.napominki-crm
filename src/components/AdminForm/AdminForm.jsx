import styles from './AdminForm.module.scss'
import React from 'react'

import { Button } from 'components'
import { Address, Contacts, Group, Inputlist, Shedule } from './components'

import { classNames } from 'core/utils'
import { handleCancel, handleDelete, handleSave } from './handlers'

export default function AdminForm({
  id,
  className,
  children,
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

        const elements = Array.from(e.target.elements)
        const data = {}

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

              if (isPrevArray) {
                const index = prevProp.split('[').pop().split(']')[0]
                const array = container[index][arrayKey]
                  ? container[index][arrayKey]
                  : []

                return (container = container[index] =
                  {
                    ...container[index],
                    [arrayKey]: [...array, out],
                  })
              }

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

        handleSave({ data, model, onSave, onError, id })
      }}
    >
      {(title || id) && (
        <React.Fragment>
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
        </React.Fragment>
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
