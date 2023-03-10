export default function handleInput(setHalls, key, value, index) {
  setHalls((prev) =>
    prev.map((hall, i) => {
      if (index === i) {
        hall[key] = value
      }

      return hall
    })
  )
}
