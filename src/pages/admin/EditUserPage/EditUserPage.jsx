import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { UserForm } from './components'

import { EditUserContext } from 'core/context'
import { api, getObjKeyName } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'

export default function EditUserPage() {
  const { setRoles } = useOutletContext()
  setRoles([getObjKeyName(() => USER_ROLES.ADMIN)])

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

  return (
    <EditUserContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <UserForm />
    </EditUserContext.Provider>
  )
}
