import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm } from 'components'
import { handleImageRemove, handleFilesChange } from './utils'

import styles from './Gallery.module.scss'

import removeIcon from 'sprites/remove.svg'

export default function Gallery({ halls, setHalls, i }) {
  const [gallery, setGallery] = React.useState(
    halls[i].gallery.map(
      (image) => process.env.REACT_APP_SERVER_URL + '/images/' + image
    )
  )

  const inputRef = React.useRef()

  function handleUploadClick() {
    inputRef.current.click()
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
        onChange={(e) => handleFilesChange(e, setGallery, setHalls, i)}
        hidden
      />
      {gallery.map((image, j) => (
        <div key={j} className="col col-3">
          <div className={styles.image}>
            <button
              className={styles.buttonRemove}
              onClick={() => handleImageRemove(j, setGallery, i, setHalls)}
            >
              <HandySvg src={removeIcon} />
            </button>
            <img src={image} />
          </div>
        </div>
      ))}
    </AdminForm.Group>
  )
}
