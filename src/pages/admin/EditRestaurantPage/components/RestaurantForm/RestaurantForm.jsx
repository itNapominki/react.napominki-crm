import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AdminForm } from 'components/admin'
import { About, Halls, Manager, Menus } from './components'

import { EditRestaurantContext } from 'core/context'
import { ROUTES } from 'router/routes'
import { MODELS } from 'core/constants'

const ROOT_PAGE = ROUTES.ADMIN_RESTAURANTS.PATH

export default function RestaurantForm({ tabIndex }) {
  const { id, data, setError } = React.useContext(EditRestaurantContext)

  console.log(data)

  const navigate = useNavigate()

  const goHome = () => navigate(ROOT_PAGE)
  const redirect = (data) =>
    !id && navigate(ROUTES.ADMIN_UPDATE_RESTAURANT.PATH.replace(':id', data.id))

  const formTitle = (id ? 'Редактирование' : 'Добавление') + ' ресторана'

  const deleteButton = { text: 'Удалить ресторан', onDelete: goHome }

  return (
    <AdminForm
      id={id}
      data={data}
      model={MODELS.RESTAURANT.VALUE}
      title={formTitle}
      onCancel={{ callback: goHome }}
      onSave={redirect}
      onError={setError}
      deleteButton={deleteButton}
    >
      {[<About />, <Halls />, <Menus />, <Manager />][tabIndex]}
    </AdminForm>
  )
}
