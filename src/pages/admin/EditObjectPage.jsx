import React from 'react'
import { useParams } from 'react-router-dom'
import { EditObject } from 'components/admin'
import { EditObjectContext } from 'core/context'
import { api } from 'core/utils'
import { useSelector } from 'react-redux'
import { USER_ROLES } from 'core/constants'
import { Forbidden, Layout } from 'components/general'

export default function EditObjectPage() {
  console.log('render EditObject')

  const { id } = useParams()
  const { data: initial } = id
    ? api.getOne({ model: api.model.object, id })
    : {}

  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  const user = useSelector((state) => state.user.value)
  if (
    !user ||
    (user.role !== USER_ROLES.ADMIN.VALUE &&
      user.role != USER_ROLES.REDAKTOR.VALUE)
  ) {
    return <Forbidden />
  }

  return (
    <EditObjectContext.Provider
      value={{ id, data, initial, setData, errors, setErrors }}
    >
      <Layout>
        <div className="wrapper">
          <EditObject />
        </div>
      </Layout>
    </EditObjectContext.Provider>
  )
}
