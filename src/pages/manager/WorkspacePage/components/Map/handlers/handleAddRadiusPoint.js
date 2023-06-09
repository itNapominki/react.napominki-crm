export default function handleAddRadiusPoint(
  e,
  map,
  ymaps,
  onClick,
  radius,
  setRadiusFilter,
  setFilterVisible,
  circleRef
) {
  if (circleRef) {
    map.geoObjects.remove(circleRef.current)
  }

  const center = e.get('coords')

  const circle = new ymaps.Circle(
    [center, radius],
    {},
    {
      draggable: true,
    }
  )
  map.geoObjects.add(circle)

  setRadiusFilter((prev) => ({
    ...prev,
    status: 'READY',
  }))

  // setFilterVisible(true)

  map.events.remove('click', onClick)

  circleRef.current = circle
}
