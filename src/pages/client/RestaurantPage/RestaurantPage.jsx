import styles from './RestaurantPage.module.scss'
import React from 'react'
import { useParams, useSearchParams, useOutletContext } from 'react-router-dom'

import { ClientMap, ClientMapFromOSM } from 'components'
import { Halls, Main, Menus, Offer } from './components'

import { ClientRestaurantContext } from 'context'
import { api } from 'utils'
import { MODELS } from 'constants'

export default function RestaurantPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const { manager } = useOutletContext()

  const menus = searchParams.get('menus')
  const halls = searchParams.get('halls')

  const [restaurant, setRestaurant] = React.useState()

  React.useEffect(() => {
    api.getOne({ model: MODELS.RESTAURANT.VALUE, id }).then(({ data }) => {
      if (halls) {
        data.halls = data.halls.filter(
          (_, i) => halls.split(',').map(Number).indexOf(i) !== -1
        )
      }

      if (menus) {
        data.menus = data.menus.filter(
          ({ id }) => menus.split(',').map(Number).indexOf(id) !== -1
        )
      }

      setRestaurant(data)
    })
  }, [])

  return (
    <ClientRestaurantContext.Provider value={{ restaurant, manager }}>
      <div className={styles.container}>
        {restaurant && (
          <React.Fragment>
            <Main />
            <Halls />
            <Menus />
            {/* <ClientMap
              points={[
                {
                  id: restaurant.id,
                  coordinates: restaurant.point.coordinates,
                },
              ]}
              className={styles.map}
            /> */}
            <ClientMapFromOSM className={styles.map} points={[
                {
                  id: restaurant.id,
                  coordinates: restaurant.point.coordinates,
                },
              ]}></ClientMapFromOSM>
            <Offer
              title="Чтобы выбрать этот филиал, напишите своему менеджеру"
              manager={manager}
            />
          </React.Fragment>
        )}
      </div>
    </ClientRestaurantContext.Provider>
  )
}
