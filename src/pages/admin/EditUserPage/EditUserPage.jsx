import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { ContentCard, Forbidden, Layout } from 'components/general'
import { UserForm } from './components'

import { EditUserContext } from 'core/context'
import { api } from 'core/utils'
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

  console.log(error)

  const user = useSelector((state) => state.user.value)
  if (!user || user.role !== USER_ROLES.ADMIN.VALUE) {
    return <Forbidden />
  }

  return (
    <EditUserContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <Layout>
        <div className="wrapper">
          <ContentCard>
            <UserForm />
          </ContentCard>
        </div>
      </Layout>
    </EditUserContext.Provider>
  )
}
