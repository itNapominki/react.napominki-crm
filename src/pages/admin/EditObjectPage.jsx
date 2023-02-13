import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminLayout, EditObject } from 'components'
import { EditObjectContext } from 'context'
import { Api } from 'utils'

export default function EditObjectPage() {
  console.log('render EditObject')

  const { id } = useParams()

  const { data: serverData, error } = id
    ? Api.getOne({ model: Api.model.object, id })
    : {}
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  if (error) {
    alert(error.message)
  }

  return (
    <EditObjectContext.Provider
      value={{ id, data, serverData, setData, errors, setErrors }}
    >
      <AdminLayout>
        <EditObject />
      </AdminLayout>
    </EditObjectContext.Provider>
  )
}
