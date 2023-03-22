import styles from './RestaurantPage.module.scss'
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

import { ClientLayout } from 'components'
import { Halls, Map, Main, Menus, Offer } from './components'

import { ClientRestaurantContext } from 'core/context'
import { api, decrypt } from 'core/utils'
import { MODELS } from 'core/constants'

export default function RestaurantPage() {
  const { id } = useParams()
  const { hash } = useLocation()
  const decrypted = hash && JSON.parse(decrypt(hash.replace('#', '')))
  // const [searchParams] = useSearchParams()
  // const managerId = searchParams.get('manager_id')

  const [restaurant, setRestaurant] = React.useState()
  const [manager, setManager] = React.useState()

  React.useEffect(() => {
    api
      .getOne({ model: MODELS.RESTAURANT.VALUE, id })
      .then(({ data }) => setRestaurant(data))

    // if (managerId) {
    //   api
    //     .getOne({ model: MODELS.USER.VALUE, id: managerId })
    //     .then(({ data }) => setManager(data))
    // }
  }, [])

  return (
    <ClientRestaurantContext.Provider value={{ restaurant, decrypted }}>
      <ClientLayout manager={manager} className={styles.container}>
        {restaurant && (
          <React.Fragment>
            <Main />
            <Halls />
            <Menus />
            <Map coordinates={restaurant.point.coordinates} />
            <Offer title="Чтобы выбрать этот филиал, напишите своему менеджеру" />
          </React.Fragment>
        )}
      </ClientLayout>
    </ClientRestaurantContext.Provider>
  )
}
