import React from 'react'
import { handleUpload, setBackground as setBg } from './utils'

import styles from './AddImage.module.scss'

export default function AddImage({ initialPreview, setData, error }) {
  const [background, setBackground] = React.useState(initialPreview)

  React.useEffect(() => {
    setBackground(initialPreview)
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
      ></div>
    </label>
  )
}
