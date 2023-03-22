import styles from './OfferCard.module.scss'
import React from 'react'

export default function Preview({ path }) {
  return (
    <div
      className={styles.preview}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_SERVER_URL + path})`,
      }}
    ></div>
  )
}
