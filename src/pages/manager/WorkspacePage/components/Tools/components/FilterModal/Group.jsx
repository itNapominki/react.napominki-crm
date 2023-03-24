import styles from './FilterModal.module.scss'
import React from 'react'
import { Separator } from 'components/general'

export default function Group({ children, title }) {
  return (
    <React.Fragment>
      <div className={styles.title}>{title}</div>
      {children}
      <Separator />
    </React.Fragment>
  )
}
