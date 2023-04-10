export default function handleAdd(setRelated) {
  setRelated((prev) => [...prev, { title: '', distance: '' }])
}
