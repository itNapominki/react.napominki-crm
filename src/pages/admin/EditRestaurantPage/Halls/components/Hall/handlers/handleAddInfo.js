export default function handleAddInfo(setHalls, array, index) {
  setHalls((prev) =>
    prev.map((hall, i) => {
      if (index === i && JSON.stringify(hall.info) != JSON.stringify(array)) {
        hall.info = array
      }

      return hall
    })
  )
}
