import styles from './Map.module.scss'
import React from 'react'

import { YMAPS } from './'

import { ManagerOfferContext } from 'context'

export default function Map() {
  const {
    visibleObjects,
    setModalFor,
    radiusFilter,
    setRadiusFilter,
    setFilterVisible,
    mapSettings,
    searchedCoords,
  } = React.useContext(ManagerOfferContext)  

  return (
    <React.Fragment>
      <div
        id="map"
        className={styles.container}
        data-settings={JSON.stringify(mapSettings)}
        data-searched={searchedCoords}
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
