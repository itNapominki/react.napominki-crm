export default function handleRemove(setRelated, id) {
  setRelated((prev) => [...prev.filter((restaurant) => restaurant.id != id)])
}
