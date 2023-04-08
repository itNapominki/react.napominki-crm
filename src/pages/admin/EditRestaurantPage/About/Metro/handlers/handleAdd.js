export default function handleAdd(setRelated) {
  setRelated((prev) => [...prev, { id: null, title: '', distance: '' }])
}
