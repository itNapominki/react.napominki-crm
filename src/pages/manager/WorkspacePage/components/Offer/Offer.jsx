import styles from './Offer.module.scss'
import React from 'react'

import { OfferCard } from 'components/general'
import { Info } from './'

import { ManagerOfferContext } from 'context'

export default function Offer() {
  const {
    offer: { restaurants },
  } = React.useContext(ManagerOfferContext)

  return (
    restaurants.length > 0 && (
      <React.Fragment>
        <Info />

        <div>
          {restaurants.map((hall) => (
            <OfferCard
              key={hall.id}
              className={styles.card}
              hall={hall}
              mode="MANAGER"
            />
          ))}
        </div>
      </React.Fragment>
    )
  )
}
