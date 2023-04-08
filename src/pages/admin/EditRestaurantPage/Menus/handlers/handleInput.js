export default function handleInput(key, value, setMenus, i) {
  setMenus((prev) => {
    return prev.map((menu, index) => {
      if (index === i) {
        menu[key] = value
      }

      return menu
    })
  })
}
