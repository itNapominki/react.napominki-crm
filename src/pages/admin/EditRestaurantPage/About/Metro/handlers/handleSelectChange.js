export default function handleSelectChange(title, setRelated, i) {
  setRelated((prev) =>
    prev.map((station, j) => {
      if (j === i) {
        station.title = title
      }

      return station
    })
  )
}
