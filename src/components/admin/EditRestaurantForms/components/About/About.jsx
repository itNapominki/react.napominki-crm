import React from 'react'
import { useParams } from 'react-router-dom'
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

export default function About() {
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

  const formTitle = id ? 'Редактирование ресторана' : 'Добавление ресторана'

  const deleteBtn = id
    ? {
        text: 'Удалить объект',
        onDelete: { id, message: 'Подтвердите удаление ресторана' },
      }
    : null

  return (
    <EditRestaurantContext.Provider value={{ serverData, setData, errors }}>
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
    </EditRestaurantContext.Provider>
  )
}
