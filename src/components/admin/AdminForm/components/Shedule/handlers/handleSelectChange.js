export default function handleSelectChange(setList, arr, i) {
  setList((prev) =>
    prev.map((elem, index) => {
      if (i === index) {
        return {
          ...elem,
          days: arr,
        }
      }

      return elem
    })
  )
}
