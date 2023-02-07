import React from 'react'
import { AdminLayout, EditUser } from 'components'
import { useFetch } from 'hooks'
import { EditUserContext } from 'context'
import { useParams } from 'react-router-dom'

export default function EditUserPage() {
  console.log('render EditUserPage')

  const { id } = useParams()

  const serverData = id ? useFetch('/users/' + id) : null
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  React.useEffect(() => {
    if (serverData) {
      setData(serverData)
    }
  }, [serverData])

  return (
    <EditUserContext.Provider
      value={{ id, data, serverData, setData, errors, setErrors }}
    >
      <AdminLayout>
        <EditUser />
      </AdminLayout>
    </EditUserContext.Provider>
  )
}
