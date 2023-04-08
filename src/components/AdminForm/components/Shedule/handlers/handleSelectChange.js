export default function handleSelectChange(setShedule, arr, i) {
  setShedule((prev) =>
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
