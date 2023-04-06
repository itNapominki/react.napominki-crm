import React from 'react'
import { useParams } from 'react-router-dom'

import { Layout } from 'components'
import { RestaurantForm } from './components'

import { EditRestaurantContext } from 'core/context'
import { api, getObjKeyName } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'
import { useNavigation } from './hooks'

export default function EditRestaurantPage() {
  const { id } = useParams()

  const [initial, setInitial] = React.useState()
  const [activeTab, navigation] = useNavigation()

  React.useEffect(() => {
    if (id) {
      api
        .getOne({ model: MODELS.RESTAURANT.VALUE, id })
        .then(({ data }) => setInitial(data))
    }
  }, [])

  React.useEffect(() => setData(initial), [initial])

  const [data, setData] = React.useState()
  const [error, setError] = React.useState({})

  if (error.message) {
    alert(error.message)
    setError({ errors: error.errors })
  }

  return (
    <EditRestaurantContext.Provider
      value={{ id, initial, data, setInitial, error, setError }}
    >
      <Layout>
        <Layout.UserLayout
          roles={[
            getObjKeyName(() => USER_ROLES.ADMIN),
            getObjKeyName(() => USER_ROLES.REDAKTOR),
          ]}
          navigation={id && navigation}
          containerClassName="card"
        >
          <RestaurantForm tabIndex={activeTab} />
        </Layout.UserLayout>
      </Layout>
    </EditRestaurantContext.Provider>
  )
}
