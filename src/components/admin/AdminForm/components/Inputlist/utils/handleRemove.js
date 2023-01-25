export default function handleRemove(setList, index) {
  setList((prev) => prev.filter((elem, i) => index != i))
}
