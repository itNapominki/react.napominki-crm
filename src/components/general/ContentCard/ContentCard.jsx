import styles from './ContentCard.module.scss'
import React from 'react'
import { classNames } from 'core/utils'

export default function ContentCard({ children, className }) {
  return <div className={classNames(styles.card, [className])}>{children}</div>
}
