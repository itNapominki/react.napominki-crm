export default function handleSetData(setData, keys) {
  setData((prev) => {
    let value = prev

    for (let key of keys) {
      console.log(value, key)
      if (value) {
        value = value[key]
      }
    }
    // console.log(prev[key])
    return prev
  })
}
