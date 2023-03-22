import styles from './Map.module.scss'
import React from 'react'
import ymaps from 'ymaps'

export default function Map({ points }) {
  const center = points
    ?.reduce((prev, next) => [
      prev.coordinates[0] + next.coordinates[0],
      prev.coordinates[1] + next.coordinates[1],
    ])
    .map((coordinate) => coordinate / points.length)

  React.useEffect(() => {
    ymaps
      .load()
      .then((maps) => {
        document.getElementById('map').innerHTML = ''

        const map = new maps.Map('map', {
          center,
          zoom: 12,
        })

        const objectManager = new maps.ObjectManager()

        objectManager.add(
          points.map(({ id, coordinates }) => ({
            type: 'Feature',
            id,
            geometry: {
              type: 'Point',
              coordinates,
            },
            options: {
              iconLayout: 'default#image',
              iconImageHref: '/marker-cafe.svg',
              iconImageSize: [46, 60],
              iconImageOffset: [-20, -60],
            },
          }))
        )

        map.geoObjects.add(objectManager)
        map.setBounds(map.geoObjects.getBounds())
        map.margin.setDefaultMargin(50)
      })
      .then(() => console.log('map ready'))
      .catch((error) => console.log('Failed to load Yandex Maps', error))
  }, [])

  return <div id="map" className={styles.container}></div>
}
