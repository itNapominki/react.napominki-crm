export default function handleAddMenu(id, setMenus) {
  setMenus((prev) =>
    prev.find((menuId) => menuId === id)
      ? prev.filter((menuId) => menuId !== id)
      : [...prev, id]
  )
}
