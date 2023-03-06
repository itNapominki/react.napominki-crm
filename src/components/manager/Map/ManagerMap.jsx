import styles from './ManagerMap.module.scss'
import React from 'react'

import axios from 'axios'
import ymaps from 'ymaps'

export default function ManagerMap() {
  const [data, setData] = React.useState([])

  ymaps
    .load()
    .then((maps) => {
      const map = new maps.Map('map', {
        center: [55, 35],
        zoom: 14,
      })

      var loadingObjectManager = new maps.LoadingObjectManager(
        process.env.REACT_APP_SERVER_URL +
          '/api/restaurants/test-yamap?bbox=%b',
        {
          // Укажем шаблон для именования callback-функций.
          paddingTemplate: 'myCallback_%b',
          splitRequests: false,
        }
      )

      map.geoObjects.add(loadingObjectManager)

      // При клике на метке изменяем цвет ее иконки на желтый.
      function onObjectEvent(e) {
        let objectId = e.get('objectId')
        console.log(objectId)
        // var objectId = e.get('objectId'),
        //   objectGeometry =
        //     loadingObjectManager.objects.getById(objectId).geometry.type
        // // Если событие произошло на метке, изменяем цвет ее иконки.
        // if (objectGeometry === 'Point') {
        //   loadingObjectManager.objects.setObjectOptions(objectId, {
        //     preset: 'islands#yellowIcon',
        //   })
        // }
      }

      // Назначаем обработчик событий на коллекцию объектов менеджера.
      loadingObjectManager.objects.events.add(['click'], onObjectEvent)
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
