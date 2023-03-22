import styles from './Table.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

import iconWhatsapp from 'assets/sprites/whatsapp.svg'

export default function Whatsapp({ url }) {
  return (
    <a href={url} className={styles.whatsapp} target="_blank">
      <div className={styles.whatsapp__icon}>
        <HandySvg src={iconWhatsapp} />
      </div>
      <div className={styles.whatsapp__url}>{url}</div>
    </a>
  )
}
