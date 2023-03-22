import styles from './Hall.module.scss'
import React from 'react'

export default function Gallery({ gallery }) {
  return (
    gallery && (
      <div className={styles.gallery}>
        {gallery.map((image, i) => (
          <img key={i} src={process.env.REACT_APP_SERVER_URL + image} />
        ))}
      </div>
    )
  )
}
