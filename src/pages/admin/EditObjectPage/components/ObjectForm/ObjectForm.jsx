import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminForm } from 'components/admin'
import { Address, MainGroup } from './components'

import { EditObjectContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { MODELS } from 'core/constants'

export default function ObjectForm() {
  const { id, data, setError } = React.useContext(EditObjectContext)

  const navigate = useNavigate()
  const redirect = () => navigate(ROUTES.ADMIN_OBJECTS.PATH)

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' объекта'

  const deleteButton = { text: 'Удалить объект', onDelete: redirect }

  return (
    <AdminForm
      id={id}
      data={data}
      model={MODELS.OBJECT.VALUE}
      title={formTitle}
      onCancel={{ callback: redirect }}
      onSave={redirect}
      onError={setError}
      deleteButton={deleteButton}
    >
      <MainGroup />
      <Address />
    </AdminForm>
  )
}
