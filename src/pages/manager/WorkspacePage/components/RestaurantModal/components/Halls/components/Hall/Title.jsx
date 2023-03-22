import styles from './Hall.module.scss'
import React from 'react'

export default function Title({ title, boarding, fit }) {
  return (
    <div className={styles.title}>
      {title} ({['от', boarding, 'до', fit].join(' ')})
    </div>
  )
}
