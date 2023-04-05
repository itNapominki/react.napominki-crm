import styles from './Main.module.scss'
import React from 'react'
import { Icon } from 'components'

import cafeIcon from 'assets/sprites/cafe.svg'
import markerIcon from 'assets/sprites/marker.svg'
import metroIcon from 'assets/sprites/metro.svg'

const ICONS = [
  [cafeIcon, 44],
  [markerIcon, 38],
  [metroIcon, 53],
]

export default function Features({ address, title, relatedMetro }) {
  const metro = relatedMetro
    ?.map(({ title, distance }) =>
      [title, distance.replace('0 км. ', '')].join(' ')
    )
    .join(', ')

  return (
    <div className={styles.features}>
      {[title, address.replaceAll('_, ', ''), metro].map(
        (text, i) =>
          text && (
            <div key={i} className={styles.feature}>
              <Icon
                className={styles.feature__icon}
                icon={ICONS[i][0]}
                percentWidth={ICONS[i][1]}
              />
              {text}
            </div>
          )
      )}
    </div>
  )
}
