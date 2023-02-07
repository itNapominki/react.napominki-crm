import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm } from 'components'
import removeIcon from 'sprites/remove.svg'

export default function Gallery(data) {
  const { halls, setHalls, i } = data

  const inputRef = React.useRef()

  function handleUploadClick() {
    inputRef.current.click()
  }

  async function handleFileChange(event) {
    const files = event.target.files
    const gallery = halls[i].gallery

    for (let file of files) {
      const src = URL.createObjectURL(file)
      gallery.push(src)
    }

    setHalls((prev) =>
      prev.map((hall, index) => {
        if (i === index) {
          hall.gallery = gallery
        }

        return hall
      })
    )

    for (let file of files) {
      const formData = new FormData()
      formData.append('file', file)

      await fetch(process.env.REACT_APP_API_URL + '/files/images', {
        method: 'POST',
        body: formData,
      })
        .then((res) => res.json())
        .then((filename) => console.log(filename))
    }
  }

  function handleImageRemove(j) {
    const gallery = halls[i].gallery.filter((_, index) => j != index)

    setHalls((prev) =>
      prev.map((hall, index) => {
        if (i === index) {
          hall.gallery = gallery
        }

        return hall
      })
    )
  }

  return (
    <AdminForm.Group
      title="Фото зала"
      button={{ text: 'Добавить фото', onClick: handleUploadClick }}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleFileChange}
        hidden
      />
      {halls[i].gallery.map((image, i) => (
        <div key={image + i} className="admin-form-halls__image col col-3">
          <button
            className="admin-form-halls__image-remove"
            onClick={() => handleImageRemove(i)}
          >
            <HandySvg src={removeIcon} />
          </button>
          <img src={image} />
        </div>
      ))}
    </AdminForm.Group>
  )
}
