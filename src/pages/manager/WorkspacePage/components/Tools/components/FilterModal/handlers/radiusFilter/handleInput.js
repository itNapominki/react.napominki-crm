export default function handleInput(setRadiusFilter, value) {
  const radius = parseInt(value) || undefined

  setRadiusFilter((prev) => ({
    ...prev,
    radius,
  }))
}
