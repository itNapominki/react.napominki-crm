import styles from './Map.module.scss'
import React from 'react'

import { YMAPS } from './'

import { ManagerOfferContext } from 'core/context'

export default function Map() {
  const {
    visibleObjects,
    setModalFor,
    radiusFilter,
    setRadiusFilter,
    setFilterVisible,
    mapSettings,
  } = React.useContext(ManagerOfferContext)

  return (
    <React.Fragment>
      <div
        id="map"
        className={styles.container}
        data-settings={JSON.stringify(mapSettings)}
        data-visible-objects={visibleObjects}
        data-radius-filter={JSON.stringify(radiusFilter)}
      >
        <YMAPS
          setModalFor={setModalFor}
          setRadiusFilter={setRadiusFilter}
          setFilterVisible={setFilterVisible}
        />
      </div>
    </React.Fragment>
  )
}
