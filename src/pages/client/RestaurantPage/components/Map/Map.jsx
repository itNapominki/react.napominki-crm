import styles from './Map.module.scss'
import React from 'react'
import ymaps from 'ymaps'

export default function Map({ coordinates }) {
  ymaps
    .load()
    .then((maps) => {
      document.getElementById('map').innerHTML = ''

      const map = new maps.Map('map', {
        center: coordinates,
        zoom: 12,
      })

      const placemark = new maps.Placemark(
        coordinates,
        {
          hintContent: '',
        },
        {
          iconLayout: 'default#image',
          iconImageHref: '/marker-cafe.svg',
          iconImageSize: [46, 60],
          iconImageOffset: [-20, -60],
        }
      )
      map.geoObjects.add(placemark)
    })
    .then(() => console.log('map ready'))
    .catch((error) => console.log('Failed to load Yandex Maps', error))

  return <div id="map" className={styles.container}></div>
}
