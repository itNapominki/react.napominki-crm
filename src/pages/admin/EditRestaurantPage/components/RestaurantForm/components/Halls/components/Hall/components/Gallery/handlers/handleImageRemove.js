export default function handleImageRemove(
  imageIndex,
  setValue,
  hallIndex,
  setHalls
) {
  function updateGallery(prev) {
    return prev.filter((_, index) => imageIndex != index)
  }

  setValue((prev) => updateGallery(prev))

  setHalls((prev) =>
    prev.map((hall, index) => {
      if (hallIndex === index) {
        hall.gallery = updateGallery(hall.gallery)
      }

      return hall
    })
  )
}
