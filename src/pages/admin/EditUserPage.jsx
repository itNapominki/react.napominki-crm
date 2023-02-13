import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminLayout, EditUser } from 'components'
import { EditUserContext } from 'context'
import { Api } from 'utils'

export default function EditUserPage() {
  console.log('render EditUserPage')

  const { id } = useParams()

  const { data: serverData, error } = id
    ? Api.getOne({ model: Api.model.user, id })
    : {}

  const [data, setData] = React.useState()
  const [errors, setErrors] = React.useState()

  if (error) {
    alert(error.message)
  }

  return (
    <EditUserContext.Provider
      value={{ id, serverData, data, setData, errors, setErrors }}
    >
      <AdminLayout>
        <EditUser />
      </AdminLayout>
    </EditUserContext.Provider>
  )
}
