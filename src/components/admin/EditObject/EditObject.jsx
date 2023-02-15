import React from 'react'
import { AdminForm } from 'components/admin'
import { EditObjectContext } from 'core/context'
import { Address, Title, Type } from './components'
import { useNavigate } from 'react-router-dom'

export default function EditObject() {
  console.log('render EditObject')

  const navigate = useNavigate()

  const context = React.useContext(EditObjectContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: () => {
      setErrors()
      navigate('/admin/data/objects')
    },
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
      model="object"
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
