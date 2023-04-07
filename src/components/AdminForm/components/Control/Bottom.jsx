import styles from './Control.module.scss'
import React from 'react'

export default function Bottom({ action, error }) {
  const hasBottom = action || (error && error.down) ? true : false

  return (
    hasBottom && (
      <div className={styles.bottom}>
        <div className={styles.bottom__row}>
          {action && (
            <div className={styles.action} onClick={action.onClick}>
              {action.text}
            </div>
          )}
          {error && error.down && (
            <div className={styles.error}>
              {typeof error === 'string' ? error : error.text}
            </div>
          )}
        </div>
      </div>
    )
  )
}
