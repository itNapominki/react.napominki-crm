import React from 'react'
import { useParams } from 'react-router-dom'
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
  console.log('render EditObject')

  const { id } = useParams()

  const serverData = id ? useFetch('/objects/' + id) : null
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  // console.log(data)

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
    text: 'Удалить объект',
    onDelete: { id, message: 'Подтвердите удаление ресторана' },
  }

  return (
    <EditRestaurantContext.Provider value={{ serverData, setData, errors }}>
      <AdminForm
        model="restaurants"
        title={formTitle}
        onSave={onSave}
        deleteBtn={deleteBtn}
      >
        <MainGroup />
        <Address />
        <Shedule />
        <RelatedRestaurants />
        <Contacts />
        <Whatsapp />
        <Comment />
      </AdminForm>
    </EditRestaurantContext.Provider>
  )
}
