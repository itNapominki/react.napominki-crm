import styles from './ClientMap.module.scss'
import React from 'react'

import { useScript } from 'hooks'
import { classNames } from 'core/utils'

export default function ClientMap({ className, points }) {
  if (points.length === 0) {
    return
  }

  useScript(
    'https://api-maps.yandex.ru/2.1/?apikey=' +
      process.env.REACT_APP_YMAPS_API_KEY +
      '&lang=ru_RU',
    onLoad
  )

  function onLoad() {
    ymaps
      .load()
      .then((maps) => {
        document.getElementById('map').innerHTML = ''

        const map = new maps.Map('map', {
          center: points[0].coordinates,
          zoom: 12,
          controls: ['routeButtonControl', 'fullscreenControl', 'zoomControl'],
        })

        const objectManager = new maps.ObjectManager({})

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
  }

  return (
    <div id="map" className={classNames(styles.container, [className])}></div>
  )
}
