import React from 'react'
import { useParams } from 'react-router-dom'
import { AdminLayout, EditObject } from 'components'
import { EditObjectContext } from 'core/context'
import { api } from 'core/utils'
import { useSelector } from 'react-redux'
import { USER_ROLE } from 'core/constants'
import { Forbidden } from 'components/general'

export default function EditObjectPage() {
  console.log('render EditObject')

  const user = useSelector((state) => state.user.value)
  if (!user || user.role !== USER_ROLE.ADMIN) {
    return <Forbidden />
  }

  const { id } = useParams()
  const { data: initial } = id
    ? api.getOne({ model: api.model.object, id })
    : {}

  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  return (
    <EditObjectContext.Provider
      value={{ id, data, initial, setData, errors, setErrors }}
    >
      <AdminLayout>
        <EditObject />
      </AdminLayout>
    </EditObjectContext.Provider>
  )
}
