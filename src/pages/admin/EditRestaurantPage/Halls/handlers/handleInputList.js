export default function handleInputList(setHalls, info, j) {
  setHalls((prev) =>
    prev.map((hall, i) => {
      if (i === j) {
        hall.info = info
      }

      return hall
    })
  )
}
