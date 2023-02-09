export default function handleAdd(setMenus) {
  setMenus((prev) => [
    ...prev,
    { id: null, title: '', filename: '', persons: '', deposit: '' },
  ])
}
