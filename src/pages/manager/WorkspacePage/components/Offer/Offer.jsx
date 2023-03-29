import styles from './Offer.module.scss'
import React from 'react'

import { OfferCard } from 'components/general'
import { Info } from './'

import { ManagerOfferContext } from 'core/context'

export default function Offer() {
  const { offer } = React.useContext(ManagerOfferContext)

  return (
    offer.length > 0 && (
      <React.Fragment>
        <Info />

        <div>
          {offer.map((hall) => (
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
