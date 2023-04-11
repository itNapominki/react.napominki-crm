export default function handleRemove(setMenus, i) {
  setMenus((prev) => prev.filter((_, j) => j != i))
}
