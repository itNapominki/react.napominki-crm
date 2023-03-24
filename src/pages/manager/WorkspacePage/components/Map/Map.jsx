import styles from './Map.module.scss'
import React from 'react'

import { Container } from './'

import { ManagerOfferContext } from 'core/context'

export default function Map() {
  const { visibleObjects, setModalFor } = React.useContext(ManagerOfferContext)

  return (
    <React.Fragment>
      <div
        id="map"
        className={styles.container}
        data-visible-objects={visibleObjects}
      >
        <Container setModalFor={setModalFor} />
      </div>
    </React.Fragment>
  )
}
