import { api } from 'core/utils'

export default async function handleFilesChange(event, setValue, setHalls, i) {
  const files = event.target.files

  for (let file of files) {
    const src = URL.createObjectURL(file)

    setHalls((prev) =>
      prev.map((hall, index) => {
        if (i === index) {
          hall.gallery = [...hall.gallery, { src, uploaded: false }]
        }

        return hall
      })
    )
  }

  for (let j = 0; j < files.length; j++) {
    const formData = new FormData()
    formData.append('file', files[j])

    await api.files
      .upload({ folder: 'images', formData })
      .then(({ data }) => {
        setValue((prev) => [...prev, data.filename])
      })
      .then(() =>
        setHalls((prev) =>
          prev.map((hall, index) => {
            if (i === index) {
              hall.gallery = hall.gallery.map((image, index) => {
                if (index === hall.gallery.length - files.length + j) {
                  image.uploaded = true
                }

                return image
              })
            }

            return hall
          })
        )
      )
  }
}
