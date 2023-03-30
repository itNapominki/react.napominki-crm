export default function createSearchControl(ymaps, map) {
  const searchControl = new ymaps.control.SearchControl({
    options: {
      boundedBy: map.getBounds(),
      strictBounds: true,
      // noPlacemark: true,
    },
  })

  searchControl.events.add('load', function (event) {
    // Проверяем, что это событие не "дозагрузки" результатов и
    // по запросу найден хотя бы один результат.
    if (!event.get('skip') && searchControl.getResultsCount()) {
      const geoObjectsArray = searchControl.getResultsArray()

      geoObjectsArray.forEach((marker) => {
        marker.options.set({
          iconLayout: 'default#image',
          iconImageHref:
            'https://sandbox.api.maps.yandex.net/examples/ru/2.1/icon_customImage/images/myIcon.gif',
          iconImageSize: [30, 42],
          iconImageOffset: [-5, -38],
        })

        marker.events.add('click', (e) => e.preventDefault())
      })
    }
  })

  return searchControl
}
