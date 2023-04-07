export default function handleInput(setList, value, i) {
  setList((prev) =>
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
