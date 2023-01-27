export default function handleRemove(setList, index) {
  setList((prev) => prev.filter((_, i) => index != i))
}
