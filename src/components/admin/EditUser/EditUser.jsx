import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AdminForm } from 'components/admin'
import { ContentCard } from 'components/general'
import { EditUserContext } from 'core/context'
import { Auth, Contacts, MainGroup } from './components'

export default function EditUser() {
  const navigate = useNavigate()

  const context = React.useContext(EditUserContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: () => navigate('/admin/data/users'),
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
    <ContentCard>
      <AdminForm
        model="user"
        title={formTitle}
        onSave={onSave}
        deleteBtn={deleteBtn}
      >
        <MainGroup />
        <Contacts />
        <Auth />
      </AdminForm>
    </ContentCard>
  )
}
