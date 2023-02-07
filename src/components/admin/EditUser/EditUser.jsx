import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminForm } from 'components'
import { EditUserContext } from 'context'
import { Email, Fullname, Password, Phone, Role } from './components'

export default function EditUser() {
  const navigate = useNavigate()

  const context = React.useContext(EditUserContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: () => navigate('/admin/users'),
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = id
    ? 'Редактирование пользователя'
    : 'Добавление пользователя'

  const deleteBtn = id
    ? {
        text: 'Удалить пользователя',
        onDelete: { id, message: 'Подтвердите удаление пользователя' },
      }
    : null

  return (
    <AdminForm
      model="users"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
    >
      <AdminForm.Group>
        <Role />
        <Fullname />
        <Email />
        <Phone />
        <Password />
      </AdminForm.Group>
    </AdminForm>
  )
}
