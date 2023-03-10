export default function handleFileChange(setMenus, file, i) {
  setMenus((prev) =>
    prev.map((menu, index) => {
      if (i === index) {
        return {
          ...menu,
          file,
        }
      }

      return menu
    })
  )
}
