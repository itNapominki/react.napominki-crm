export default function handleAdd(setMenus) {
  setMenus((prev) => [
    ...prev,
    { file: { id: null, title: '', path: '' }, persons: '', deposit: '' },
  ])
}
