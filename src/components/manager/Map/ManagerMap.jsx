import styles from './ManagerMap.module.scss'
import React from 'react'

import ymaps from 'ymaps'

export default function ManagerMap() {
  ymaps
    .load()
    .then((maps) => {
      const map = new maps.Map('map', {
        center: [57.9838, 44.0],
        zoom: 5,
      })

      const objectManager = new maps.LoadingObjectManager(
        process.env.REACT_APP_SERVER_URL + '/api/map?bbox=%b',
        {
          // Укажем шаблон для именования callback-функций.
          paddingTemplate: 'myCallback_%b',
          splitRequests: false,
          clusterize: true,
        }
      )

      map.geoObjects.add(objectManager)

      // При клике на метке изменяем цвет ее иконки на желтый.\

      function onClusterCollectionAdd(e) {
        var cluster = e.get('child')

        objectManager.clusters.each((cluster) => {
          console.log(cluster)
          if (cluster.features[0].properties.type != 'RESTAURANT') {
            return objectManager.clusters.setClusterOptions(cluster.id, {
              preset: 'islands#nightClusterIcons',
            })
          }

          console.log(cluster.features[0].properties)
        })

        // Для кластеров, в состав которых входит больше 10 меток,
        // зададим значок красного цвета.
        // if (cluster.number > 10) {
        //   objectManager.clusters.setClusterOptions(cluster.id, {
        //     preset: 'islands#redClusterIcons',
        //   })
        // }
      }
      // Подписываемся на событие добавления кластера в коллекцию.
      objectManager.clusters.events.add(['add'], onClusterCollectionAdd)

      function onObjectEvent(e) {
        let objectId = e.get('objectId')

        const feature = objectManager.objects.getById(objectId)

        // if (feature.properties.type != 'RESTAURANT') {
        //   console.log(1)
        //   objectManager.objects.setObjectOptions(objectId, {
        //     preset: 'islands#yellowIcon',
        //   })
        // }
      }

      // Назначаем обработчик событий на коллекцию объектов менеджера.
      objectManager.objects.events.add(['click'], onObjectEvent)
    })
    .then(() => console.log(1))
    .catch((error) => console.log('Failed to load Yandex Maps', error))

  return (
    <div
      id="map"
      style={{ width: '100%', height: '500px', background: 'gray' }}
    ></div>
  )
}
