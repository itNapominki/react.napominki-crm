export default function convertServerData(arr) {
  return arr.map((elem) => {
    return {
      id: elem.id,
      text: elem.value,
      value: elem,
    }
  })
}
