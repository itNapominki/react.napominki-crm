import styles from './Icon.module.scss'
import React from 'react'
import { HandySvg } from 'handy-svg'
import { classNames } from 'core/utils'

export default function Icon({ className, icon, percentWidth }) {
  return (
    <div className={classNames(styles.container, [className])}>
      <HandySvg src={icon} style={{ width: percentWidth + '%' }} />
    </div>
  )
}
