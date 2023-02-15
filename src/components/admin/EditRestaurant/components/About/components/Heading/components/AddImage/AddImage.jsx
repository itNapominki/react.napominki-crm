import styles from './AddImage.module.scss'
import React from 'react'
import Loader from 'react-spinner-loader'
import { setBackground as setBg } from './utils'
import { useUpload } from './hooks'

export default function AddImage({ initialPreview, setData, error }) {
  const [background, setBackground] = React.useState(initialPreview)
  const [uploaded, handleUpload] = useUpload()

  React.useEffect(() => {
    setBackground(initialPreview)

    setData((prev) => {
      return {
        ...prev,
        preview: initialPreview,
      }
    })
  }, [initialPreview])

  return (
    <label className={styles.container}>
      <input
        type="file"
        onChange={(e) => handleUpload(e, setBackground, setData)}
        hidden
      />
      <div className={styles.top}>
        <div className={styles.topRow}>
          <div className={styles.label}>Превью</div>
          {error && <div className={styles.error}>{error}</div>}
        </div>
      </div>
      <div
        className={styles.fluid}
        style={{ backgroundImage: `url(${setBg(background)})` }}
      >
        <Loader show={!uploaded} />
      </div>
    </label>
  )
}
