export default async function handleFilesChange(
  event,
  setGallery,
  setHalls,
  i
) {
  const files = event.target.files

  for (let file of files) {
    const src = URL.createObjectURL(file)
    setGallery((prev) => updateGallery(prev, src))
  }

  for (let file of files) {
    const formData = new FormData()
    formData.append('file', file)

    await fetch(process.env.REACT_APP_api_URL + '/files/images', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then((filename) => {
        setHalls((prev) =>
          prev.map((hall, index) => {
            if (i === index) {
              console.log(i)
              hall.gallery = updateGallery(hall.gallery, filename)
            }

            return hall
          })
        )
      })
  }

  function updateGallery(prev, src) {
    return [...prev, src]
  }
}
