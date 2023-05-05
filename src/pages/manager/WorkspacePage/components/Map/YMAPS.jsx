import React from 'react'

import { useScript } from 'hooks'
import { createSearchControl } from './controls'
import { handleAddRadiusPoint, handleFeatureClick } from './handlers'
import { createObjectManager, checkDataChanges, clusterPieChart } from './utils'

export default React.memo(function YMAPS({
  setModalFor,
  setRadiusFilter,
  setFilterVisible,
}) {
  const circleRef = React.useRef()

  useScript(
    'https://api-maps.yandex.ru/2.1/?apikey=' +
      process.env.REACT_APP_YMAPS_API_KEY +
      '&modules=regions~metro&lang=ru_RU',
    onLoad
  )

  function onLoad() {
    ymaps
      .load()
      .then((ymaps) => {
        const ID = 'map'
        const $container = document.getElementById(ID)

        $container.innerHTML = ''

        const map = new ymaps.Map(ID, {
          center: [57.9838, 44.0],
          zoom: 12,
          controls: [
            'fullscreenControl',
            'zoomControl',
            'rulerControl',
            'routeButtonControl',
          ],
        })

        map.setBounds([
          [55.55945544545429, 37.13268871914181],
          [55.946698202860325, 38.085747336675574],
        ])

        map.margin.setDefaultMargin(100)

        const searchControl = createSearchControl(ymaps, map)
        map.controls.add(searchControl)

        const objectManager = createObjectManager(ymaps)
        map.geoObjects.add(objectManager)

        clusterPieChart(objectManager)

        objectManager.objects.events.add('click', (e) =>
          handleFeatureClick(e, objectManager, setModalFor)
        )

        checkDataChanges($container, 'data-visible-objects', (value) => {
          objectManager.setFilter((object) => {
            return (
              object.properties.type === 'RESTAURANT' ||
              value.split(',').indexOf(object.properties.type) !== -1
            )
          })
        })

        checkDataChanges($container, 'data-searched', (value) => {
          const searched = new ymaps.Placemark(
            value.split(','),
            {},
            {
              iconLayout: 'default#image',
              iconImageHref: '/marker-searched.png',
              iconImageSize: [21, 30],
              iconImageOffset: [-5, -30],
            }
          )

          map.geoObjects.add(searched)
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

          if (circleRef.current) {
            return circleRef.current.geometry.setRadius(radius)
          }

          if (!status) {
            map.geoObjects.remove(circleRef.current)
          }
        })
      })
      .then(() => console.log('map ready'))
      .catch((error) => console.log('Failed to load Yandex yMaps', error))
  }
})
