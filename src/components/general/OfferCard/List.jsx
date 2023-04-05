import styles from './OfferCard.module.scss'
import React from 'react'

import { Separator } from 'components'

export default function List({ data }) {
  const { clientInfo } = data

  if (!clientInfo || !clientInfo.info) {
    return
  }

  return (
    <React.Fragment>
      <ul className={styles.list}>
        {clientInfo.info.map((item, i) => (
          <li key={i} className={styles.list__item}>
            {item}
          </li>
        ))}
      </ul>
      <Separator />
    </React.Fragment>
  )
}
