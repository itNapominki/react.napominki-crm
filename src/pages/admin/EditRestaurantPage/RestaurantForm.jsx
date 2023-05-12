import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminForm } from 'components'

import { EditRestaurantContext } from 'context'
import { ROUTES } from 'router/routes'
import { MODELS } from 'constants'

const ROOT_PAGE = ROUTES.ADMIN.CHILDREN.RESTAURANTS.PATH

export default function RestaurantForm({ children }) {
  const { id, setError } = React.useContext(EditRestaurantContext)

  const navigate = useNavigate()

  const goHome = () => navigate(ROOT_PAGE)
  const onSave = (data) =>
    id != data.id
      ? navigate(
          ROUTES.ADMIN.CHILDREN.RESTAURANTS_UPDATE.PATH.replace(':id', data.id)
        )
      : setError({})

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' ресторана'

  const deleteButton = { text: 'Удалить ресторан', onDelete: goHome }

  return (
    <AdminForm
      id={id}
      model={MODELS.RESTAURANT.VALUE}
      title={formTitle}
      onCancel={{ callback: goHome }}
      onSave={onSave}
      onError={setError}
      deleteButton={deleteButton}
    >
      {children}
    </AdminForm>
  )
}
