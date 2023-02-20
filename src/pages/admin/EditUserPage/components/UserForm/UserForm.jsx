import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminForm } from 'components/admin'
import { Auth, Contacts, MainGroup } from './components'

import { EditUserContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { MODELS } from 'core/constants'

export default function UserForm() {
  const { id, data, setError } = React.useContext(EditUserContext)

  const navigate = useNavigate()
  const redirect = () => navigate(ROUTES.ADMIN_USERS.PATH)

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' пользователя'

  const deleteButton = { text: 'Удалить пользователя', onDelete: redirect }

  return (
    <AdminForm
      id={id}
      data={data}
      model={MODELS.USER.VALUE}
      title={formTitle}
      onCancel={{ callback: redirect }}
      onSave={redirect}
      onError={setError}
      deleteButton={deleteButton}
    >
      <MainGroup />
      <Contacts />
      <Auth />
    </AdminForm>
  )
}
