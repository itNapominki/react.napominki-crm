import styles from './Map.module.scss'
import React from 'react'
import { YMaps, Map as MapFrame, Placemark } from 'react-yandex-maps'
import { OfferContext } from 'core/context'

export default function Map() {
  const context = React.useContext(OfferContext)
  const { restaurants, mapZoom } = context

  const coordinates = restaurants.map(({ address }) => {
    return address.coordinates
      .split(', ')
      .map((coordinate) => parseFloat(coordinate))
  })

  const center = coordinates
    .reduce((prev, next) => {
      return [prev[0] + next[0], prev[1] + next[1]]
    })
    .map((coordinate) => coordinate / coordinates.length)

  return (
    <div className={styles.container}>
      <YMaps>
        <MapFrame
          defaultState={{ center, zoom: mapZoom ? mapZoom : 16 }}
          width="initial"
          height="initial"
          className={styles.frame}
        >
          {coordinates.map((coordinate) => (
            <Placemark
              key={coordinate}
              geometry={coordinate}
              options={{
                iconLayout: 'default#image',
                iconImageHref: '/marker-cafe.svg',
                iconImageSize: [46, 60],
                iconImageOffset: [-20, -60],
              }}
            />
          ))}
        </MapFrame>
      </YMaps>
    </div>
  )
}
