export default function handleInput(setInfo, value, index) {
  setInfo((prev) =>
    prev.map((item, i) => {
      if (i === index) {
        item = value
      }

      return item
    })
  )
}
