export default function handleAdd(setMenus) {
  setMenus((prev) => [
    ...prev,
    { id: null, title: '', path: '', persons: '', deposit: '' },
  ])
}
