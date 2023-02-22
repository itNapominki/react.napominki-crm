import styles from './Modal.module.scss'

import React from 'react'
import { classNames } from 'core/utils'

export default React.forwardRef(function Modal(
  { children, onClose, mode },
  ref
) {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.overlay} onClick={onClose}></div>
      <div
        className={classNames(styles.content + ' js-modal-content', [
          mode ? '_' + mode : '',
        ])}
      >
        {children}
      </div>
    </div>
  )
})
