export default function handleAdd(setRelated, restaurant) {
  setRelated((prev) => [...prev, restaurant])
}
