export default function handleFileChange(setMenus, value, i) {
  setMenus((prev) =>
    prev.map((menu, j) => {
      if (i === j) {
        menu.id = value.value
        menu.title = value.text
      }

      return menu
    })
  )
}
