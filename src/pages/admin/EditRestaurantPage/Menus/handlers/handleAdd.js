export default function handleAdd(setMenus) {
  setMenus((prev) => [...prev, { id: null, title: '', persons: 0, deposit: 0 }])
}
