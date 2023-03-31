import styles from './Map.module.scss'
import React from 'react'
import ymaps from 'ymaps'

export default function Map({ points }) {
  if (points.length === 0) {
    return
  }

  ymaps
    .load()
    .then((maps) => {
      document.getElementById('map').innerHTML = ''

      const map = new maps.Map('map', {
        center: points[0].coordinates,
        zoom: 12,
        controls: ['zoomControl'],
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

      if (points.length > 1) {
        map.setBounds(map.geoObjects.getBounds(), {
          checkZoomRange: true,
          zoomMargin: 10,
        })
      }
    })
    .then(() => console.log('map ready'))
    .catch((error) => console.log('Failed to load Yandex Maps', error))

  return <div id="map" className={styles.container}></div>
}
