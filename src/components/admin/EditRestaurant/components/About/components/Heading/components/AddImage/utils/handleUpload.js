export default async function handleUpload(event, setBackground, setData) {
  const { files } = event.target
  const src = URL.createObjectURL(files[0])
  setBackground(src)

  const formData = new FormData()
  formData.append('file', files[0])

  fetch(process.env.REACT_APP_API_URL + '/files/images', {
    method: 'POST',
    body: formData,
  })
    .then((res) => res.json())
    .then((filename) =>
      setData((prev) => {
        return { ...prev, preview: filename }
      })
    )
}
