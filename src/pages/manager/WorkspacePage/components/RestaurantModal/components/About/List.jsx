import styles from './About.module.scss'
import React from 'react'

export default function List({ list }) {
  return (
    <ul className={styles.list}>
      {list.map((text, i) => (
        <li key={i} className={styles.list__item}>
          {text}
        </li>
      ))}
    </ul>
  )
}
