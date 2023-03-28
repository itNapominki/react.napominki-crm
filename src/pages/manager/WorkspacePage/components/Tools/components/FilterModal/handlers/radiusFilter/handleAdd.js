export default function handleAdd(
  setRadiusFilter,
  setFilterVisible,
  radius = 5000
) {
  setRadiusFilter((prev) => ({ ...prev, radius, status: 'CREATING' }))
  setFilterVisible(false)
}
