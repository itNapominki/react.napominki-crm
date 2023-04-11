export default function handleInput(setHalls, key, value, j) {
  setHalls((prev) =>
    prev.map((hall, i) => {
      if (i === j) {
        hall[key] = value
      }

      return hall
    })
  )
}
