import styles from './FilterModal.module.scss'
import React from 'react'

import { Modal } from 'components/general'
import { Radius, VisibleObjects } from './'

import { ManagerOfferContext } from 'context'
import { handleFilterObjects } from './handlers'

export default function FilterModal({ onClose }) {
  const { visibleObjects, setVisibleObjects } =
    React.useContext(ManagerOfferContext)

  return (
    <Modal.Container onClose={onClose}>
      <Modal.ModalSide
        headerLeft={<div className={styles.title}>Фильтры</div>}
        onClose={onClose}
      >
        <div className={styles.container}>
          <VisibleObjects
            visibleObjects={visibleObjects}
            onFilter={(checkActive, key) =>
              handleFilterObjects(setVisibleObjects, checkActive, key)
            }
          />
          <Radius />
        </div>
      </Modal.ModalSide>
    </Modal.Container>
  )
}
