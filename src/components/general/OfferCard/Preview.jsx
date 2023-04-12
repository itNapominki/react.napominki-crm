import styles from './OfferCard.module.scss'
import React from 'react'

export default function Preview({ path, cardUrl }) {
  const Image = cardUrl ? 'a' : 'div'

  return (
    <Image
      href={cardUrl ? cardUrl : undefined}
      className={styles.preview}
      style={{
        backgroundImage: `url(${process.env.REACT_APP_SERVER_URL + path})`,
      }}
      target={cardUrl ? '_blank' : undefined}
    />
  )
}
