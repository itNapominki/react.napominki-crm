export default function handleAdd(setHalls) {
  setHalls((prev) => [...prev, { info: [], gallery: [] }])
}
