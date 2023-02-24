import { api } from 'core/utils'

export default async function handleFilesChange(
  event,
  setGallery,
  setHalls,
  i
) {
  const files = event.target.files

  for (let file of files) {
    const src = URL.createObjectURL(file)
    setGallery((prev) => [...prev, { src, uploaded: false }])
  }

  for (let j = 0; j < files.length; j++) {
    const formData = new FormData()
    formData.append('file', files[j])

    await api.files
      .upload({ folder: 'images', formData })
      .then(({ data }) => {
        setHalls((prev) =>
          prev.map((hall, index) => {
            if (i === index) {
              hall.gallery = [...hall.gallery, data.filename]
            }

            return hall
          })
        )
      })
      .then(() =>
        setGallery((prev) =>
          prev.map((image, index) => {
            if (index === prev.length - files.length + j) {
              image.uploaded = true
            }

            return image
          })
        )
      )
  }
}
