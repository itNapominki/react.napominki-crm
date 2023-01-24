import React from 'react'
import { AdminForm, AdminLayout } from 'components'
import { useFetch } from 'hooks'
import { EditUserContext } from 'context'
import { useParams } from 'react-router-dom'

export default function EditUser() {
  console.log('render EditUser')

  const { id } = useParams()
  const isEdit = id ? true : false

  const serverData = id ? useFetch('/users/' + id) : null
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  const onSave = {
    id,
    data,
    onSuccess: () => setErrors(),
    onError: ({ message, errors }) => setErrors({ message, errors }),
  }

  const formTitle = isEdit
    ? 'Редактирование пользователя'
    : 'Добавление пользователя'

  const deleteBtn = isEdit
    ? {
        text: 'Удалить пользователя',
        onDelete: { id, message: 'Подтвердите удаление пользователя' },
      }
    : null

  return (
    <AdminLayout>
      <AdminForm
        model="users"
        title={formTitle}
        onSave={onSave}
        deleteBtn={deleteBtn}
      >
        <EditUserContext.Provider value={{ serverData, setData, errors }}>
          <AdminForm.EditUser />
        </EditUserContext.Provider>
      </AdminForm>
    </AdminLayout>
  )
}
