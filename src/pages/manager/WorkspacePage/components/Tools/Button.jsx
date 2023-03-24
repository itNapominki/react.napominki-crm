import styles from './Tools.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'

export default function Button({ icon, onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <HandySvg src={icon} />
    </div>
  )
}
