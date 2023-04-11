import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

import { About, Halls, Manager, Menus, RestaurantForm } from './'

import { EditRestaurantContext } from 'core/context'
import { api, getObjKeyName } from 'core/utils'
import { USER_ROLES, MODELS } from 'core/constants'
import { useNavigation } from './hooks'
import { Tabs } from 'components'

export default function EditRestaurantPage() {
  const { setRoles } = useOutletContext()
  setRoles([
    getObjKeyName(() => USER_ROLES.ADMIN),
    getObjKeyName(() => USER_ROLES.REDAKTOR),
  ])

  const params = useParams()
  const [id, setId] = React.useState(params.id)

  const [initial, setInitial] = React.useState()
  const [activeTab, navigation] = useNavigation()

  React.useEffect(() => {
    if (params.id) {
      setId(params.id)
    }
  }, [params])

  React.useEffect(() => {
    if (id) {
      api
        .getOne({ model: MODELS.RESTAURANT.VALUE, id })
        .then(({ data }) => setInitial(data))
    }
  }, [])

  const [error, setError] = React.useState({})

  if (error.message) {
    alert(error.message)
    setError({ errors: error.errors })
  }

  return (
    <EditRestaurantContext.Provider
      value={{ id, initial, setInitial, error, setError }}
    >
      {id && <Tabs buttons={navigation} />}
      <RestaurantForm>
        {[<About />, <Halls />, <Menus />, <Manager />].map((Component, i) => (
          <div key={i} hidden={activeTab !== i}>
            {Component}
          </div>
        ))}
      </RestaurantForm>
    </EditRestaurantContext.Provider>
  )
}
