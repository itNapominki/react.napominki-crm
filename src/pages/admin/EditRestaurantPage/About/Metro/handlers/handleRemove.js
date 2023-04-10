export default function handleRemove(setRelated, i) {
  setRelated((prev) => prev.filter((_, j) => j !== i))
}
