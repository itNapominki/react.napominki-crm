import React from 'react'
import { AdminForm } from 'components'
import {
  Comment,
  Contacts,
  MainGroup,
  RelatedRestaurants,
  Shedule,
  Whatsapp,
} from './components'
import { EditRestaurantContext } from 'context'

export default function Manager() {
  console.log('render EditRestaurant ManagerInfo')

  const context = React.useContext(EditRestaurantContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: (res) => {
      console.log(res)
    },
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = 'Редактирование ресторана'

  const deleteBtn = {
    text: 'Удалить ресторан',
    onDelete: { id, message: 'Подтвердите удаление ресторана' },
  }

  return (
    <AdminForm
      model="restaurants"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
    >
      <MainGroup />
      <Shedule />
      {/* <RelatedRestaurants /> */}
      <Contacts />
      <Whatsapp />
      <Comment />
    </AdminForm>
  )
}
