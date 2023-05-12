import styles from './Group.module.scss'
import React from 'react'
import { Separator } from 'components'
import { classNames } from 'utils'

export default function Group({ className, button, children, title }) {
  return (
    <React.Fragment>
      <div className={classNames(styles.container, [className])}>
        {title && <div className={styles.title}>{title}</div>}
        <div className={`${styles.row} row`}>{children}</div>
        {button && (
          <div className={styles.button} onClick={button.onClick}>
            {button.text}
          </div>
        )}
      </div>
      <Separator />
    </React.Fragment>
  )
}
