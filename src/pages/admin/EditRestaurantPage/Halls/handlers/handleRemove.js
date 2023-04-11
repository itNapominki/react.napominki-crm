export default function handleRemove(setHalls, j) {
  setHalls((prev) => prev.filter((_, i) => j !== i))
}
