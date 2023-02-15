import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Forbidden, Layout } from 'components/general'
import { EditUser } from 'components/admin'
import { EditUserContext } from 'core/context'
import { api } from 'core/utils'
import { USER_ROLE } from 'core/constants'

export default function EditUserPage() {
  console.log('render EditUserPage')

  const user = useSelector((state) => state.user.value)
  if (!user || user.role !== USER_ROLE.ADMIN) {
    return <Forbidden />
  }

  const { id } = useParams()
  const { data: initial } = id ? api.getOne({ model: api.model.user, id }) : {}

  const [data, setData] = React.useState()
  const [errors, setErrors] = React.useState()

  return (
    <EditUserContext.Provider
      value={{ id, initial, data, setData, errors, setErrors }}
    >
      <Layout>
        <div className="wrapper">
          <EditUser />
        </div>
      </Layout>
    </EditUserContext.Provider>
  )
}
