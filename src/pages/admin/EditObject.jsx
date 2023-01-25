import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import { AdminForm, AdminLayout } from 'components'
import { EditObjectContext } from 'context'

export default function EditObject() {
  console.log('render EditObject')

  const { id } = useParams()

  const serverData = id ? useFetch('/objects/' + id) : null
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  const onSave = {
    id,
    data,
    onSuccess: () => setErrors(),
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = id ? 'Редактирование объекта' : 'Добавление объекта'

  const deleteBtn = id
    ? {
        text: 'Удалить объект',
        onDelete: { id, message: 'Подтвердите удаление объекта' },
      }
    : null

  return (
    <AdminLayout>
      <AdminForm
        model="objects"
        title={formTitle}
        onSave={onSave}
        deleteBtn={deleteBtn}
      >
        <EditObjectContext.Provider value={{ serverData, setData, errors }}>
          <AdminForm.EditObject />
        </EditObjectContext.Provider>
      </AdminForm>
    </AdminLayout>
  )
}
