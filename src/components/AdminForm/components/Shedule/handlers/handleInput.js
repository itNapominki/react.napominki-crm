export default function handleInput(setShedule, value, i) {
  setShedule((prev) =>
    prev.map((elem, index) => {
      if (i === index) {
        return {
          ...elem,
          time: value,
        }
      }

      return elem
    })
  )
}
