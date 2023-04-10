export default function handleInput(distance, setRelated, i) {
  setRelated((prev) =>
    prev.map((station, j) => {
      if (j === i) {
        station.distance = distance
      }

      return station
    })
  )
}
