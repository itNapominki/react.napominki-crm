import styles from './Select.module.scss'
import React from 'react'

export default function SelectSearch({ value, setValue }) {
  return (
    <div className={styles.search}>
      <input value={value} onInput={(e) => setValue(e.target.value)} />
    </div>
  )
}
