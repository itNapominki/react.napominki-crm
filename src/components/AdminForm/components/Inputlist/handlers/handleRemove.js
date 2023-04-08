export default function handleRemove(setInfo, index) {
  setInfo((prev) => prev.filter((_, i) => index != i))
}
