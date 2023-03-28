import React from 'react'

import { checkDataChanges } from './utils'
import { handleAddRadiusPoint } from './handlers'

export default React.memo(function YMAPS({
  setModalFor,
  setRadiusFilter,
  setFilterVisible,
}) {
  const circleRef = React.useRef()

  ymaps
    .load()
    .then((ymaps) => {
      const ID = 'map'
      const $container = document.getElementById(ID)

      $container.innerHTML = ''

      const map = new ymaps.Map(ID, {
        center: [57.9838, 44.0],
        zoom: 5,
        controls: [
          'fullscreenControl',
          'zoomControl',
          'rulerControl',
          'routeButtonControl',
          'searchControl',
        ],
      })

      const objectManager = new ymaps.LoadingObjectManager(
        process.env.REACT_APP_SERVER_URL + '/api/map?bbox=%b',
        {
          paddingTemplate: 'myCallback_%b',
          splitRequests: false,
          clusterize: true,
        }
      )

      map.geoObjects.add(objectManager)

      objectManager.clusters.events.add('add', (e) => {
        const id = e.get('objectId')
        const cluster = objectManager.clusters.getById(id)
        const features = cluster.properties.geoObjects

        const data = [
          { weight: 0, color: '#26B91C' },
          { weight: 0, color: '#384588' },
          { weight: 0, color: '#E8EC2F' },
          { weight: 0, color: '#DF9423' },
          { weight: 0, color: '#C82929' },
          { weight: 0, color: '#4D516C' },
        ]

        objectManager.clusters.setClusterOptions(id, {
          clusterIconLayout: 'default#pieChart',
        })

        features.forEach((feature) => {
          const priority = feature.properties.priority - 1 || 5

          data[priority].weight += 1
        })

        cluster.properties.data = data
      })

      function onObjectEvent(e) {
        let id = e.get('objectId')

        const feature = objectManager.objects.getById(id)

        if (feature.properties.type === 'RESTAURANT') {
          setModalFor(id)
        }
      }

      objectManager.objects.events.add('click', onObjectEvent)

      checkDataChanges($container, 'data-visible-objects', (value) => {
        objectManager.setFilter((object) => {
          return (
            object.properties.type === 'RESTAURANT' ||
            value.split(',').indexOf(object.properties.type) !== -1
          )
        })
      })

      checkDataChanges($container, 'data-settings', (value) => {
        const { center, zoom } = JSON.parse(value)
        map.setCenter(center, zoom)
      })

      checkDataChanges($container, 'data-radius-filter', (value) => {
        const { status, radius } = JSON.parse(value)

        function onClick(e) {
          handleAddRadiusPoint(
            e,
            map,
            ymaps,
            onClick,
            radius,
            setRadiusFilter,
            setFilterVisible,
            circleRef
          )
        }

        if (status === 'CREATING') {
          return map.events.add('click', onClick)
        }

        if (status === 'UPDATED' && circleRef.current) {
          circleRef.current.geometry.setRadius(radius)

          return setRadiusFilter((prev) => ({ ...prev, status: 'READY' }))
        }

        if (status === 'READY' && circleRef.current) {
          objectManager.setFilter((object) => {
            const { coordinates } = object.geometry

            return circleRef.current.geometry.contains(coordinates)
          })
        }

        if (!status) {
          map.geoObjects.remove(circleRef.current)
        }
      })
    })
    .then(() => console.log('map ready'))
    .catch((error) => console.log('Failed to load Yandex yMaps', error))
})
