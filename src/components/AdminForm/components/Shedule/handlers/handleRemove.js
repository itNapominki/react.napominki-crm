export default function handleRemove(setList, i) {
  setList((prev) => prev.filter((_, index) => index != i))
}
