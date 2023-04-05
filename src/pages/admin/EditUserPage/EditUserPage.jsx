import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { Layout } from 'components/general'
import { Forbidden } from 'components'
import { UserForm } from './components'

import { EditUserContext } from 'core/context'
import { api, getObjKeyName } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'

export default function EditUserPage() {
  const { id } = useParams()

  const [initial, setInitial] = React.useState()

  React.useEffect(() => {
    if (id) {
      async function getData() {
        await api
          .getOne({ model: MODELS.USER.VALUE, id })
          .then(({ data }) => setInitial(data))
      }

      getData()
    }
  }, [])

  const [data, setData] = React.useState()
  const [error, setError] = React.useState({})

  if (error.message) {
    alert(error.message)
    setError({ errors: error.errors })
  }

  const user = useSelector((state) => state.user.value)
  if (!user || user.role !== getObjKeyName(() => USER_ROLES.ADMIN)) {
    return <Forbidden />
  }

  return (
    <EditUserContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <Layout>
        <div className="wrapper">
          <div>
            <UserForm />
          </div>
        </div>
      </Layout>
    </EditUserContext.Provider>
  )
}
