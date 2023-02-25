import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ClientLayout, Restaurant } from 'components'
import { RestaurantContext } from 'core/context'
import { api } from 'core/utils'
import { MODELS } from 'core/constants'

export default function RestaurantPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const managerId = searchParams.get('manager_id')

  const [restaurant, setRestaurant] = React.useState()
  const [manager, setManager] = React.useState()

  React.useEffect(() => {
    api
      .getOne({ model: MODELS.RESTAURANT.VALUE, id })
      .then(({ data }) => setRestaurant(data))

    if (managerId) {
      api
        .getOne({ model: MODELS.USER.VALUE, id: managerId })
        .then(({ data }) => setManager(data))
    }
  }, [])

  return (
    <ClientLayout manager={manager} className="restaurant-page fz-16">
      <RestaurantContext.Provider value={restaurant}>
        <Restaurant />
      </RestaurantContext.Provider>
    </ClientLayout>
  )
}
