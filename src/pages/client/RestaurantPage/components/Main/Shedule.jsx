import React from 'react'
import styles from './Main.module.scss'

import { Separator } from 'components/general'

export default function Shedule({ shedule }) {
  return (
    <React.Fragment>
      <Separator />

      <div className={styles.shedule__title}>График работы:</div>

      <ul className={styles.shedule}>
        {shedule.map(({ days, time }, i) => (
          <li key={i} className={styles.shedule__item}>
            {[days.join(', '), time.replace('-', 'до')].join(' с ')}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
