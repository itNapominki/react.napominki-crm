export default function handleInput(setList, value, index) {
  setList((prev) =>
    prev.map((item, i) => {
      if (i === index) {
        item = value
      }

      return item
    })
  )
}
