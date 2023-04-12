export default function handleAddMenu(id, setMenus) {
  setMenus((prev) =>
    prev.map((menu) => {
      if (menu.id === id) {
        menu.added = !menu.added
      }

      return menu
    })
  )
}
