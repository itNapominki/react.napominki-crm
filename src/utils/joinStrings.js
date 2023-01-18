export default function joinStrings(strings) {
  let arr = []

  for (let string of strings) {
    if (string != null && string.length > 0) {
      arr.push(string)
    }
  }

  return arr.join(', ')
}
