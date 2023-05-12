import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { ObjectForm } from './'

import { EditObjectContext } from 'context'
import { api, getObjKeyName } from 'utils'
import { USER_ROLES, MODELS } from 'constants'

export default function EditObjectPage() {
  const { setRoles } = useOutletContext()
  setRoles([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.REDAKTOR),
  ])

  const { id } = useParams()

  const [initial, setInitial] = React.useState()

  React.useEffect(() => {
    if (id) {
      async function getData() {
        await api
          .getOne({ model: MODELS.OBJECT.VALUE, id })
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
    <EditObjectContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <ObjectForm />
    </EditObjectContext.Provider>
  )
}
