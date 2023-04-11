export default function handleInput(key, value, setMenus, i) {
  setMenus((prev) => {
    return prev.map((menu, j) => {
      if (j === i) {
        menu[key] = value
      }

      return menu
    })
  })
}
