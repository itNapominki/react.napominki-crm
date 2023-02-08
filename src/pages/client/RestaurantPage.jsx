import React from 'react'
import { useFetch } from 'hooks'
import { useParams } from 'react-router-dom'
import { ClientLayout, Restaurant } from 'components'
import { RestaurantContext } from 'context'

export default function RestaurantPage() {
  const { id } = useParams()

  const data = useFetch('/restaurants/' + id)

  return (
    <ClientLayout className="restaurant-page fz-16">
      <RestaurantContext.Provider value={data}>
        <Restaurant />
      </RestaurantContext.Provider>
    </ClientLayout>
  )
}
