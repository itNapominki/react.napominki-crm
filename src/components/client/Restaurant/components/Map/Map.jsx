import React from 'react'
import { YMaps, Map as MapFrame, Placemark } from 'react-yandex-maps'
import { ClientCard } from 'components'
import { RestaurantContext } from 'context'

export default function Map() {
  const context = React.useContext(RestaurantContext)
  const { address } = context
  const { coordinates } = address

  const center = coordinates.split(', ').map((str) => parseFloat(str))

  return (
    <ClientCard>
      <div className="cm-restaurant__map">
        <YMaps>
          <MapFrame
            defaultState={{ center, zoom: 16 }}
            width="initial"
            height="initial"
            className="cm-restaurant__map-container"
          >
            <Placemark geometry={center} />
          </MapFrame>
        </YMaps>
      </div>
    </ClientCard>
  )
}
