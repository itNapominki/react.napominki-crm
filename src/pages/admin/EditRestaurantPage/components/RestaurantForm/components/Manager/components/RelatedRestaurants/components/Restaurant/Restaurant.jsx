import styles from './Restaurant.module.scss'
import React from 'react'
import { Input } from 'components'

export default function Station(data) {
  const { restaurant } = data

  return (
    <div className={styles.row}>
      <Input value={restaurant.title} className={styles.inputTitle} />
      <Input value={restaurant.id} disabled />
    </div>
  )
}
