import React from 'react'
import { api } from 'core/utils'

export default function useUpload() {
  const [uploaded, setUploaded] = React.useState(true)

  async function handleUpload(event, setBackground, setValue) {
    const { files } = event.target
    const src = URL.createObjectURL(files[0])

    setValue('')
    setBackground(src)
    setUploaded(false)

    const formData = new FormData()
    formData.append('file', files[0])

    await api.files
      .upload({ folder: 'images', formData })
      .then(({ data }) => setValue(data.filename))
      .then(() => setUploaded(true))
      .catch((e) => console.log(e))
  }

  return [uploaded, handleUpload]
}
