import React from 'react'
import { OfferContext } from 'context'
import { Card, Map } from './components'

import styles from './Offer.module.scss'

export default function Offer() {
  const context = React.useContext(OfferContext)
  const { restaurants, managerId } = context

  if (!restaurants) {
    return console.log('Загрузка')
  }

  return (
    <React.Fragment>
      <div className={styles.title}>Эти заведения вам подходят:</div>
      <Map />
      {restaurants.map((restaurant) => (
        <Card
          key={restaurant.id}
          restaurant={restaurant}
          managerId={managerId}
        />
      ))}
    </React.Fragment>
  )
}
