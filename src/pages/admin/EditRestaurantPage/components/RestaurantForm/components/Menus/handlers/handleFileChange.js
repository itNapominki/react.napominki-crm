export default function handleFileChange(setMenus, file, i) {
  setMenus((prev) =>
    prev.map((menu, index) => {
      if (i === index) {
        return {
          ...menu,
          id: file.id,
          title: file.title,
          path: file.path,
        }
      }

      return menu
    })
  )
}
