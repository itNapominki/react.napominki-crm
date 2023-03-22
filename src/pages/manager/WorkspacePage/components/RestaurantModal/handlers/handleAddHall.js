export default function handleAddHall(index, setHalls) {
  setHalls((prev) =>
    prev.indexOf(index) !== -1
      ? prev.filter((hallIndex) => hallIndex !== index)
      : [...prev, index]
  )
}
