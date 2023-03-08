import React from 'react'
import { useParams } from 'react-router-dom'

import { ContentCard, Forbidden, Layout, Tabs } from 'components/general'
import { RestaurantForm } from './components'

import { EditRestaurantContext } from 'core/context'
import { api, getObjKeyName } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'
import { useCheckRole } from 'hooks'
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

  const access = useCheckRole([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.REDAKTOR),
  ])

  if (!access) {
    return <Forbidden />
  }

  return (
    <EditRestaurantContext.Provider
      value={{ id, initial, data, setData, error, setError }}
    >
      <Layout>
        <div className="wrapper">
          {id && <Tabs buttons={navigation} />}
          <ContentCard>
            <RestaurantForm tabIndex={activeTab} />
          </ContentCard>
        </div>
      </Layout>
    </EditRestaurantContext.Provider>
  )
}
