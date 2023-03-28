export default function handleFilterObjects(
  setVisibleObjects,
  checkActive,
  key
) {
  setVisibleObjects((prev) =>
    checkActive(key)
      ? prev.filter((objectType) => objectType !== key)
      : [...prev, key]
  )
}
