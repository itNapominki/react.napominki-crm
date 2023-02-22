import styles from './Gallery.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'
import { AdminForm } from 'components/admin'
import { Spinner } from 'components/general'
import { handleImageRemove, handleFilesChange } from './utils'

import removeIcon from 'assets/sprites/remove.svg'

export default function Gallery({ halls, setHalls, i }) {
  const [gallery, setGallery] = React.useState(
    halls[i].gallery.map((image) => process.env.REACT_APP_SERVER_URL + image)
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
            {image.src && !image.uploaded && (
              <Spinner className={styles.spinner} show={true} />
            )}
            <button
              className={styles.buttonRemove}
              onClick={() => handleImageRemove(j, setGallery, i, setHalls)}
            >
              <HandySvg src={removeIcon} />
            </button>
            <img src={typeof image === 'string' ? image : image.src} />
          </div>
        </div>
      ))}
    </AdminForm.Group>
  )
}
