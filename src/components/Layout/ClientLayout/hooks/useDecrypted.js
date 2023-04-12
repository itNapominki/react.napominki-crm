import React from 'react'
import { useLocation } from 'react-router-dom'

import { api, decrypt } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useDecrypted() {
  const { hash, pathname } = useLocation()

  const decrypted = hash && JSON.parse(decrypt(hash.replace('#', '')))
  const RESTAURANTS_IDS = decrypted && decrypted.restaurants.map(({ id }) => id)

  const [restaurants, setRestaurants] = React.useState([])
  const [manager, setManager] = React.useState({})

  React.useEffect(() => {
    if (!pathname.includes('restaurant')) {
      api
        .getAll({
          model: MODELS.RESTAURANT.VALUE,
          params: { where: { id: RESTAURANTS_IDS } },
        })
        .then(({ data }) =>
          setRestaurants(
            data.rows
              .sort(
                (a, b) =>
                  RESTAURANTS_IDS.indexOf(a.id) - RESTAURANTS_IDS.indexOf(b.id)
              )
              .map((restaurant) => {
                const ref = decrypted.restaurants.find(
                  ({ id }) => id === restaurant.id
                )
                const { halls, menus } = ref
                restaurant.queryParams = `halls=${halls}&menus=${menus.map(
                  ({ id }) => id
                )}${hash}`

                return restaurant
              })
          )
        )
      // .catch((e) => console.log(e))
    }

    if (decrypted) {
      api
        .getOne({
          model: MODELS.USER.VALUE,
          id: decrypted.managerId,
        })
        .then(({ data }) => setManager(data))
      // .catch((e) => console.log(e))
    }
  }, [])

  return [restaurants, manager]
}
