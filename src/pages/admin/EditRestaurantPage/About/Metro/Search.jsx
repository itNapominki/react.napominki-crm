import styles from './Metro.module.scss'
import React from 'react'

export default function Search({ value = '', onInput }) {
  return (
    <div className={styles.search}>
      <input value={value} onInput={onInput} />
    </div>
  )
}
