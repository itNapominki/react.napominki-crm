import styles from './OfferPage.module.scss'
import React from 'react'
import { useOutletContext } from 'react-router-dom'

import { ClientMap, ClientMapFromOSM, Spinner } from 'components'
import { OfferCard } from 'components/general'

import { ClientOfferContext } from 'context'

export default function OfferPage() {
  const { restaurants, manager } = useOutletContext()

  const points = restaurants?.map(({ id, point }) => ({
    id,
    coordinates: point.coordinates,
  }))

  return (
    <ClientOfferContext.Provider value={{ restaurants, manager }}>
      <div className={styles.title}>Эти заведения вам подходят:</div>

      <Spinner show={!restaurants} />

      {restaurants && (
        <React.Fragment>
          {/* <ClientMap className={styles.map} points={points} /> */}
          <ClientMapFromOSM className={styles.map} points={points}></ClientMapFromOSM>

          {restaurants.map((restaurant) => (
            <OfferCard
              key={restaurant.id}
              hall={restaurant}
              className={styles.card}
            />
          ))}
        </React.Fragment>
      )}
    </ClientOfferContext.Provider>
  )
}
