import styles from './Group.module.scss'
import React from 'react'

import { Separator } from 'components'
import { Restaurant } from './components'

export default function Group({ restaurants, title }) {
  return (
    restaurants.length > 0 && (
      <div className={styles.container}>
        <Separator />
        <div className={styles.title}>{title}</div>

        {restaurants.map((restaurant) => (
          <Restaurant key={restaurants.id} restaurant={restaurant} />
        ))}
      </div>
    )
  )
}
