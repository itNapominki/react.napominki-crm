import styles from './Map.module.scss'
import React from 'react'
import ymaps from 'ymaps'

export default React.memo(function Map({ setModalFor }) {
  ymaps
    .load()
    .then((maps) => {
      document.getElementById('map').innerHTML = ''

      const map = new maps.Map('map', {
        center: [57.9838, 44.0],
        zoom: 5,
      })

      const objectManager = new maps.LoadingObjectManager(
        process.env.REACT_APP_SERVER_URL + '/api/map?bbox=%b',
        {
          paddingTemplate: 'myCallback_%b',
          splitRequests: false,
          clusterize: true,
        }
      )

      map.geoObjects.add(objectManager)

      function onObjectEvent(e) {
        let id = e.get('objectId')

        const feature = objectManager.objects.getById(id)

        if (feature.properties.type === 'RESTAURANT') {
          setModalFor(id)
        }
      }

      objectManager.objects.events.add(['click'], onObjectEvent)
    })
    .then(() => console.log('map ready'))
    .catch((error) => console.log('Failed to load Yandex Maps', error))

  return <div id="map" className={styles.container}></div>
})
