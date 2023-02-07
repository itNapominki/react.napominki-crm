import React from 'react'
import { AdminForm } from 'components'
import { EditObjectContext } from 'context'
import { Address, Title, Type } from './components'

export default function EditObject() {
  console.log('render EditObject')

  const context = React.useContext(EditObjectContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: () => setErrors(),
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = id ? 'Редактирование объекта' : 'Добавление объекта'

  const deleteBtn = id
    ? {
        text: 'Удалить объект',
        onDelete: { id, message: 'Подтвердите удаление объекта' },
      }
    : null

  return (
    <AdminForm
      model="objects"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
    >
      <AdminForm.Group>
        <Type />
        <Title />
      </AdminForm.Group>
      <Address />
    </AdminForm>
  )
}
