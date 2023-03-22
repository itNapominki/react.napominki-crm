import styles from './Offer.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

export default function SocialItem({ url, messenger, icon }) {
  const iconClassNames = `${styles.socialIcon} ${
    styles['socialIcon_' + messenger.toLowerCase()]
  }`

  return (
    <a href={url} className={styles.socialItem}>
      <span className={iconClassNames}>
        <HandySvg src={icon} />
      </span>
      <span className={styles.socialItemText}>Написать в {messenger}</span>
    </a>
  )
}
