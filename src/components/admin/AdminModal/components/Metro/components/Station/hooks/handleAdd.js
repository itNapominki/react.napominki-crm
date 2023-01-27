export default function handleAdd(setRelated, station) {
  setRelated((prev) => [...prev, { ...station, distance: 0 }])
}
