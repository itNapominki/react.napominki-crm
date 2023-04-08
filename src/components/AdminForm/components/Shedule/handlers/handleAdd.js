export default function handleAdd(setShedule) {
  setShedule((prev) => [...prev, { days: [], time: '' }])
}
