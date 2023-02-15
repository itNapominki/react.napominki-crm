import styles from './Map.module.scss'
import React from 'react'
import { YMaps, Map as MapFrame, Placemark } from 'react-yandex-maps'
import { RestaurantContext } from 'core/context'

export default function Map() {
  const context = React.useContext(RestaurantContext)
  const { address } = context
  const { coordinates } = address

  const center = coordinates.split(', ').map((str) => parseFloat(str))

  return (
    <div className={styles.container}>
      <YMaps>
        <MapFrame
          defaultState={{ center, zoom: 16 }}
          width="initial"
          height="initial"
          className={styles.frame}
        >
          <Placemark
            geometry={center}
            options={{
              iconLayout: 'default#image',
              iconImageHref: '/marker-cafe.svg',
              iconImageSize: [46, 60],
              iconImageOffset: [-20, -60],
            }}
          />
        </MapFrame>
      </YMaps>
    </div>
  )
}
