export default function handleRemove(setRelated, id) {
  setRelated((prev) => [...prev.filter((station) => station.id != id)])
}
