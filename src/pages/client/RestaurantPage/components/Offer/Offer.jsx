import styles from './Offer.module.scss'
import React from 'react'

import { Messengers } from './'

export default function Offer({ card = true, title, manager }) {
  return (
    manager.messengers && (
      <div className={card ? styles.card : null}>
        {title && <div className={styles.title}>{title}</div>}
        <Messengers messengers={manager.messengers} />
      </div>
    )
  )
}
