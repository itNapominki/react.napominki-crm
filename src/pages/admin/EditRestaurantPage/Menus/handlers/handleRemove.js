export default function handleRemove(setMenus, i) {
  setMenus((prev) => prev.filter((_, index) => index != i))
}
