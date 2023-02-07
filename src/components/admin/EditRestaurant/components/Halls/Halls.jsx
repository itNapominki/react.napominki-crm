import './Halls.scss'
import React from 'react'
import { AdminForm } from 'components'
import { EditRestaurantContext } from 'context'
import { Hall } from './components'
import { handleAdd } from './utils'
import { useServerData } from 'hooks'

export default function Halls() {
  console.log('render EditRestaurant Halls')

  const context = React.useContext(EditRestaurantContext)
  const { id, data, setData, serverData, errors, setErrors } = context

  const [initialState] = useServerData(serverData, 'halls', [])
  const [halls, setHalls] = React.useState([])

  React.useEffect(() => setHalls(initialState), [initialState])

  React.useEffect(() => {
    setData((prev) => {
      return {
        ...prev,
        halls,
      }
    })
  }, [halls])

  // console.log(halls)

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
      <button onClick={() => handleAdd(setHalls)}>add</button>

      {halls?.map((_, i) => {
        return (
          <div key={i}>
            <Hall halls={halls} setHalls={setHalls} errors={errors} i={i} />
          </div>
        )
      })}
    </AdminForm>
  )
}
