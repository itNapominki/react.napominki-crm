import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { ClientLayout, Offer } from 'components'
import { OfferContext } from 'core/context'
import { api } from 'core/utils'

export default function OfferPage() {
  const [searchParams] = useSearchParams()

  const ids = searchParams.get('ids').split(',')
  const managerId = searchParams.get('manager_id')
  const mapZoom = searchParams.get('map_zoom')

  const restaurantsQuery = ids
    .map((id) => 'id[]=' + id + '&')
    .join('')
    .slice(0, -1)

  const { data: restaurants } = api.getAll({ model: api.model.restaurant })
  const { data: manager } = api.getOne({ model: api.model.user, managerId })

  return (
    <OfferContext.Provider value={{ restaurants, managerId, mapZoom }}>
      <ClientLayout manager={manager}>
        <Offer />
      </ClientLayout>
    </OfferContext.Provider>
  )
}
