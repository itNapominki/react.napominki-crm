import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClientLayout, Offer } from 'components'
import { OfferContext } from 'context'
import { useFetch } from 'hooks'

export default function OfferPage() {
  const [searchParams] = useSearchParams()
  const ids = searchParams.get('ids').split(',')
  const managerId = searchParams.get('manager_id')
  const mapZoom = searchParams.get('map_zoom')

  const restaurantsQuery = ids
    .map((id) => 'id[]=' + id + '&')
    .join('')
    .slice(0, -1)

  const manager = useFetch('/users/' + managerId)
  const restaurants = useFetch('/restaurants/?' + restaurantsQuery)

  return (
    <OfferContext.Provider value={{ restaurants, managerId, mapZoom }}>
      <ClientLayout manager={manager}>
        <Offer />
      </ClientLayout>
    </OfferContext.Provider>
  )
}
