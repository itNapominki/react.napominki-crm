import styles from './RestaurantPage.module.scss'
import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

import { ClientLayout, ClientMap } from 'components'
import { Halls, Main, Menus, Offer } from './components'

import { ClientRestaurantContext } from 'core/context'
import { api, decrypt } from 'core/utils'
import { MODELS } from 'core/constants'

export default function RestaurantPage() {
  const { id } = useParams()
  const { hash } = useLocation()
  const decrypted = hash && JSON.parse(decrypt(hash.replace('#', '')))

  const [restaurant, setRestaurant] = React.useState()
  const [manager, setManager] = React.useState({})

  React.useEffect(() => {
    api
      .getOne({ model: MODELS.RESTAURANT.VALUE, id })
      .then(({ data }) => setRestaurant(data))

    if (decrypted.managerId) {
      api
        .getOne({ model: MODELS.USER.VALUE, id: decrypted.managerId })
        .then(({ data }) => setManager(data))
    }
  }, [])

  return (
    <ClientRestaurantContext.Provider
      value={{ restaurant, decrypted, manager }}
    >
      <ClientLayout manager={manager} className={styles.container}>
        {restaurant && (
          <React.Fragment>
            <Main />
            <Halls />
            <Menus />
            <ClientMap
              points={[
                {
                  id: restaurant.id,
                  coordinates: restaurant.point.coordinates,
                },
              ]}
              className={styles.map}
            />
            <Offer
              title="Чтобы выбрать этот филиал, напишите своему менеджеру"
              messengers={manager.messengers}
            />
          </React.Fragment>
        )}
      </ClientLayout>
    </ClientRestaurantContext.Provider>
  )
}
