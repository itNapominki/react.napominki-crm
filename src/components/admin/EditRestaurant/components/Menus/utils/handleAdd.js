export default function handleAdd(setMenus) {
  setMenus((prev) => [
    ...prev,
    { file: { id: null, slug: '', title: '' }, persons: '', deposit: '' },
  ])
}
