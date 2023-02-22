import styles from './Group.module.scss'
import React from 'react'

import { Separator } from 'components/general'
import { Station } from './components'

export default function Group({ stations, title }) {
  return (
    stations.length > 0 && (
      <div className={styles.container}>
        <Separator />
        <div className={styles.title}>{title}</div>

        {stations.map((station) => (
          <Station key={station.id} station={station} />
        ))}
      </div>
    )
  )
}
