import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from 'hooks'
import { AdminLayout, EditObject } from 'components'
import { EditObjectContext } from 'context'

export default function EditObjectPage() {
  console.log('render EditObject')

  const { id } = useParams()

  const serverData = id ? useFetch('/objects/' + id) : null
  const [data, setData] = React.useState(null)
  const [errors, setErrors] = React.useState()

  React.useEffect(() => {
    if (serverData) {
      setData(serverData)
    }
  }, [serverData])

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
