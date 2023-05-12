import { api } from 'utils'

export default async function handleFilesChange(event, setValue, setHalls, i) {
  const files = event.target.files

  for (let file of files) {
    const src = URL.createObjectURL(file)

    setHalls((prev) =>
      prev.map((hall, j) => {
        if (i === j) {
          hall.gallery = [...hall.gallery, { src, uploaded: false }]
        }

        return hall
      })
    )
  }

  for (let k = 0; k < files.length; k++) {
    const formData = new FormData()
    formData.append('file', files[k])

    await api.files
      .upload({ folder: 'images', formData })
      .then(({ data }) => {
        setValue((prev) => [...prev, data.filename])
      })
      .then(() =>
        setHalls((prev) =>
          prev.map((hall, j) => {
            if (i === j) {
              hall.gallery = hall.gallery.map((image, j) => {
                if (j === hall.gallery.length - files.length + k) {
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
