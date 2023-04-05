import styles from './Gallery.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import { AdminForm } from 'components/admin'
import { Spinner } from 'components'

import { handleImageRemove, handleFilesChange } from './handlers'

import removeIcon from 'assets/sprites/remove.svg'

export default function Gallery({ gallery, setHalls, index, name }) {
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
        multiple
        onChange={(e) => handleFilesChange(e, setValue, setHalls, index)}
        hidden
      />
      <input type="hidden" value={JSON.stringify(value)} name={name} />

      {gallery.map((image, j) => (
        <div key={j} className="col col-3">
          <div className={styles.image}>
            {image.src && !image.uploaded && (
              <Spinner className={styles.spinner} show={true} />
            )}
            <button
              className={styles.buttonRemove}
              onClick={() => handleImageRemove(j, setValue, index, setHalls)}
            >
              <HandySvg src={removeIcon} />
            </button>
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
