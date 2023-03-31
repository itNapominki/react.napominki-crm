import React from 'react'

import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function useGetData(decrypted) {
  const RESTAURANT_IDS = decrypted.restaurants.map(({ id }) => id)

  const [restaurants, setRestaurants] = React.useState([])
  const [manager, setManager] = React.useState({})

  React.useEffect(() => {
    api
      .getAll({
        model: MODELS.RESTAURANT.VALUE,
        params: { where: { id: RESTAURANT_IDS } },
      })
      .then(({ data }) =>
        setRestaurants(
          data.rows.sort(
            (a, b) =>
              RESTAURANT_IDS.indexOf(a.id) - RESTAURANT_IDS.indexOf(b.id)
          )
        )
      )
      .catch((e) => console.log(e))

    api
      .getOne({
        model: MODELS.USER.VALUE,
        id: decrypted.managerId,
      })
      .then(({ data }) => setManager(data))
      .catch((e) => console.log(e))
  }, [])

  return [restaurants, manager]
}
