import styles from './SettingsModal.module.scss'
import React from 'react'

import { Separator } from 'components'
import { Station } from './components'

export default function Group({ stations, title }) {
  return (
    stations.length > 0 && (
      <div className={styles.group}>
        <Separator />
        <div className={styles.group__title}>{title}</div>

        {stations?.map((station) => (
          <Station key={station.id} station={station} />
        ))}
      </div>
    )
  )
}
