import styles from './Offer.module.scss'
import React from 'react'

import { OfferCard } from 'components/general'
import { Info } from './'

import { ManagerOfferContext } from 'core/context'

export default function Offer() {
  const { offer } = React.useContext(ManagerOfferContext)

  return (
    <React.Fragment>
      <Info />

      {offer.map((hall) => (
        <OfferCard
          key={hall.id}
          className={styles.card}
          hall={hall}
          mode="MANAGER"
        />
      ))}
    </React.Fragment>
  )
}
