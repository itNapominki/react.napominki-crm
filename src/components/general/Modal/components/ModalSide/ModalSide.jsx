import styles from './ModalSide.module.scss'

import React from 'react'
import { HandySvg } from 'handy-svg'

import { Separator } from 'components'

import { classNames } from 'core/utils'

import iconClose from 'assets/sprites/close.svg'

export default function ModalSide({ headerLeft, children, side, onClose }) {
  return (
    <div
      className={classNames(`${styles.container} js-modal-content`, [
        '_' + side,
      ])}
    >
      <div className={styles.top}>
        {headerLeft}
        <div className={styles.close} onClick={onClose}>
          <HandySvg src={iconClose} />
        </div>
      </div>
      <Separator />
      <div className={styles.content}>{children}</div>
    </div>
  )
}
