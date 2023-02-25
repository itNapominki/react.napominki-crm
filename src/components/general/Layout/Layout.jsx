import styles from './Layout.module.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function Layout({ children, pageClass }) {
  return (
    <div className={classNames(styles.page, [pageClass])}>
      <div className={styles.content}>{children}</div>
    </div>
  )
}
