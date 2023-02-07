import React from 'react'
import { AdminForm } from 'components'
import {
  Address,
  Comment,
  DisabilityInfo,
  Heading,
  Info,
  Metro,
  Shedule,
} from './components'
import { EditRestaurantContext } from 'context'
import { useNavigate } from 'react-router-dom'

export default function About() {
  console.log('render EditRestaurant About')

  const navigate = useNavigate()

  const context = React.useContext(EditRestaurantContext)
  const { id, data, setErrors } = context

  const onSave = {
    id,
    data,
    onSuccess: ({ data }) =>
      navigate('/admin/edit-restaurant/' + data.id + '/info'),
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = id ? 'Редактирование ресторана' : 'Добавление ресторана'

  const deleteBtn = id
    ? {
        text: 'Удалить ресторан',
        onDelete: { id, message: 'Подтвердите удаление ресторана' },
      }
    : null

  return (
    <AdminForm
      model="restaurants"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
    >
      <Heading />
      <Address />
      <Metro />
      <Shedule />
      <Info />
      <DisabilityInfo />
      <Comment />
    </AdminForm>
  )
}
