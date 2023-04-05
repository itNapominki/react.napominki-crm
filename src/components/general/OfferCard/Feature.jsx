import styles from './OfferCard.module.scss'
import React from 'react'

import { Icon } from 'components'

export default function Feature({ icon, text }) {
  return (
    <div className={styles.feature}>
      <Icon
        className={styles.feature__icon}
        icon={icon[0]}
        percentWidth={icon[1]}
      />
      {text}
    </div>
  )
}
