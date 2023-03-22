import styles from './Hall.module.scss'
import React from 'react'

export default function List({ list }) {
  return (
    list && (
      <ul className={styles.list}>
        {list.map((text, i) => (
          <li key={i} className={styles.list__item}>
            {text}
          </li>
        ))}
      </ul>
    )
  )
}
