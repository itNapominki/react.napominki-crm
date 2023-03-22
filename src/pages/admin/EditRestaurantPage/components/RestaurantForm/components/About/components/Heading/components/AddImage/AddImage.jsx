import styles from './AddImage.module.scss'
import React from 'react'
import { setBackground as setBg } from './utils'
import { useUpload } from './hooks'
import { Spinner } from 'components/general'

export default function AddImage({ initial, error }) {
  const [value, setValue] = React.useState('')
  const [background, setBackground] = React.useState('')
  const [uploaded, handleUpload] = useUpload()

  React.useEffect(() => {
    if (initial) {
      setBackground(initial)
      setValue(initial)
    }
  }, [initial])

  return (
    <label className={styles.container}>
      <input
        type="file"
        accept=".jpg,.jpeg,.png"
        onChange={(e) => handleUpload(e, setBackground, setValue)}
        hidden
      />
      <input type="hidden" name="preview" value={value} />
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
        <Spinner show={!uploaded} className={styles.spinner} />
      </div>
    </label>
  )
}
