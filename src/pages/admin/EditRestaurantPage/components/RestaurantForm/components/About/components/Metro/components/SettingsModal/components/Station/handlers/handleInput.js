export default function handleInput(setRelated, id, value) {
  setRelated((prev) => [
    ...prev.map((station) => {
      if (id === station.id && value) {
        station.distance = value
      }

      return station
    }),
  ])
}
