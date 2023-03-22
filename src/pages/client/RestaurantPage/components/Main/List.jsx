import styles from './Main.module.scss'
import React from 'react'

export default function List({ list }) {
  return (
    <React.Fragment>
      <ul className={styles.list}>
        {list.map((item, i) => (
          <li key={i} className={styles.list__item}>
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  )
}
