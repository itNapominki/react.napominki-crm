import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ContentCard, Forbidden, Layout } from 'components/general'
import { ObjectForm } from './components'

import { EditObjectContext } from 'core/context'
import { api } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'

export default function EditObjectPage() {
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

  const user = useSelector((state) => state.user.value)
  if (
    !user ||
    (user.role !== USER_ROLES.ADMIN.VALUE &&
      user.role !== USER_ROLES.REDAKTOR.VALUE)
  ) {
    return <Forbidden />
  }

  return (
    <EditObjectContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <Layout>
        <div className="wrapper">
          <ContentCard>
            <ObjectForm />
          </ContentCard>
        </div>
      </Layout>
    </EditObjectContext.Provider>
  )
}
