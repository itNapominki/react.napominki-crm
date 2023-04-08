export default function handleRemove(setShedule, i) {
  setShedule((prev) => prev.filter((_, index) => index != i))
}
