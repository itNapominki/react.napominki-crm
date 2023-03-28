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

  const setState = (center) =>
    setRadiusFilter((prev) => ({
      ...prev,
      center,
      status: 'READY',
    }))

  const circle = new ymaps.Circle(
    [center, radius],
    {},
    {
      draggable: true,
    }
  )

  circle.events.add('dragend', (e) =>
    setState(e.get('target').geometry.getCoordinates())
  )

  map.geoObjects.add(circle)

  setState(center)

  setFilterVisible(true)

  map.events.remove('click', onClick)

  circleRef.current = circle
}
