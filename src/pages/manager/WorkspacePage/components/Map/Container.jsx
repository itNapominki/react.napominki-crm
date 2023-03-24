import React from 'react'
import ymaps from 'ymaps'

import { checkDataChanges } from './utils'

export default React.memo(function Map({ setModalFor }) {
  ymaps
    .load()
    .then((maps) => {
      const ID = 'map'
      const $container = document.getElementById(ID)

      $container.innerHTML = ''

      const map = new maps.Map(ID, {
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

      const placemark = new maps.Placemark(
        [70, 70],
        {
          hintContent: '',
        },
        {
          iconLayout: 'default#image',
        }
      )
      map.geoObjects.add(placemark)

      map.events.add('click', function (e) {
        var coords = e.get('coords')

        console.log(coords)
      })

      function onObjectEvent(e) {
        let id = e.get('objectId')

        const feature = objectManager.objects.getById(id)

        if (feature.properties.type === 'RESTAURANT') {
          setModalFor(id)
        }
      }

      objectManager.objects.events.add(['click'], onObjectEvent)

      checkDataChanges($container, 'visibleObjects', (value) => {
        objectManager.setFilter((object) => {
          return (
            object.properties.type === 'RESTAURANT' ||
            value.split(',').indexOf(object.properties.type) !== -1
          )
        })
      })
    })
    .then(() => console.log('map ready'))
    .catch((error) => console.log('Failed to load Yandex Maps', error))
})
