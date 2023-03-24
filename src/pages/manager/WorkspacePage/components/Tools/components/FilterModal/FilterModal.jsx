import styles from './FilterModal.module.scss'
import React from 'react'

import { Modal } from 'components/general'
import { Group, Show } from './'
export default function FilterModal({ onClose }) {
  return (
    <Modal.Container onClose={onClose}>
      <Modal.ModalSide
        headerLeft={<div className={styles.title}>Фильтры</div>}
        onClose={onClose}
      >
        <div className={styles.container}>
          <Group title="Объекты">
            <Show />
          </Group>
        </div>
      </Modal.ModalSide>
    </Modal.Container>
  )
}
