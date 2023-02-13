import React from 'react'
import { AdminForm, Separator } from 'components'
import { EditRestaurantContext } from 'context'
import { Hall } from './components'
import { handleAdd } from './utils'
import { useServerData } from 'hooks'

import styles from './Halls.module.scss'

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
      model="restaurant"
      title={formTitle}
      onSave={onSave}
      deleteBtn={deleteBtn}
      className={styles.container}
    >
      <Separator />

      {halls?.map((_, i) => {
        return (
          <div key={i}>
            <Hall halls={halls} setHalls={setHalls} errors={errors} i={i} />
          </div>
        )
      })}

      <button className={styles.buttonAdd} onClick={() => handleAdd(setHalls)}>
        Добавить новый зал
      </button>
    </AdminForm>
  )
}
