import styles from './Control.module.scss'
import React from 'react'

import { classNames } from 'utils'

export default function Top({ label, error }) {
  const hasTop = label || (error && !error.down) ? true : false

  return (
    hasTop && (
      <div className={styles.top}>
        <div className={styles.top__row}>
          {label && (
            <div
              className={classNames(styles.label, [
                label.size && '_' + label.size,
              ])}
            >
              {typeof label === 'string' ? label : label.text}
            </div>
          )}
          {error && !error.down && (
            <div className={styles.error}>
              {typeof error === 'string' ? error : error.text}
            </div>
          )}
        </div>
      </div>
    )
  )
}
