import React from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { ClientLayout, Restaurant } from 'components'
import { RestaurantContext } from 'core/context'
import { api } from 'core/utils'

export default function RestaurantPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const managerId = searchParams.get('manager_id')

  const { data } = api.getOne({ model: api.model.restaurant, id })
  const { data: manager } = api.getOne({ model: api.model.user, id: managerId })

  return (
    <ClientLayout manager={manager} className="restaurant-page fz-16">
      <RestaurantContext.Provider value={data}>
        <Restaurant />
      </RestaurantContext.Provider>
    </ClientLayout>
  )
}
