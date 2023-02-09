import React from 'react'
import { useFetch } from 'hooks'
import { useParams, useSearchParams } from 'react-router-dom'
import { ClientLayout, Restaurant } from 'components'
import { RestaurantContext } from 'context'

export default function RestaurantPage() {
  const { id } = useParams()
  const [searchParams] = useSearchParams()
  const managerId = searchParams.get('manager_id')

  const data = useFetch('/restaurants/' + id)
  const manager = useFetch('/users/' + managerId)

  return (
    <ClientLayout manager={manager} className="restaurant-page fz-16">
      <RestaurantContext.Provider value={data}>
        <Restaurant />
      </RestaurantContext.Provider>
    </ClientLayout>
  )
}
