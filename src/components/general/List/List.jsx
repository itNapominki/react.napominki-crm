import React from 'react'
import { classNames } from 'utils'

import styles from './List.module.scss'

export default function List(data) {
  const { className, list } = data

  return (
    <ul className={classNames(styles.list, [className])}>
      {list.map((listItem, i) => (
        <li key={i} className={styles.listItem}>
          {listItem}
        </li>
      ))}
    </ul>
  )
}
