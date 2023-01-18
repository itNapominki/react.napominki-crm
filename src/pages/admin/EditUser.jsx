import React from 'react'
import { AdminForm, AdminLayout } from 'components'
import { api } from 'utils'
import { useFetch, useSaveData } from 'hooks'
import { EditUserContext } from 'context'
import { useParams, useNavigate } from 'react-router-dom'

export default function EditUser() {
  console.log('render EditUser')

  const navigate = useNavigate()

  const { id } = useParams()
  const isEdit = id ? true : false

  // const data = id ? useFetch('/users/' + id) : null

  const serverRoles = useFetch('/users-roles', [], handleRolesLoad)
  const [localRoles, setLocalRoles] = React.useState()
  const [data, setData] = React.useState(null)

  function handleRolesLoad(data) {
    const arr = data.map((elem) => {
      return {
        id: elem.id,
        text: elem.single_value,
        value: elem,
      }
    })

    setLocalRoles(arr)
  }

  const [errors, setErrors] = React.useState()
  const handleSave = useSaveData({
    data,
    apiMethod: api.users.create,
    onSuccess: (res) => {},
    onError: ({ message, errors }) => {
      setErrors({ message, errors })
    },
  })

  const formTitle = isEdit
    ? 'Редактирование пользователя'
    : 'Добавление пользователя'

  const removeBtn = isEdit
    ? { text: 'Удалить пользователя', onClick: handleDelete }
    : null

  const onCancel = {
    message: 'Отменить редактирование и вернуться на главную?',
    route: '/admin/users',
  }

  return (
    <AdminLayout>
      <AdminForm
        title={formTitle}
        onSave={handleSave}
        onCancel={onCancel}
        removeBtn={removeBtn}
      >
        <EditUserContext.Provider value={{ localRoles, setData, errors }}>
          <AdminForm.EditUser />
        </EditUserContext.Provider>
      </AdminForm>
    </AdminLayout>
  )
}
