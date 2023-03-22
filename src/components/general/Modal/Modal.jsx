import styles from './Modal.module.scss'

import React from 'react'

import { ModalSide } from './components'

function Modal({ children, onClose }, ref) {
  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.overlay} onClick={onClose}></div>
      {children}
    </div>
  )
}

export default {
  Container: React.forwardRef(Modal),
  ModalSide: ModalSide,
}
