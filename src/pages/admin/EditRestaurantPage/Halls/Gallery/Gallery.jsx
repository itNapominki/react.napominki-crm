import styles from './Gallery.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { AdminForm } from 'components'
import { Spinner } from 'components'

import removeIcon from 'assets/sprites/remove.svg'

export default function Gallery({
  gallery,
  handleImageRemove,
  handleFilesChange,
  name,
}) {
  const [value, setValue] = React.useState(gallery)

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
        accept=".jpg,.jpeg,.png"
        multiple
        onChange={(e) => handleFilesChange(e, setValue)}
        hidden
      />
      <input type="hidden" value={JSON.stringify(value)} name={name} />

      {gallery.map((image, j) => (
        <div key={j} className="col col-3">
          <div className={styles.image}>
            {image.src && !image.uploaded && (
              <Spinner className={styles.spinner} show={true} />
            )}
            <div
              className={styles.buttonRemove}
              onClick={() => handleImageRemove(j, setValue)}
            >
              <HandySvg src={removeIcon} />
            </div>
            <img
              src={
                typeof image === 'string'
                  ? process.env.REACT_APP_SERVER_URL + image
                  : image.src
              }
            />
          </div>
        </div>
      ))}
    </AdminForm.Group>
  )
}
